#!/bin/bash

DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
source "$DIR/colors.cfg"
echo -e "${Cyan}The ${Yellow}kanban server (ubuntu) shell ${Cyan}script has been executed"

winpty docker exec -it kanban_kanban.server_1 bash "$@"
