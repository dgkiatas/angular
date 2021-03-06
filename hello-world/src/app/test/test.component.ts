import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  private name = "Jim";
  private greeting = "";
  successClass="text-success text-special";
  specialClass="text-special";
  hasError=false;
  isSpecial = false;
  messageClasses={
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }
  highlightColor = "orange";
  titleStyles = {
    color: "blue",
    fontStyle : "italic"
  }
  constructor() { }

  ngOnInit() {
  }
  onClick(event) {
    console.log(event);
    this.greeting="Welcom my friend " + this.name;
  }
    
  

}
