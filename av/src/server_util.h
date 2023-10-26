#pragma once

#include <libsoup/soup.h>

#define DEFINE_REQUEST_HANDLER(method, name) void server_##method##_##name(SoupServer *server, SoupServerMessage *msg, const char *path, GHashTable *query, gpointer user_data)
