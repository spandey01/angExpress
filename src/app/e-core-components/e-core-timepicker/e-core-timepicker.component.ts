import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e-core-timepicker',
  templateUrl: './e-core-timepicker.component.html',
  styleUrls: ['./e-core-timepicker.component.scss']
})
export class ECoreTimepickerComponent implements OnInit {

    time = {hour: 13, minute: 30};
  constructor() { }

  ngOnInit() {
  }

}
