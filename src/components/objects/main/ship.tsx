import { useGLTF, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import { JetEngine, Rig, Striker } from '@src/components';

// type GLTFResult = GLTF & {
//     nodes: {
//         Striker: THREE.Mesh;
//     };
//     materials: {
//         ['Texture']: THREE.MeshStandardMaterial;
//     };
// };

export const SpaceShip = ({ isTraveling }: { isTraveling: boolean }) => {
    const scroll = useScroll();

    const spaceship = useRef<THREE.Group>(null!);

    const [boosterThrust, setThrust] = useState(1.0);

    useFrame(() => {
        const r1 = scroll.range(0 / 2, 1 / 2);
        const thrustStrength =
            1.6 + (r1 <= 0.8 ? r1 * 2.4 : r1 * 2.4 - 1 * (r1 - 0.8));
        setThrust(thrustStrength);
    });

    return (
        <Rig isTraveling={isTraveling}>
            <group ref={spaceship} dispose={null}>
                <Striker rotation={[0, Math.PI, 0]} />
                <group>
                    <group
                        position={[1.14, -0.24, 2.8]}
                        scale={[
                            1 + boosterThrust / 10,
                            1 + boosterThrust / 10,
                            boosterThrust,
                        ]}
                    >
                        <JetEngine />
                    </group>
                    <group
                        position={[-1.14, -0.24, 2.8]}
                        scale={[
                            1 + boosterThrust / 10,
                            1 + boosterThrust / 10,
                            boosterThrust,
                        ]}
                    >
                        <JetEngine />
                    </group>
                    <group
                        position={[0, 0.2, 4]}
                        scale={[
                            1 + boosterThrust / 16,
                            1 + boosterThrust / 16,
                            boosterThrust,
                        ]}
                    >
                        <JetEngine />
                    </group>
                </group>
            </group>
        </Rig>
    );
};

useGLTF.preload('/Striker.gltf');
