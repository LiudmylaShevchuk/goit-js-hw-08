import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');

const player = new Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

const currentTime = function (data) {
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(Math.round(data.seconds))
  );

  let time = Number(localStorage.getItem('videoplayer-current-time'));
  console.log(time);
};

player.on('timeupdate', throttle(currentTime, 1000));

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
