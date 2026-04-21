(() => {
  let state = 'idle';
  let appearTimeout = null;
  let startTime = 0;

  const startBtn = document.getElementById('start');
  const box = document.getElementById('box');
  const result = document.getElementById('result');
  const best = document.getElementById('best');

  // Load & display saved best time
  function updateBestDisplay() {
    const b = Number(localStorage.getItem('reactionBest') || '0');
    best.textContent = b ? `Best: ${b} ms` : '';
  }
  updateBestDisplay();

  // Save best time
  function saveBest(ms) {
    const prev = Number(localStorage.getItem('reactionBest') || '0');
    if (prev === 0 || ms < prev) {
      localStorage.setItem('reactionBest', String(ms));
    }
    updateBestDisplay();
  }

  // Reset round
  function resetRound(msg) {
    box.style.display = 'none';
    box.setAttribute('aria-hidden', 'true');

    if (appearTimeout) {
      clearTimeout(appearTimeout);
      appearTimeout = null;
    }

    state = 'idle';
    startBtn.disabled = false;

    if (msg !== undefined)
      result.textContent = msg;
  }


  // Start button (fixed!)
  startBtn.addEventListener('click', () => {

    if (state !== 'idle') return;

    result.textContent = "";
    startBtn.disabled = true;
    state = 'waiting';

    // generate new random delay
    const delay = Math.random() * 4000 + 1000;

    // schedule box appearance
    appearTimeout = setTimeout(() => {
      box.style.display = "flex";
      box.setAttribute('aria-hidden', 'false');
      startTime = performance.now();
      state = "ready";
    }, delay);
  });


  // Clicking anywhere on the page
  document.addEventListener('click', (e) => {
    if (e.target === startBtn) return;
    if (e.target === box) return;

    if (state === 'waiting') {
      resetRound('Too soon! Click Start to try again.');
    }
  });

  // Clicking the box
  box.addEventListener('click', () => {
    if (state !== 'ready') return;

    const reactionMs = Math.round(performance.now() - startTime);

    resetRound(`Reaction time: ${reactionMs} ms`);
    saveBest(reactionMs);
  });

  // Optional: Spacebar support
  document.addEventListener('keydown', (e) => {
    if (e.code === 'Space' && state === 'ready') {
      e.preventDefault();
      const reactionMs = Math.round(performance.now() - startTime);
      resetRound(`Reaction time: ${reactionMs} ms`);
      saveBest(reactionMs);
    } 
    else if (e.code === 'Space' && state === 'waiting') {
      resetRound('Too soon! Click Start to try again.');
    }
  });

  // Avoid timers running in background
  window.addEventListener('beforeunload', () => {
    if (appearTimeout) clearTimeout(appearTimeout);
  });

})();