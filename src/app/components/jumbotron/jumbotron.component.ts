import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'jumbotron',
  templateUrl: 'jumbotron.component.html',
})
export class JumbotronComponent {
    private jbtHeading: string;
    private jbtText: string;
    private jbtBtnText: string;
    private jbtBtnUrl: string;

    constructor() {
        this.jbtHeading="Hello World";
        this.jbtText="This is New";
        this.jbtBtnText="read more";
        this.jbtBtnUrl="/about";
    }

}