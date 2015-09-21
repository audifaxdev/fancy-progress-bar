/// <reference path="../../import.ts" />
/// <reference path="../common.ts" />

@ng2.Component({
	selector: 'progressbar',
	properties: ['label' ,'rating']
})

@ng2.View({
	templateUrl: `${COMPONENTS_ROOT_PATH}/progressbar/progressbar.tpl.html`,
	styleUrls: [ `${COMPONENTS_ROOT_PATH}/progressbar/progressbar.css`],
	directives: [ng2.NgClass]
})

class ProgressBar {
	//Rating is a percentage
	rating: number;
	pbWidth: string = "0";
	classAnimation: string;
	animations: {maxRating:number; className:string}[] = [
		{
			"maxRating" : 20,
			"className" : 'colors0_20'
		},
		{
			"maxRating" : 36,
			"className" : 'colors0_36'
		},
		{
			"maxRating" : 52,
			"className" : 'colors0_52'
		},
		{
			"maxRating" : 68,
			"className" : 'colors0_68'
		},
		{
			"maxRating" : 84,
			"className" : 'colors0_84'
		},
		{
			"maxRating" : 100,
			"className" : 'colors0_100'
		},
	];

//	constructor( @ng2.Inject(ng2.ElementRef) elementRef: typeof ng2.ElementRef ) {
	constructor() {
		console.log(this);
		if(this.rating < 0 || this.rating > 100) {
			console.warn(`
				[ProgressBar component]\n
				Invalid use of property	[value] : number from 0 to 100.
			`);
		}

		setTimeout( () => {
			for (let i = 0; i < this.animations.length; ++i) {
				//console.log("browsing");
				//console.log(this.animations[i]);
				if(this.rating <= this.animations[i].maxRating)	{
					this.classAnimation = this.animations[i].className;
					break;
				}
			}

			//Hack to avoid element to get bigger than container
			//because of padding, We need it for the parent's inset box shadow
			this.pbWidth = this.rating*0.95 + "%";
		}, 200);
	}


}
