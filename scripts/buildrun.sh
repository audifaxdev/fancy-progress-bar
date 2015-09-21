#!/bin/sh

clear && tsc -p app/ts && http-server ./app -c-1 -o
