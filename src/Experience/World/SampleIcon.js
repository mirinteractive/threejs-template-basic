import * as THREE from 'three'
import Experience from "../Experience";

export default class SampleIcon {
  constructor(){
    this.experience = new Experience()
    this.scene = this.experience.scene
    this.resources = this.experience.resources

    this.resource = this.resources.items.sampleIcon

    this.setModel()
  }

  setModel(){
    this.model = this.resource.scene
    this.model.position.set(-4,0,0)
    this.model.scale.set(100,100,100)
    this.scene.add(this.model)

    this.model.traverse((child)=>{
      if(child instanceof THREE.Mesh){
        child.castShadow = true
      }
    })
  }
}