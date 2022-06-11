import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-list',
  templateUrl: './title-list.component.html',
  styleUrls: ['./title-list.component.css']
})
export class TitleListComponent {
  @Input() title!: String;

  constructor() { }

  ngOnInit(): void {
  }

}
