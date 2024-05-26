import { animate, animateChild, query, stagger, state, style, transition, trigger } from '@angular/animations';

export let fade = trigger('fade', [
  transition('void => *', [
    style({opacity: 0}),
    animate('2000ms ease-out')
  ])
]);

export let slide = trigger('slide', [
  transition('void => *', [
    style({transform: 'translateX(-100%)'}),
    animate('1000ms ease-out')
  ])
]);

export let headerAnimation = trigger('headerAnimation', [
  transition('void => *', [
    query('@fade', stagger(300, animateChild()))
  ])
])