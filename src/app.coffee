http = require 'http'

server = http.createServer (req, res) ->
    console.log req.method, req.url
    data = 'Hello Server\n'

    res.writeHead 200,
        'Content-Type': 'text/plain'
    res.end data

server.listen 5000
console.log("Server is running on the Port 5000")