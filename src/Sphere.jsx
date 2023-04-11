import { useTexture } from "@react-three/drei";
import { DoubleSide } from "three";

export default function Sphere() {
    const PATH = "/static/textures/sphere/"
    const props = useTexture(
        {
        map: PATH + 'color.jpg',
        displacementMap: PATH + 'height.png',
        normalMap: PATH + 'normal.jpg',
        roughnessMap: PATH + 'roughness.jpg',
        aoMap: PATH + 'ao.jpg'
        }
    )
    return (
        <mesh castShadow={true} rotation-y={Math.PI / 12} position-x={-3}>
            <sphereGeometry args={[3, 50, 80]} />
            <meshStandardMaterial {...props} side={DoubleSide}/>
        </mesh>
    )
}