#!/bin/sh

echo "Transfert typings and dependencies
from $(root)/node_modules to $(root)/app directory
We need this in order to use latest definitions
because tsd files aren't sync'ed with latest angular2
I'm looking at you http.d.ts\n";

#Angular2 and Angular2/Http
echo "1) Importing Angular2 typings to app folder\n";
cp -Rf node_modules/angular2/bundles/typings app/ts/;

echo "2) Importing Angular2 and Angular2/Http to app folder\n";
cp -Rf node_modules/angular2/bundles/angular2.min.js app/libs
cp -Rf node_modules/angular2/bundles/http.min.js app/libs;

echo "Configure project finished";
echo "Don't forget to import traceur libs, as well as any other dependencies\n";
