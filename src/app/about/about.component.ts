
import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild, viewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements OnInit, AfterViewInit {
  navbarfixed = false;
  @ViewChild('header', { read: ElementRef })headerView!:ElementRef;
  headerHeight!: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.fragment.subscribe(f => {
      const element = document.querySelector("#" + f)
      if (element) element.scrollIntoView()
    })
  }

  ngAfterViewInit(): void {
    this.headerHeight = this.headerView.nativeElement.offsetHeight
  }

  @HostListener('window:scroll', []) onScroll() {
    console.log(window.scrollY)
    if (window.scrollY > this.headerHeight -1) 
      this.navbarfixed = true
    else 
      this.navbarfixed = false
  }


}
