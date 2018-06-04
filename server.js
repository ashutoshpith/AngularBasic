import express, { static } from "express";
import { json, urlencoded } from "body-parser";
import { join } from "path";
import http from "http";

let app = express();

const port = 3000;
import api from "./server/api";

app.use(json());
app.use(urlencoded({extended: false}));

app.use(static(join(__dirname, 'dist')));
app.use('/', api);


app.get('*'), (req, res) => {
  res.sendFile(join(__dirname, 'dist/angularElement/index.html'));
}


app.use('/api', tasks);

app.listen(port, function(){
   console.log("server Running"+port);
 });

