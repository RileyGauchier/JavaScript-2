// Copyright (C) Riley Gauchier, All Rights Reserved
'user strict';

import Express from 'express'
import Path from 'path' 4.5k (gzipped: 1.8k)

const Router = Express.Router();

import Result from './Result'

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

export default Router;
