#!/bin/bash

set -e



nohup bash -c "cd server && yarn dev:graph && cd ../client && yarn dev"
