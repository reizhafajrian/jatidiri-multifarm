#!/bin/sh

# Set errexit: # Exit immediately if a command exits with a non-zero status.
set -e
echo "Running application on production mode"
npm run build
npm start
exec "$@"
