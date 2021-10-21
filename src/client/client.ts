import * as THREE from 'three'
import * as environment from './environment'
import * as dat from 'three/examples/jsm/libs/dat.gui.module'

// static folder location
// 'static/....'

const scene = new THREE.Scene()
const sizes = { width: window.innerWidth, height: window.innerHeight}

scene.background = new THREE.Color('#8b9dc3')

const renderer = new THREE.WebGLRenderer()
renderer.setSize(sizes.width, sizes.height)
document.body.appendChild(renderer.domElement)

const camera = new THREE.PerspectiveCamera(
    75,
    sizes.width / sizes.height,
    0.1,
    1000
)
camera.position.set(0,1,0)

window.addEventListener('resize', onWindowResize, false)
function onWindowResize() {
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    renderer.setSize(sizes.width, sizes.height)
    render()
}

const gui = new dat.GUI()
const cameraFolder = gui.addFolder('Camera')
cameraFolder.add(camera.position, 'z', 0, 10)
cameraFolder.open()

environment.base.map(x => {scene.add(x)})
environment.floor.map(x => {scene.add(x)})

function animate() {
    requestAnimationFrame(animate)
    render()
}

function render() {
    renderer.render(scene, camera)
}

animate()