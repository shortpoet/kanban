#!/bin/bash

DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
source "$DIR/colors.cfg"

if [ "$(expr substr $(uname -s) 1 10)" == "MINGW64_NT" ]; then
    echo -e "${Cyan}The ${Yellow}postgres windows ${Cyan}shell script has been executed"
    winpty docker exec -it kanban_db_1 bash "$@"
else 
    echo -e "${Cyan}The ${Yellow}postgres ${Cyan}shell script has been executed"
    docker exec -it kanban_db_1 bash "$@"
fi;
