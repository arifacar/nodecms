var createError = require('http-errors')
var express = require('express')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
const bodyParser = require('body-parser')

const config = require('./config/config')

var CommonRouter = require('./routes/CommonRouter')
var ContentRouter = require('./routes/ContentRouter')
var CategoryRouter = require('./routes/CategoryRouter')

var app = express()

app.use(logger('dev'))
app.use(cookieParser())

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/', CommonRouter)
app.use("/contents/", ContentRouter)
app.use("/categories/", CategoryRouter)

app.set('view engine', 'html')

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message
    res.locals.error = req.app.get('env') === 'development' ? err : {}

    // render the error page
    res.status(err.status || 500)
    createError(500)
})

app.listen(config.APP_PORT, () => {
    console.log(`Example app listening at http://localhost:${config.APP_PORT}`)
})
