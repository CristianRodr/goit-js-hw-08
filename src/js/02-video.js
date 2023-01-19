import Player from '@vimeo/player';
import { throttle } from 'throttle-debounce';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const eventCounter = {
  duration: 61.857,
  percent: 0.049,
  seconds: 3.034,
};

player.on('play', () => {
  console.log((eventCounter.duration = +1));
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
