import React, { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import { loadModels, detectFaceScore } from "../../../utils/faceProcessor";

const videoConstraints = {
  width: 400,
  height: 400,
  facingMode: "user",
};

export default function Step2() {
  const webcamRef = useRef(null);
  const [score, setScore] = useState(null);
  const [imageSrc, setImageSrc] = useState(null);
  const [status, setStatus] = useState("Waiting");
  const [loading, setLoading] = useState(true);
  const [modelsReady, setModelsReady] = useState(false);
  const [isCapturing, setIsCapturing] = useState(false);

  // Load face-api.js models
  useEffect(() => {
    async function initialize() {
      try {
        await loadModels();
        setModelsReady(true);
        setLoading(false);
      } catch (error) {
        console.error("Failed to load models:", error);
        setStatus("Error loading face detection");
        setLoading(false);
      }
    }
    initialize();
  }, []);

  // Auto-capture after clicking "Capture"
  useEffect(() => {
    if (!isCapturing || !modelsReady || imageSrc) return;

    const interval = setInterval(async () => {
      const video = webcamRef.current?.video;
      if (!video) return;

      try {
        const resultScore = await detectFaceScore(video);
        setScore(resultScore);

        if (resultScore >= 80) {
          const image = webcamRef.current.getScreenshot();
          setImageSrc(image);
          setStatus("Success");
          setIsCapturing(false);
          clearInterval(interval);

          // Send to backend if needed
          // await fetch("/api/face-upload", {
          //   method: "POST",
          //   headers: { "Content-Type": "application/json" },
          //   body: JSON.stringify({ image, score: resultScore }),
          // })
        } else {
          setStatus("Face not clear, please try again");
        }
      } catch (error) {
        console.error("Face detection error:", error);
        setStatus("Error detecting face");
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isCapturing, modelsReady, imageSrc]);

  const startCapture = () => {
    if (!modelsReady) {
      setStatus("Face detection not ready yet");
      return;
    }

    setScore(null);
    setImageSrc(null);
    setStatus("Processing...");
    setIsCapturing(true);
  };

  const reset = () => {
    setScore(null);
    setImageSrc(null);
    setStatus("Waiting");
    setIsCapturing(false);
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-white p-6 mt-10 rounded-xl shadow-lg">
      <h2 className="text-xl font-semibold mb-6">
        Step 2: Face Biometric Capture
      </h2>

      {loading ? (
        <div className="text-center py-8">Loading face detection models...</div>
      ) : (
        <div className="flex items-start justify-between gap-6">
          {/* Webcam or Image */}
          <div className="flex flex-col items-center border border-red-600">
            {!imageSrc ? (
              <Webcam
                ref={webcamRef}
                audio={false}
                screenshotFormat="image/jpeg"
                videoConstraints={videoConstraints}
                className="rounded-md border"
              />
            ) : (
              <img
                src={imageSrc}
                alt="Captured face"
                className="rounded-md w-[300px]"
              />
            )}

            {/* Buttons */}
            <div className="mt-4 space-x-4">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={reset}
              >
                Reset
              </button>
              <button
                className={`bg-green-500 text-white px-4 py-2 rounded ${
                  isCapturing || imageSrc ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={startCapture}
                disabled={isCapturing || imageSrc}
              >
                Capture
              </button>
            </div>
          </div>

          {/* Score and Status */}
          <div className="flex flex-col items-center justify-center">
            {score !== null && (
              <div className="relative w-32 h-32">
                <svg className="absolute top-0 left-0" viewBox="0 0 36 36">
                  <path
                    d="M18 2.0845
                         a 15.9155 15.9155 0 0 1 0 31.831
                         a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#eee"
                    strokeWidth="2"
                  />
                  <path
                    d="M18 2.0845
                         a 15.9155 15.9155 0 0 1 0 31.831"
                    fill="none"
                    stroke="#4ade80"
                    strokeDasharray={`${score}, 100`}
                    strokeWidth="2"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-green-600 text-xl font-bold">
                  {score}%
                </div>
              </div>
            )}

            <p className="mt-4 font-semibold text-gray-700">
              Picture Capture Status - {status === "Success" ? "OK" : status}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
