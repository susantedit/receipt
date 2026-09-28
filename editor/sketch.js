// RECEIPT!
// Seed 1: 4-Artwork Commemorative Receipt with Atkinson Dithering & Crystal-Clear Typography
// Any other seed: Pure Generative Art Engine (Deep Mountain Terrain, Starmap, Hilbert Curve, Cellular Automata, L-System)
import JsBarcode from "jsbarcode";

// Image URLs loaded via Vite asset resolution
const imageFiles = {
  namaste: new URL("./namesta dosto.png", import.meta.url).href,
  octocat: new URL("./octact.png", import.meta.url).href,
  hackerCat: new URL("./image copy.png", import.meta.url).href,
  copilot: new URL("./image.png", import.meta.url).href,
};

const loadedImages = {};
const ditherCache = new Map();

function getImage(key) {
  if (!loadedImages[key]) {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = imageFiles[key];
    img.onload = () => {
      const seedInput = document.querySelector("#seed");
      if (seedInput) {
        seedInput.dispatchEvent(new Event("input"));
      }
    };
    loadedImages[key] = img;
  }
  return loadedImages[key];
}

Object.keys(imageFiles).forEach(getImage);

export const receipt = {
  height: 1900, // 240–2000 px. Width is fixed at 384 by the printer.
  seed: 1, // Seed 1: 4 crisp images. Any other seed: pure generative engine.
};

// 16x16 Pixel Art Logo
const TERMINAL_LOGO = [
  "....########....",
  "...#........#...",
  "..#..######..#..",
  "..#.########.#..",
  ".#..#......#..#.",
  ".#.##########.#.",
  ".#.#........#.#.",
  ".#.##########.#.",
  ".#............#.",
  ".##############.",
  ".#............#.",
  ".#.##########.#.",
  ".#.#..#..#..#.#.",
  ".#............#.",
  "..############..",
  "................",
];

export function drawReceipt(p) {
  p.background(255);

  if (Number(receipt.seed) === 1) {
    drawFourPictureReceipt(p);
  } else {
    drawPureGenerativeReceipt(p);
  }
}

// ==============================================================
// MODE A: SEED 1 — 4 CRISP ARTWORKS WITH CLEAN NORMAL-WEIGHT TYPE
// ==============================================================
function drawFourPictureReceipt(p) {
  const { width: w, height: h } = p;
  const margin = 20;
  const contentWidth = w - margin * 2;

  let curY = 22;
  dashedLine(p, margin, curY, w - margin, curY, 6, 4);
  curY += 12;

  drawPixelArt(p, TERMINAL_LOGO, Math.floor(w / 2 - 16), curY, 2);
  curY += 38;

  // Header Title
  p.noStroke();
  p.fill(0);
  p.textFont("Courier New");
  p.textAlign(p.CENTER, p.TOP);
  p.textStyle(p.BOLD);
  p.textSize(20);
  p.text("★ HACK CLUB RECEIPT ★", w / 2, curY);
  curY += 26;

  p.textStyle(p.NORMAL);
  p.textSize(10);
  p.text("THE MAKER PRINT TERMINAL #042", w / 2, curY);
  curY += 16;
  p.text("SESSION SEED: 1  |  MODE: CREATOR ARCHIVE", w / 2, curY);
  curY += 16;
  p.text("DATE: 2026-09-24  |  384PX 1-BIT THERMAL", w / 2, curY);
  curY += 18;

  doubleLine(p, margin, curY, w - margin, curY);
  curY += 16;

  // ARTWORK 1: GitHub Octocat
  p.fill(0);
  p.noStroke();
  p.textSize(11);
  p.textStyle(p.NORMAL);
  p.textAlign(p.LEFT, p.TOP);
  p.text("[01] GITHUB OCTOCAT // ARTIST IN RESIDENCE", margin + 4, curY);
  curY += 18;

  const octocatImg = getImage("octocat");
  const octocatW = 290;
  const octocatH = 290;
  const octocatX = Math.floor((w - octocatW) / 2);
  drawCrispAtkinsonImage(p, octocatImg, octocatX, curY, octocatW, octocatH, "OCTOCAT", false);
  curY += octocatH + 12;

  dashedLine(p, margin, curY, w - margin, curY, 4, 4);
  curY += 14;

  // ARTWORK 2: Night Coder Hacker Bear
  p.fill(0);
  p.noStroke();
  p.textSize(11);
  p.textStyle(p.NORMAL);
  p.textAlign(p.LEFT, p.TOP);
  p.text("[02] NIGHT CODER // CYBER DECK PROTOCOL", margin + 4, curY);
  curY += 18;

  const hackerImg = getImage("hackerCat");
  const hackerW = 270;
  const hackerH = 270;
  const hackerX = Math.floor((w - hackerW) / 2);
  drawCrispAtkinsonImage(p, hackerImg, hackerX, curY, hackerW, hackerH, "NIGHT HACKER", false);
  curY += hackerH + 12;

  dashedLine(p, margin, curY, w - margin, curY, 4, 4);
  curY += 14;

  // ARTWORK 3: Copilot
  p.fill(0);
  p.noStroke();
  p.textSize(11);
  p.textStyle(p.NORMAL);
  p.textAlign(p.LEFT, p.TOP);
  p.text("[03] COPILOT // DON'T FLY SOLO", margin + 4, curY);
  curY += 18;

  const copilotImg = getImage("copilot");
  const copilotW = 320;
  const copilotH = 140;
  const copilotX = Math.floor((w - copilotW) / 2);
  drawCrispAtkinsonImage(p, copilotImg, copilotX, curY, copilotW, copilotH, "DON'T FLY SOLO", false);
  curY += copilotH + 12;

  dashedLine(p, margin, curY, w - margin, curY, 4, 4);
  curY += 14;

  // ARTWORK 4: Namaste Dosto Creator Portrait (with isPhoto = true for shadow lift)
  p.fill(0);
  p.noStroke();
  p.textSize(11);
  p.textStyle(p.NORMAL);
  p.textAlign(p.LEFT, p.TOP);
  p.text("[04] CREATOR ARCHIVE // NAMASTE DOSTO", margin + 4, curY);
  curY += 18;

  const namasteImg = getImage("namaste");
  const namasteW = 300;
  const namasteH = 410;
  const namasteX = Math.floor((w - namasteW) / 2);
  drawCrispAtkinsonImage(p, namasteImg, namasteX, curY, namasteW, namasteH, "NAMASTE DOSTO", true);
  curY += namasteH + 14;

  doubleLine(p, margin, curY, w - margin, curY);
  curY += 16;

  // ITEM LIST & BILL
  drawItemizedBill(p, margin, curY, w, contentWidth);
}

