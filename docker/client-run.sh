#!/bin/bash

DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
source "$DIR/colors.cfg"
echo -e "${Cyan}The ${Yellow}kanban client run ${Cyan}script has been executed"

docker run --rm -v ${PWD}/client:/usr/src/app -v /usr/src/app/node_modules -p 4000:4000 kanban.client:alpine
