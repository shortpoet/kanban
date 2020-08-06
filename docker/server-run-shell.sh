#!/bin/bash

DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
source "$DIR/colors.cfg"
echo -e "${Cyan}The ${Yellow}kanban server run bash ${Cyan}script has been executed"

docker-compose run --rm kanban.client bash "$@"