// ==============================================================
// MODE B: ANY OTHER SEED — 100% PURE GENERATIVE ENGINE
// ==============================================================
function drawPureGenerativeReceipt(p) {
  const { width: w, height: h } = p;
  const margin = 20;
  const contentWidth = w - margin * 2;

  let curY = 22;
  dashedLine(p, margin, curY, w - margin, curY, 6, 4);
  curY += 12;

  drawPixelArt(p, TERMINAL_LOGO, Math.floor(w / 2 - 16), curY, 2);
  curY += 38;

  p.noStroke();
  p.fill(0);
  p.textFont("Courier New");
  p.textAlign(p.CENTER, p.TOP);
  p.textStyle(p.BOLD);
  p.textSize(20);
  p.text("★ HACK CLUB RECEIPT ★", w / 2, curY);
  curY += 26;

  p.textStyle(p.NORMAL);
  p.textSize(10);
  p.text("THE GENERATIVE RESEARCH TERMINAL #042", w / 2, curY);
  curY += 16;
  p.text(`SESSION SEED: ${receipt.seed}  |  ALGORITHMIC ENGINE`, w / 2, curY);
  curY += 16;
  p.text("DATE: 2026-09-24  |  384PX 1-BIT THERMAL", w / 2, curY);
  curY += 18;

  doubleLine(p, margin, curY, w - margin, curY);
  curY += 16;

  // 1. Constellation Map
  p.fill(0);
  p.noStroke();
  p.textSize(11);
  p.textStyle(p.NORMAL);
  p.textAlign(p.LEFT, p.TOP);
  p.text("I. CELESTIAL CONSTELLATION SURVEY", margin, curY);
  curY += 18;

  drawConstellationMap(p, margin, curY, w - margin, 130);
  curY += 138;

  dashedLine(p, margin, curY, w - margin, curY, 4, 4);
  curY += 16;

  // 2. Deep Mountain Terrain
  p.fill(0);
  p.noStroke();
  p.textSize(11);
  p.textStyle(p.NORMAL);
  p.textAlign(p.LEFT, p.TOP);
  p.text("II. PROCEDURAL TOPOGRAPHIC SURVEY", margin, curY);
  curY += 18;

  drawDeepMountainLandscape(p, margin, curY, w - margin, 240);
  curY += 250;

  doubleLine(p, margin, curY, w - margin, curY);
  curY += 16;

  // 3. Space-Filling Hilbert Curve
  p.fill(0);
  p.noStroke();
  p.textSize(11);
  p.textStyle(p.NORMAL);
  p.textAlign(p.LEFT, p.TOP);
  p.text("III. ORDER-4 HILBERT SPACE-FILLING CURVE", margin, curY);
  curY += 18;

  drawHilbertBanner(p, margin, curY, w - margin, 210, 4);
  curY += 220;

  dashedLine(p, margin, curY, w - margin, curY, 4, 4);
  curY += 16;

  // 4. Cellular Automata
  p.fill(0);
  p.noStroke();
  p.textSize(11);
  p.textStyle(p.NORMAL);
  p.textAlign(p.LEFT, p.TOP);
  p.text("IV. DUAL CELLULAR AUTOMATA (RULE 30 & 110)", margin, curY);
  curY += 18;

  drawCellularTape(p, margin, curY, w - margin, 15, 30);
  curY += 52;
  drawCellularTape(p, margin, curY, w - margin, 15, 110);
  curY += 58;

  doubleLine(p, margin, curY, w - margin, curY);
  curY += 16;

  // 5. Twin L-Systems
  p.fill(0);
  p.noStroke();
  p.textSize(11);
  p.textStyle(p.NORMAL);
  p.textAlign(p.LEFT, p.TOP);
  p.text("V. LINDENMAYER FRACTAL BOTANY", margin, curY);
  curY += 18;

  drawLSystemFern(p, w / 2 - 75, curY + 120, 3);
  drawLSystemFern(p, w / 2 + 75, curY + 120, 3);
  curY += 130;

  doubleLine(p, margin, curY, w - margin, curY);
  curY += 16;

  // ITEM LIST & BILL
  drawItemizedBill(p, margin, curY, w, contentWidth);
}

