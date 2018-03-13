var CACHE_NAME = '1.2';
var myCache = [
  '/',
  'img/perfil.jpg',
  'img/fb.jpg',
  'img/instagram.jpg',
  'img/linkedin.jpg',
  'img/skype.jpg',
  'img/slack.jpg',
  'img/star-cheia.jpg',
  'img/star-metade.jpg',
  'img/star-vazia.jpg',
  'img/whatsapp.jpg',
  'css/index.css',
  'css/sweetalert.css',
  'js/sweetalert-dev.js',
  'js/sweetalert.min.js',
  'js/firebase.js',
  'js/index.js'
];


this.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(myCache);
    })
  );
});
