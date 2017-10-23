let app = require('./src/server.js');
let port = process.env.PORT || 8181;

// Server
app.listen(port, () => {
    console.log(`Listening on: http://localhost:${port}`);
});
