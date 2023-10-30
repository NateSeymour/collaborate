#include "collaborate_client.h"

struct _CollaborateClient {
	GObject parent_instance;

    SoupWebsocketConnection *conn;
};

G_DEFINE_TYPE(CollaborateClient, collaborate_client, G_TYPE_OBJECT);

static void collaborate_client_class_init(CollaborateClientClass *klass)
{
}

static void collaborate_client_init(CollaborateClient *self)
{
}

static void collaborate_client_dispose(CollaborateClient *self)
{
    g_clear_object(&self->conn);
}

CollaborateClient *collaborate_client_new(SoupWebsocketConnection *conn)
{
    CollaborateClient *client = g_object_new(COLLABORATE_TYPE_CLIENT, NULL);

    if(conn == NULL) {
        g_error("[Client] Can't initialize client with NULL connection!");
    }

    client->conn = conn;

	return client;
}

SoupWebsocketConnection *collaborate_client_get_connection(CollaborateClient *self)
{
    return g_object_ref(self->conn);
}
