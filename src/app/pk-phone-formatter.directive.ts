import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appPkPhoneFormatter]'
})
export class PkPhoneFormatterDirective {

  constructor(private _el: ElementRef) {

  }

  @HostListener('blur') onBlur() {
    let value: string = this._el.nativeElement.value;
    if (value.length == 12) {
      let countryCode = value.substring(0, 2);
      let companyCode = value.substring(2, 5);
      let rest = value.substring(5);
      let formatted = '+(' + countryCode + ') - ' + companyCode + ' - ' + rest;
      this._el.nativeElement.value = formatted;
    }

  }

}
