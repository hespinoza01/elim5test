import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'
import helmet from 'helmet'
import path from 'path'
import { existsSync } from 'fs'

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

    // Define absolute path for public folder
    const PUBLIC_DIR = path.resolve(__dirname + '/../public')

    app.enable('trust proxy')

    // config middlewares
    app.use(helmet())
    app.use(cors({ origin: '*' }))
    app.use(morgan('dev'))
    app.use(bodyParser.json())
    app.use(express.urlencoded({ extended: false }))
    app.disable('etag')

    // config routes
    if (api) {
        app.use('/api', api)
    }

    // declare dir path fr public files
    app.use('/static', express.static(PUBLIC_DIR + '/static'))

    /**
     * Capture user petitions to return frontend
     */
    app.get('/:file/', (req, res) => {
        const { file } = req.params

        const filepath = `${PUBLIC_DIR}/${file}`

        if (existsSync(filepath)) {
            res.sendFile(filepath)
        } else {
            res.header('Access-Control-Allow-Origin', '*')
            res.header('Content-Security-Policy', 'script-src blob:')
            res.header('Content-Security-Policy', 'worker-src blob:')
            res.sendFile(PUBLIC_DIR + '/index.html')
        }
    })
    app.get('*', (_, res) => {
        res.header('Access-Control-Allow-Origin', '*')
        res.header('Content-Security-Policy', 'script-src blob:')
        res.header('Content-Security-Policy', 'worker-src blob:')
        res.sendFile(PUBLIC_DIR + '/index.html')
    })

    return app
}
