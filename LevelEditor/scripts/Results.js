// Copyright (C) Riley Gauchier, All Rights Reserved
'use strict';

export default class  Result {
  constructor( error = -1, userid = "test_user", name = "thing", type = "level", payload = "" ) {
    this.__private__ ={
      userid,
      name,
      type,
      payload,
      error,
    }
  }

  serialize(){
    return JSON.stringify( this.__private__ );
  }
}
