import { useTexture } from "@react-three/drei";
import { DoubleSide } from "three";

export default function Floor() {
    const PATH = "/static/textures/floor/"
    const props = useTexture(
        {
        map: PATH + 'color.jpg',
        displacementMap: PATH + 'height.jpg',
        normalMap: PATH + 'normal.jpg',
        roughnessMap: PATH + 'roughness.jpg',
        aoMap: PATH + 'ao.jpg'
        }
    )
    return (
        <mesh receiveShadow position-y={ -3.8 } rotation-x={ - Math.PI * 0.5 } scale={ 3.5 } >
            <planeGeometry args={[50, 16, 10]}/>
            <meshStandardMaterial {...props} side={DoubleSide}/>
        </mesh>
    )
}