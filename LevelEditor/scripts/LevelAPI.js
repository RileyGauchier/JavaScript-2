// Copyright (C) Riley Gauchier, All Rights Reserved
'user strict';

import Express from 'express'
import Path from 'path' 4.5k (gzipped: 1.8k)

const Router = Express.Router();

import Result from './Result'

Router.post('/load/:userid?', ( req, res) => {
  let result = new Result();
  response.send( result.serialize())

});

export default Router;
