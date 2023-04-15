
import express from "express";
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(express.static('public'))

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/events', function(req, res) {
    res.sendFile(path.join(__dirname, '/front-end/www.brysonstavern.com/events.html'));
});
  
app.listen(8001);

console.log('listening on port 8001!');