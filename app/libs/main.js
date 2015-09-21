var ng2 = require('angular2/angular2');
var ng2Http = require('angular2/http');
var COMPONENTS_ROOT_PATH = '/components';
/// <reference path="../../import.ts" />
/// <reference path="../common.ts" />
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
var ProgressBar = (function () {
    function ProgressBar() {
        var _this = this;
        this.pbWidth = "0";
        this.animations = [
            {
                "maxRating": 20,
                "className": 'colors0_20'
            },
            {
                "maxRating": 36,
                "className": 'colors0_36'
            },
            {
                "maxRating": 52,
                "className": 'colors0_52'
            },
            {
                "maxRating": 68,
                "className": 'colors0_68'
            },
            {
                "maxRating": 84,
                "className": 'colors0_84'
            },
            {
                "maxRating": 100,
                "className": 'colors0_100'
            },
        ];
        console.log(this);
        if (this.rating < 0 || this.rating > 100) {
            console.warn("\n\t\t\t\t[ProgressBar component]\n\n\t\t\t\tInvalid use of property\t[value] : number from 0 to 100.\n\t\t\t");
        }
        setTimeout(function () {
            for (var i = 0; i < _this.animations.length; ++i) {
                if (_this.rating <= _this.animations[i].maxRating) {
                    _this.classAnimation = _this.animations[i].className;
                    break;
                }
            }
            _this.pbWidth = _this.rating * 0.95 + "%";
        }, 200);
    }
    ProgressBar = __decorate([
        /// <reference path="../../import.ts" />
        ng2.Component({
            selector: 'progressbar',
            properties: ['label', 'rating']
        }),
        ng2.View({
            templateUrl: COMPONENTS_ROOT_PATH + "/progressbar/progressbar.tpl.html",
            styleUrls: [(COMPONENTS_ROOT_PATH + "/progressbar/progressbar.css")],
            directives: [ng2.NgClass]
        }), 
        __metadata('design:paramtypes', [])
    ], ProgressBar);
    return ProgressBar;
})();
/// <reference path="../../import.ts" />
/// <reference path="../common.ts" />
/// <reference path="../progressbar/progressbar.ts" />
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var SkillRating = (function () {
    function SkillRating(http) {
        var _this = this;
        console.log(this);
        http.get('data/skills.json')
            .toRx()
            .map(function (res) { return res.json(); })
            .subscribe(function (skills) { return _this.skills = skills; });
    }
    SkillRating = __decorate([
        /// <reference path="../../import.ts" />
        ng2.Component({
            selector: 'skill-rating',
            viewBindings: [ng2Http.HTTP_BINDINGS]
        }),
        ng2.View({
            templateUrl: COMPONENTS_ROOT_PATH + "/skillrating/skillrating.tpl.html",
            styleUrls: [(COMPONENTS_ROOT_PATH + "/skillrating/skillrating.css")],
            directives: [ng2.NgFor, ProgressBar]
        }),
        __param(0, ng2.Inject(ng2Http.Http)), 
        __metadata('design:paramtypes', [Object])
    ], SkillRating);
    return SkillRating;
})();
/// <reference path="./import.ts" />
/// <reference path="./components/skillrating/skillrating.ts"/>
var App = (function () {
    function App() {
    }
    App = __decorate([
        /// <reference path="./import.ts" />
        ng2.Component({
            selector: 'app'
        }),
        ng2.View({
            template: '<skill-rating></skill-rating>',
            directives: [SkillRating]
        }), 
        __metadata('design:paramtypes', [])
    ], App);
    return App;
})();
ng2.bootstrap(App);
