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
  constructor(canvas){ //retrieve canvas
    //convert Experience into singleton
    if(instance){ //check if it exists
      return instance
    }
    instance = this //save instance

    //global access
    window.experience = this

    //options
    this.canvas = canvas

    //setting
    this.debug = new Debug()
    this.sizes = new Sizes()
    this.time = new Time()
    this.scene = new THREE.Scene() //create scene (not class)
    this.resources = new Resources(sources) //send sources
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

  //destroy scene, stop updating
  destroy(){
    this.sizes.off('resize')
    this.time.off('tick')

    //traverse whole scene
    this.scene.traverse((child)=>{
      if(child instanceof THREE.Mesh){
        child.geometry.dispose()

        for(const key in child.material){
          const value = child.material[key]

          if(value && typeof value.dispose === 'function'){
            value.dispose()
          }
        }
      }
    })

    this.camera.controls.dispose()
    this.renderer.instance.dispose()

    if(this.debug.active){
      this.debug.ui.destroy()
    }
  }
}