import * as THREE from 'three'
import Experience from "../Experience";
import sampleVertexShader from '../../shaders/sample/vertex.glsl'
import sampleFragmentShader from '../../shaders/sample/fragment.glsl'

export default class SampleFloor {
  constructor(){
    this.experience = new Experience()
    this.scene = this.experience.scene
    
    this.setGeometry()
    this.setMaterial()
    this.setMesh()
  }

  setGeometry(){
    this.geometry = new THREE.PlaneGeometry(10,10)
  }

  setMaterial(){
    this.material = new THREE.RawShaderMaterial({
      vertexShader:sampleVertexShader,
      fragmentShader:sampleFragmentShader,
      side: THREE.DoubleSide
    })
  }

  setMesh(){
    this.mesh = new THREE.Mesh(this.geometry, this.material)
    this.mesh.rotation.x = -Math.PI*0.5
    this.mesh.position.set(1,-2,-1)
    this.scene.add(this.mesh)
  }
}