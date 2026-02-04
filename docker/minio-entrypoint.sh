#!/bin/sh

# Start MinIO server in background
minio server /data --console-address ":9001" &

# Wait for MinIO to be ready
until mc alias set local http://localhost:9000 ${MINIO_ROOT_USER} ${MINIO_ROOT_PASSWORD} > /dev/null 2>&1; do
  echo "Waiting for MinIO to be ready..."
  sleep 1
done

# Initialize bucket and policy
mc mb --ignore-existing local/minami-hp
mc anonymous set public local/minami-hp
echo "MinIO bucket initialized successfully"

# Keep container running (wait for MinIO process)
wait
