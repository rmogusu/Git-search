import { Directive ,ElementRef,HostListener} from '@angular/core';

@Directive({
  selector: '[appLogoHighlight]'
})
export class LogoHighlightDirective {
  constructor(private elem:ElementRef) {}
  @HostListener("click") onClicks(){
  this.textDeco("aqua")
  }

  @HostListener("dblclick") onDoubleClicks(){
    this.textDeco("transparent")
  }


  private textDeco(action:string){
    this.elem.nativeElement.style.backgroundColor=action;

  }


}
