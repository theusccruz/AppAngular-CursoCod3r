import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRed]'
})
export class RedDirective implements OnInit {

  constructor(private _el: ElementRef, 
    private _renderer: Renderer2) 
    { }

  ngOnInit() {
    this._renderer.setStyle(this._el.nativeElement, 'color', '#e35e6b');
  }


  /*
  Sem o Renderer2 (método menos seguro)
  constructor(private _el: ElementRef) 
  { }  

  ngOnInit() {
    this._el.nativeElement.style.color = '#e35e6b';
  }
  */

}
