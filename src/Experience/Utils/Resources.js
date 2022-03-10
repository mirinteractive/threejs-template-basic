import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import EventEmitter from "./EventEmitter.js";

export default class Resources extends EventEmitter{
  constructor(sources){
    super()

    //options
    this.sources = sources

    //setting
    this.items = {}
    this.toLoad = this.sources.length //how many sources loaded
    this.loaded = 0

    //loaders
    this.setLoaders()
    this.startLoading()
  }

  setLoaders(){
    this.loaders = {}
    this.loaders.gltfLoader = new GLTFLoader()
    this.loaders.textureLoader = new THREE.TextureLoader()
    this.loaders.cubeTextureLoader = new THREE.CubeTextureLoader()
  }

  startLoading(){
    //load each source
    for(const source of this.sources){
      if(source.type==='gltfModel'){
        this.loaders.gltfLoader.load(
          source.path, (file)=>{
            this.sourceLoaded(source, file);
          }
        )
      }
      else if(source.type==='texture'){
        this.loaders.textureLoader.load(
          source.path, (file)=>{
            this.sourceLoaded(source, file);
          }
        )
      }
      else if(source.type==='cubeTexture'){
        this.loaders.cubeTextureLoader.load(
          source.path, (file)=>{
            this.sourceLoaded(source, file);
          }
        )
      }
    }
  }

  sourceLoaded(source, file){
    this.items[source.name] = file
    this.loaded++

    if(this.loaded===this.toLoad){
      this.trigger('ready')
    }
  }

}