import './style.css'
import * as THREE from 'three'
import * as environment from './environment.js'

const canvas = document.querySelector('canvas.webgl')
const scene = new THREE.Scene()
const sizes = { width: window.innerWidth, height: window.innerHeight}
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true
})

window.addEventListener('resize', () => {
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

environment.floor.map(x => {scene.add(x)})

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.set(0, 1, 0)
scene.add(camera) 

const tick = () =>
{
    renderer.render(scene, camera)

    window.requestAnimationFrame(tick)
}

tick()


