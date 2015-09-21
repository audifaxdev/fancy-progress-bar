/// <reference path="./import.ts" />
/// <reference path="./components/skillrating/skillrating.ts"/>

@ng2.Component({
	selector: 'app'
})

@ng2.View({
	template: '<skill-rating></skill-rating>',
	directives: [SkillRating]
})

class App {}

ng2.bootstrap(App)
