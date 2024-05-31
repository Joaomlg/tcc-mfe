#!/bin/bash

# Define variables
BUILD_DIR="build"
OLD_NAME="tcc-mfe-analytics"
NEW_NAME="main"
DEMO_FILE="$BUILD_DIR/demo.html"

# Run the Vue CLI service build command
vue-cli-service build --dest $BUILD_DIR --target wc --name $OLD_NAME src/App.vue

# Rename files from tcc-mfe-analytics to main
for file in $BUILD_DIR/$OLD_NAME*; do
  mv "$file" "$(echo $file | sed "s/^$BUILD_DIR\/$OLD_NAME/$BUILD_DIR\/$NEW_NAME/")"
done

# Replace "tcc-mfe-analytics.js" with "main.js" in build/demo.html
if [ -f "$DEMO_FILE" ]; then
  sed -i "s/$OLD_NAME\.js/$NEW_NAME\.js/g" "$DEMO_FILE"
fi
