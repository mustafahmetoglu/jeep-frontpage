/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 jeep.glb 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useThree } from '@react-three/fiber'

export function Model(props) {
  const threeObj = useThree()
  document.threeObj = threeObj
  const { nodes, materials } = useGLTF('/jeep.glb')
  return (
    <group {...props} dispose={null} position={[0,-1.4,0]} scale={2} >
      <mesh geometry={nodes.JEEP_COMPASS_2021054.geometry} material={materials['00 - DARK GLASS']} position={[0, 0.661, 0]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={0.008} />
      <mesh geometry={nodes.JEEP_COMPASS_2021000.geometry} name='carBody' material={materials['00 - BODY']} position={[0, 0.661, 0]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={0.008} />
      <mesh geometry={nodes.JEEP_COMPASS_2021001.geometry} material={materials['00 - RIMS GOLD']} position={[0, 0.661, 0]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={0.008} />
      <mesh geometry={nodes.JEEP_COMPASS_2021002.geometry} material={materials['00 - CHROME']} position={[0, 0.661, 0]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={0.008} />
      <mesh geometry={nodes.JEEP_COMPASS_2021003.geometry} material={materials['00 - WHITE GLOSSY']} position={[0, 0.661, 0]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={0.008} />
      <mesh geometry={nodes.JEEP_COMPASS_2021004.geometry} material={materials['00 - TYRE']} position={[0, 0.661, 0]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={0.008} />
      <mesh geometry={nodes.JEEP_COMPASS_2021005.geometry} material={materials['00 - PLATE HOLDER']} position={[0, 0.661, 0]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={0.008} />
      <mesh geometry={nodes.JEEP_COMPASS_2021006.geometry} material={materials['00 - RIMS']} position={[0, 0.661, 0]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={0.008} />
      <mesh geometry={nodes.JEEP_COMPASS_2021007.geometry} material={materials['00 - PLASTIC BLACK']} position={[0, 0.661, 0]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={0.008} />
      <mesh geometry={nodes.JEEP_COMPASS_2021008.geometry} material={materials['00 - RED GLOSSY']} position={[0, 0.661, 0]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={0.008} />
      <mesh geometry={nodes.JEEP_COMPASS_2021009.geometry} material={materials['00 - DARK SILVER GLOSSY']} position={[0, 0.661, 0]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={0.008} />
      <mesh geometry={nodes.JEEP_COMPASS_2021010.geometry} material={materials['00 - RED GLASS']} position={[0, 0.661, 0]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={0.008} />
      <mesh geometry={nodes.JEEP_COMPASS_2021011.geometry} material={materials['00 - CLEAR GLASS']} position={[0, 0.661, 0]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={0.008} />
      <mesh geometry={nodes.JEEP_COMPASS_2021012.geometry} material={materials['00 - WINDOW']} position={[0, 0.661, 0]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={0.008} />
      <mesh geometry={nodes.JEEP_COMPASS_2021013.geometry} material={materials['00 - BLACK GLOSSY']} position={[0, 0.661, 0]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={0.008} />
    </group>
  )
}

useGLTF.preload('/jeep.glb')
