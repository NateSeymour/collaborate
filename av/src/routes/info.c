#include "info.h"

void server_GET_info(SoupServer *server, SoupServerMessage *msg, const char *path, GHashTable *query, gpointer user_data)
{
    const char *response = "{ \"version\": \"0.0.1\" }";

    soup_server_message_set_status(msg, SOUP_STATUS_OK, NULL);
    soup_server_message_set_response(msg, "application/json", SOUP_MEMORY_STATIC, response, strlen(response));
}