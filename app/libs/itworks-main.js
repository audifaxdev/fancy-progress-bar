var ng2 = require('angular2/angular2');
/// <reference path="./import.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var Test = (function () {
    function Test() {
    }
    Test = __decorate([
        /// <reference path="./import.ts" />
        ng2.Component({
            selector: 'test'
        }),
        ng2.View({
            template: 'Test OK!'
        }), 
        __metadata('design:paramtypes', [])
    ], Test);
    return Test;
})();
/// <reference path="./import.ts" />
/// <reference path="./test.ts"/>
var App = (function () {
    function App() {
    }
    App = __decorate([
        /// <reference path="./import.ts" />
        ng2.Component({
            selector: 'app'
        }),
        ng2.View({
            template: '<test></test>',
            directives: [Test]
        }), 
        __metadata('design:paramtypes', [])
    ], App);
    return App;
})();
ng2.bootstrap(App);
var COMPONENTS_ROOT_PATH = '/components';
/// <reference path="../../import.ts"/>
/// <reference path="../common.ts" />
var SkillRating = (function () {
    function SkillRating() {
    }
    SkillRating = __decorate([
        /// <reference path="../../import.ts"/>
        ng2.Component({
            selector: 'skill-rating'
        }),
        ng2.View({
            templateUrl: COMPONENTS_ROOT_PATH + '/skillrating/skillrating.tpl.html',
            styleUrls: [COMPONENTS_ROOT_PATH + '/skillrating/skillrating.css'],
            directives: []
        }), 
        __metadata('design:paramtypes', [])
    ], SkillRating);
    return SkillRating;
})();
