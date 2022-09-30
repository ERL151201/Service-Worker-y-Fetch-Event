self.addEventListener('fetch', event => {

    if (event.request.url.includes('.jpg')) {
        console.log(event.request.url);

        //let fotoReq = fecth('img/main.jpg');

        let fotoReq = fecth(event.request.url);

        event.respondWith(fotoReq);
    }




});