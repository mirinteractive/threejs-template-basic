import * as THREE from 'three'
import Experience from "../Experience.js";
import Environment from './Environment.js';
import TestScene from './TestScene.js';

export default class World {
  constructor(){
    this.experience = new Experience()
    this.scene = this.experience.scene

    this.testScene = new TestScene()
    this.environment = new Environment()
  }
}