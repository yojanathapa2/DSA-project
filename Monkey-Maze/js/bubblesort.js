async function BubbleSort(l, r, delay) {
  var blocks = document.querySelectorAll(".block");

  document.getElementsByClassName("range")[0].innerText = `[${l},${r}]`;

  for (var i = 0; i < 15; i++) {
    for (var j = 0; j < 15 - i - 1; j++) {
      // To change background-color of the
      // blocks to be compared
      blocks[j].style.backgroundColor = "#8B0000";
      blocks[j + 1].style.backgroundColor = "FF4500";

      // To wait for .1 sec
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, delay)
      );

      var value1 = Number(blocks[j].childNodes[0].innerHTML);
      var value2 = Number(blocks[j + 1].childNodes[0].innerHTML);

      // To compare value of two blocks
      if (value1 > value2) {
        await swap(blocks[j], blocks[j + 1]);
        document.getElementsByClassName("range")[0].innerText = `[${j},${
          j + 1
        }]`;
        blocks = document.querySelectorAll(".block");
      }

      // Changing the color to the previous one
      blocks[j].style.backgroundColor = "#5C1E1E";
      blocks[j + 1].style.backgroundColor = "#5C1E1E";
    }

    //changing the color of greatest element
    blocks[blocks.length - i - 1].style.backgroundColor = "#7B1113";
  }
}

function swap(el1, el2) {
  return new Promise((resolve) => {
    // For exchanging styles of two blocks
    var temp = el1.style.transform;
    el1.style.transform = el2.style.transform;
    el2.style.transform = temp;

    window.requestAnimationFrame(function () {
      // waiting for .05 sec i.e. 50 ms
      setTimeout(() => {
        container.insertBefore(el2, el1);
        resolve();
      }, 50);
    });
  });
}

let bubbleSortButton = document.getElementById("bubbleSortButton");
bubbleSortButton.addEventListener("mousedown", () => {
  let promise = BubbleSort(0, 14, delay);
  disableButtons();
  promise.then(function () {
    sorted = true;
    enableButtons();
  });
});
