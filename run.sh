#!/bin/bash

# Function to display usage
usage() {
  echo "Usage: $0 [option]"
  echo "Options:"
  echo "  backend          Run only the backend services (auth-service, api-gateway, etc.)"
  echo "  client           Run the client app (Next.js)"
  echo "  dashboard        Run the dashboard app"
  echo "  all              Run all apps (backend, client, and dashboard)"
  echo "  stop             Stop all running Docker containers"
  exit 1
}

# Function to run backend services
run_backend() {
  echo "Starting backend services..."
  yarn workspace auth-service dev &
  yarn workspace api-gateway dev &
  wait
}

# Function to run client app
run_client() {
  echo "Starting client app..."
  yarn workspace client-app dev
}

# Function to run dashboard app
run_dashboard() {
  echo "Starting dashboard app..."
  yarn workspace dashboard-app dev
}

# Function to run all apps
run_all() {
  echo "Starting all apps..."
  yarn run concurrently "yarn workspace auth-service dev" \
                        "yarn workspace api-gateway dev" \
                        "yarn workspace client-app dev" \
                        "yarn workspace dashboard-app dev"
}

# Function to stop all Docker containers
stop_all() {
  echo "Stopping all Docker containers..."
  docker-compose -f ./apps/backend/docker-compose.dev.yml down
}

# Main logic to parse command line arguments
if [ $# -eq 0 ]; then
  usage
fi

case $1 in
  backend)
    run_backend
    ;;
  client)
    run_client
    ;;
  dashboard)
    run_dashboard
    ;;
  all)
    run_all
    ;;
  stop)
    stop_all
    ;;
  *)
    usage
    ;;
esac
