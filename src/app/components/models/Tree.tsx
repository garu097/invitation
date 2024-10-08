import { useGLTF } from "@react-three/drei";
import { memo } from "react";

export const Tree = memo((props) => {
  const { nodes, materials } = useGLTF("/models/christmas_tree.glb");
  return (
    <group {...props} dispose={null}>
      <group scale={0.01} position={[0, -1.5, 1.8]} orthographic>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh castShadow receiveShadow geometry={nodes.Cube_globe_white_0.geometry} material={materials.globe_white}>
            <meshBasicMaterial color="#DC143C" />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Cube_light_color_0.geometry} material={materials.light_color}>
            <meshBasicMaterial color="white" />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Cube_twig_0.geometry} material={materials.twig}>
            <meshBasicMaterial color="#478a0b" />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Cube_leaf_0.geometry} material={materials.leaf}>
            <meshBasicMaterial color="#357106" />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Cube_leaf_0_1.geometry} material={materials.leaf}>
            <meshBasicMaterial color="#357106" />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Cube_leaf_0_2.geometry} material={materials.leaf}>
            <meshBasicMaterial color="#357106" />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Cube_leaf_0_3.geometry} material={materials.leaf}>
            <meshBasicMaterial color="#357106" />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Cube_leaf_0_4.geometry} material={materials.leaf}>
            <meshBasicMaterial color="#357106" />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Cube_leaf_0_5.geometry} material={materials.leaf}>
            <meshBasicMaterial color="#357106" />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Cube_leaf_0_6.geometry} material={materials.leaf}>
            <meshBasicMaterial color="#357106" />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Cube_leaf_0_7.geometry} material={materials.leaf}>
            <meshBasicMaterial color="#357106" />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Cube_leaf_0_8.geometry} material={materials.leaf}>
            <meshBasicMaterial color="#357106" />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Cube_leaf_0_9.geometry} material={materials.leaf}>
            <meshBasicMaterial color="#357106" />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Cube_leaf_0_10.geometry} material={materials.leaf}>
            <meshBasicMaterial color="#357106" />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Cube_leaf_0_11.geometry} material={materials.leaf}>
            <meshBasicMaterial color="#357106" />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Cube_leaf_0_12.geometry} material={materials.leaf}>
            <meshBasicMaterial color="#357106" />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Cube_leaf_0_13.geometry} material={materials.leaf}>
            <meshBasicMaterial color="#357106" />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Cube_leaf_0_14.geometry} material={materials.leaf}>
            <meshBasicMaterial color="#357106" />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Cube_globe_red_0.geometry} material={materials.globe_red}>
            <meshPhongMaterial color="#71b637" />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Cube_globe_red_0_1.geometry} material={materials.globe_red}>
            <meshPhongMaterial color="#71b637" />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Cube_globe_red_0_2.geometry} material={materials.globe_red}>
            <meshPhongMaterial color="#71b637" />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Cube_globe_red_0_3.geometry} material={materials.globe_red}>
            <meshPhongMaterial color="#71b637" />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Cube_globe_red_0_4.geometry} material={materials.globe_red}>
            <meshPhongMaterial color="#71b637" />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Cube_globe_red_0_5.geometry} material={materials.globe_red}>
            <meshPhongMaterial color="#71b637" />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Cube_globe_red_0_6.geometry} material={materials.globe_red}>
            <meshPhongMaterial color="#71b637" />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Cube_globe_red_0_7.geometry} material={materials.globe_red}>
            <meshPhongMaterial color="#71b637" />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Cube_globe_red_0_8.geometry} material={materials.globe_red}>
            <meshPhongMaterial color="#71b637" />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Cube_globe_red_0_9.geometry} material={materials.globe_red}>
            <meshPhongMaterial color="#71b637" />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Cube_globe_red_0_10.geometry} material={materials.globe_red}>
            <meshPhongMaterial color="#71b637" />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Cube_globe_red_0_11.geometry} material={materials.globe_red}>
            <meshPhongMaterial color="#71b637" />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Cube_globe_red_0_12.geometry} material={materials.globe_red}>
            <meshPhongMaterial color="#71b637" />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Cube_globe_red_0_13.geometry} material={materials.globe_red}>
            <meshPhongMaterial color="#71b637" />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Cube_globe_red_0_14.geometry} material={materials.globe_red}>
            <meshPhongMaterial color="#71b637" />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Cube_globe_red_0_15.geometry} material={materials.globe_red}>
            <meshPhongMaterial color="#71b637" />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Cube_globe_red_0_16.geometry} material={materials.globe_red}>
            <meshPhongMaterial color="#71b637" />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Cube_globe_red_0_17.geometry} material={materials.globe_red}>
            <meshPhongMaterial color="#71b637" />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Cube_globe_red_0_18.geometry} material={materials.globe_red}>
            <meshPhongMaterial color="#71b637" />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Cube_globe_red_0_19.geometry} material={materials.globe_red}>
            <meshPhongMaterial color="#71b637" />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Cube_globe_red_0_20.geometry} material={materials.globe_red}>
            <meshPhongMaterial color="#71b637" />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Cube_globe_red_0_21.geometry} material={materials.globe_red}>
            <meshPhongMaterial color="#71b637" />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Cube_globe_red_0_22.geometry} material={materials.globe_red}>
            <meshPhongMaterial color="#71b637" />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Cube_globe_red_0_23.geometry} material={materials.globe_red}>
            <meshPhongMaterial color="#71b637" />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Cube_globe_red_0_24.geometry} material={materials.globe_red}>
            <meshPhongMaterial color="#71b637" />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Cube_globe_red_0_25.geometry} material={materials.globe_red}>
            <meshPhongMaterial color="#71b637" />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Cube_globe_red_0_26.geometry} material={materials.globe_red}>
            <meshPhongMaterial color="#71b637" />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Cube_globe_red_0_27.geometry} material={materials.globe_red}>
            <meshPhongMaterial color="#71b637" />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Cube_globe_red_0_28.geometry} material={materials.globe_red}>
            <meshPhongMaterial color="#71b637" />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Cube_globe_red_0_29.geometry} material={materials.globe_red}>
            <meshPhongMaterial color="#71b637" />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Cube_globe_red_0_30.geometry} material={materials.globe_red}>
            <meshPhongMaterial color="#71b637" />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Cube_globe_red_0_31.geometry} material={materials.globe_red}>
            <meshPhongMaterial color="#71b637" />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Cube_globe_red_0_32.geometry} material={materials.globe_red}>
            <meshPhongMaterial color="#71b637" />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Cube_globe_red_0_33.geometry} material={materials.globe_red}>
            <meshPhongMaterial color="#71b637" />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Cube_globe_red_0_34.geometry} material={materials.globe_red}>
            <meshPhongMaterial color="#71b637" />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Cube_globe_red_0_35.geometry} material={materials.globe_red}>
            <meshPhongMaterial color="#71b637" />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Cube_globe_red_0_36.geometry} material={materials.globe_red}>
            <meshPhongMaterial color="#71b637" />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Cube_globe_red_0_37.geometry} material={materials.globe_red}>
            <meshPhongMaterial color="#71b637" />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Cube_globe_red_0_38.geometry} material={materials.globe_red}>
            <meshPhongMaterial color="#71b637" />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Cube_globe_red_0_39.geometry} material={materials.globe_red}>
            <meshPhongMaterial color="#71b637" />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Cube_globe_red_0_40.geometry} material={materials.globe_red}>
            <meshPhongMaterial color="#71b637" />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Cube_globe_red_0_41.geometry} material={materials.globe_red}>
            <meshPhongMaterial color="#71b637" />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Cube_globe_red_0_42.geometry} material={materials.globe_red}>
            <meshPhongMaterial color="#71b637" />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Cube_globe_red_0_43.geometry} material={materials.globe_red}>
            <meshPhongMaterial color="#71b637" />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Cube_globe_red_0_44.geometry} material={materials.globe_red}>
            <meshPhongMaterial color="#71b637" />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Cube_globe_red_0_45.geometry} material={materials.globe_red}>
            <meshPhongMaterial color="#71b637" />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Cube_globe_red_0_46.geometry} material={materials.globe_red}>
            <meshPhongMaterial color="#71b637" />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Cube_globe_red_0_47.geometry} material={materials.globe_red}>
            <meshPhongMaterial color="#71b637" />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Cube_globe_red_0_48.geometry} material={materials.globe_red}>
            <meshPhongMaterial color="#71b637" />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Cube_globe_red_0_49.geometry} material={materials.globe_red}>
            <meshPhongMaterial color="#71b637" />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Cube_globe_red_0_50.geometry} material={materials.globe_red}>
            <meshPhongMaterial color="#71b637" />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Cube_globe_red_0_51.geometry} material={materials.globe_red}>
            <meshPhongMaterial color="#71b637" />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Cube_globe_red_0_52.geometry} material={materials.globe_red}>
            <meshPhongMaterial color="#71b637" />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Cube_globe_red_0_53.geometry} material={materials.globe_red}>
            <meshPhongMaterial color="#71b637" />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Cube_globe_red_0_54.geometry} material={materials.globe_red}>
            <meshPhongMaterial color="#71b637" />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Cube_globe_red_0_55.geometry} material={materials.globe_red}>
            <meshPhongMaterial color="#71b637" />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Cube_globe_red_0_56.geometry} material={materials.globe_red}>
            <meshPhongMaterial color="#71b637" />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Cube_globe_red_0_57.geometry} material={materials.globe_red}>
            <meshPhongMaterial color="#71b637" />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Cube_globe_red_0_58.geometry} material={materials.globe_red}>
            <meshPhongMaterial color="#71b637" />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Cube_globe_red_0_59.geometry} material={materials.globe_red}>
            <meshPhongMaterial color="#71b637" />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Cube_globe_red_0_60.geometry} material={materials.globe_red}>
            <meshPhongMaterial color="#71b637" />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Cube_globe_red_0_61.geometry} material={materials.globe_red}>
            <meshPhongMaterial color="#71b637" />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Cube_globe_red_0_62.geometry} material={materials.globe_red}>
            <meshPhongMaterial color="#71b637" />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Cube_globe_red_0_63.geometry} material={materials.globe_red}>
            <meshPhongMaterial color="#71b637" />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Cube_globe_red_0_64.geometry} material={materials.globe_red}>
            <meshPhongMaterial color="#71b637" />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Cube_globe_red_0_65.geometry} material={materials.globe_red}>
            <meshPhongMaterial color="#71b637" />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Cube_globe_red_0_66.geometry} material={materials.globe_red}>
            <meshPhongMaterial color="#71b637" />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Cube_globe_red_0_67.geometry} material={materials.globe_red}>
            <meshPhongMaterial color="#71b637" />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Cube_globe_red_0_68.geometry} material={materials.globe_red}>
            <meshPhongMaterial color="#71b637" />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Cube_globe_red_0_69.geometry} material={materials.globe_red}>
            <meshPhongMaterial color="#71b637" />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Cube_globe_red_0_70.geometry} material={materials.globe_red}>
            <meshPhongMaterial color="#71b637" />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Cube_globe_red_0_71.geometry} material={materials.globe_red}>
            <meshPhongMaterial color="#71b637" />
          </mesh>
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle_star_0.geometry}
          material={materials.star}
          position={[0, 323.232, -1.16]}
          scale={14.856}
        >
          <meshBasicMaterial color="yellow" />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_star_0.geometry}
          material={materials.star}
          position={[0, 310.82, 2.832]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={14.856}
        >
          <meshBasicMaterial color="yellow" />
        </mesh>
      </group>
    </group>
  );
});
