import * as THREE from 'three'
import Sizes from "./Utils/Sizes.js";
import Time from "./Utils/Time.js";
import Camera from './Camera.js';
import Renderer from './Renderer.js';
import World from './World/World.js';
import Resources from './Utils/Resources.js';
import Debug from './Utils/Debug.js';
import sources from './sources.js';

//convert Experience into singleton
let instance = null

export default class Experience {
  constructor(canvas){
    if(instance){ 
      return instance
    }
    instance = this 

    //global access
    window.experience = this

    //options
    this.canvas = canvas

    //setting
    this.debug = new Debug()
    this.sizes = new Sizes()
    this.time = new Time()
    this.scene = new THREE.Scene()
    this.resources = new Resources(sources)
    this.camera = new Camera()
    this.renderer = new Renderer()
    this.world = new World()

    //call
    this.sizes.on('resize', ()=>{
      this.resize()
    })

    this.time.on('tick', ()=>{
      this.update()
    })

    this.scene.background = new THREE.Color( '#000000' );
  }

  resize(){
    this.camera.resize()
    this.renderer.resize()
  }

  //animate
  update(){
    this.camera.update()
    this.world.update()

    this.renderer.update()
  }
}