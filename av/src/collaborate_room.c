#include "collaborate_room.h"

/*
 * Each room should have its own GStreamer pipeline that it initializes on creation
 */

struct _CollaborateRoom {
	GObject parent_instance;

	// pipeline
	GstElement *pipeline;
	GstElement *source;
	GstElement *encoder;
	GstElement *muxxer;
	GstElement *sink;

	// Clients
	GList *clients;
};

G_DEFINE_TYPE(CollaborateRoom, collaborate_room, G_TYPE_OBJECT);

static void collaborate_room_class_init(CollaborateRoomClass *klass)
{
}

static void collaborate_room_init(CollaborateRoom *self)
{
	gboolean res = FALSE;

	self->pipeline = gst_pipeline_new(NULL);

	self->source = gst_element_factory_make("videotestsrc", "source");
	self->encoder = gst_element_factory_make("av1enc", "encoder");
	self->muxxer = gst_element_factory_make("webmmux", "muxxer");
	self->sink = gst_element_factory_make("spectaclesink", "sink");

	if (!self->pipeline || !self->source || !self->encoder || !self->muxxer || !self->sink) {
		g_error("[Room] Failed to create an element of the pipeline! %p, %p, %p, %p, %p", self->pipeline, self->source, self->encoder,
			self->muxxer, self->sink);
		return;
	}

	gst_bin_add_many(GST_BIN(self->pipeline), self->source, self->encoder, self->muxxer, self->sink, NULL);
	res = gst_element_link_many(self->source, self->encoder, self->muxxer, self->sink, NULL);
	if (!res) {
		g_error("[Room] Failed to create pipeline!");
		return;
	}

    //gst_element_set_state(self->pipeline, GST_STATE_PLAYING);
}

static void collaborate_room_dispose(CollaborateRoom *self)
{
	gst_object_unref(self->sink);
	gst_object_unref(self->muxxer);
	gst_object_unref(self->encoder);
	gst_object_unref(self->source);
	gst_object_unref(self->pipeline);

	//g_list_free(self->clients);
}

CollaborateRoom *collaborate_room_new(void)
{
	return g_object_new(COLLABORATE_TYPE_ROOM, NULL);
}
