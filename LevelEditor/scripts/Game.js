// Copyright (C) Riley Gauchier, All Rights Reserved
'user strict';
import WorldController from './WorldController'
import Level from "./level";
export default class  Game {
  constructor() {
    this.lastUpdate = 0;
    this.world = new WorldController();
    this.entityList = []; // a list of GameObjects
    this.currentLevel = new Level();
    this.currentLevel.load()
    .then( levelData => {

        this.currentLevel.parse( levelData );
        this.run();
    });
    //update world viewport
    //update the entityList
  }

  update( deltaTime ) {
        
    this.world.update( deltaTime );
}

render( deltaTime ) {

    this.world.render( deltaTime );
    this.entityList.forEach( entity => {
        entity.render( deltaTime );
    });
}

  run( timestep = 0 ) {

    let deltaTime = timestep - this.lastUpdate;

    this.update( deltaTime );
    this.render( deltaTime );

    window.requestAnimationFrame( timestep => this.run( timestep / 100 ));
}
}
