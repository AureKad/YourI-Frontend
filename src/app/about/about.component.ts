import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements OnInit {
  comp!: string | null;
  constructor(private route: ActivatedRoute, private scroller: ViewportScroller, private router: Router) {}

  ngOnInit(): void {
      this.comp = this.route.snapshot.paramMap.get('comp');
      this.router.navigate(["/"]);
      console.log(this.comp);
      if (this.comp) {
        const elem = document.getElementById(this.comp);

        if (elem == null) return;
        elem.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest"
        });
      }
    }

}
