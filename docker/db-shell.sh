#!/bin/bash

DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
source "$DIR/colors.cfg"
echo -e "${Cyan}The ${Yellow}postgres ${Cyan}shell script has been executed"

winpty docker exec -it kanban_db_1 bash "$@"
