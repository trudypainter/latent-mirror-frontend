import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { Canvas, useThree } from "react-three-fiber";
import { FlyControls } from "three/examples/jsm/controls/FlyControls";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { FirstPersonControls } from "three/examples/jsm/controls/FirstPersonControls";
import { PointerLockControls } from "three/addons/controls/PointerLockControls.js";

import * as THREE from "three";

const CameraController = () => {
  // console.log("⭐️ using camera controller");
  const { camera, gl } = useThree();

  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement);

    // controls.minDistance = 0;
    // controls.maxDistance = 90;
    // controls.keys = {
    //   LEFT: "ArrowLeft", //left arrow
    //   UP: "ArrowUp", // up arrow
    //   RIGHT: "ArrowRight", // right arrow
    //   BOTTOM: "ArrowDown", // down arrow
    // };
    // return () => {
    //   controls.dispose();
    // };
  }, [camera, gl]);
  return null;
};

export default CameraController;
