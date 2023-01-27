import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

let currentTime = 0;

const iframe = document.querySelector('iframe');
const player = new Player(iframe);


player.on('timeupdate', throttle(onPlaying, 1000));

function onPlaying() {
  player
    .getCurrentTime()
    .then(function (seconds) {
      currentTime = seconds;
      localStorage.setItem('videoplayer-current-time', currentTime);
    })
    .catch(function (error) {});
}

player
  .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
  .then(function (seconds) {
    console.log(seconds);
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;

      default:
        break;
    }
  });
