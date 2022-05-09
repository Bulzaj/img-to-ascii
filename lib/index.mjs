const imgToAscii = async function (imgSrc, options) {
  const defaultOptions = {
    densityString:
      "MQW#BNqpHERmKdgAGbX8@SDO$PUkwZyF69heT0a&xV%Cs4fY52Lonz3ucJjvItr}{li?1][7<>=)(+*|!/;:-,\"_~^.'`",
    ...options,
  };

  const canvas = await setupCanvas(imgSrc);

  return canvas;
};

const setupCanvas = function (imgSrc) {
  const canvasPromise = new Promise((resolve, reject) => {
    if (!imgSrc || imgSrc === "" || imgSrc === " " || !imgSrc instanceof String)
      reject("No image source provided");

    const img = new Image();
    img.onload = function () {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;

      resolve(canvas);
    };
    img.src = imgSrc;
  });

  return canvasPromise;
};

export default imgToAscii;
