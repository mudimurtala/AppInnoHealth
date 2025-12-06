
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Show loading spinner for minimum 3.5 seconds for better UX
const MIN_LOADING_TIME = 3500;
const startTime = Date.now();

const root = createRoot(document.getElementById("root")!);

// Function to hide loader and show app
const showApp = () => {
  const loader = document.getElementById("initial-loader");
  if (loader) {
    loader.style.opacity = "0";
    loader.style.transition = "opacity 0.5s ease-out";
    setTimeout(() => loader.remove(), 500);
  }
};

// Wait for minimum loading time before rendering
const elapsed = Date.now() - startTime;
const remainingTime = Math.max(0, MIN_LOADING_TIME - elapsed);

setTimeout(() => {
  root.render(<App />);
  // Small delay to ensure React has rendered before hiding loader
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      showApp();
    });
  });
}, remainingTime);  