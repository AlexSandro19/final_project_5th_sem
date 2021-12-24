import * as THREE from '../node_modules/three/build/three.module.js'
import { OrbitControls } from '../node_modules/three/examples/jsm/controls/OrbitControls.js';
import * as dat from '../node_modules/dat.gui/build/dat.gui.module.js';
import { GLTFLoader } from '../node_modules/three/examples/jsm/loaders/GLTFLoader.js';
import { TransformControls } from '../node_modules/three/examples/jsm/controls/TransformControls.js';
import { FlyControls } from '../node_modules/three/examples/jsm/controls/FlyControls.js'
let INTERSECTED;//what intersects with the objects
var objects3D = [] //hold all intersectable objects
var raycaster = new THREE.Raycaster(); // create once ray
var mouse = new THREE.Vector2(); // create once
var camera;
var scene;
var renderer;
let intersects = []
var props = {}; //define methods in GUI
let mainGroup = new THREE.Object3D(); // group of draggable objects
let roomGroup = new THREE.Object3D(); // group of draggable objects
let intersects1 = []//second raycaster items for intersection
const raycaster1 = new THREE.Raycaster()//second raycaster
const sceneMeshes= [] //second raycaster objects to act on
const dir = new THREE.Vector3()
const raycaster2 = new THREE.Raycaster()
const sceneMeshes1= []
let intersects2 = []
//resize
function onResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }

function init() {
    getIntroInfo()
    scene = new THREE.Scene()
    var box = getBox(0.1,0.1,0.1)
    box.position.y = -1
    var gui = new dat.GUI()
    var pointLight = getPointLight(1)
    var pointLight1 = getPointLight(1)
    var pointLight2 = getPointLight(1)
    var pointLight4 = getPointLight(1)
    var pointLight3 = getPointLight(1)
    var pointLight5 = getPointLight(1)
    scene.add(box)
    pointLight.position.y = 100
    pointLight1.position.y = -100
    pointLight2.position.x = 100
    pointLight3.position.x = -100
    pointLight4.position.z = 100
    pointLight5.position.z = -100
    
    window.addEventListener('resize', onResize, false);
    
    props.addGUIObject = ''
    
    //hold our methods in dat.gui
    let addObject = function(src, value){
        loader.load( src, function ( gltf ) {   
        
            gltf.scene.children[2].properties = {different:value}
            scene.add( gltf.scene );
            console.log(gltf.scene)
            console.log(selected)
            console.log(mainGroup)
            mainGroup.add(gltf.scene);
            objects3D.push(mainGroup);
            //sceneMeshes.push(mainGroup)
            gltf.scene.scale.set(1,1,1)
            gltf.scene.position.set(0,2,0)
            console.log(gltf.scene)
            scene.add(mainGroup);
            camera.lookAt(gltf.scene.position)
        }, undefined, function ( error ) {
    
        console.error( error.message );
            
        } );
    }

    var selected = box
    //createSquareRoom(100)
    createSquareRoom(1)
    var guiControls = new function() {
        this.color = box.material.color.getStyle();
        this.x = box.scale.x
        this.y = box.scale.y
        this.z = box.scale.z
        this.rotateLeft = {rotateLeft : function(){
            selected.rotation.y += Math.PI/2
        }}
        this.rotateRight = {rotateRight : function(){
            selected.rotation.y += -Math.PI/2
        }}
        this.selected = {delete: function(){
            removeSelected(selected)
        }}
        this.addBox = {addBox: function(){
            var newBox = getBox(0.2,0.2,0.2)
            newBox.position.y = 1
            objects3D.push(newBox)
            control.attach(newBox)
            scene.add(newBox)
        }}
        this.addSphere = {addSphere: function(){
            var newSphere = getSphere(0.2)
            newSphere.position.y = 1
            objects3D.push(newSphere)
            control.attach(newSphere)
            scene.add(newSphere)
        }}
      };

    var f1 = gui.addFolder('Premade Objects')
    f1
      .addColor(guiControls, "color")
      .listen()
      .onChange(function(e) {
        selected.material.color.setStyle(e);
      });
      f1
      .add(guiControls, "x",0.1,5)
      .listen().name('Scale x')
      .onChange(function(e) {
        selected.scale.x = e;
      });
      f1
      .add(guiControls, "y",0.1,5)
      .listen().name('Scale y')
      .onChange(function(e) {
        selected.scale.y = e;
      });
      f1
      .add(guiControls, "z",0.1,5)
      .listen().name('Scale z')
      .onChange(function(e) {
        selected.scale.z = e;
      });
      f1
      .add(guiControls.selected, "delete")
      .listen()

     
    f1.add(props,'addGUIObject',
    ['doubleDoubleTopKitchen','doubleUpkitchen','firdge','nearBed', 'oilkitchen','openDoubleTopKitchen'])
    .name('Add resizable items')
    .listen()
    .onChange(
        function(newValue) {
        console.log(formatResizableObjectFolderName(newValue))    
        addObject(formatResizableObjectFolderName(newValue),true)
    
    });
    f1.add(props,'addGUIObject',
    ['3 Door Closet','DoubleKitchenCloset','pipe','smallCloset','assets/WashingMachine.glb','assets/ThreeDoorsBedroomCloset.glb'])
    .name('Add standart items')
    .listen()
    .onChange(
        function(newValue) {
        console.log(formatStandartObjectFolderName(newValue))    
        addObject(formatStandartObjectFolderName(newValue),false)
    
    });
    f1.open()

    var f2 = gui.addFolder('Basic Objects')
    var boxF2 = f2.add(guiControls.addBox,'addBox')
    f2.add(guiControls.addSphere,'addSphere')
    var f3 = gui.addFolder('Rotate Objects')
    f3.add(guiControls.rotateLeft,"rotateLeft")
    .listen()
    f3.add(guiControls.rotateRight,"rotateRight")
    .listen()
    //dat.gui section

    scene.add(pointLight)
    scene.add(pointLight1)
    scene.add(pointLight2)
    scene.add(pointLight3)
    scene.add(pointLight4)
    scene.add(pointLight5)
    
    camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight,1,1000)
    camera.position.x = 1
    camera.position.y = 2
    camera.position.z = 1


    
    var loader = new GLTFLoader()
    renderer = new THREE.WebGLRenderer()

    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor('rgb(120, 120, 120)')
    document.getElementById('webgl').appendChild(renderer.domElement)
   
    
    //addd this to all new objects
    const lineMaterial = new THREE.LineBasicMaterial({
        color: 0x0000ff,
    })
    const points = []