// ==============================================================
// CRISP & LEGIBLE RECEIPT BILL & FOOTER (NORMAL WEIGHT ONLY)
// ==============================================================
function drawItemizedBill(p, margin, curY, w, contentWidth) {
  p.fill(0);
  p.noStroke();
  p.textFont("Courier New");
  p.textAlign(p.LEFT, p.TOP);
  p.textStyle(p.NORMAL);
  p.textSize(10);
  p.text("ITEM DESCRIPTION", margin, curY);
  p.textAlign(p.RIGHT, p.TOP);
  p.text("PRICE", w - margin, curY);
  curY += 15;

  dashedLine(p, margin, curY, w - margin, curY, 3, 2);
  curY += 10;

  p.textSize(10);
  p.textStyle(p.NORMAL);
  const items = [
    ["CELESTIAL STARMAP RADIAN", "$14.50"],
    ["HILBERT SPACE CURVE TAPE", "$12.00"],
    ["TOPOGRAPHIC ELEVATION MAP", "$08.50"],
    ["WOLFRAM RULE 30 AUTOMATON", "$06.00"],
    ["L-SYSTEM BOTANICAL TREE", "$04.50"],
    ["THERMAL ROLL 384x1900MM", "FREE"],
  ];

  items.forEach(([name, price]) => {
    p.textAlign(p.LEFT, p.TOP);
    p.text(name, margin, curY);
    p.textAlign(p.RIGHT, p.TOP);
    p.text(price, w - margin, curY);
    curY += 15;
  });

  curY += 6;
  dashedLine(p, margin, curY, w - margin, curY, 3, 2);
  curY += 10;

  p.textAlign(p.LEFT, p.TOP);
  p.text("SUBTOTAL:", margin, curY);
  p.textAlign(p.RIGHT, p.TOP);
  p.text("$45.50", w - margin, curY);
  curY += 15;

  p.textAlign(p.LEFT, p.TOP);
  p.text("TAX (0.0%):", margin, curY);
  p.textAlign(p.RIGHT, p.TOP);
  p.text("$0.00", w - margin, curY);
  curY += 16;

  doubleLine(p, margin, curY, w - margin, curY);
  curY += 12;

  p.textAlign(p.LEFT, p.TOP);
  p.textStyle(p.BOLD);
  p.textSize(11);
  p.text("TOTAL AMOUNT:", margin, curY);
  p.textAlign(p.RIGHT, p.TOP);
  p.text("$45.50 [PAID]", w - margin, curY);
  curY += 22;

  // Telemetry box
  p.stroke(0);
  p.strokeWeight(1);
  p.noFill();
  p.rect(margin, curY, contentWidth, 22);
  p.noStroke();
  p.fill(0);
  p.textAlign(p.CENTER, p.CENTER);
  p.textSize(9);
  p.textStyle(p.NORMAL);
  p.text(`AUTH: VERIFIED // PARITY: 0x${receipt.seed.toString(16).toUpperCase()} // SEED: ${receipt.seed}`, w / 2, curY + 11);
  curY += 32;

  p.textAlign(p.CENTER, p.TOP);
  p.textSize(10);
  p.textStyle(p.NORMAL);
  p.text("AUTHENTICATION: VERIFIED YSWS PROJECT", w / 2, curY);
  curY += 14;
  p.text("THANK YOU FOR HACKING WITH HACK CLUB", w / 2, curY);
  curY += 14;
  p.text("PRINTED ON THERMAL MACHINE // SHIPPED TO YOU", w / 2, curY);
  curY += 18;

  // Barcode
  const barcodeValue = "receipt.hackclub.com";
  drawBarcode(p, barcodeValue, w / 2, curY);
  curY += 54;

  p.noStroke();
  p.fill(0);
  p.textAlign(p.CENTER, p.TOP);
  p.textSize(10);
  p.textStyle(p.NORMAL);
  p.text(barcodeValue, w / 2, curY);
  curY += 18;

  dashedLine(p, margin, curY, w - margin, curY, 6, 4);
  curY += 10;
  p.textSize(9);
  p.text("--- TEAR ALONG PERFORATION ---", w / 2, curY);
}

