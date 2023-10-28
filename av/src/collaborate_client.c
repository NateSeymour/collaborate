#include "collaborate_client.h"

struct _CollaborateClient {
	GObject parent_instance;
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
}

CollaborateClient *collaborate_client_new(void)
{
	return g_object_new(COLLABORATE_TYPE_CLIENT, NULL);
}
