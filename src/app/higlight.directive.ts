import { Directive, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHiglight]'
})
export class HiglightDirective {

  @HostBinding('style.backgroundColor')
  mybackground='yellow';
  constructor(private elref:ElementRef) { 
    // console.log(this.elref);
    // console.log(this.elref.nativeElement);
    this.elref.nativeElement.style.color='red';
  }

  @HostListener('mouseenter')
  onMouseEnter(){
    // console.log('onMouseEnter');
    this.elref.nativeElement.style.color='Yellow';
    this.mybackground='blue';
  }
  @HostListener('mouseleave')
  onMouseLeave(){
    // console.log('onMouseLeave');
    this.elref.nativeElement.style.color='red';
    this.mybackground='yellow';
  }
}
