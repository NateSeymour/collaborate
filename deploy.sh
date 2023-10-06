#!/usr/bin/env bash

# Build project
make all

# Deploy static site
gcloud storage cp --recursive bin/frontend/* gs://collaborate-webapp

# Deploy backend
gcloud app deploy --quiet backend/app.broker.yaml backend/app.realtime.yaml
gcloud app deploy --quiet backend/dispatch.yaml