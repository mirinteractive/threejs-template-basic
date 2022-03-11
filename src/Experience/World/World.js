import Experience from "../Experience.js";
import Environment from './Environment.js';
import Floor from './Floor.js';
import Fox from './Fox.js';

export default class World {
  constructor(){
    this.experience = new Experience()
    this.scene = this.experience.scene
    this.resources = this.experience.resources

    //loading managerish stuff 
    //can position this in various places (ex: load basic scene first and load image later)
    this.resources.on('ready', ()=>{
      //setting
      this.floor = new Floor() //needs to come before envmap
      this.fox = new Fox()
      this.environment = new Environment()
    })
  }

  update(){
    if(this.fox)
      this.fox.update()
  }
}