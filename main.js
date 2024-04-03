import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.querySelector(".container").appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial( {color: "#808080"} );
const cube = new THREE.Mesh(geometry, material);

scene.add(cube);

camera.position.z = 5;

const controls = new OrbitControls( camera, renderer.domElement );


function animate() {
	requestAnimationFrame( animate );
  // controls.update();
	renderer.render( scene, camera );
}
animate();

