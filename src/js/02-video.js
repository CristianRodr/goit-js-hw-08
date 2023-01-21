import '../css/common.css';
import Player from '@vimeo/player';
import { throttle } from 'lodash';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

//detector de evento
const onPlay = function (data) {
  console.log('tiempo visto: ', data.seconds);
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(data.seconds)
  );
};

// constructor
player.on('timeupdate', _.throttle(onPlay, 1000));

//Lectura
const savedSettings = localStorage.getItem('videoplayer-current-time');
const parsedSettings = JSON.parse(savedSettings);
console.log('localStorage Actual: ', parsedSettings);

//metodo setCurrentTime -> mantiene el tiempo aun cuando se recarga
player
  .setCurrentTime(parsedSettings)
  .then(function (seconds) {
    // segundos = el tiempo real que el jugador buscó
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // el tiempo fue inferior a 0 o superior a la duración del vídeo
        break;
      default:
        // se ha producido algún otro error
        break;
    }
  });
