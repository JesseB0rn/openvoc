import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  HeaderMode = HeaderMode;
  title: string = '';

  @Input() mode: HeaderMode = HeaderMode.home;
  @Input() notifications: number | undefined;

  @Input() dismissRouteLink: string | any[] = ['/'];

  constructor() {}

  ngOnInit(): void {}
}

export enum HeaderMode {
  home,
  back,
  close,
  calendar,
}
