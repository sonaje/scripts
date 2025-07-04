(function() {
  const style = document.createElement('style');
  style.textContent = `
    .banner {
      width: 300px;
      height: 250px;
      background: linear-gradient(135deg, #ff0000, #ff9900);
      color: white;
      font-family: Arial, sans-serif;
      text-align: center;
      padding: 15px;
      box-sizing: border-box;
      border-radius: 10px;
      box-shadow: 0 0 15px rgba(0,0,0,0.5);
      position: relative;
      animation: pulse 2s infinite;
    }

    .banner h1 {
      font-size: 20px;
      font-weight: bold;
      text-transform: uppercase;
      margin: 0;
      animation: blink 1s step-start infinite;
    }

    .banner p {
      margin-top: 15px;
      font-size: 16px;
      font-weight: bold;
      color: #ffffff;
      text-shadow: 1px 1px 3px black;
      line-height: 1.4;
    }

    .highlight {
      color: #ffff00;
      font-weight: bold;
      text-decoration: underline;
    }

    .emojis {
      font-size: 24px;
      margin-top: 10px;
      animation: pulse 1.5s infinite;
    }

    .cta {
      margin-top: 10px;
      font-size: 14px;
      color: #000000;
      background-color: #ffff00;
      padding: 8px 12px;
      border-radius: 5px;
      font-weight: bold;
      animation: pulse 1.5s infinite;
      display: inline-block;
      text-decoration: none;
      box-shadow: 1px 1px 5px rgba(0,0,0,0.3);
    }

    .cta:hover {
      background-color: #ffe600;
      transform: scale(1.05);
    }

    @keyframes pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.05); }
      100% { transform: scale(1); }
    }

    @keyframes blink {
      50% { opacity: 0.3; }
    }
  `;
  document.head.appendChild(style);

  const container = document.createElement('div');
  container.className = 'banner';
  container.innerHTML = `
    <h1>🚨 URGENTE FOI DESCOBERTO 🚨</h1>
    <p>Como <span class="highlight">burlar</span> os Cassinos</p>
    <div class="emojis">🎰 🃏 💸 💰 🎲</div>
    <a class="cta" href="https://bit.ly/BanVcart">Saiba mais antes que eles descubram</a>
  `;
  document.body.appendChild(container);
})();
