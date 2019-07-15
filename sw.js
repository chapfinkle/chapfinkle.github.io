/*
Copyright 2018 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js');

if(workbox){
    console.log(`Yay! Workbox is loaded`);
    workbox.precaching.precacheAndRoute([
  {
    "url": "images/touch/icon-128x128.png",
    "revision": "c2c8e1400d6126ea32eaac29009733a9"
  },
  {
    "url": "images/touch/icon-192x192.png",
    "revision": "571f134f59f14a6d298ddd66c015b293"
  },
  {
    "url": "images/touch/icon-256x256.png",
    "revision": "848055c2f5d42b0c405cff37739261e9"
  },
  {
    "url": "images/touch/icon-384X384.png",
    "revision": "a1be08eac51e8ff734a337b90ddc1c16"
  },
  {
    "url": "images/touch/icon-512x512.png",
    "revision": "b3d7c4eaefdd3d30e348a56d8048bf68"
  },
  {
    "url": "index.html",
    "revision": "5747f1d60313905aa35ced08f44cee9e"
  },
  {
    "url": "js/idb-promised.js",
    "revision": "8fb5c9b2f422347fb1a54827f2ff40a6"
  },
  {
    "url": "js/main.js",
    "revision": "a798b1d0bcbe9a98858650e80e29e13a"
  },
  {
    "url": "js/main1.js",
    "revision": "03ae828dae30ce3e85af45edbca10b59"
  },
  {
    "url": "style/main.css",
    "revision": "06c2837bfdab7b6d6f03fa4d697d74c8"
  }
]);

    //const bgSyncPlugin = new workbox.backgroundSync.Plugin('dashboardr-queue');
    const showNotification = () => {
        self.registration.showNotification('Background sync success!', {
            body: 'Sync Success'
        });
    };

    const bgSyncPlugin = new workbox.backgroundSync.Plugin(
        'dashboardr-queue',
        {
            callbacks: {
                queueDidReplay: showNotification
            }
        }
    );

    const networkWithBackgroundSync = new workbox.strategies.NetworkOnly({
        plugins: [bgSyncPlugin],
    });

    workbox.routing.registerRoute(
        '/api/add',
        networkWithBackgroundSync,
        'POST'
    );

} else{
    console.log(`Boo! Workbox didn't load`)
}

