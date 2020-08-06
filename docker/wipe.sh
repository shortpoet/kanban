#!/bin/bash

docker-compose down --rmi local --remove-orphans --volumes
docker image rm kanban.server:alpine kanban.client:alpine
