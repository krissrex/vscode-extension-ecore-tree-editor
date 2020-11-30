#!/bin/bash

PORT=48212
FIX_JAVA_REFLECTION="--add-opens java.base/java.lang=ALL-UNNAMED"

# Requires java 11 or above!
# Starting it will read all files in the workspace, as it looks for EResources.
java $FIX_JAVA_REFLECTION -jar lib/emf_modelserver_standalone.jar --port $PORT --root examples

# Test with http://localhost:48212/api/v1/models
# or http://localhost:48212/api/v1/server/ping
# Docs: https://github.com/eclipse-emfcloud/emfcloud-modelserver
