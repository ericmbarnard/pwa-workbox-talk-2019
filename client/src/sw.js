if (workbox) {
    console.log(`Yay!!!! Workbox is loaded 🎉`);
} else {
    console.log(`Boo! Workbox didn't load 😬`);
}

workbox.precaching.precacheAndRoute(self.__precacheManifest || []);