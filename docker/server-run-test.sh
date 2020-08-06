#!/bin/bash

DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
source "$DIR/colors.cfg"
echo -e "${Cyan}The ${Yellow}kanban server run test ${Cyan}script has been executed"

docker-compose run --rm kanban.server yarn test "$@"