// ==============================================================
// ADVANCED ATKINSON DITHERING & TONE MAPPING
// ==============================================================
function drawCrispAtkinsonImage(p, img, x, y, targetW, targetH, label, isPhoto = false) {
  p.stroke(0);
  p.strokeWeight(1);
  p.noFill();
  p.rect(x - 2, y - 2, targetW + 4, targetH + 4);

  // Decorative corner ticks
  p.line(x - 5, y - 2, x - 2, y - 5);
  p.line(x + targetW + 2, y - 5, x + targetW + 5, y - 2);
  p.line(x - 5, y + targetH + 2, x - 2, y + targetH + 5);
  p.line(x + targetW + 2, y + targetH + 5, x + targetW + 5, y + targetH + 2);

  if (!img || !img.complete || img.naturalWidth === 0) {
    p.noStroke();
    p.fill(0);
    p.textAlign(p.CENTER, p.CENTER);
    p.textSize(11);
    p.text(`[ LOADING ${label}... ]`, x + targetW / 2, y + targetH / 2);
    return;
  }

  const cacheKey = `${img.src}_${targetW}_${targetH}_${isPhoto}`;
  let ditheredCanvas = ditherCache.get(cacheKey);

  if (!ditheredCanvas) {
    ditheredCanvas = document.createElement("canvas");
    ditheredCanvas.width = targetW;
    ditheredCanvas.height = targetH;
    const ctx = ditheredCanvas.getContext("2d");

    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, targetW, targetH);

    const imgAspect = img.naturalWidth / img.naturalHeight;
    const targetAspect = targetW / targetH;
    let drawW = targetW;
    let drawH = targetH;
    let drawX = 0;
    let drawY = 0;

    if (imgAspect > targetAspect) {
      drawW = targetW;
      drawH = Math.round(targetW / imgAspect);
      drawY = Math.round((targetH - drawH) / 2);
    } else {
      drawH = targetH;
      drawW = Math.round(targetH * imgAspect);
      drawX = Math.round((targetW - drawW) / 2);
    }

    ctx.drawImage(img, drawX, drawY, drawW, drawH);

    const imgData = ctx.getImageData(0, 0, targetW, targetH);
    const data = imgData.data;

    // 1. Calculate tone-mapped luminance buffer
    const gray = new Float32Array(targetW * targetH);

    for (let i = 0; i < targetW * targetH; i++) {
      const idx = i * 4;
      const alpha = data[idx + 3] / 255;
      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];
      let lum = (0.299 * r + 0.587 * g + 0.114 * b) * alpha + 255 * (1 - alpha);

      if (isPhoto) {
        // High-contrast photo lift: brightens dark shadows into clean halftone dots
        // Maps dark values (20-40) into the 120-150 range so face and suit are clearly delineated
        lum = Math.pow(lum / 255, 0.42) * 205 + 40;
      } else {
        // Graphic illustration mode: crisp threshold curve
        lum = lum > 210 ? 255 : (lum < 40 ? 0 : lum);
      }

      gray[i] = Math.max(0, Math.min(255, lum));
    }

    // 2. Atkinson Dithering (Standard retro Mac dithering, only diffuses 75% error)
    for (let py = 0; py < targetH; py++) {
      for (let px = 0; px < targetW; px++) {
        const idx = py * targetW + px;
        const oldVal = gray[idx];
        const newVal = oldVal < 128 ? 0 : 255;
        gray[idx] = newVal;
        const err = Math.floor((oldVal - newVal) / 8);

        if (err !== 0) {
          if (px + 1 < targetW) gray[idx + 1] += err;
          if (px + 2 < targetW) gray[idx + 2] += err;
          if (py + 1 < targetH) {
            if (px - 1 >= 0) gray[idx + targetW - 1] += err;
            gray[idx + targetW] += err;
            if (px + 1 < targetW) gray[idx + targetW + 1] += err;
          }
          if (py + 2 < targetH) {
            gray[idx + targetW * 2] += err;
          }
        }
      }
    }

    // 3. Output 1-bit pixels
    for (let i = 0; i < targetW * targetH; i++) {
      const idx = i * 4;
      const val = gray[i] < 128 ? 0 : 255;
      data[idx] = val;
      data[idx + 1] = val;
      data[idx + 2] = val;
      data[idx + 3] = 255;
    }

    ctx.putImageData(imgData, 0, 0);
    ditherCache.set(cacheKey, ditheredCanvas);
  }

  p.drawingContext.drawImage(ditheredCanvas, x, y);
}

