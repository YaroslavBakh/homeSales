import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponentComponent } from "../test-component/test-component.component";
import { BrowserModule } from "@angular/platform-browser";

@Component({
  selector: 'app-empty-route',
  standalone: true,
  imports: [CommonModule, TestComponentComponent],
  templateUrl: './empty-route.component.html',
  styleUrls: ['./empty-route.component.scss']
})
export class EmptyRouteComponent implements OnInit {
a: boolean;

ngOnInit() {
  console.log('3')
}
}
