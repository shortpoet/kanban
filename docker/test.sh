#!/bin/bash

# https://stackoverflow.com/questions/59895/how-to-get-the-source-directory-of-a-bash-script-from-within-the-script-itself
# https://stackoverflow.com/questions/45546548/import-variables-into-bash-script-from-a-config-file
# https://unix.stackexchange.com/questions/216910/bash-command-to-source-a-file-in-a-different-directory
DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
source "$DIR/colors.cfg"

echo -e "${LightGreen}The ${LightPurple}kanban ${Green}build script has been executed"

# no new line
printf "${Green}The ${Purple}kanban ${Green}build script has been executed"
echo -e "${Cyan}The ${Yellow}kanban ${Cyan}build script has been executed"
