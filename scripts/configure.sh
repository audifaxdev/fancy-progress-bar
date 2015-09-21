#!/bin/sh

echo "Utility sciprt to easily import angular2 typings and dependencies";

#Importing Typescript 's definition files from node 's modules;
echo "1) Importing Typescript 's definition files\n";
cp -Rf node_modules/angular2/bundles/typings ts/;

echo "2) Importing Angular2 and Angular2/Http modules to app folder\n";
cp -Rf node_modules/angular2/bundles/angular2.min.js app/libs
cp -Rf node_modules/angular2/bundles/http.min.js app/libs;

echo "Configure project finished";
echo "Don't forget to import traceur, systemjs libs and whatever ...\n";
