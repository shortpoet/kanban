#!/bin/bash

DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
source "$DIR/colors.cfg"
echo -e "${Cyan}The ${Yellow}postgres db-psql ${Cyan}script has been executed"

winpty docker exec -it kanban_db_1 psql -U test kanban -a -f sql/seed_data.sql "$@"
