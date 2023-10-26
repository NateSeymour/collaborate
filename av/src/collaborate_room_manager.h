#pragma once

#include <glib-object.h>
#include <libsoup/soup.h>
#include <gst/gst.h>
#include "collaborate_room.h"

G_BEGIN_DECLS
#define COLLABORATE_TYPE_ROOM_MANAGER collaborate_room_manager_get_type()
G_DECLARE_FINAL_TYPE(CollaborateRoomManager, collaborate_room_manager,
		     COLLABORATE, ROOM_MANAGER, GObject)
CollaborateRoomManager *collaborate_room_manager_new(void);
void
collaborate_room_manager_client_connection_handler(SoupServer
						   *server,
						   SoupServerMessage
						   *msg, const char
						   *path,
						   GHashTable
						   *query, gpointer user_data);

G_END_DECLS
