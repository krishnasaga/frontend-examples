const express = require('express');

const app = express();

app.get('/', (res,req) => { res.send({})});

app.listen(process.env.OPENSHIFT_NODEJS_PORT);
