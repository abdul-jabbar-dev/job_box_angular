import {
  animate,
  query,
  stagger,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, HostListener } from '@angular/core';
import { interval } from 'rxjs';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  animations: [
    trigger('listAnimation', [
      transition(':enter', [
        query('.animated-item', [
          style({ transform: 'translateY(20px)', opacity: 0 }),
        ]),

        query('.animated-item', [
          stagger(200, [
            animate(
              '0.6s ease-out',
              style({ transform: 'translateY(0)', opacity: 1 })
            ),
          ]),
        ]),
      ]),
    ]),
    trigger('fadeAnimation', [
      state('visible', style({ opacity: 1 })),
      state('hidden', style({ opacity: 0 })),
      transition('hidden => visible', [animate('2s ease-in')]),
      transition('visible => hidden', [animate('1s ease-out')]),
    ]),
  ],
})
export class LandingComponent {
  transform1 = 'translate(0px, 0px)';
  transform2 = 'translate(0px, 0px)';
  transform3 = 'translate(0px, 0px)';

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    this.transform1 = this.calculateTransform(mouseX, mouseY, 10);
    this.transform2 = this.calculateTransform(mouseX, mouseY, 20);
    this.transform3 = this.calculateTransform(mouseX, mouseY, 30);
  }

  calculateTransform(mouseX: number, mouseY: number, offset: number) {
    const newX = (mouseX - offset) * 0.015;
    const newY = (mouseY - offset) * 0.015;
    return `translate(${newX}px, ${newY}px)`;
  }

  items = [
    'children',
    'children',
    'children',
    'children',
    'children',
    'children',
    'children',
    'children',
    'children',
  ];
  imgs = ['../assets/img/hero-01.jpg', '../assets/img/hero-02.jpg'];
  currentImageIndex = 0;
  fadeState = 'visible';
  constructor() {
    interval(5000).subscribe(() => {
      this.changeImage();
    });
  }
  updateImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.imgs.length;
  }
  changeImage() {
    this.fadeState = 'hidden';

    setTimeout(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.imgs.length;
      this.fadeState = 'visible';
    }, 1300);
  }
}
