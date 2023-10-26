/*
 * GStreamer Copyright (C) 2023 FIXME <fixme@example.com> This library is 
 * free software; you can redistribute it and/or modify it under the terms 
 * of the GNU Library General Public License as published by the Free
 * Software Foundation; either version 2 of the License, or (at your
 * option) any later version. This library is distributed in the hope
 * that it will be useful, but WITHOUT ANY WARRANTY; without even the
 * implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR
 * PURPOSE.  See the GNU Library General Public License for more details.
 * You should have received a copy of the GNU Library General Public
 * License along with this library; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Suite 500, Boston, MA 02110-1335,
 * USA. 
 */
/**
 * SECTION:element-gstspectaclesink
 *
 * The spectaclesink element does FIXME stuff.
 *
 * <refsect2>
 * <title>Example launch line</title>
 * |[
 * gst-launch-1.0 -v fakesrc ! spectaclesink ! FIXME ! fakesink
 * ]|
 * FIXME Describe what the pipeline does.
 * </refsect2>
 */

#ifdef HAVE_CONFIG_H
#include "config.h"
#endif

#include <gst/gst.h>
#include <gst/base/gstbasesink.h>
#include "gstspectaclesink.h"

GST_DEBUG_CATEGORY_STATIC(gst_spectaclesink_debug_category);
#define GST_CAT_DEFAULT gst_spectaclesink_debug_category

/*
 * prototypes 
 */

static void gst_spectaclesink_set_property(GObject * object,
					   guint property_id,
					   const GValue * value,
					   GParamSpec * pspec);
static void gst_spectaclesink_get_property(GObject * object,
					   guint property_id,
					   GValue * value, GParamSpec * pspec);
static void gst_spectaclesink_dispose(GObject * object);
static void gst_spectaclesink_finalize(GObject * object);

static GstCaps *gst_spectaclesink_get_caps(GstBaseSink * sink,
					   GstCaps * filter);
static gboolean gst_spectaclesink_set_caps(GstBaseSink * sink, GstCaps * caps);
static GstCaps *gst_spectaclesink_fixate(GstBaseSink * sink, GstCaps * caps);
static gboolean gst_spectaclesink_activate_pull(GstBaseSink * sink,
						gboolean active);
static void gst_spectaclesink_get_times(GstBaseSink * sink,
					GstBuffer * buffer,
					GstClockTime * start,
					GstClockTime * end);
static gboolean gst_spectaclesink_propose_allocation(GstBaseSink * sink,
						     GstQuery * query);
static gboolean gst_spectaclesink_start(GstBaseSink * sink);
static gboolean gst_spectaclesink_stop(GstBaseSink * sink);
static gboolean gst_spectaclesink_unlock(GstBaseSink * sink);
static gboolean gst_spectaclesink_unlock_stop(GstBaseSink * sink);
static gboolean gst_spectaclesink_query(GstBaseSink * sink, GstQuery * query);
static gboolean gst_spectaclesink_event(GstBaseSink * sink, GstEvent * event);
static GstFlowReturn gst_spectaclesink_wait_event(GstBaseSink * sink,
						  GstEvent * event);
static GstFlowReturn gst_spectaclesink_prepare(GstBaseSink * sink,
					       GstBuffer * buffer);
static GstFlowReturn gst_spectaclesink_prepare_list(GstBaseSink * sink,
						    GstBufferList *
						    buffer_list);
static GstFlowReturn gst_spectaclesink_preroll(GstBaseSink * sink,
					       GstBuffer * buffer);
static GstFlowReturn gst_spectaclesink_render(GstBaseSink * sink,
					      GstBuffer * buffer);
static GstFlowReturn gst_spectaclesink_render_list(GstBaseSink * sink,
						   GstBufferList * buffer_list);

enum {
	PROP_0
};

/*
 * pad templates 
 */

static GstStaticPadTemplate gst_spectaclesink_sink_template =
GST_STATIC_PAD_TEMPLATE("sink",
			GST_PAD_SINK,
			GST_PAD_ALWAYS,
			GST_STATIC_CAPS("application/unknown"));

/*
 * class initialization 
 */

