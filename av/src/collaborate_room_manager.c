#include "collaborate_room_manager.h"

struct _CollaborateRoomManager {
	GObject parent_instance;

	GHashTable *rooms;
};

G_DEFINE_TYPE(CollaborateRoomManager, collaborate_room_manager, G_TYPE_OBJECT);

static void
collaborate_room_manager_class_init(CollaborateRoomManagerClass *klass)
{
}

static void collaborate_room_manager_init(CollaborateRoomManager *self)
{
	self->rooms =
	    g_hash_table_new_full(g_str_hash, g_str_equal, g_free,
				  g_object_unref);
}

static void collaborate_room_manager_dispose(CollaborateRoomManager *self)
{
	g_hash_table_unref(self->rooms);
}

CollaborateRoomManager *collaborate_room_manager_new(void)
{
	return g_object_new(COLLABORATE_TYPE_ROOM_MANAGER, NULL);
}

void complete_upgrade(SoupServerMessage *msg, gpointer _)
{
	g_object_ref(msg);
	GUri *uri = soup_server_message_get_uri(msg);
	GIOStream *stream = soup_server_message_steal_connection(msg);

	SoupWebsocketConnection *conn =
	    soup_websocket_connection_new(stream, uri,
					  SOUP_WEBSOCKET_CONNECTION_SERVER,
					  NULL,
					  NULL, NULL);

	for (int i = 0; i < 1000; i++) {
		soup_websocket_connection_send_text(conn, "Test");
	}

	g_object_unref(stream);
	g_object_unref(msg);
	g_object_unref(conn);
}

void
collaborate_room_manager_client_connection_handler(SoupServer *server,
						   SoupServerMessage *msg,
						   const char *path,
						   GHashTable *query,
						   gpointer user_data)
{
	CollaborateRoomManager *self = COLLABORATE_ROOM_MANAGER(user_data);
	gboolean res = FALSE;
	const char *remote_host = soup_server_message_get_remote_host(msg);

	// Get room id
	if (!g_hash_table_contains(query, "roomId")) {
		soup_server_message_set_status(msg, SOUP_STATUS_BAD_REQUEST,
					       NULL);
		return;
	}

	char *roomId = g_hash_table_lookup(query, "roomId");

	// Get room if it exists or create it if not
	CollaborateRoom *room = NULL;
	if (g_hash_table_contains(self->rooms, roomId)) {
		room = g_hash_table_lookup(self->rooms, roomId);
	} else {
		// Create new room
		room = collaborate_room_new();
		g_hash_table_insert(self->rooms, g_strdup(roomId), room);
	}

	// Do the websocket handshake
	res =
	    soup_websocket_server_process_handshake(msg, NULL, NULL, NULL,
						    NULL);
	if (!res) {
		g_error
		    ("[RoomManager] Handshake failed for client %s requesting stream access to %s.",
		     remote_host, roomId);
	}

	g_signal_connect(msg, "wrote-informational",
			 G_CALLBACK(complete_upgrade), NULL);
}
