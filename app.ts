import sourceMapSupport from 'source-map-support'
sourceMapSupport.install()

import { App } from 'homey'

class UponorApp extends App {
    async onInit() {
        this.log('UponorApp is running...')
    }
}

module.exports = UponorApp