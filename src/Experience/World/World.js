import Experience from "../Experience.js";
import Environment from './Environment.js';
import SampleFloor from "./SampleFloor.js";
import SampleIcon from "./SampleIcon.js";

export default class World {
  constructor(){
    this.experience = new Experience()
    this.scene = this.experience.scene
    this.resources = this.experience.resources

    this.resources.on('ready', ()=>{
      this.sampleIcon = new SampleIcon()
      this.sampleFloor = new SampleFloor()
      this.environment = new Environment()
    })
  }

  update(){
   
  }
}