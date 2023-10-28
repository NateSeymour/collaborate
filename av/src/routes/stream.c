#include "stream.h"
#include "../collaborate_room_manager.h"
#include "../collaborate_client.h"

typedef struct {
	GList *extensions;

	CollaborateClient *client;
	CollaborateRoom *room;
} ws_upgrade_request_t;

void complete_ws_upgrade(SoupServerMessage *msg, ws_upgrade_request_t *request)
{
	GUri *uri = soup_server_message_get_uri(msg);
	GIOStream *stream = soup_server_message_steal_connection(msg);

	SoupWebsocketConnection *conn = soup_websocket_connection_new(stream, uri,
								      SOUP_WEBSOCKET_CONNECTION_SERVER,
								      NULL,
								      NULL, request->extensions);

	for (int i = 0; i < 1000; i++) {
		soup_websocket_connection_send_text(conn, "Test");
	}

	g_object_unref(stream);
	g_object_unref(conn);

	g_object_unref(request->room);
	g_object_unref(request->client);
	g_free(request);
}

void server_GET_stream(SoupServer *server, SoupServerMessage *msg, const char *path, GHashTable *query, gpointer user_data)
{
	gboolean res = FALSE;

	CollaborateRoomManager *room_manager = COLLABORATE_ROOM_MANAGER(user_data);
	const char *remote_host = soup_server_message_get_remote_host(msg);

	// Get room id
	if (!g_hash_table_contains(query, "roomId")) {
		soup_server_message_set_status(msg, SOUP_STATUS_BAD_REQUEST, NULL);
		return;
	}

	char *roomId = g_hash_table_lookup(query, "roomId");

	// Create upgrade request
	ws_upgrade_request_t *upgrade_request = g_new(ws_upgrade_request_t, 1);
	upgrade_request->room = collaborate_room_manager_get_room(room_manager, roomId);
	upgrade_request->client = collaborate_client_new();

	// Do the websocket handshake
	res = soup_websocket_server_process_handshake(msg, NULL, NULL, NULL, &upgrade_request->extensions);
	if (!res) {
		g_error("[RoomManager] Handshake failed for client %s requesting stream access to %s.", remote_host, roomId);
	}

	g_signal_connect(msg, "wrote-informational", G_CALLBACK(complete_ws_upgrade), upgrade_request);
}
