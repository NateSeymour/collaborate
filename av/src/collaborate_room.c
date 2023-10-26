#include "collaborate_room.h"

/*
 * Each room should have its own GStreamer pipeline that it initializes on creation
 */

struct _CollaborateRoom
{
    GObject parent_instance;

    // pipeline
    GstElement *pipeline;
    GstElement *source;
};

G_DEFINE_TYPE(CollaborateRoom, collaborate_room, G_TYPE_OBJECT);

static void collaborate_room_class_init(CollaborateRoomClass *klass) {}

static void collaborate_room_init(CollaborateRoom *self)
{
    gboolean res = FALSE;

    self->pipeline = gst_pipeline_new(NULL);

    self->source = gst_element_factory_make("videotestsrc", "source");

    gst_bin_add_many(GST_BIN(self->pipeline), self->source, NULL);
    res = gst_element_link_many(self->source, NULL);
    if(!res)
    {
        g_error("[Room] Failed to create pipeline!");
        return;
    }
}

static void collaborate_room_dispose(CollaborateRoom *self)
{
    gst_object_unref(self->source);
    gst_object_unref(self->pipeline);
}

CollaborateRoom *collaborate_room_new(void)
{
    return g_object_new(COLLABORATE_TYPE_ROOM, NULL);
}