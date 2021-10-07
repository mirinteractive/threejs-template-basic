import * as THREE from 'three'

const planeZ1 = new THREE.Mesh(new THREE.PlaneGeometry(10, 10), new THREE.MeshBasicMaterial({color: '#dfe3ee'}))
planeZ1.rotation.set(-Math.PI*0.5, 0, 0)

const floor = [planeZ1]

export { floor }