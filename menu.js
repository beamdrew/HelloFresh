 function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }


  function createImageGrid() {
    const grid = document.getElementById('imageGrid');
    const imageNames = Array.from({ length: 9 }, (_, i) => `${i + 1}.jpg`); 
    const shuffledImages = shuffleArray(imageNames);

    shuffledImages.forEach((imageName, index) => {
      const gridItem = document.createElement('div');
      gridItem.classList.add('grid-item');

      const image = document.createElement('img');
      image.src = `images/food/${imageName}`;
      image.alt = `Week ${index + 1}`;

      const text = document.createElement('div');
      text.textContent = `Week ${index + 1}`;

      gridItem.appendChild(image);
      gridItem.appendChild(text);
      grid.appendChild(gridItem);
    });
  }

  window.onload = createImageGrid;