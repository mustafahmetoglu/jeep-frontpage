import { CameraControls, Environment, OrbitControls, ScrollControls, SpotLight } from "@react-three/drei"
import { useFrame, useThree } from "@react-three/fiber"
import { forwardRef,useImperativeHandle, useEffect, useRef, useState } from "react"
import { DEG2RAD } from "three/src/math/MathUtils"
import { Model } from "./Jeep"
import { easeQuadOut } from "d3-ease"
import { ModelWithStand } from "./MotorcycleModelWithStand"
import { DirectionalLight } from "three"


export const Experience = forwardRef((props, ref) => {
    const threeObj = useThree()
    const cameraRef = useRef()
    const [selectColorSelected,  setSelectColorSelected ] = useState(false)

    // const {intensity } = useControls

    document.threeIns = threeObj
    document.cameraIns = cameraRef
    useEffect(() => {
        // cameraRef.current.zoomTo(2,true)
        // setZoomed(true)

        cameraRef.current.setPolarAngle(80*DEG2RAD)        
        cameraRef.current.autoRotate = true
        cameraRef.current.autoRotateSpeed  =0.4

    } , [])

    useImperativeHandle(ref, () => ({
        toggleColorState() {
            if(selectColorSelected == false) {
                console.log('set state color select');
                cameraRef.current.autoRotate = false
                cameraRef.current.setPolarAngle(0*DEG2RAD)
                cameraRef.current.setAzimuthalAngle(50*DEG2RAD)
                setSelectColorSelected(true)
            }
            else {
                cameraRef.current.setPolarAngle(80*DEG2RAD)        
                cameraRef.current.autoRotate = true
                cameraRef.current.autoRotateSpeed  =0.4
                cameraRef.current.setAzimuthalAngle(0*DEG2RAD)
                setSelectColorSelected(false)
            }
        },
      }));

    return ( 
        <>
        <directionalLight  castShadow intensity={5}  />
        {/* <pointLight position={[10,10,10]}  power={99999} intensity={20} /> */}
        {/* <Environment blur={30} background={false} preset="sunset" /> */}
        {/* <CameraControls ref={cameraRef} maxPolarAngle={95*DEG2RAD} minPolarAngle={50*DEG2RAD} zoom0={0} smoothTime={99999999999} maxDistance={10} /> */}
        {/* <directionalLight castShadow intensity={10}  /> */}
        <ScrollControls />
        {/* <SpotLight position={[0,20,0]} /> */}
        {/* <CameraControls   maxPolarAngle={95*DEG2RAD} minPolarAngle={50*DEG2RAD} /> */}
        <OrbitControls ref={cameraRef} position0={[10,0,0]} maxPolarAngle={95*DEG2RAD} enableZoom={false} />
            
        {/* <Model/> */}
        <Model />
        </>
    )
}
)