import * as THREE from 'three'
import Experience from "../Experience.js";

export default class TestScene {
  constructor(){
    this.experience = new Experience()
    this.scene = this.experience.scene

    const testMesh = new THREE.Mesh(
      new THREE.BoxGeometry(1,1,1),
      new THREE.MeshStandardMaterial()
    )
    testMesh.castShadow = true
    this.scene.add(testMesh)

    const testPlane = new THREE.Mesh(
      new THREE.PlaneGeometry(10, 10),
      new THREE.MeshStandardMaterial()
    )
    testPlane.rotation.set(-Math.PI*0.5, 0, 0)
    testPlane.receiveShadow = true
    this.scene.add(testPlane)
  }
}