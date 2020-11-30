#!/bin/bash

PORT=48212
FIX_JAVA_REFLECTION="--add-opens java.base/java.lang=ALL-UNNAMED"

# Uses log4j version 1.
LOG_SETTINGS=-Dlog4j.configuration="file:lib/log4j.xml"
LOG4J_DEBUG=-Dlog4j.debug

# Requires java 11 or above!
# Starting it will read all files in the workspace, as it looks for EResources.
java $FIX_JAVA_REFLECTION $LOG_SETTINGS -jar lib/emf_modelserver_standalone.jar --port $PORT --root examples

# Test with http://localhost:48212/api/v1/models
# or http://localhost:48212/api/v1/server/ping
# Docs: https://github.com/eclipse-emfcloud/emfcloud-modelserver

# A curl request to create a new model file:
# curl --location --request POST 'http://localhost:48212/api/v1/models?modeluri=MyTest.ecore&format=json' \
#--header 'Content-Type: application/json' \
#--data-raw '{"data":"{\"eClass\":\"http://www.eclipse.org/emf/2002/Ecore#//EPackage\",\"name\":\"MyPackage\",\"nsURI\":\"platform:/TreeLanguageServerProtocol/src/MyModel.ecore\",\"nsPrefix\":\"no.krex.test.ecore\"}"}
#'