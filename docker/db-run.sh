#!/bin/bash

DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
source "$DIR/colors.cfg"
echo -e "${Cyan}The ${Yellow}kanban db run ${Cyan}script has been executed"

winpty docker run --rm \
  --env-file docker.env \
  --name kanban_db_1 \
  -v "${PWD}/sql/create_schema.sql:/docker-entrypoint-initdb.d/create_schema.sql:ro" \
  -v "${PWD}/postgres-data:/var/lib/postgresql/data" \
  --network kanban_kanbannet \
  -p 5432:5432 postgres:12 \

# https://github.com/quay/clair/issues/134

# https://github.com/entropic-dev/entropic/issues/190
# https://github.com/entropic-dev/entropic/issues/190#issuecomment-499733956

# sudo netstat -ntlp | grep 5432


# sudo docker run --name postgresql -itd --restart always \
#   --publish 5432:5432 \
#   --volume /srv/docker/postgresql:/var/lib/postgresql \
#   --env 'PG_TRUST_LOCALNET=true' \
#   --env 'PG_PASSWORD=1234' \
#   --env 'DB_USER=mypgsql' --env 'DB_PASS=1234' \
#   --env 'DB_NAME=myDB' \
#   sameersbn/postgresql:9.4-18