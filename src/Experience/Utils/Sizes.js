import EventEmitter from "./EventEmitter.js"

export default class Sizes extends EventEmitter {
  constructor(){
    super() //overwrite EventEmitter constructor

    //settings
    this.width = window.innerWidth
    this.height = window.innerHeight
    this.pixelRatio = Math.min(window.devicePixelRatio, 2)

    //resize
    window.addEventListener('resize', ()=>{ //listen native event
      this.width = window.innerWidth
      this.height = window.innerHeight
      this.pixelRatio = Math.min(window.devicePixelRatio, 2)

      this.trigger('resize')
    })
  }
}