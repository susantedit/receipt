import "./pos-terminal.js";
import { BARCODE_VALUE, createBarcodeSvg } from "./barcode.js";

function paintReceipt(canvas) {
  window.ReceiptArt?.draw(
    canvas.getContext("2d"),
    canvas.width,
    canvas.height,
    {
      seed: Number(canvas.dataset.seed) || 1,
      style: canvas.dataset.style || undefined,
      chrome: canvas.dataset.chrome !== "false",
    },
  );
}

const artCanvases = document.querySelectorAll("canvas[data-art]");
artCanvases.forEach((canvas) => {
  paintReceipt(canvas);
  canvas.setAttribute("title", "Click to generate a new seed & pattern");

  canvas.addEventListener("click", () => {
    const newSeed = Math.floor(Math.random() * 9000) + 100;
    canvas.dataset.seed = String(newSeed);
    if (window.ReceiptArt?.styles?.length) {
      const available = window.ReceiptArt.styles;
      canvas.dataset.style = available[Math.floor(Math.random() * available.length)];
    }
    canvas.classList.add("regenerating");
    paintReceipt(canvas);
    setTimeout(() => canvas.classList.remove("regenerating"), 300);
  });
});

// Keyboard shortcut: Press 'R' to re-roll all receipt art samples
window.addEventListener("keydown", (e) => {
  if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
  if (e.key.toLowerCase() === "r") {
    artCanvases.forEach((canvas) => {
      canvas.dataset.seed = String(Math.floor(Math.random() * 9000) + 100);
      paintReceipt(canvas);
    });
  }
});

document.querySelectorAll("[data-barcode]").forEach((barcode) => {
  barcode.innerHTML = createBarcodeSvg(barcode.dataset.barcode || BARCODE_VALUE);
});

// Retire the scroll cue as soon as the page moves; it is only there to say
// there is more below.
const scrollCue = document.querySelector(".scroll-cue");
if (scrollCue) {
  const update = () => {
    if (window.scrollY > 60) scrollCue.dataset.hidden = "";
    else delete scrollCue.dataset.hidden;
  };
  update();
  addEventListener("scroll", update, { passive: true });
}

