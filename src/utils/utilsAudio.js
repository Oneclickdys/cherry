export function playAudio(audioPlayer) {
  return audioPlayer.play();
}

export function createAudio(audioFile) {
  const audio = new Audio();
  audio.src = audioFile;
  return audio;
}

export function stopAudio(audioPlayer) {
  if (audioPlayer) {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
  }
}

export function pauseAudio(audioPlayer) {
  audioPlayer.pause();
}

export function getSuccessAudio() {
  return 'audios/good_sound.mp3';
}

export function getFailAudio() {
  return 'audios/lose_sound.mp3';
}

export function getBackgroundAudio() {
  return 'audios/background.mp3';
}

export function getToGameAudio() {
  return 'audios/to-game.mp3';
}
