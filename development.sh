#!/usr/bin/env bash

mkdir -p .local

if [[ "$1" == "generate-cert" ]]; then
  mkcert -cert-file ./.local/localhost.crt -key-file ./.local/localhost.key 127.0.0.1 localhost
fi