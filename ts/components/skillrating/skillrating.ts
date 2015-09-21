/// <reference path="../../import.ts" />
/// <reference path="../common.ts" />
/// <reference path="../progressbar/progressbar.ts" />

@ng2.Component({
	selector: 'skill-rating',
	viewBindings: [ng2Http.HTTP_BINDINGS]
})

@ng2.View({
	templateUrl: `${COMPONENTS_ROOT_PATH}/skillrating/skillrating.tpl.html`,
	styleUrls: [`${COMPONENTS_ROOT_PATH}/skillrating/skillrating.css`],
	directives: [ng2.NgFor, ProgressBar]
})

class SkillRating {
	skills: Object;
	constructor(@ng2.Inject(ng2Http.Http) http: typeof ng2Http.Http) {
		console.log(this);
		http.get('data/skills.json')
		.toRx()
		.map(res => res.json())
		.subscribe(skills => this.skills = skills);
	}
}
