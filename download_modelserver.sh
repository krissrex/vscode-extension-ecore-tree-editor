#!/bin/bash

# Requires maven
if [[ "$(command -v mvn)" == "" ]]; then
  echo "Maven is required! (mvn)"
  exit 1
fi

REPO=https://oss.sonatype.org/content/repositories/snapshots/
GROUP=org.eclipse.emfcloud.modelserver
ARTIFACT=org.eclipse.emfcloud.modelserver.example
VERSION=0.7.0-20201125.131259-22
ACTUAL_VERSION=0.7.0-SNAPSHOT
# Versions listed here https://oss.sonatype.org/content/repositories/snapshots/org/eclipse/emfcloud/modelserver/org.eclipse.emfcloud.modelserver.example/0.7.0-SNAPSHOT/maven-metadata.xml

OUT_FOLDER=lib
OUT_FILE=emf_modelserver_standalone.jar

mvn org.apache.maven.plugins:maven-dependency-plugin:2.8:get \
  -DremoteRepositories=$REPO \
  -Dartifact=$GROUP:$ARTIFACT:$VERSION:jar:standalone \
  -Dtransitive=false

LOCAL_PATH=~/.m2/repository/org/eclipse/emfcloud/modelserver/org.eclipse.emfcloud.modelserver.example/$ACTUAL_VERSION/$ARTIFACT-$VERSION-standalone.jar

if [[ -f "$LOCAL_PATH" ]]; then
  echo
  echo
  echo Copying "$LOCAL_PATH" to "$OUT_FOLDER/$OUT_FILE" ...

  mkdir -p $OUT_FOLDER
  cp $LOCAL_PATH "$OUT_FOLDER/$OUT_FILE"
else
  echo "Can't find file! Looked at $LOCAL_PATH"
  exit 1
fi

