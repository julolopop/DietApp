import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {

  public alimentos = [
    {value: 'steak-0' , viewValue: 'Steak' },
    {value: 'pizza-1' , viewValue: 'Pizza' },
    {value: 'tacos-2' , viewValue: 'Tacos' }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
