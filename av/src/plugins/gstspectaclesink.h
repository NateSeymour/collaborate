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
 * Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA 02110-1301,
 * USA. 
 */
#pragma once

#include <gst/base/gstbasesink.h>
#include <libsoup/soup.h>

G_BEGIN_DECLS
#define GST_TYPE_SPECTACLESINK   (gst_spectaclesink_get_type())
#define GST_SPECTACLESINK(obj)   (G_TYPE_CHECK_INSTANCE_CAST((obj),GST_TYPE_SPECTACLESINK,GstSpectaclesink))
#define GST_SPECTACLESINK_CLASS(klass)   (G_TYPE_CHECK_CLASS_CAST((klass),GST_TYPE_SPECTACLESINK,GstSpectaclesinkClass))
#define GST_IS_SPECTACLESINK(obj)   (G_TYPE_CHECK_INSTANCE_TYPE((obj),GST_TYPE_SPECTACLESINK))
#define GST_IS_SPECTACLESINK_CLASS(obj)   (G_TYPE_CHECK_CLASS_TYPE((klass),GST_TYPE_SPECTACLESINK))
typedef struct _GstSpectaclesink GstSpectaclesink;
typedef struct _GstSpectaclesinkClass GstSpectaclesinkClass;

struct _GstSpectaclesink {
	GstBaseSink base_spectaclesink;

	// private
	SoupWebsocketConnection *conn;
};

struct _GstSpectaclesinkClass {
	GstBaseSinkClass base_spectaclesink_class;
};

GType gst_spectaclesink_get_type(void);

GST_PLUGIN_STATIC_DECLARE(spectaclesink);

G_END_DECLS
