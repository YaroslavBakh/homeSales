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
      this.addLayer();

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

  addLayer(): void {
    this.map.addSource('maine', {
      'type': 'geojson',
      'data': {
        'type': 'Feature',
        'geometry': {
          'type': 'Polygon',
          'coordinates': [
            [
              [-74.2564134593745, 40.50490114989722],
              [-74.24728153986727, 40.5187866297274],
              [-74.24423756669822, 40.547705477265424],
              [-74.22445174109902, 40.55695687238173],
              [-74.20162194233126, 40.57776783781179],
              [-74.19705598257742, 40.599727946967846],
              [-74.20009995574648, 40.623991256274735],
              [-74.19096803623927, 40.64478136581204],
              [-74.09811328242562, 40.645925841020755],
              [-74.08375292988752, 40.64931956254932],
              [-74.07669046142655, 40.64842649466851],
              [-74.07002035232408, 40.64413960247569],
              [-74.07135437414458, 40.637946938736604],
              [-74.07072659917074, 40.63103905912095],
              [-74.06672453370928, 40.628120860776676],
              [-74.0716682616319, 40.62901420034444],
              [-74.07119743040131, 40.62466650201043],
              [-74.06476273691415, 40.61936550061131],
              [-74.05656489109516, 40.60942649782825],
              [-74.0534260162236, 40.6057328673958],
              [-74.05279824124898, 40.605256255050506],
              [-74.03804552935233, 40.60972436235511],
              [-74.03741775437771, 40.61049880391053],
              [-74.04047815737803, 40.6150261287778],
              [-74.04243995417235, 40.62491369265069],
              [-74.03985038240339, 40.63468069204387],
              [-74.03749622624973, 40.63884909824387],
              [-74.03671150753185, 40.643910384442876],
              [-74.03025807042498, 40.646276077699696],
              [-74.02145274256546, 40.653883421704734],
              [-74.00597863566459, 40.66444812547462],
              [-74.00136355685419, 40.66391329165563],
              [-74.02033665863192, 40.674025786759955],
              [-74.02045946612847, 40.67702242400989],
              [-74.01974268459622, 40.68065853313004],
              [-74.0110103419304, 40.68718158564846],
              [-74.0189606837601, 40.70437566384902],
              [-74.01866654535829, 40.714860556861595],
              [-74.01527787507038, 40.72128148240472],
              [-74.01062301789878, 40.75047835491111],
              [-73.9969811756952, 40.77188739137162],
              [-73.9861516914325, 40.78601243553294],
              [-73.95507455255705, 40.82994378794896],
              [-73.94647659922217, 40.84907386782248],
              [-73.93684602430477, 40.86190793370304],
              [-73.91914910572162, 40.89328738595225],
              [-73.91194177973344, 40.9133717743575],
              [-73.86112416016557, 40.90066186281183],
              [-73.85502374189859, 40.90757917656916],
              [-73.8448519651287, 40.90444341481367],
              [-73.83708929338302, 40.90596073745587],
              [-73.83133420915831, 40.893720009238734],
              [-73.83124110882959, 40.89382566852112],
              [-73.83088047053172, 40.8924625787196],
              [-73.82721398117575, 40.89155383658323],
              [-73.82480972585945, 40.891690148699354],
              [-73.80972302375334, 40.88719170058687],
              [-73.79291751549681, 40.88179114529632],
              [-73.78273642452169, 40.877413973123566],
              [-73.78674735643705, 40.872043056789096],
              [-73.7817566255667, 40.87234496451731],
              [-73.78534995179326, 40.86887294252858],
              [-73.78954216572411, 40.86811813104819],
              [-73.79273623348091, 40.86555170765658],
              [-73.79273623348091, 40.864042000376685],
              [-73.79193771654184, 40.86298518480342],
              [-73.79413105499538, 40.85769454637486],
              [-73.79393142576046, 40.85829849129087],
              [-73.79253402111722, 40.85603366946228],
              [-73.79013847029948, 40.85754355928489],
              [-73.78774291948176, 40.85573168736789],
              [-73.78554699789892, 40.85225879434469],
              [-73.78235293014212, 40.84938974540674],
              [-73.78195367167281, 40.84380229359084],
              [-73.78095552549884, 40.83836540181372],
              [-73.7829518178468, 40.83549575135493],
              [-73.78754329024738, 40.837761275198034],
              [-73.79113661647348, 40.84531246215988],
              [-73.79073735800365, 40.85014477032968],
              [-73.79193513341254, 40.85361777416523],
              [-73.79552845963916, 40.85603366946228],
              [-73.79812363969175, 40.854825732826185],
              [-73.79812363969175, 40.850446777890085],
              [-73.79952104433502, 40.848936726323586],
              [-73.8011180782137, 40.8481816876355],
              [-73.80331399979654, 40.85180579487704],
              [-73.80411252327477, 40.85678862175982],
              [-73.80411252327477, 40.85950636768902],
              [-73.80730659103158, 40.86041225822001],
              [-73.81109954649257, 40.85980833257622],
              [-73.81169843419724, 40.862676930345486],
              [-73.8142936142494, 40.86237497853605],
              [-73.81489250195406, 40.860563238771164],
              [-73.81209769266654, 40.85663763260504],
              [-73.81509213118896, 40.85286279190146],
              [-73.81728805277181, 40.849691759493226],
              [-73.81389435578008, 40.843953315080995],
              [-73.8174876820062, 40.84410433314281],
              [-73.8142936142494, 40.84017775170989],
              [-73.81668916506712, 40.83745921291086],
              [-73.81529176042335, 40.83187075525072],
              [-73.81129917572747, 40.826735000452004],
              [-73.80550996477312, 40.822958489140206],
              [-73.80421003429562, 40.81965405065745],
              [-73.79283116791163, 40.81436626427566],
              [-73.79103450479859, 40.80620713849626],
              [-73.79143376326839, 40.79638463795561],
              [-73.79003635862463, 40.7921529590142],
              [-73.75517238487248, 40.7647044199785],
              [-73.75156774337513, 40.78199309671692],
              [-73.73895149813512, 40.76379436500682],
              [-73.72299287244516, 40.73604349252568],
              [-73.72419227515671, 40.724097979077555],
              [-73.728571798694, 40.71395322894017],
              [-73.727372395982, 40.70810864320691],
              [-73.7263443365146, 40.69771700192197],
              [-73.72600165002578, 40.69135132101903],
              [-73.72896264739231, 40.678657179362176],
              [-73.73992861504368, 40.66566163206639],
              [-73.73983728547302, 40.66562775674413],
              [-73.74536892108027, 40.65834878163318],
              [-73.74920719884865, 40.65398101529317],
              [-73.74480446846732, 40.64387410680149],
              [-73.73656346031761, 40.64027636321856],
              [-73.73477465054226, 40.63495850842756],
              [-73.7697856555154, 40.61890800748782],
              [-73.76628604931526, 40.61565169727433],
              [-73.75877008409098, 40.61055584294962],
              [-73.75380290109725, 40.609527423057244],
              [-73.73653065113957, 40.59701371334387],
              [-73.7379982318187, 40.5943566859317],
              [-73.74409432003891, 40.59469957213375],
              [-73.7483841598973, 40.59375663084754],
              [-73.75098064191741, 40.59058482165534],
              [-73.75910875954415, 40.590499094994215],
              [-73.76960757814572, 40.590927727199585],
              [-73.78123530197263, 40.58887026755659],
              [-73.79604739779974, 40.585882403386876],
              [-73.8093684794661, 40.5831389028302],
              [-73.81986729806765, 40.57988084975801],
              [-73.83070478823687, 40.57705135913949],
              [-73.84329673683855, 40.57239380592384],
              [-73.90667684261831, 40.55092954056971],
              [-73.93628092014339, 40.542078850224385],
              [-73.94258998584542, 40.54244765234009],
              [-73.94258998584542, 40.549454506735856],
              [-73.94210467309884, 40.55682935099958],
              [-73.91541247205181, 40.562728641569635],
              [-73.8964852749458, 40.56678410226817],
              [-73.8829746047113, 40.56756911869172],
              [-73.8664739713368, 40.574204719224355],
              [-73.85337052718623, 40.5830511630264],
              [-73.84026708303566, 40.58341973946463],
              [-73.82764895163166, 40.587842498302905],
              [-73.81357488198863, 40.59558162250815],
              [-73.80095675058398, 40.59963509199588],
              [-73.78639736819504, 40.602214444615896],
              [-73.79125049565802, 40.59484460165052],
              [-73.78494142995604, 40.59816113152749],
              [-73.77863236425401, 40.59889811582403],
              [-73.7732939240445, 40.601109019965946],
              [-73.77135267305891, 40.60995190529587],
              [-73.772323298552, 40.61363609553416],
              [-73.77669111326844, 40.62431909849525],
              [-73.78397080446354, 40.61953037739778],
              [-73.78251486622452, 40.61400450338596],
              [-73.78930924467247, 40.609215042872705],
              [-73.79561831037508, 40.61068875959384],
              [-73.80144206353083, 40.61384023234058],
              [-73.79513299782883, 40.622313073105005],
              [-73.78882393212683, 40.624154852812296],
              [-73.78494143015634, 40.63188977299333],
              [-73.82473707535391, 40.64882980084991],
              [-73.850943963655, 40.64220160626709],
              [-73.87666553920958, 40.63446788063234],
              [-73.8892836706136, 40.62304979108214],
              [-73.89219554709163, 40.61641903676497],
              [-73.89025429610669, 40.608682324888605],
              [-73.89753398730117, 40.60389248290792],
              [-73.8931661725841, 40.60352401930649],
              [-73.88394523040405, 40.60462940401814],
              [-73.87715085195613, 40.58325539324778],
              [-73.88200397941914, 40.57846372936339],
              [-73.89268085983818, 40.57588346049039],
              [-73.8989899255402, 40.58730960998139],
              [-73.9116080569442, 40.58694105497918],
              [-73.91306399518322, 40.58141248621911],
              [-73.92568212658722, 40.582149655123715],
              [-73.94994776390278, 40.58325539324778],
              [-73.94849182566375, 40.583992541842036],
              [-73.95480083084355, 40.582518258609184],
              [-73.93344707000541, 40.57956955049758],
              [-73.92956456803489, 40.575883482572664],
              [-73.95140364161894, 40.57293448200667],
              [-74.00090554174315, 40.568510737452414],
              [-74.0140089858937, 40.57625209850448],
              [-74.0004202289966, 40.58288683798389],
              [-73.99702303977264, 40.59541732825278],
              [-74.02808305553673, 40.60610324393511],
              [-74.06004170034812, 40.59663218229076],
              [-74.07090723980623, 40.57600323086686],
              [-74.13881686141903, 40.52577953940326],
              [-74.22030840735461, 40.498243735131666],
              [-74.24229690323747, 40.49467046519004],
              [-74.25587882755971, 40.505686730517766]
            ]
          ]
        },
        properties: {}
      }
    })

    this.map.addLayer({
      'id': 'maine',
      'type': 'fill',
      'source': 'maine', // reference the data source
      'layout': {},
      'paint': {
        'fill-color': '#0080ff', // blue color fill
        'fill-opacity': 0.5
      }
    });

// Add a black outline around the polygon.
    this.map.addLayer({
      'id': 'outline',
      'type': 'line',
      'source': 'maine',
      'layout': {},
      'paint': {
        'line-color': '#000',
        'line-width': 3
      }
    });
  }
}
