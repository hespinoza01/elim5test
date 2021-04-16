import express from 'express'
import api from './api'
import loaders from './loaders'
import { vars, db } from './config'

const app = express()

// create config for app loader
const loaderConfig = {
    expressApp: app,
    expressRoutes: api,
    sequelizeInstance: db,
}

loaders.init(loaderConfig).then(() => {
    app.listen(vars.PORT, err => {
        if (err) {
            console.log(err)
            return
        }

        console.log(`Server running at port: ${vars.PORT}`)
    })
})
