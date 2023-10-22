cmake_minimum_required(VERSION 3.26)
project(av C)

set(CMAKE_C_STANDARD 23)

find_package(PkgConfig REQUIRED)
pkg_check_modules(gstreamer REQUIRED IMPORTED_TARGET gstreamer-1.0>=1.22)

add_executable(av src/av.c)
target_link_libraries(av
        PkgConfig::gstreamer
)