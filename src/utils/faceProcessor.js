// src/utils/faceProcessor.js
import * as faceapi from "face-api.js";

let modelsLoaded = false;
let modelsLoading = false;

export async function loadModels() {
  if (modelsLoaded) return true;
  if (modelsLoading) {
    // Wait until models are loaded if they're currently loading
    return new Promise((resolve) => {
      const check = () => {
        if (modelsLoaded) resolve(true);
        else setTimeout(check, 100);
      };
      check();
    });
  }

  modelsLoading = true;
  console.log("Loading face-api.js models...");
  try {
    await Promise.all([
      faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
      faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
    ]);
    modelsLoaded = true;
    modelsLoading = false;
    console.log("Models loaded");
    return true;
  } catch (error) {
    modelsLoading = false;
    console.error("Failed to load models:", error);
    throw error;
  }
}

export async function detectFaceScore(videoElement) {
  if (!modelsLoaded) {
    throw new Error("Models not loaded. Call loadModels() first.");
  }

  try {
    const result = await faceapi
      .detectSingleFace(videoElement, new faceapi.TinyFaceDetectorOptions())
      .withFaceLandmarks();

    if (!result) return 0;

    return Math.min(
      100,
      Math.floor(
        result.detection.score * 100 + result.landmarks.positions.length / 10
      )
    );
  } catch (error) {
    console.error("Face detection failed:", error);
    return 0;
  }
}
