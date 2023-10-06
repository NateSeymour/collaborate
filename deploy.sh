#!/usr/bin/env bash

# Build project
make all

# Deploy static site
gcloud storage cp --recursive bin/frontend/* gs://collaborate-webapp

# Deploy backend
gcloud app deploy broker/app.broker.yaml realtime/app.realtime.yaml
gcloud app deploy backend/dispatch.yaml