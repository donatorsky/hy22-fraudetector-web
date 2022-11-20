import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import * as feather from 'feather-icons';

@Component({
	selector: 'app-database',
	templateUrl: './database.component.html',
	styleUrls: ['./database.component.scss']
})
export class DatabaseComponent {

	rows: Row[] = [
		{
			id: 1,
			author: 'GPW',
			contents: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus dolor maxime natus neque officiis quas, qui sequi vero. Adipisci, culpa deleniti enim exercitationem illum in laboriosam modi neque quod sed.',
			source: 'Twitter',
			confidence: 72.321,
			link: '#',
			rate: true,
		},
		{
			id: 2,
			author: 'GPW',
			contents: 'Lorem ipsum dolor.',
			source: 'Twitter',
			confidence: 62.321,
			link: '#',
			rate: true,
		},
		{
			id: 3,
			author: 'GPW',
			contents: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus dolor maxime natus neque officiis quas, qui sequi vero. Adipisci, culpa deleniti enim exercitationem illum in laboriosam modi neque quod sed.',
			source: 'Twitter',
			confidence: 72.321,
			link: '#',
			rate: false,
		},
		{
			id: 4,
			author: 'GPW',
			contents: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus dolor maxime natus neque officiis quas, qui sequi vero. Adipisci, culpa deleniti enim exercitationem illum in laboriosam modi neque quod sed.',
			source: 'Twitter',
			confidence: 62.321,
			link: '#',
			rate: false,
		},
		{
			id: 5,
			author: 'GPW',
			contents: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus dolor maxime natus neque officiis quas, qui sequi vero. Adipisci, culpa deleniti enim exercitationem illum in laboriosam modi neque quod sed.',
			source: 'Twitter',
			confidence: 72.321,
			link: '#',
			rate: null,
		},
		{
			id: 6,
			author: 'GPW',
			contents: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus dolor maxime natus neque officiis quas, qui sequi vero. Adipisci, culpa deleniti enim exercitationem illum in laboriosam modi neque quod sed.',
			source: 'Twitter',
			confidence: 62.321,
			link: '#',
			rate: null,
		},
	];
	showHideMoreMap: { [key: string]: boolean } = {}

	createForm = new FormGroup({
		author: new FormControl(''),
		contents: new FormControl(''),
	});

	ngAfterViewInit() {
		feather.replace();
	}

	getUniqueAuthors(): string[] {
		const authors: { [key: string]: boolean } = {};

		this.rows.forEach((v) => authors[v.author] = true)

		return Object.keys(authors).sort();
	}

	showHideMore(id: number) {
		this.showHideMoreMap[id] = id in this.showHideMoreMap
			? !this.showHideMoreMap[id]
			: true;
	}

	onSubmitCreateForm() {
		console.log(this.createForm.getRawValue());
		this.createForm.reset();
	}

	onSubmitMarkAsCorrect(id: number) {
		console.log('onSubmitMarkAsCorrect', id);
		this.createForm.reset();
	}

	onSubmitMarkAsIncorrect(id: number) {
		console.log('onSubmitMarkAsIncorrect', id);
		this.createForm.reset();
	}
}

interface Row {
	id: number
	author: string
	contents: string
	source: string
	confidence: number
	link: string
	rate: boolean | null
}
