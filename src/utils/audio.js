// Lofi Cafe Background Music Manager using Vite Environment Variables
let bgAudio = null;
let isAudioEnabled = false;
let audioListeners = [];

// Environment Variables Configuration
const LOFI_MUSIC_URL = import.meta.env.VITE_LOFI_AUDIO_URL || "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3";
const SOFT_VOLUME = parseFloat(import.meta.env.VITE_LOFI_VOLUME) || 0.06;

export function subscribeAudioState(callback) {
  audioListeners.push(callback);
  return () => {
    audioListeners = audioListeners.filter(cb => cb !== callback);
  };
}

function notifyListeners(isPlaying) {
  audioListeners.forEach(cb => cb(isPlaying));
}

export function initAudio() {
  if (typeof window === 'undefined') return;

  if (!bgAudio) {
    bgAudio = new Audio(LOFI_MUSIC_URL);
    bgAudio.loop = true;
    bgAudio.volume = SOFT_VOLUME;
    bgAudio.crossOrigin = "anonymous";
    bgAudio.pause();
  }
}

export function setAudioState(enabled) {
  isAudioEnabled = enabled;
  if (!bgAudio) initAudio();

  if (bgAudio) {
    if (enabled) {
      bgAudio.volume = SOFT_VOLUME;
      bgAudio.play().then(() => {
        notifyListeners(true);
      }).catch(err => {
        console.log("Audio play error:", err);
        notifyListeners(false);
      });
    } else {
      bgAudio.pause();
      notifyListeners(false);
    }
  }
}

export function toggleLofiMusic() {
  initAudio();
  if (!bgAudio) return false;

  if (bgAudio.paused) {
    bgAudio.volume = SOFT_VOLUME;
    bgAudio.play().then(() => {
      isAudioEnabled = true;
      notifyListeners(true);
    }).catch(err => {
      console.log("Audio play error:", err);
      isAudioEnabled = false;
      notifyListeners(false);
    });
    return true;
  } else {
    bgAudio.pause();
    isAudioEnabled = false;
    notifyListeners(false);
    return false;
  }
}

export function getAudioState() {
  return isAudioEnabled && bgAudio && !bgAudio.paused;
}
