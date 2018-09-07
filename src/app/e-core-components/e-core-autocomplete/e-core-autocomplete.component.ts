import { Component, OnInit } from "@angular/core";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import { FormGroup, FormControl, FormBuilder, FormArray, Validators } from '@angular/forms';
@Component({
  selector: 'app-e-core-autocomplete',
  templateUrl: './e-core-autocomplete.component.html',
  styleUrls: ['./e-core-autocomplete.component.scss']
})
export class ECoreAutocompleteComponent implements OnInit {
  arrayOfStrings:string[] = [
    "this",
    "is",
    "array",
    "of",
    "text",
    "with",
    "long",
    "and long",
    "and long",
    "list",
    "with",
    "long",
    "and long",
    "and long",
    "list"
  ]
  public source: string;
  public textEndered: string = '';
  model1:any;
  constructor() { }

  ngOnInit() {
  }
  
  // autocompleListFormatter = (data: any) => {
  //   let re = new RegExp(this.myForm.value.continent, 'ig');
  //   let txt =  data.name.replace(re, match => `<b style="background-color:black">${match}</b>`);
  //   let html = `<span style='color:red'>${txt} ${data.id} </span>`;
  //   return this._sanitizer.bypassSecurityTrustHtml(html);
  // }

}