// --------------------------------------------------------------
// ALGORITHMIC ENGINES
// --------------------------------------------------------------

function drawPixelArt(p, grid, startX, startY, scale) {
  p.noStroke();
  p.fill(0);
  for (let r = 0; r < grid.length; r++) {
    const row = grid[r];
    for (let c = 0; c < row.length; c++) {
      if (row[c] === "#") {
        p.rect(startX + c * scale, startY + r * scale, scale, scale);
      }
    }
  }
}

function drawConstellationMap(p, x1, y1, x2, h) {
  p.stroke(0);
  p.strokeWeight(1);
  p.noFill();
  p.rect(x1, y1, x2 - x1, h);

  const starCount = Math.floor(h * 0.4);
  const stars = [];
  for (let i = 0; i < starCount; i++) {
    const sx = p.random(x1 + 8, x2 - 8);
    const sy = p.random(y1 + 8, y1 + h - 8);
    stars.push({ x: sx, y: sy });
    p.noStroke();
    p.fill(0);
    if (p.random() > 0.65) {
      p.rect(sx - 2, sy, 5, 1);
      p.rect(sx, sy - 2, 1, 5);
    } else {
      p.rect(sx, sy, 2, 2);
    }
  }

  p.stroke(0);
  p.strokeWeight(1);
  for (let i = 0; i < stars.length; i++) {
    for (let j = i + 1; j < stars.length; j++) {
      const d = p.dist(stars[i].x, stars[i].y, stars[j].x, stars[j].y);
      if (d < 36 && p.random() > 0.4) {
        dashedLine(p, stars[i].x, stars[i].y, stars[j].x, stars[j].y, 3, 2);
      }
    }
  }

  p.noStroke();
  p.fill(0);
  p.textAlign(p.RIGHT, p.BOTTOM);
  p.textSize(8);
  p.textStyle(p.NORMAL);
  p.text(`SEC: ${Math.floor(p.random(10, 80))}°N / ${Math.floor(p.random(10, 180))}°W`, x2 - 6, y1 + h - 4);
}

function drawHilbertBanner(p, x1, y1, x2, h, order = 3) {
  p.stroke(0);
  p.strokeWeight(1);
  p.noFill();
  p.rect(x1, y1, x2 - x1, h);

  const totalPoints = 1 << (order * 2);
  const side = 1 << order;
  const stepX = (x2 - x1 - 12) / side;
  const stepY = (h - 10) / side;

  p.stroke(0);
  p.strokeWeight(1);
  p.beginShape();
  for (let i = 0; i < totalPoints; i++) {
    const pt = hilbertCoord(i, order);
    const px = x1 + 6 + pt.x * stepX + stepX / 2;
    const py = y1 + 5 + pt.y * stepY + stepY / 2;
    p.vertex(px, py);
  }
  p.endShape();
}

