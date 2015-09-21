#!/bin/sh

clear && tsc -p ts/ && http-server ./app -c-1 -o
