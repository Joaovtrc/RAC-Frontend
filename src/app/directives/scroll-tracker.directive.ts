import { Directive, Output,EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[appScrollTracker]'
})
export class ScrollTrackerDirective {

  constructor() { }


  
  @Output() scrolled = new EventEmitter<any>();

  @HostListener('scroll', ['$event'])
  onScroll(event) {
    // do tracking
    // console.log('scrolled', event.target.scrollTop);
    // Listen to click events in the component
    let tracker = event.target;
    let endReached = false;
    let startReached = false;
    let limit = tracker.scrollHeight - tracker.clientHeight;
    
    if (event.target.scrollTop === limit) {
      //alert('end reached');
      endReached = true;
    }
    
    if (event.target.scrollTop === 0) {
      //alert('end reached');
      startReached = true;
    }
    
    this.scrolled.emit({
      pos: event.target.scrollTop,
      endReached,
      startReached
    })
  }
}
