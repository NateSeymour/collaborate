#!/usr/bin/env bash

gcloud app deploy broker/app.broker.yaml realtime/realtime.app.yaml
gcloud app deploy dispatch.yaml