function hilbertCoord(index, order) {
  const points = [
    { x: 0, y: 0 },
    { x: 0, y: 1 },
    { x: 1, y: 1 },
    { x: 1, y: 0 },
  ];
  let idx = index & 3;
  let pt = { ...points[idx] };
  for (let j = 1; j < order; j++) {
    index = index >>> 2;
    idx = index & 3;
    const len = 1 << j;
    if (idx === 0) {
      const temp = pt.x;
      pt.x = pt.y;
      pt.y = temp;
    } else if (idx === 1) {
      pt.y += len;
    } else if (idx === 2) {
      pt.x += len;
      pt.y += len;
    } else if (idx === 3) {
      const temp = len - 1 - pt.y;
      pt.y = len - 1 - pt.x;
      pt.x = temp;
      pt.x += len;
    }
  }
  return pt;
}

function drawDeepMountainLandscape(p, x1, y1, x2, h) {
  p.stroke(0);
  p.strokeWeight(1);
  p.noFill();
  p.rect(x1, y1, x2 - x1, h);

  const layers = 8;
  for (let l = 0; l < layers; l++) {
    p.fill(l % 2 === 0 ? 0 : 255);
    p.stroke(0);
    p.strokeWeight(1);
    p.beginShape();
    p.vertex(x1, y1 + h);
    for (let x = x1; x <= x2; x += 4) {
      const n = p.noise(x * 0.012 + l * 4, l * 0.5 + receipt.seed * 0.1);
      const y = y1 + 40 + l * 24 - n * 48;
      p.vertex(x, y);
    }
    p.vertex(x2, y1 + h);
    p.endShape(p.CLOSE);
  }
}

function drawLSystemFern(p, rootX, rootY, iterations = 2) {
  let sentence = "X";
  for (let i = 0; i < iterations; i++) {
    let next = "";
    for (let c of sentence) {
      if (c === "X") next += "F+[[X]-X]-F[-FX]+X";
      else if (c === "F") next += "FF";
      else next += c;
    }
    sentence = next;
  }

  const len = iterations === 3 ? 3.2 : 4.5;
  const angle = (20 + (receipt.seed % 10)) * (Math.PI / 180);

  p.stroke(0);
  p.strokeWeight(1);
  p.push();
  p.translate(rootX, rootY);

  for (let c of sentence) {
    if (c === "F") {
      p.line(0, 0, 0, -len);
      p.translate(0, -len);
    } else if (c === "+") {
      p.rotate(angle);
    } else if (c === "-") {
      p.rotate(-angle);
    } else if (c === "[") {
      p.push();
    } else if (c === "]") {
      p.pop();
    }
  }
  p.pop();
}

function drawCellularTape(p, x1, y, x2, rows = 6, rule = 30) {
  const cellSize = 3;
  const cols = Math.floor((x2 - x1) / cellSize);
  let state = new Array(cols).fill(0);
  for (let i = 0; i < cols; i++) {
    state[i] = p.random() > 0.82 ? 1 : 0;
  }
  state[Math.floor(cols / 2)] = 1;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (state[c] === 1) {
        p.rect(x1 + c * cellSize, y + r * cellSize, cellSize, cellSize);
      }
    }
    const next = new Array(cols).fill(0);
    for (let c = 0; c < cols; c++) {
      const left = c > 0 ? state[c - 1] : 0;
      const self = state[c];
      const right = c < cols - 1 ? state[c + 1] : 0;
      const neighborhood = (left << 2) | (self << 1) | right;
      next[c] = (rule >> neighborhood) & 1;
    }
    state = next;
  }
}

function drawBarcode(p, value, centerX, y) {
  const barcodeCanvas = document.createElement("canvas");
  JsBarcode(barcodeCanvas, value, {
    format: "CODE128",
    width: 1,
    height: 44,
    displayValue: false,
    margin: 0,
    background: "#ffffff",
    lineColor: "#000000",
  });
  p.drawingContext.drawImage(barcodeCanvas, Math.floor(centerX - barcodeCanvas.width / 2), y);
}

function dashedLine(p, x1, y1, x2, y2, dash, gap) {
  p.stroke(0);
  p.strokeWeight(1);
  for (let x = x1; x < x2; x += dash + gap) {
    p.line(x, y1, Math.min(x + dash, x2), y2);
  }
}

function doubleLine(p, x1, y1, x2, y2) {
  p.stroke(0);
  p.strokeWeight(1);
  p.line(x1, y1 - 1, x2, y2 - 1);
  p.line(x1, y1 + 1, x2, y2 + 1);
}
