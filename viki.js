function openGift() {
  const giftBox = document.getElementById('giftBox');
  const content = document.getElementById('content');
  const hint = document.getElementById('hint');
  const mainContainer = document.getElementById('mainContainer');

  if (giftBox.classList.contains('opened')) return;

  // 1. Abrir la caja
  giftBox.classList.add('opened');
  content.classList.add('show');
  hint.classList.add('hidden');

  // 2. Después de un momento, llenar la pantalla de flores
  setTimeout(() => {
    fillScreenWithFlowers();
  }, 1200);

  // 3. Después de que se llenen, hacerlas caer
  setTimeout(() => {
    makeFlowersFall();
  }, 3200);

  // 4. Cuando caen, mostrar la carta y ocultar lo demás
  setTimeout(() => {
    mainContainer.classList.add('hide');
    document.getElementById('letterContainer').classList.add('show');
  }, 4800);
}

function fillScreenWithFlowers() {
  const flowerImages = [
    'flor1.png',
    'flor2.png',
    'flor3.png',
    'flor4.png',
    'flor5.png'
  ];
  
  const total = 120;

  for (let i = 0; i < total; i++) {
    setTimeout(() => {
      const flower = document.createElement('div');
      flower.classList.add('flower');

      const img = document.createElement('img');
      img.src = flowerImages[Math.floor(Math.random() * flowerImages.length)];
      img.alt = 'flor';

      // Tamaño aleatorio
      const size = Math.random() * 55 + 45;
      flower.style.width = size + 'px';
      flower.style.height = size + 'px';

      flower.style.left = Math.random() * 100 + 'vw';
      flower.style.top = Math.random() * 100 + 'vh';
      flower.style.transform = `rotate(${Math.random() * 50 - 25}deg)`;

      flower.appendChild(img);
      document.body.appendChild(flower);
    }, i * 40);
  }
}

function makeFlowersFall() {
  const allFlowers = document.querySelectorAll('.flower');
  
  allFlowers.forEach((flower, index) => {
    setTimeout(() => {
      flower.classList.add('fall');
      setTimeout(() => flower.remove(), 2000);
    }, index * 18);
  });
}