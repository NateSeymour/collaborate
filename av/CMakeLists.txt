cmake_minimum_required(VERSION 3.26)
project(av C)

set(CMAKE_C_STANDARD 23)

find_package(PkgConfig REQUIRED)
pkg_check_modules(gstreamer REQUIRED IMPORTED_TARGET gstreamer-1.0>=1.22)
pkg_check_modules(gstreamer-base REQUIRED IMPORTED_TARGET gstreamer-base-1.0>=1.22)
pkg_check_modules(soup REQUIRED IMPORTED_TARGET libsoup-3.0)
pkg_check_modules(protobuf-c REQUIRED IMPORTED_TARGET libprotobuf-c>=1.4.1)

file(GLOB PB_SOURCES CONFIGURE_DEPENDS "pb/*.c" "pb/*.h")

add_executable(av src/av.c
        src/collaborate_room.h
        src/collaborate_room.c
        src/server_util.h
        src/collaborate_room_manager.c
        src/collaborate_room_manager.h
        ${PB_SOURCES}
        src/collaborate_client.c
        src/collaborate_client.h
        src/routes/info.c
        src/routes/info.h
        src/plugins/gstspectaclesink.h
        src/plugins/gstspectaclesink.c
)

target_link_libraries(av
        PkgConfig::gstreamer
        PkgConfig::gstreamer-base
        PkgConfig::soup
        PkgConfig::protobuf-c
)