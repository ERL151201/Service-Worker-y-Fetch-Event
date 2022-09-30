self.addEventListener('fetch', event => {

    if (event.request.url.includes('styles,css')) {
        event.respondWith(null);
    } else {
        event.respondWith(fetch(event.request));
    }




});