import VanillaTilt from "vanilla-tilt";

export default function initTiltAnimation() {
  const elements = document.querySelectorAll(".js-tilt");
  VanillaTilt.init(elements, {
    max: 25, // Maximum tilt rotation (in degrees)
    speed: 400, // Speed of the tilt animation (higher value means faster tilt)
    glare: true, // Whether to add glare effect (requires "data-tilt-glare" attribute on the element)
    "max-glare": 0.5, // Maximum glare opacity (0 to 1)
  });
}

