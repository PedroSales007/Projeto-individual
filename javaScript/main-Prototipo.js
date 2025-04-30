// Importar a biblioteca THREE.js
import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
// Permitir a movimentação da câmera
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
// Para importar o arquivo .gltf
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

// Criar a cena
const scene = new THREE.Scene();

// Criar a câmera
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    500
);


let object; // Para armazenar o modelo 3D
let controls; // Para os controles de órbita

let objectToRender = 'porsh_911'; // Nome da pasta do carro

// Carregar o modelo 3D
const loader = new GLTFLoader();

loader.load(
    `../modelos3D/porsh_911/scene.gltf`, 
    function (gltf) {
        object = gltf.scene;
        scene.add(object);
    },
    function (xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% carregando');
    },
    function (error) {
        console.error(error);
    }
);

// Configurar o renderizador
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);

// Adicionar o canvas na página
document.getElementById('container3D').appendChild(renderer.domElement);

// Posicionar a câmera
camera.position.z = objectToRender === "porsh_911" ? 5 : 100;
camera.position.y = objectToRender === "porsh_911" ? 2 : 100;
camera.position.x = objectToRender === "porsh_911" ? 3 : 0;

// Luzes
const topLight = new THREE.DirectionalLight(0xffffff, 1);
topLight.position.set(300, 500, 500);
topLight.castShadow = true;
scene.add(topLight);

const ambientLight = new THREE.AmbientLight(0xdcdcdc, objectToRender === "porsh_911" ? 5 : 1);
scene.add(ambientLight);

// Adicionar o OrbitControls para movimentar a câmera
controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;

// Função de animação
function animate() {
    requestAnimationFrame(animate);

    controls.update(); // Atualizar os controles
    renderer.render(scene, camera);
}

// Começar a animação
animate();
