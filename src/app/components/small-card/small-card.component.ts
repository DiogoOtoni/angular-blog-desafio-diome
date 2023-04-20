import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent {
	@Input()
	fotoCover: string = '';
	@Input()
	cardTitle: string = 'TITLE';
	@Input()
	id:string ="0"

	constructor(){}
}