points[0] = new THREE.Vector3(-0.1, 0, 0)
points[1] = new THREE.Vector3(0.1, 0, 0)
let lineGeometry = new THREE.BufferGeometry().setFromPoints(points)
const xLine = new THREE.Line(lineGeometry, lineMaterial)
scene.add(xLine)
points[0] = new THREE.Vector3(0, -0.1, 0)
points[1] = new THREE.Vector3(0, 0.1, 0)
lineGeometry = new THREE.BufferGeometry().setFromPoints(points)
const yLine = new THREE.Line(lineGeometry, lineMaterial)
scene.add(yLine)
points[0] = new THREE.Vector3(0, 0, -0.1)
points[1] = new THREE.Vector3(0, 0, 0.1)
lineGeometry = new THREE.BufferGeometry().setFromPoints(points)
const zLine = new THREE.Line(lineGeometry, lineMaterial)
scene.add(zLine)
    var controls = new OrbitControls(camera, renderer.domElement)
    controls.minDistance = 2;
    controls.maxDistance = 30;
    //controls.addEventListener( 'change', render ) //
    controls.addEventListener('change', function () {
        render()
        /*if(camera.position.y < 0){
            camera.position.y = 5
            
            
        }*/
        xLine.position.copy(controls.target)
        yLine.position.copy(controls.target)
        zLine.position.copy(controls.target)
        raycaster1.set(
            controls.target,
            dir.subVectors(camera.position, controls.target).normalize()
        )
        console.log('controls',controls.target)
            
        intersects1 = raycaster1.intersectObjects(sceneMeshes, true)
        if (intersects1.length > 0) {
            if (
                intersects1[0].distance < controls.target.distanceTo(camera.position)
            ) {
                console.log(controls.target)
                console.log(intersects1)
                console.log(intersects1[0].distance)
                camera.position.copy(intersects1[0].point)
        
            }
        }
    })   
    
        update(controls,control)
        controls.update();
                
                //adds grid to move objects , needs to be on click
            
        var control = new TransformControls( camera, renderer.domElement );
        control.addEventListener( 'change', ()=>{
            render()
            raycaster2.set(selected.position,0,0,0)
        });
            
        control.addEventListener( 'dragging-changed', function ( event ) {
                
            controls.enabled = !event.value;
        } );
                
                          
    scene.add(control)
    document.addEventListener( 'mousemove', onMouseMove );
    document.addEventListener( 'mousedown', onDocumentMouseDown, false );
    
    function onDocumentMouseDown(event){
        mouse.x = ( (event.clientX -renderer.domElement.offsetLeft) / renderer.domElement.width ) * 2 - 1;
        mouse.y = -( (event.clientY - renderer.domElement.offsetTop) / renderer.domElement.height ) * 2 + 1;
        raycaster.setFromCamera(mouse, camera);
        //detectCollisionCubes(plane,box)
        intersects = raycaster.intersectObjects(objects3D, true);
        if(intersects.length > 0 ){
            INTERSECTED = intersects[ 0 ].object;
            console.log(INTERSECTED)
            control.attach(INTERSECTED);
            scene.add(control);
            selected = INTERSECTED
            
            if(selected.properties.different === true){
                console.log('yeeeeeeeeeeeeeeeeeeeeees')
                guiControls.color = selected.material.color.getStyle();
                guiControls.x = selected.scale.x
                guiControls.y = selected.scale.y
                guiControls.z = selected.scale.z
                console.log(selected)
                this.selected = {delete: function(){
                    
                    removeSelected(selected)
                }}
                this.rotateLeft = {rotateLeft : function(){
                    selected.rotation.y += Math.PI/2
                }}
                this.rotateLeft = {rotateLeft : function(){
                    selected.rotation.y += -Math.PI/2
                }}
            }else if(selected.properties.different === false){
                console.log('notDifferebt')
                console.log(selected.properties.different)
            }else{
                console.log("nothing")
            }
            
            update(controls, control)
        } else{
            control.detach();
            scene.remove(control);
            console.log('dont')
        }  
    }

    function onMouseMove( event ) {
    
        event.preventDefault();
        //if(objects3D.length > 0){
          //  colidable(mainGroup[0],objects3D)
        //}
        /*
        mouse.x = ( (event.clientX -renderer.domElement.offsetLeft) / renderer.domElement.width ) * 2 - 1;
        mouse.y = -( (event.clientY - renderer.domElement.offsetTop) / renderer.domElement.height ) * 2 + 1;
        raycaster.setFromCamera(mouse, camera);
        //detectCollisionCubes(plane,box)
        intersects = raycaster.intersectObjects(objects3D, true);
        if(intersects.length > 0 ){
            INTERSECTED = intersects[ 0 ].object;
            console.log(INTERSECTED)
            control.attach(INTERSECTED);
            scene.add(control);
            selected = INTERSECTED
            
            if(selected.properties.different === true){
                console.log('yeeeeeeeeeeeeeeeeeeeeees')
                guiControls.color = selected.material.color.getStyle();
                guiControls.x = selected.scale.x
                guiControls.y = selected.scale.y
                guiControls.z = selected.scale.z
                console.log(selected)
                this.selected = {delete: function(){
                    
                    removeSelected(selected)
                }}
                this.rotateLeft = {rotateLeft : function(){
                    selected.rotation.y += Math.PI/2
                }}
                this.rotateLeft = {rotateLeft : function(){
                    selected.rotation.y += -Math.PI/2
                }}
            }else if(selected.properties.different === false){
                console.log('notDifferebt')
                console.log(selected.properties.different)
            }else{
                console.log("nothing")
            }
            
            update(controls, control)
        } else{
            control.detach();
            scene.remove(control);
            console.log('dont')
        }  
        */
    }
    var sampleText = new function() {
        this.message = "Welcome";
        this.lenght = 10;
        this.width = 10;
        this.height = 10;
        this.createRoom = {createRoom : function(x,y,z){
            if(x === y === z){
                createSquareRoom(x)
            }else{
                createDynamicRoom(x,y,z)
            }
        }}
    };
    function getIntroInfo(){
        
        var introGui = new dat.GUI()
        dat.GUI.toggleHide()
    }
}