G_DEFINE_TYPE_WITH_CODE(GstSpectaclesink, gst_spectaclesink,
			GST_TYPE_BASE_SINK,
			GST_DEBUG_CATEGORY_INIT
			(gst_spectaclesink_debug_category, "spectaclesink",
			 0, "debug category for spectaclesink element"));

static void gst_spectaclesink_class_init(GstSpectaclesinkClass *klass)
{
	GObjectClass *gobject_class = G_OBJECT_CLASS(klass);
	GstBaseSinkClass *base_sink_class = GST_BASE_SINK_CLASS(klass);

	/*
	 * Setting up pads and setting metadata should be moved to
	 * base_class_init if you intend to subclass this class. 
	 */
	gst_element_class_add_static_pad_template(GST_ELEMENT_CLASS(klass),
						  &gst_spectaclesink_sink_template);

	gst_element_class_set_static_metadata(GST_ELEMENT_CLASS(klass),
					      "FIXME Long name", "Generic",
					      "FIXME Description",
					      "FIXME <fixme@example.com>");

	gobject_class->set_property = gst_spectaclesink_set_property;
	gobject_class->get_property = gst_spectaclesink_get_property;
	gobject_class->dispose = gst_spectaclesink_dispose;
	gobject_class->finalize = gst_spectaclesink_finalize;
	base_sink_class->get_caps =
	    GST_DEBUG_FUNCPTR(gst_spectaclesink_get_caps);
	base_sink_class->set_caps =
	    GST_DEBUG_FUNCPTR(gst_spectaclesink_set_caps);
	base_sink_class->fixate = GST_DEBUG_FUNCPTR(gst_spectaclesink_fixate);
	base_sink_class->activate_pull =
	    GST_DEBUG_FUNCPTR(gst_spectaclesink_activate_pull);
	base_sink_class->get_times =
	    GST_DEBUG_FUNCPTR(gst_spectaclesink_get_times);
	base_sink_class->propose_allocation =
	    GST_DEBUG_FUNCPTR(gst_spectaclesink_propose_allocation);
	base_sink_class->start = GST_DEBUG_FUNCPTR(gst_spectaclesink_start);
	base_sink_class->stop = GST_DEBUG_FUNCPTR(gst_spectaclesink_stop);
	base_sink_class->unlock = GST_DEBUG_FUNCPTR(gst_spectaclesink_unlock);
	base_sink_class->unlock_stop =
	    GST_DEBUG_FUNCPTR(gst_spectaclesink_unlock_stop);
	base_sink_class->query = GST_DEBUG_FUNCPTR(gst_spectaclesink_query);
	base_sink_class->event = GST_DEBUG_FUNCPTR(gst_spectaclesink_event);
	base_sink_class->wait_event =
	    GST_DEBUG_FUNCPTR(gst_spectaclesink_wait_event);
	base_sink_class->prepare = GST_DEBUG_FUNCPTR(gst_spectaclesink_prepare);
	base_sink_class->prepare_list =
	    GST_DEBUG_FUNCPTR(gst_spectaclesink_prepare_list);
	base_sink_class->preroll = GST_DEBUG_FUNCPTR(gst_spectaclesink_preroll);
	base_sink_class->render = GST_DEBUG_FUNCPTR(gst_spectaclesink_render);
	base_sink_class->render_list =
	    GST_DEBUG_FUNCPTR(gst_spectaclesink_render_list);

}

static void gst_spectaclesink_init(GstSpectaclesink *spectaclesink)
{
}

void
gst_spectaclesink_set_property(GObject *object, guint property_id,
			       const GValue *value, GParamSpec *pspec)
{
	GstSpectaclesink *spectaclesink = GST_SPECTACLESINK(object);

	GST_DEBUG_OBJECT(spectaclesink, "set_property");

	switch (property_id) {
	default:
		G_OBJECT_WARN_INVALID_PROPERTY_ID(object, property_id, pspec);
		break;
	}
}

void
gst_spectaclesink_get_property(GObject *object, guint property_id,
			       GValue *value, GParamSpec *pspec)
{
	GstSpectaclesink *spectaclesink = GST_SPECTACLESINK(object);

	GST_DEBUG_OBJECT(spectaclesink, "get_property");

	switch (property_id) {
	default:
		G_OBJECT_WARN_INVALID_PROPERTY_ID(object, property_id, pspec);
		break;
	}
}

