// Copyright (C) Riley Gauchier, All Rights Reserved
'user strict';
import WorldController from './WorldController'
export default class  Game {
  constructor() {
    this.world = new WorldController();
    this.entityList = []; // a list of GameObjects

    //load a level
    //update world viewport
    //update the entityList
  }

  update(deltaTime){
    //this is where the physics runs
    this.world.update();
    for(let entity of this.entityList){
      entity.update();
    }
  }

  render ( deltaTime = 0){
    //this is where we change all the stuff in the DOM
    this.world.render();
    for(let entity of this.entityList){
      entity.render();
    }
  }
  run( deltaTime = 0){
    this.update( deltaTime );
    this.render( deltaTime );

    window.requestAnimationFrame( ( => { this.run()}))
  }
}
