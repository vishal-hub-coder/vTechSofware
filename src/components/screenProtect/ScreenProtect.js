// src/components/ScreenProtect.js
import { useEffect } from "react";

const ScreenProtect = () => {
  useEffect(() => {
    // ⛔ Right-click block
    const disableRightClick = (e) => e.preventDefault();
    document.addEventListener("contextmenu", disableRightClick);

    // ⛔ Copy block (Ctrl+C / Cmd+C)
    const disableCopy = (e) => e.preventDefault();
    document.addEventListener("copy", disableCopy);

    // ⛔ Screenshot key block (PrintScreen)
    const blockPrintScreen = (e) => {
      if (e.key === "PrintScreen") {
        navigator.clipboard.writeText(""); // clears clipboard
        alert("Screenshots are disabled on this website.");
      }
    };
    window.addEventListener("keydown", blockPrintScreen);

    // Cleanup
    return () => {
      document.removeEventListener("contextmenu", disableRightClick);
      document.removeEventListener("copy", disableCopy);
      window.removeEventListener("keydown", blockPrintScreen);
    };
  }, []);

  return null; // No UI needed
};

export default ScreenProtect;
