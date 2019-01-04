import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class ImageBadgeComponent implements OnInit {
  @Input() data;

  constructor() {}

  ngOnInit() {
    this.data['image'] = atob(this.data.image);
  }
}
