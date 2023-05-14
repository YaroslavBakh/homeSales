import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import * as mapboxgl from "mapbox-gl";
import {environment} from "../../enironment/environment";
import {AttributionControl, CircleLayer, GeolocateControl, NavigationControl, ScaleControl} from "mapbox-gl";
import {
  CompassControl,
  InspectControl,
  LanguageControl,
  RulerControl,
  StylesControl,
  ZoomControl
} from "mapbox-gl-controls";

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
      zoom: 10,
      center: [this.lng, this.lat],
      accessToken: environment.mapbox.accessToken,
    })

    this.map.on('load', () => {
      this.map.addSource('point', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: [{
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [30.3661256, 50.429972]
            },
            properties: {}
          }]
        }
      });

      this.map.addLayer({
        id: 'building-point',
        type: 'circle',
        layout: {
          visibility: "visible",
        },
        source: 'point',
        paint: {
          'circle-radius': [
            'interpolate',
            ['linear'],
            ['zoom'],
            8, 0,
            9, 3,
            10, 3.5,
            11, 4,
            12, 5,
            13, 6,
            14, 7,
            15, 8,
            16, 9,
            17, 10
          ],
          'circle-color': 'blue'
        }
      });
    });

    this.map.on('mouseenter', 'building-point', () => {
      this.map.getCanvas().classList.add('my-circle-class');
    });

    this.map.on('mouseleave', 'building-point', () => {
      this.map.getCanvas().classList.remove('my-circle-class');
    });




    this.map.addControl(new ZoomControl(), 'top-right');
    this.map.addControl(new LanguageControl({
      language: 'ua'
    }));

  }
}
