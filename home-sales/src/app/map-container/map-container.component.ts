import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import * as mapboxgl from "mapbox-gl";
import {environment} from "../../enironment/environment";
import {AttributionControl, CircleLayer, GeolocateControl, NavigationControl, ScaleControl} from "mapbox-gl";

@Component({
  selector: 'app-map-container',
  templateUrl: './map-container.component.html',
  styleUrls: ['./map-container.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MapContainerComponent implements OnInit {
  //@ts-ignore
  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/outdoors-v9';
  lat = 50.429952;
  lng = 30.3661056;
  message = 'test';

  source: any;
  markers: any;

  constructor() {
  }

  ngOnInit(): void {
    this.initializeMap();
  }

  initializeMap(): void {
    this.buildMap()

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.map.flyTo({
          center: [this.lng, this.lat]
        })
      })
    }


  }


  buildMap() {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 13,
      center: [this.lng, this.lat],
      accessToken: environment.mapbox.accessToken,
      scrollZoom: true
    })

  }
}
