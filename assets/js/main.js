var context = new AudioContext();

var oscillator = context.createOscillator();

var gain = context.createGain();
gain.gain.value = 0;

oscillator.connect(gain);
gain.connect(context.destination)

oscillator.start(0);

u('.key').handle('mousedown mouseenter', function(e) {
  if (e.buttons === 1) {
    oscillator.frequency.value = u(e.currentTarget).data('freq') * 1;
    gain.gain.value = 1;
  }
});

u('.key').handle('touchstart', function(e) {
  oscillator.frequency.value = u(e.currentTarget).data('freq') * 1;
  gain.gain.value = 1;
});

u('.key').handle('mouseup mouseout touchend', function(e) {
  gain.gain.value = 0;
});
