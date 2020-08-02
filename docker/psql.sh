#!/bin/bash

DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
source "$DIR/colors.cfg"
echo -e "${Cyan}The ${Yellow}postgres psql ${Cyan}script has been executed"

psql -h localhost -p 5432 -d kanban -U test --password
