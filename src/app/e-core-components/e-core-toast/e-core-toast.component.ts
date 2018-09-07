import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e-core-toast',
  templateUrl: './e-core-toast.component.html',
  styleUrls: ['./e-core-toast.component.scss']
})
export class ECoreToastComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  myFunction() {
      // Get the snackbar DIV
    let x = document.getElementById("snackbar");

    // Add the "show" class to DIV
    x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }

}
