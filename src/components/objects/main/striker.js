/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export const Striker = (props) => {
    const group = useRef();
    const { nodes, materials } = useGLTF('/Striker.gltf');
    return (
        <group ref={group} {...props} dispose={null}>
            <mesh
                geometry={nodes.Striker.geometry}
                material={materials.Texture}
            />
        </group>
    );
};

useGLTF.preload('/Striker.gltf');