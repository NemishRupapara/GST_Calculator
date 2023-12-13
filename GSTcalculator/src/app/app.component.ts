import { Component, ElementRef, ViewChild } from '@angular/core';
// import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'GSTcalculator';

  inputprice: number = 0;
  gst: number = 18;

  ognprice1: number = 0;
  ognprice2: number = 0;


  selectedOption1: boolean = true;
  selectedOption2: boolean = false;

  gstamount1: number = 0;
  gstamount2: number = 0;

  finalamount1: number = 0;
  finalamount2: number = 0;

  @ViewChild('radio11') radio!: ElementRef<HTMLInputElement>;
  @ViewChild('radio11') radioo!: ElementRef<HTMLInputElement>;
  @ViewChild('per') gst18!: ElementRef<HTMLSelectElement>;

  // console.log(this.radio.nativeElement.value);




  option1() {
    this.selectedOption1 = true;
    this.selectedOption2 = false;
    // console.log("option1");

  }

  option2() {
    this.selectedOption2 = true;
    this.selectedOption1 = false;
    // console.log("option2");

  }

  calculategst1() {
    if (this.selectedOption1) {
      this.ognprice1 = this.inputprice;
      this.gstamount1 = this.ognprice1 * (this.gst / 100);
      this.finalamount1 = this.ognprice1 + this.gstamount1;
    }

  }
  calculategst2() {

    if (this.selectedOption2) {
      this.finalamount2 = this.inputprice;
      this.ognprice2 = this.finalamount2 / (1 + this.gst / 100);
      this.gstamount2 = this.finalamount2 - this.ognprice2;
    }

  }

  resetForm() {
    this.inputprice = 0;
    this.gst = 18;
    this.ognprice1 = 0;
    this.ognprice2 = 0;
    this.selectedOption1 = true;
    this.selectedOption2 = false;
    this.gstamount1 = 0;
    this.gstamount2 = 0;
    this.finalamount1 = 0;
    this.finalamount2 = 0;

    this.radio.nativeElement.checked = true;

    // if (this.radio && this.radio.nativeElement instanceof HTMLInputElement) {
    //   this.radio.nativeElement.checked = true;
    // }
    // if (this.radioo && this.radioo.nativeElement instanceof HTMLInputElement) {
    //   this.radioo.nativeElement.checked = false;
    // }
    // }

  }

}