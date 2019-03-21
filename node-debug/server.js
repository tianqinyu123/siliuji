var http = require('http');
var fs = require('fs');

function handle_request(req, res) {

    var suffix = req.url.substr(req.url.length - 4, req.url.length);
    var realpath = __dirname;
    var filename = req.url.substr(req.url.length - 9);
    if (suffix === '.css') {
        res.writeHead(200, { 'Content-Type': 'text/css' });
        res.end(get_file_content(realpath +'\\'+ 'siliuji.css'));
    } else if (suffix === '.png') {
        res.writeHead(200, {'Content-Type': 'image/png'});
        res.end(get_file_content(realpath+'\\images\\'+filename));
    }else if(suffix === '.ttf'){
        res.writeHead(200,{'Content-Type':'application/x-font-ttf'});
        res.end(get_file_content(realpath+'\\font\\'+'jumpp.ttf'))
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(get_file_content(__dirname +'\\'+'siliuji.html'));
    }
}

function get_file_content(filepath) {
    return fs.readFileSync(filepath);
}

var server = http.createServer(handle_request);
server.listen(8080);
