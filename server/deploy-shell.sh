#!/bin/bash

# Define the project directory
PROJECT_DIR="../application-shell"
BUILD_DIR="$PROJECT_DIR/build"
DESTINATION_DIR="$(pwd)"

# Check if the project directory exists
if [ ! -d "$PROJECT_DIR" ]; then
  echo "Error: The directory $PROJECT_DIR does not exist."
  exit 1
fi

# Enter the project directory
cd "$PROJECT_DIR"

# Run "npm run build"
npm run build

# Check if the build was successful
if [ $? -ne 0 ]; then
  echo "Error: Failed to execute npm run build."
  exit 1
fi

# Check if the build directory exists
if [ ! -d "$BUILD_DIR" ]; then
  echo "Error: The build directory was not found."
  exit 1
fi

# Copy all files from the build directory to the destination directory
cp -r "$BUILD_DIR"/* "$DESTINATION_DIR"

echo "Build and copy completed successfully."
