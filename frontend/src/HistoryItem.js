import { useState, useRef, useEffect } from "react";
// import { Billboard } from "drei";
import { Html } from "@react-three/drei";
import { Canvas, useFrame, useLoader } from "react-three-fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader.js";

// item box
function HistoryItem(props) {
  const SCALE = 10;

  const k = 10;
  function sigmoid(z) {
    return 1 / (1 + Math.exp(-z / k));
  }
  // This reference will give us direct access to the mesh
  const mesh = useRef();
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const itemSelected = props.canvasItems.includes(props.item);

  const handleSphereClicked = () => {
    if (!itemSelected) {
      props.setCanvasItems([...props.canvasItems, props.item]);
    }
  };

  const handlePointerIn = () => {
    setHover(true);
    props.setHoveredItem(props.item);
  };

  const handlePointerOut = () => {
    setHover(false);
    props.setHoveredItem(undefined);
  };

  let dim = props.item["visitCount"] / 1000;
  let x_item;
  let y_item;
  let z_item;

  if (props.dimension == 3) {
    y_item = props.item["3d_y"] / SCALE;
    x_item = props.item["3d_x"] / SCALE;
    z_item = props.item["3d_z"] / SCALE;
  } else {
    y_item = 0;
    x_item = props.item["2d_x"] / SCALE;
    z_item = props.item["2d_y"] / SCALE;
  }

  let opacity = 0.3;
  let color = "gray";

  if (itemSelected) {
    color = "#3d5afe";
    opacity = 0.85;
  }

  if (hovered) {
    color = "purple";
    opacity = 0.8;
  } else if (props.hoveredItem && props.item.url == props.hoveredItem.url) {
    console.log("BOOM");
    color = "#00e676";
    opacity = 1;
    console.log(dim);
    dim += 0.08;
  }

  // check if valid ending img url
  let imgUrl =
    "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg";
  if (props.item["favicon_url"] !== "") {
    // favicon url is not ico
    if (
      props.item["favicon_url"].substring(
        props.item["favicon_url"].length - 3
      ) !== "ico"
    ) {
      imgUrl = props.item["favicon_url"];
    }
    if (props.item["favicon_ico"] !== "") {
      // favicon ico is not ico
      if (
        props.item["favicon_ico"].substring(
          props.item["favicon_ico"].length - 3
        ) !== "ico"
      ) {
        imgUrl = props.item["favicon_ico"];
      }
    }
  }

  let texture = useLoader(TextureLoader, imgUrl);

  return (
    <mesh
      ref={mesh}
      onClick={(event) => handleSphereClicked()}
      onPointerOver={(event) => handlePointerIn()}
      onPointerOut={(event) => handlePointerOut()}
      position={[x_item, y_item, z_item]}
    >
      <boxGeometry args={[dim, dim, dim]} />
      {/* <meshStandardMaterial
        color={color}
        transparent={true}
        opacity={opacity}
      /> */}
      <meshStandardMaterial map={texture} attach="material" />

      {hovered && (
        <Html position={[0, 0, 0]}>
          <p className="truncate">
            {props.item["description"]}
            <br />
            {props.item["url"]}
          </p>
        </Html>
      )}
    </mesh>
  );
}

export default HistoryItem;
