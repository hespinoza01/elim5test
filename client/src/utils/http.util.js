import axios from 'axios'
import { BASE_URL_SERVER } from '../utils'

/**
 * Hook for make REST petitions
 * @param {String} pathUrl
 * @param {Option} options
 * @returns {Array} [Axios, CancelPetition]
 */
const Http = axios.create({
    // api base url
    baseURL: BASE_URL_SERVER,
    validateStatus: status => {
        if (status === 401) {
            window.location.href = '/access'
            return true
        }

        return status >= 200 && status < 300
    },
})

export default Http
