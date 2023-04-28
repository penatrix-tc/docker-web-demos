#!/bin/bash

# Ensure we are in the folder where tests will run
cd /project/src/project

# Install the dependencies
npm install

# Increase the timeout to prevent gauge timeout issues
gauge config runner_connection_timeout 300000
gauge config runner_request_timeout 300000

# Run test
gauge run specs

# Copy the result to the mounted volume so that host can access it
cp -a ./reports/json-report/ /hostlog/

# Allow host to delete the copied result
chmod -R 777 /hostlog/json-report
