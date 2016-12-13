const context = new AudioContext();

const oscillator = context.createOscillator();

const gain = context.createGain();
gain.gain.value = 0;

oscillator.connect(gain);
gain.connect(context.destination);

oscillator.start(0);

u('.key').handle('mousedown mouseenter', e => {
  const freq = parseFloat(u(e.currentTarget).data('freq'));
  if (e.buttons === 1) {
    oscillator.frequency.value = freq;
    gain.gain.value = 1;
  }
});

u('.key').handle('touchstart', e => {
  const freq = parseFloat(u(e.currentTarget).data('freq'));
  oscillator.frequency.value = freq;
  gain.gain.value = 1;
});

u('.key').handle('mouseup mouseout touchend', e => {
  gain.gain.value = 0;
});
