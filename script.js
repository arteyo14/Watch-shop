const blackWatch = document.getElementById("color-1");
const redWatch = document.getElementById("color-2");
const purpleWatch = document.getElementById("color-3");
const pinkWatch = document.getElementById("color-4");
let imgWatch = document.getElementById("watch-img");

const colorArray = [blackWatch, redWatch, purpleWatch, pinkWatch];

const selectionColor = (arr = colorArray) => {
  let select = arr.map((color) => {
    switch (color) {
      case blackWatch:
        blackWatch.addEventListener(
          "click",
          () => (imgWatch.src = "./resource/black-watch.png")
        );
      case redWatch:
        redWatch.addEventListener(
          "click",
          () => (imgWatch.src = "./resource/orenge-watch.png")
        );
      case purpleWatch:
        purpleWatch.addEventListener(
          "click",
          () => (imgWatch.src = "./resource/purple-watch.png")
        );
      case pinkWatch:
        pinkWatch.addEventListener(
          "click",
          () => (imgWatch.src = "./resource/pink-watch.png")
        );
    }
  });
  return select;
};

selectionColor(colorArray);

// blackWatch.addEventListener("click", () => {
//   imgWatch.src = "./resource/black-watch.png";
//   imgWatch.alt = "black-smart-watch";
// });

// redWatch.addEventListener("click", () => {
//   imgWatch.src = "./resource/orenge-watch.png";
//   imgWatch.alt = "red-smart-watch";
// });

// purpleWatch.addEventListener("click", () => {
//   imgWatch.src = "./resource/purple-watch.png";
//   imgWatch.alt = "purple-smart-watch";
// });

// pinkWatch.addEventListener("click", () => {
//   imgWatch.src = "./resource/pink-watch.png";
//   imgWatch.alt = "pink-smart-watch";
// });
