// Copyright (C) 2020 Scott Henshaw, All Rights Reserved
'use strict';

import Express from 'express'
import Path from 'path'
import HTTP from 'http'
import LevelAPI from './LevelAPI'

const PORT = 3000;

class Server {

    constructor() {
        this.api = Express();
        this.api.use( Express.json() )
                .use( Express.urlencoded({ extended: false }))
                .use( Express.static( Path.join( __dirname, '.')))
                .use( '/api', LevelAPI);


        this.api.get('/', ( request, response ) => {
            response.render('index',{ title:'Greatest Form Demo Ever!'})
        });
                
        this.run()
    }

    handleActionQuery( action, query, body ) {

        let result = { error: -1 };
        let command = (action == '' ? body.action : action);
        switch (command) {
            case 'Validate':
                result.error = 0;
                break;

            case 'Submit':
                result.error = 0;
                break;

            default:
                result = { error: -2, ...body }
                break;
        }
        // send the result back as JSON data
        return result
    }

    run() {

        this.api.set('port', PORT );
        this.listener = HTTP.createServer( this.api );
        this.listener.listen( PORT );
        this.listener.on('listening', event => {

            let addr = this.listener.address();
            let bind = typeof addr == `string` ? `pipe ${addr}`: `port ${addr.port}`;

            console.log(`Listneing on ${bind}`)
        });
    }
}

const server = new Server();
