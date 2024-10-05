const fs = require('fs');

const http = require('http');
const 서버 = http.createServer((req, res) => {
    const m = req.method;
    const u = req.url;
    console.log('m: ', m);
    console.log('u: ', u);
    //console.log(`m: ${m}\nu: ${u}`);
    if(m == 'GET') {
        if(u == '/') {
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
            return;
        } else if(u == '/login') {
            const prom = new Promise(function executor(resolve, reject) {
                fs.readFile('./login.html', function callback(err, data) {
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
            return;
        }
    } else if(m == 'POST') {
        if(u == '/login') {
            let parsedBody = '';
            req.on('data', (chunk) => {
                parsedBody += chunk;
            });
            req.on('end', () => {
                console.log(parsedBody);
                res.end('Login OK');
            });
            return;
        }
    }
    res.writeHead(400);
    res.end('Bad Request 400');
    return;
});

서버.listen(3001, 'localhost');
