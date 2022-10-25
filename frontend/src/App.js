import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import data from "./static/trudy_records.json";
import LeftBar from "./LeftBar";

import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import {
  Canvas,
  extend,
  useFrame,
  useLoader,
  useThree,
  useUpdate,
} from "react-three-fiber";
import HistoryItem from "./HistoryItem";
import CameraController from "./CameraController";
import Title from "./Title";
// import { OrbitControls } from "drei";

function App() {
  const [canvasItems, setCanvasItems] = useState([]);
  const [hoveredItem, setHoveredItem] = useState("na");
  const [menuHidden, setMenuHidden] = useState(false);
  const [dimension, setDimension] = useState(3);

  // console.log(data);
  console.log(hoveredItem);

  return (
    <div className="w-9/12 h-screen">
      <Canvas>
        {/* <OrbitControls /> */}
        <CameraController />

        <ambientLight intensity={0.5} />
        <spotLight position={[100, 150, 100]} angle={0.3} />
        {/* <Box /> */}
        {data.map((item) => {
          return (
            <HistoryItem
              canvasItems={data}
              dimension={dimension}
              setCanvasItems={setCanvasItems}
              item={item}
              hoveredItem={hoveredItem}
              setHoveredItem={setHoveredItem}
            />
          );
        })}
      </Canvas>
      <LeftBar setHoveredItem={setHoveredItem} data={data} />
      <Title dimension={dimension} setDimension={setDimension} />
    </div>
  );
}

export default App;
