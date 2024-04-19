import { Canvas, useThree } from '@react-three/fiber'
import { Environment, Lightformer, ContactShadows, OrbitControls } from '@react-three/drei'
import { Effects } from './Effects'
// import { Lamborghini } from './Lamborghini'
import { Model } from "./Jeep"
import { extend } from '@react-three/fiber'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import myFont from 'three/examples/fonts/gentilis_regular.typeface.json'
import { useEffect, useImperativeHandle, useRef, useState } from 'react'

extend({ TextGeometry })
export default function App() {
    
    const cameraRef = useRef()
    const [selectColorSelected,  setSelectColorSelected ] = useState(false)


    function mapValue(value, fromMin, fromMax, toMin, toMax) {
        // Ensure the value is within the from range
        value = Math.min(Math.max(value, fromMin), fromMax);
        
        // Calculate the mapped value
        const fromRange = fromMax - fromMin;
        const toRange = toMax - toMin;
        const scaledValue = (value - fromMin) / fromRange;
        const mappedValue = toMin + (scaledValue * toRange);
    
        return mappedValue;
    }


    function changeColor(r,g,b) {

        console.log(document.threeObj.scene.getObjectByName("carBody"))
        console.log(mapValue(r, 0, 255, 0, 1) , 'value')
        console.log(r,g,b)
        document.threeObj.scene.getObjectByName("carBody").material.color.r =  mapValue(r, 0, 255, 0, 1);
        document.threeObj.scene.getObjectByName("carBody").material.color.g =  mapValue(g, 0, 255, 0, 1);
        document.threeObj.scene.getObjectByName("carBody").material.color.b =  mapValue(b, 0, 255, 0, 1);
        // document.threeObj.scene.getObjectByName("carBody").material.color.g = g
        // document.threeObj.scene.getObjectByName("carBody").material.color.b = b
    }
    useEffect(() => {
        console.log(cameraRef.current)
        // setZoomed(true)


    } , [])



        // document.threeObj = threeObj
      document.cameraIns = cameraRef
    return (
        <>
            <div className='absolute z-40 p-20  '  >          
                <h1  className='text-9xl font-bold text-white opacity-60  ' >New Jeep Compass</h1>
                <h1  className='text-5xl font-bold text-white opacity-30 ' >Made for you, made by you.</h1>
            </div>
            <div className='absolute z-40 p-10 mr-10 bottom-10 right-0 rounded-2xl' style={{backgroundColor:'rgba(255,255,255,0.08)'}}  >          
                <h1  className='text-5xl font-bold text-white opacity-60 ' >Select Color</h1>
                <div className='flex flex-row' >
                    <div className='w-32 w- h-32 bottom-1 m-5 rounded' style={{backgroundColor:'#A6925C'}} ></div>
                    <div className='w-32 w- h-32 bottom-1 m-5 rounded  '  onClick={() => {changeColor(10 , 10 ,10)}} style={{backgroundColor:'#141414'}} ></div>
                    <div className='w-32 w- h-32 bottom-1 m-5 rounded'  onClick={() => {changeColor(115 , 0 ,5)}} style={{backgroundColor:'#7c1b1f'}} ></div>
                </div>
            </div>
            <Canvas gl={{ logarithmicDepthBuffer: true, antialias: true }} dpr={[1, 1.5]} camera={{ position: [0, 0, 15], fov: 25 }}>
            <color attach="background" args={['#15151a']} />
            {/* <Lamborghini rotation={[0, Math.PI / 1.5, 0]} scale={0.015} /> */}
            <Model />
            <hemisphereLight intensity={0.5} />
            <ContactShadows resolution={1024} frames={1} position={[0, -1.16, 0]} scale={15} blur={0.5} opacity={1} far={20} />
            <mesh scale={4} position={[0, -1.161,0]} rotation={[-Math.PI / 2, 0, Math.PI / 2.5]}>
                {/* <TextGeometry args={['test', {font, size:5, height: 1}]} /> */}
                <meshStandardMaterial color="white" roughness={0.75} />
            </mesh>
            {/* <mesh scale={4} position={[-3, -1.161, -1]} rotation={[-Math.PI / 2, 0, Math.PI / 2.5]}>
                <ringGeometry args={[0.9, 1, 3, 1]} />
                <meshStandardMaterial color="white" roughness={0.75} />
            </mesh> */}
            {/* We're building a cube-mapped environment declaratively.
                Anything you put in here will be filmed (once) by a cubemap-camera
                and applied to the scenes environment, and optionally background. */}
            <Environment resolution={512}>
                {/* Ceiling */}
                <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, -9]} scale={[10, 1, 1]} />
                <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, -6]} scale={[10, 1, 1]} />
                <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, -3]} scale={[10, 1, 1]} />
                <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 0]} scale={[10, 1, 1]} />
                <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 3]} scale={[10, 1, 1]} />
                <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 6]} scale={[10, 1, 1]} />
                <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 9]} scale={[10, 1, 1]} />
                {/* Sides */}
                <Lightformer intensity={2} rotation-y={Math.PI / 2} position={[-50, 2, 0]} scale={[100, 2, 1]} />
                <Lightformer intensity={2} rotation-y={-Math.PI / 2} position={[50, 2, 0]} scale={[100, 2, 1]} />
                {/* Key */}
                <Lightformer form="ring" color="red" intensity={10} scale={2} position={[10, 5, 10]} onUpdate={(self) => self.lookAt(0, 0, 0)} />
            </Environment>
            <Effects />
            <OrbitControls ref={cameraRef} enablePan={false} enableZoom={true} maxDistance={12} minDistance={12} minPolarAngle={Math.PI / 2.2} maxPolarAngle={Math.PI / 2.2} />
            </Canvas>
        </>
    )
    }