// add into object pool

       
function render() {
    
	renderer.render( scene, camera );
    
}
let v = new THREE.Vector3();
// iterate over source elements        
for (let i = 0; i < sceneMeshes.length; i += 1) {
    let geometry = sceneMeshes[i].geometry;
    // if there's any with BufferGeometry generate vertices based on 
    if ( geometry instanceof THREE.BufferGeometry ) {
        const vertices = [];
        const positions = geometry.attributes.position.array;
                
        console.log('CollisionDetector BufferGeometry detected', geometry);

        for ( let k = 0; k < positions.length; k += 3 ) {
            v.set(positions[ k ],positions[ k + 1 ], positions[ k + 2 ]);
            vertices.push(v.clone()); // <---- Creates a copy!
        }
    }
}
function getBox(w,h,d){
    var geometry = new THREE.BoxGeometry(w ,h ,d)
    var material = new THREE.MeshBasicMaterial({
        color: 'rgb(120, 120, 120)'
    })

    return new THREE.Mesh(
        geometry,
        material
    )
     
}
function removeSelected(obj){
    for(let i in mainGroup.children){
        for(let j in mainGroup.children[i].children){
            if(mainGroup.children[i].children[j] === obj){
                mainGroup.remove(mainGroup.children[i])
                scene.remove(mainGroup.children[i])
            }
        }
    }
}


