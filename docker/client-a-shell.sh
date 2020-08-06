#!/bin/bash

DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
source "$DIR/colors.cfg"
echo -e "${Cyan}The ${Yellow}kanban client (alpine) shell ${Cyan}script has been executed"

winpty docker exec -it kanban_kanban.client_1 sh "$@"
