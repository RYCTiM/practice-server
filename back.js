const fs = require('fs');

const http = require('http');
const 서버 = http.createServer((req, res) => {
    const prom = new Promise(function executor(resolve, reject) {
        fs.readFile('./index.html', function callback(err, data) {
            if (err)
                return reject(err);
            return resolve(data);
        });
    })
    .then(function onFulfilled(data) {
        const json = {'Content-Type': 'text/html;charset=utf-8'};
        const header = JSON.stringify(json);
        res.writeHead(200, header);
        res.end(data);
    })
    .catch(function onRejected(err) {
        console.warn(err);
        res.writeHead(400);
        res.end(String.toString(err));
    });
});

서버.listen(3001, 'localhost');