function getPlane(size1,size2){
    var geometry = new THREE.PlaneGeometry(size1,size2)
    var material = new THREE.MeshPhongMaterial({
        color: 'rgb(120, 120 ,120)',
        side: THREE.DoubleSide
    })

    var plane = new THREE.Mesh(
        geometry,
        material
    )
    return plane
}

function getSphere(size){
    var geometry = new THREE.SphereGeometry(size,24,24)
    var material = new THREE.MeshBasicMaterial({
        color: 'rgb(255, 255 ,255)'
    })

    return new THREE.Mesh(
        geometry,
        material
    )
}

function getPointLight(intensity){
    var light = new THREE.PointLight(0xffffff, intensity)

    return light
}


function detectCollisionCubes(object1, object2){
    object1.geometry.computeBoundingBox(); //not needed if its already calculated
    object2.geometry.computeBoundingBox();
    object1.updateMatrixWorld();
    object2.updateMatrixWorld();
    
    var box1 = object1.geometry.boundingBox.clone();
    box1.applyMatrix4(object1.matrixWorld);
  
    var box2 = object2.geometry.boundingBox.clone();
    box2.applyMatrix4(object2.matrixWorld);
    return box1.intersectsBox(box2);
}

function colidable(Object,array){
    for (var vertexIndex = 0; vertexIndex < Object.geometry.vertices.length; vertexIndex++)
{       
    var localVertex = Object.geometry.vertices[vertexIndex].clone();
    var globalVertex = Object.matrix.multiplyVector3(localVertex);
    var directionVector = globalVertex.subSelf( Object.position );

    var ray = new THREE.Ray( Object.position, directionVector.clone().normalize() );
    var collisionResults = ray.intersectObjects( array );
    if ( collisionResults.length > 0 && collisionResults[0].distance < directionVector.length() ) 
    {
        // a collision occurred... do something...
        console.log("workksk")
    }
}
}
//x-lenght, y-height, z - width
function createSquareRoom(x){
    let firstWall = getPlane(x,x)
    let secondWall = getPlane(x,x)
    let thirdWall = getPlane(x,x)
    firstWall.rotation.x += Math.PI/2
    secondWall.rotation.y = Math.PI/2
    secondWall.position.x = x/2
    thirdWall.position.z = x/2
    secondWall.position.y = x/2
    thirdWall.position.y = x/2
    scene.add(firstWall)
    scene.add(secondWall)
    scene.add(thirdWall)
    scene.add( new THREE.GridHelper( x, x*10, 0x888888, 0x444444 ) );
}

function createDynamicRoom(l,w,h){
    let firstWall = getPlane(l,w)
    let secondWall = getPlane(l,h)
    let thirdWall = getPlane(w,h)
    firstWall.rotation.x = Math.PI/2
    thirdWall.rotation.y = Math.PI/2
    secondWall.position.z = w/2
    secondWall.position.y = h/2
    thirdWall.position.x = l/2
    thirdWall.position.y = h/2
    roomGroup.add(firstWall)   
    roomGroup.add(secondWall)   
    roomGroup.add(thirdWall)   
    scene.add(roomGroup)
    roomGroup.position.set(0,0,0)
    
    sceneMeshes1.push(roomGroup)
}



function formatResizableObjectFolderName(objectName){
    
        objectName = objectName.replace(/ /g,"")
        return "assets/resizable/" + objectName + ".glb"
}
function formatStandartObjectFolderName(objectName){
    
    objectName = objectName.replace(/ /g,"")
    return "assets/standart/" + objectName + ".glb"
}

function update(controls,control){
    renderer.render(
        scene,
        camera
    )
    requestAnimationFrame(()=>{
        update(controls,control)
        
    })
}

init()