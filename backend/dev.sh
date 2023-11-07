#!/usr/bin/env bash

export COLLABORATE_HOST=localhost
export COLLABORATE_PORT=":5001"
export COLLABORATE_MODE=development
export COLLABORATE_ENABLED_SERVICES="auth,broker,realtime"

~/go/bin/air
