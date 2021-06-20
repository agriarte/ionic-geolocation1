import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-geopos',
  templateUrl: './geopos.component.html',
  styleUrls: ['./geopos.component.scss'],
})
export class GeoposComponent implements OnInit {

  miPrecision1: any;
  miLatitud1: any;
  miLongitud1: any;
  miAltitud1: any;
  miPrecicionAlt1: any;
  miRumbo1: any;
  miVelocidad1: any;


  constructor(private geolocation: Geolocation) { }

  ngOnInit() {
    this.lanzarGpsIntervalo();
  }

  lanzarGpsIntervalo() {
    setInterval( () => {
      this.getCoordenadas();
    }, 10000);//cada 10 segundos refresca datos GPS

  }

  getCoordenadas() {
    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude etc

      this.miPrecision1 = resp.coords.accuracy;
      this.miLatitud1 = resp.coords.latitude;
      this.miLongitud1 = resp.coords.longitude;
      this.miAltitud1 = resp.coords.altitude;
      this.miPrecicionAlt1 = resp.coords.altitudeAccuracy;
      this.miRumbo1 = resp.coords.heading;
      this.miVelocidad1 = resp.coords.speed;


    }).catch((error) => {
      console.log('Error getting location', error);
    });


    const watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {

      // data can be a set of coordinates, or an error (if an error occurred).

      //*** NO FUNCIONA SEGUN DOCU OFICIAL
      //Property 'coords' does not exist on type 'Geoposition | PositionError'.
      //Property 'coords' does not exist on type 'PositionError'.ts(2339)
      //this.miLatitud2 = data.coords.latitude ;
      // this.miLatitud2 = data.coords.longitude;
    });
  }

}