void gst_spectaclesink_dispose(GObject *object)
{
	GstSpectaclesink *spectaclesink = GST_SPECTACLESINK(object);

	GST_DEBUG_OBJECT(spectaclesink, "dispose");

	/*
	 * clean up as possible.  may be called multiple times 
	 */

	G_OBJECT_CLASS(gst_spectaclesink_parent_class)->dispose(object);
}

void gst_spectaclesink_finalize(GObject *object)
{
	GstSpectaclesink *spectaclesink = GST_SPECTACLESINK(object);

	GST_DEBUG_OBJECT(spectaclesink, "finalize");

	/*
	 * clean up object here 
	 */

	G_OBJECT_CLASS(gst_spectaclesink_parent_class)->finalize(object);
}

static GstCaps *gst_spectaclesink_get_caps(GstBaseSink *sink, GstCaps *filter)
{
	GstSpectaclesink *spectaclesink = GST_SPECTACLESINK(sink);

	GST_DEBUG_OBJECT(spectaclesink, "get_caps");

	return NULL;
}

/*
 * notify subclass of new caps 
 */
static gboolean gst_spectaclesink_set_caps(GstBaseSink *sink, GstCaps *caps)
{
	GstSpectaclesink *spectaclesink = GST_SPECTACLESINK(sink);

	GST_DEBUG_OBJECT(spectaclesink, "set_caps");

	return TRUE;
}

/*
 * fixate sink caps during pull-mode negotiation 
 */
static GstCaps *gst_spectaclesink_fixate(GstBaseSink *sink, GstCaps *caps)
{
	GstSpectaclesink *spectaclesink = GST_SPECTACLESINK(sink);

	GST_DEBUG_OBJECT(spectaclesink, "fixate");

	return NULL;
}

/*
 * start or stop a pulling thread 
 */
static gboolean
gst_spectaclesink_activate_pull(GstBaseSink *sink, gboolean active)
{
	GstSpectaclesink *spectaclesink = GST_SPECTACLESINK(sink);

	GST_DEBUG_OBJECT(spectaclesink, "activate_pull");

	return TRUE;
}

/*
 * get the start and end times for syncing on this buffer 
 */
static void
gst_spectaclesink_get_times(GstBaseSink *sink, GstBuffer *buffer,
			    GstClockTime *start, GstClockTime *end)
{
	GstSpectaclesink *spectaclesink = GST_SPECTACLESINK(sink);

	GST_DEBUG_OBJECT(spectaclesink, "get_times");

}

/*
 * propose allocation parameters for upstream 
 */
static gboolean
gst_spectaclesink_propose_allocation(GstBaseSink *sink, GstQuery *query)
{
	GstSpectaclesink *spectaclesink = GST_SPECTACLESINK(sink);

	GST_DEBUG_OBJECT(spectaclesink, "propose_allocation");

	return TRUE;
}

/*
 * start and stop processing, ideal for opening/closing the resource 
 */
static gboolean gst_spectaclesink_start(GstBaseSink *sink)
{
	GstSpectaclesink *spectaclesink = GST_SPECTACLESINK(sink);

	GST_DEBUG_OBJECT(spectaclesink, "start");

	return TRUE;
}

static gboolean gst_spectaclesink_stop(GstBaseSink *sink)
{
	GstSpectaclesink *spectaclesink = GST_SPECTACLESINK(sink);

	GST_DEBUG_OBJECT(spectaclesink, "stop");

	return TRUE;
}

/*
 * unlock any pending access to the resource. subclasses should unlock any 
 * function ASAP. 
 */
static gboolean gst_spectaclesink_unlock(GstBaseSink *sink)
{
	GstSpectaclesink *spectaclesink = GST_SPECTACLESINK(sink);

	GST_DEBUG_OBJECT(spectaclesink, "unlock");

	return TRUE;
}

/*
 * Clear a previously indicated unlock request not that unlocking is
 * complete. Sub-classes should clear any command queue or indicator they
 * set during unlock 
 */
static gboolean gst_spectaclesink_unlock_stop(GstBaseSink *sink)
{
	GstSpectaclesink *spectaclesink = GST_SPECTACLESINK(sink);

	GST_DEBUG_OBJECT(spectaclesink, "unlock_stop");

	return TRUE;
}

