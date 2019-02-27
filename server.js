const express = require('express');
const path = require('path');

const app = express();

// Serve the static files from the React app
const serveStatic = express.static(path.join(__dirname, 'client/build'), {
    cacheControl: false,
    etag: false,
    setHeaders: function (res) {
        res.set({
            'Last-Modified': Date.now(),
            'X-Powered-By': 'PWA TALK'
        });
    }
});


app.use((req, res, next) => {
    // add a delay...
    sleep(2000).then(() => {
        serveStatic(req, res, next);
    });
});


app.get('/api/some-data', (req, res, next) => {
    res.json({
        data: [10000, 30162, 26263, 18394, 18287, 28682, 31274, 33259, 25849, 24159, 32651, 31984, 38451]
    });
});


app.get('*', (req, res) => {
    res.set({
        'Last-Modified': Date.now()
    });

    sleep(250).finally(() => {
        res.sendFile(path.join(__dirname + '/client/build/index.html'));
    });
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);


function sleep(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}
