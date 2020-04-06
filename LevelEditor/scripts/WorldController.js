// Copyright (C) Riley Gauchier, All Rights Reserved
'user strict';

import Physics from './lib/Physics
'
export default class  WorldController {
  constructor() {
        let gravity = new Physics.Vec2( 0, Physics.GRAVITY);

    this.$view = $('#game-area');
    this.model = Physics.world( gravity );
    this.createBoundaries();
    this.addListener();
  }

  addListener(){}

  createBoundaries(){
    //Rigid body defn

    //Fixture defn

    //container bodies(static)
    let width = World.size;

    let leftSideWall = this.createWall( aBody, aFixture, boundingBox )
    let rightSideWall = this.createWall( aBody, aFixture, boundingBox )
    let topSideWall = this.createWall( aBody, aFixture, boundingBox )
    let bottomSideWall = this.createWall( aBody, aFixture, boundingBox )
  }

  createWall( aBody, aFixture, boundingBox ){

  }

  update(){}

  render(){}
}
