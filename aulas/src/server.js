const { pageLanding, pageStudy, pageGiveClasses, saveClasses, pageSuccess } = require('./pages');

const express = require('express');
const server = express();

const nunjucks = require('nunjucks');
//configurar nunjucks
nunjucks.configure('src/views', {
    express: server,
    noCache: true
});

server
    .use(express.urlencoded({ extended: true }))
    //configurar arquivos estaticos(css, scripts, imgs)
    .use(express.static("public"))
    // rotas da aplicação
    .get("/", pageLanding)
    .get("/study", pageStudy)
    .get("/give-classes", pageGiveClasses)
    .post("/save-class", saveClasses)
    .get("/success-page", pageSuccess)
    .listen(5500);