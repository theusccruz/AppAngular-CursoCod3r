import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRed]'
})
export class RedDirective implements OnInit {

  constructor(private el: ElementRef, 
    private renderer: Renderer2) 
    { }

  ngOnInit() {
    this.renderer.setStyle(this.el.nativeElement, 'color', '#e35e6b');
  }


  /*
  Sem o Renderer2 (método menos seguro)
  constructor(private el: ElementRef) 
  { }  

  ngOnInit() {
    this.el.nativeElement.style.color = '#e35e6b';
  }
  */

}