/*
 * notify subclass of query 
 */
static gboolean gst_spectaclesink_query(GstBaseSink *sink, GstQuery *query)
{
	GstSpectaclesink *spectaclesink = GST_SPECTACLESINK(sink);

	GST_DEBUG_OBJECT(spectaclesink, "query");

	return TRUE;
}

/*
 * notify subclass of event 
 */
static gboolean gst_spectaclesink_event(GstBaseSink *sink, GstEvent *event)
{
	GstSpectaclesink *spectaclesink = GST_SPECTACLESINK(sink);

	GST_DEBUG_OBJECT(spectaclesink, "event");

	return TRUE;
}

/*
 * wait for eos or gap, subclasses should chain up to parent first 
 */
static GstFlowReturn
gst_spectaclesink_wait_event(GstBaseSink *sink, GstEvent *event)
{
	GstSpectaclesink *spectaclesink = GST_SPECTACLESINK(sink);

	GST_DEBUG_OBJECT(spectaclesink, "wait_event");

	return GST_FLOW_OK;
}

/*
 * notify subclass of buffer or list before doing sync 
 */
static GstFlowReturn
gst_spectaclesink_prepare(GstBaseSink *sink, GstBuffer *buffer)
{
	GstSpectaclesink *spectaclesink = GST_SPECTACLESINK(sink);

	GST_DEBUG_OBJECT(spectaclesink, "prepare");

	return GST_FLOW_OK;
}

static GstFlowReturn
gst_spectaclesink_prepare_list(GstBaseSink *sink, GstBufferList *buffer_list)
{
	GstSpectaclesink *spectaclesink = GST_SPECTACLESINK(sink);

	GST_DEBUG_OBJECT(spectaclesink, "prepare_list");

	return GST_FLOW_OK;
}

/*
 * notify subclass of preroll buffer or real buffer 
 */
static GstFlowReturn
gst_spectaclesink_preroll(GstBaseSink *sink, GstBuffer *buffer)
{
	GstSpectaclesink *spectaclesink = GST_SPECTACLESINK(sink);

	GST_DEBUG_OBJECT(spectaclesink, "preroll");

	return GST_FLOW_OK;
}

static GstFlowReturn
gst_spectaclesink_render(GstBaseSink *sink, GstBuffer *buffer)
{
	GstSpectaclesink *spectaclesink = GST_SPECTACLESINK(sink);

	GST_DEBUG_OBJECT(spectaclesink, "render");

	return GST_FLOW_OK;
}

/*
 * Render a BufferList 
 */
static GstFlowReturn
gst_spectaclesink_render_list(GstBaseSink *sink, GstBufferList *buffer_list)
{
	GstSpectaclesink *spectaclesink = GST_SPECTACLESINK(sink);

	GST_DEBUG_OBJECT(spectaclesink, "render_list");

	return GST_FLOW_OK;
}

static gboolean plugin_init(GstPlugin *plugin)
{

	/*
	 * FIXME Remember to set the rank if it's an element that is meant to
	 * be autoplugged by decodebin. 
	 */
	return gst_element_register(plugin, "spectaclesink", GST_RANK_NONE,
				    GST_TYPE_SPECTACLESINK);
}

/*
 * FIXME: these are normally defined by the GStreamer build system. If you 
 * are creating an element to be included in gst-plugins-*, remove these,
 * as they're always defined.  Otherwise, edit as appropriate for your
 * external plugin package. 
 */
#ifndef VERSION
#define VERSION "0.0.FIXME"
#endif
#ifndef PACKAGE
#define PACKAGE "FIXME_package"
#endif
#ifndef PACKAGE_NAME
#define PACKAGE_NAME "FIXME_package_name"
#endif
#ifndef GST_PACKAGE_ORIGIN
#define GST_PACKAGE_ORIGIN "http://FIXME.org/"
#endif

GST_PLUGIN_DEFINE(GST_VERSION_MAJOR,
		  GST_VERSION_MINOR,
		  spectaclesink,
		  "FIXME plugin description",
		  plugin_init, VERSION, "LGPL", PACKAGE_NAME,
		  GST_PACKAGE_ORIGIN)
