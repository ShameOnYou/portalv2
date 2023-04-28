import { Float } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function FloatingRocks() {
	const rock1 = useLoader(GLTFLoader, "./floating_rock_1.glb");
	const rock2 = useLoader(GLTFLoader, "./floating_rock_2.glb");
	const rock3 = useLoader(GLTFLoader, "./floating_rock_3.glb");

	return (
		<>
			<Float
				speed={1.5}
				rotationIntensity={0.6}
				floatIntensity={0}
				position={[-20.5, -7, -19]}
				floatingRange={[-7, -1]}
			>
				<primitive object={rock2.scene} />
			</Float>
			<Float
				speed={1.5}
				rotationIntensity={0.6}
				floatIntensity={0}
				position={[-5, 10, -33]}
				floatingRange={[10, 20]}
			>
				<primitive object={rock1.scene} />
			</Float>
			<Float
				speed={1.5}
				rotationIntensity={0.6}
				floatIntensity={0}
				position={[20, 3.5, -9]}
				floatingRange={[3.5, 10]}
			>
				<primitive object={rock3.scene} />
			</Float>
		</>
	);
}
