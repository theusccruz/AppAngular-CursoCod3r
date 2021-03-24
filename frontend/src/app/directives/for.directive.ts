import { Directive, OnInit, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[myFor]'
})
export class ForDirective implements OnInit {

  @Input('myForOf') numbers: number[];

  constructor(private _container: ViewContainerRef,
    private _template: TemplateRef<any>) { }

  ngOnInit(): void {
    for (let number of this.numbers) {
      this._container.createEmbeddedView(this._template, 
        { $implicit: number });
    }
  }

}
