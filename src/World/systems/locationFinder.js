import * as THREE from 'https://unpkg.com/three@0.127.0/build/three.module.js';


// function to create marker
function createMarker(){
    const geometry = new THREE.SphereGeometry(5, 32, 32);

    const material = new THREE.MeshStandardMaterial({
        color : 'red'
    });

    const mesh = new THREE.Mesh(geometry, material);

    return mesh;
}


// function to find positon on model
function findPosition(lat, lng){
    const R = 200;
    var phi = (90 - lat) * Math.PI / 180;
    var theta = (180 + lng) * Math.PI / 180;

    const x = -R * Math.sin(phi) * Math.cos(theta);
    const y = R * Math.cos(phi);
    const z = R * Math.sin(phi) * Math.sin(theta);

    return {x:x, y:y, z:z};

}

function markLocation(lat, lng){
    // creating marker
    const marker = createMarker();

    // finding position
    const position = findPosition(lat, lng);
    // console.log(position);

    // setting marker position
    marker.position.x = position.x;
    marker.position.y = position.y;
    marker.position.z = position.z;

    return marker;
}

export { markLocation };