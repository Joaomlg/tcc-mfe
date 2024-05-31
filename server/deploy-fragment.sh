#!/bin/bash

# Check if the number of arguments is 2
if [ "$#" -ne 2 ]; then
  echo "Usage: $0 <project_name> <version>"
  exit 1
fi

# Assign arguments to variables
PROJECT=$1
VERSION=$2
VERSION_UNDERSCORE=${VERSION//./_}

# Enter the project directory
if [ -d "../$PROJECT" ]; then
  cd "../$PROJECT"
else
  echo "Error: The directory ../$PROJECT does not exist."
  exit 1
fi

# Run "npm run build"
npm run build

# Check if the build was successful
if [ $? -ne 0 ]; then
  echo "Error: Failed to execute npm run build."
  exit 1
fi

# Check if the build directory exists and if main.js is present
if [ -d "build" ] && [ -f "build/main.js" ]; then
  # Create the destination directory if it doesn't exist
  mkdir -p ../server/fragments
  # Copy and rename main.js to the server/fragments directory with the new name
  cp "build/main.js" "../server/fragments/${PROJECT}__${VERSION_UNDERSCORE}.js"
else
  echo "Error: The build directory or main.js was not found."
  exit 1
fi

# Update the version number in config.json using regex
CONFIG_FILE="../server/config.json"
NEW_VERSION_STRING="${PROJECT}__${VERSION_UNDERSCORE}.js"

if [ -f "$CONFIG_FILE" ]; then
  sed -E "s/${PROJECT}_[0-9]+_[0-9]+_[0-9]+\.js/$NEW_VERSION_STRING/" "$CONFIG_FILE"
  if [ $? -ne 0 ]; then
    echo "Error: Failed to update the version in config.json."
    exit 1
  fi
else
  echo "Error: The config.json file was not found."
  exit 1
fi

echo "Deployment of version $VERSION of project $PROJECT completed successfully."
