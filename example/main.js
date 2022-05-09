import imgToAscii from "../lib/index.mjs";

const imgSrc = "./img_to_ascii_example.jpg";

const canvas = await imgToAscii(imgSrc);
const canvasPreview = document.getElementById("canvas-preview");
canvasPreview.appendChild(canvas);
