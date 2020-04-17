// Copyright (C) Riley Gauchier, All Rights Reserved
'user strict';

import Express from 'express'
import Path from 'path' 

const fs = require('fs'); 

const Router = Express.Router();

import Result from './scripts/Results.js'
import { request } from 'http';

Router.post('/load/:userid?', ( req, res) => {
  let params = {...req.params, ...req.query, ...req.body}
  let result = new Result( 201, params.userid);
  response.send( result.serialize())

});

Router.post('/save/:userid?', (req, res) =>{
  let params = {...req.params, ...req.query, ...req.body}
  let result = new Result( 201, params.userid);
  res.send
})

// this.api.post('/api', ( request, response ) => {
//   // handle edges from form

//   let params = request.params; // data attached in the url /api/:name/:id
//   let query = request.query;   // data attached as a PHP param String
//   let data = request.body;     // data attached as JSON data


//   let result = this.handleActionQuery( request.query.action, request.query, request.body );
//   let JSONString = JSON.stringify( result );
//   response.send( JSONString )
// });
//Error 1 means the data couldn't be readed

Router.post('/get_level_list/:userid?', ( request, response) =>{
  
  let params = { ...request.params, ...request.query, ...request.body }

    let files = [];
    fs.readdir ( `./gamecontent/${params.userid}`, ( err, fileData ) => {

      if( err ) {
          
          response.send( { error: 1 } )
      }
      else {

        files = fileData;
        
        let levels = [];

        for ( let i = 0; i < files.length; i++ ) {

            let file = files[i];

            levels.push( { name: file.slice(0, 5), fileName: file } );
        }

        let result = { payload: levels, error: 0 };
        response.send( JSON.stringify( result ) );
      }
    });
});

Router.post('/get_object_list/:userid?', ( request, response) =>{
  
  let params = { ...request.params, ...request.query, ...request.body }

    let files = [];
    fs.readdir ( `./gamecontent/${params.userid}`, ( err, fileData ) => {

      if( err ) {
          
          response.send( { error: 1 } )
      }
      else {

        files = fileData;
        
        let objects = [];

        for ( let i = 0; i < files.length; i++ ) {

            let file = files[i];

            objects.push( { name: file.slice(0, 5), fileName: file } );
        }

        let result = { payload: objects, error: 0 };
        response.send( JSON.stringify( result ) );
      }
    });
});

Router.post('/save/:userid?', (request, response) => {

  let params = {...request.params, ...request.query, ...request.body  };
  
  //params.payload MUST be stringified before
  fs.writeFile( `./gamecontent/${params.userid}/${params.name}.json` , params.payload, err => {
    //TODO: Get bytes written
    response.send( JSON.stringify( { name: params.name, bytes: params.payload.length, error:0} ) );
  });
});

// "userid": "valid vfs username", // eg pg15student
// "name": "filename", // name of entity, no spaces, no extension
// "type": "object" | "level", // one of these two key strings
// "payload": "JSONString" // actual data in JSON format 

// this.api.post('/api/:action', ( request, response ) => {
//   // handle edges from form
//   let result = this.handleActionQuery( request.params.action, request.query, request.body );
//   let JSONString = JSON.stringify( result );
//   response.send( JSONString )
// });

// this.api.post('/api/save', ( request, response ) => {
//   // handle edges from form
//   let result = this.handleActionQuery('save', request.query, request.body );

//   // Lets get some data to the client
//   // TODO: something with the form we got sent, like save the content as a file
//   let JSONString = JSON.stringify( result );
//   response.send( JSONString )
// });


export default Router;
