#include "collaborate_room_manager.h"

struct _CollaborateRoomManager {
	GObject parent_instance;

	GHashTable *rooms;
};

G_DEFINE_TYPE(CollaborateRoomManager, collaborate_room_manager, G_TYPE_OBJECT);

static void collaborate_room_manager_class_init(CollaborateRoomManagerClass *klass)
{
}

static void collaborate_room_manager_init(CollaborateRoomManager *self)
{
	self->rooms = g_hash_table_new_full(g_str_hash, g_str_equal, g_free, g_object_unref);
}

static void collaborate_room_manager_dispose(CollaborateRoomManager *self)
{
	g_hash_table_unref(self->rooms);
}

CollaborateRoomManager *collaborate_room_manager_new(void)
{
	return g_object_new(COLLABORATE_TYPE_ROOM_MANAGER, NULL);
}

CollaborateRoom *collaborate_room_manager_get_room(CollaborateRoomManager *self, const char *roomId)
{
	CollaborateRoom *room = NULL;
	if (g_hash_table_contains(self->rooms, roomId)) {
		room = g_hash_table_lookup(self->rooms, roomId);
	} else {
		// Create new room
		room = collaborate_room_new();
		g_hash_table_insert(self->rooms, g_strdup(roomId), room);
	}

	return g_object_ref(room);
}
