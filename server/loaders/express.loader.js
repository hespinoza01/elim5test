import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'
import helmet from 'helmet'
import path from 'path'

/**
 * Configure a express instance
 * @param {Express} app - Express instance
 * @param {Express.Route} api - Express App Routes
 * @return {Express} app
 */
export default async function ExpressLoader(app, api) {
    // If not app, cancel rest execution
    if (!app) {
        console.log('not app')
        return null
    }

    app.enable('trust proxy')

    // config middlewares
    app.use(helmet())
    app.use(cors({ origin: '*' }))
    app.use(morgan('dev'))
    app.use(bodyParser.json())
    app.use(express.urlencoded({ extended: false }))
    app.use(express.static(path.resolve(__dirname + '/../public')))
    app.disable('etag')

    // config routes
    if (api) {
        app.use('/api', api)
    }

    app.get('*', (_, res) => {
        res.header('Access-Control-Allow-Origin', '*')
        res.header('Content-Security-Policy', 'script-src blob:')
        res.header('Content-Security-Policy', 'worker-src blob:')
        res.set(
            'Content-Security-Policy',
            `default-src *; style-src 'self' http://* 'unsafe-inline'; script-src 'self' http://* 'unsafe-inline' 'unsafe-eval'`
        ).sendFile('index.html')
    })

    return app
}
