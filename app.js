const http = require('http')

http.createServer(function(req,res){
    res.write('Hello World!')
    res.end()
}).listen(3050)

let options = {
    host: 'saveetha.ac.in',
    path: '/courses',
    method: 'GET'
};

http.request(options, (response) => {
    console.log(`STATUS: ${response.statusCode}`)
}).end();