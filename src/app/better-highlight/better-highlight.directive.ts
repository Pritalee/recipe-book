import { Directive, Renderer2, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective {

  constructor(private elRef:ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
  }
  @HostListener('mouseenter') mouseover(eventdata:Event){
    this.renderer.setStyle(this.elRef.nativeElement,'background','pink')
  }
  @HostListener('mouseleave') mouseleave(eventdata:Event){
    this.renderer.setStyle(this.elRef.nativeElement,'background','transparent')
  }

}
