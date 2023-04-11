import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import Sphere from './Sphere'
import Floor from './Floor'
import { useRef } from 'react'
import { useHelper } from '@react-three/drei'
import { DirectionalLightHelper, HemisphereLightHelper, LightShadow, PointLightHelper, RectAreaLight, SpotLightHelper } from 'three';


export default function Experience() {
    const directionalLightRef = useRef()
    const hemisphereLightRef = useRef()
    const pointLightRef = useRef()
    const rectAreaLightRef = useRef()
    const spotLightRef = useRef()

    useHelper(directionalLightRef, DirectionalLightHelper, 1)
    useHelper(hemisphereLightRef, HemisphereLightHelper, 2)
    useHelper(pointLightRef, PointLightHelper, 1)
    useHelper(rectAreaLightRef, RectAreaLight, 1)
    useHelper(spotLightRef, SpotLightHelper, 1)

    return <>
        <Perf position="top-left" />
        <OrbitControls makeDefault />

        {/* <hemisphereLight ref={hemisphereLightRef} intensity={ 1.5 } castShadow  position={[1,6 , 1]}/> */}
        <pointLight ref={pointLightRef} intensity={ 1.5 } castShadow  position={[10, 2, 10]}  />
        {/* <rectAreaLight ref={rectAreaLightRef} intensity={ 1.5 } castShadow  position={[15, 20, -10]}/>  */}
        {/* <spotLight ref={spotLightRef} intensity={ 1.5 } castShadow  position={[-10, 15, 10]}/> */}
        {/* <directionalLight directionalLight ref={directionalLightRef} intensity={ 1.5 } castShadow   position={[-3, 2, -2]}   /> */}
        <ambientLight intensity={0.5} />
        <Sphere/>
        <Floor/>
    </>
}