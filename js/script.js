// Array containing the local audio files, metadata, and pixel-art image paths
const playlist = [
  {
    title: "Addict",
    artist: "Kosheen",
    cover: "./image/kosheen.jpg",
    url: "./music/01 - Kosheen - Addict.mp3"
  },
  {
    title: "Somewhere Only We Know",
    artist: "Keane",
    cover: "./image/keane.jpg",
    url: "./music/1 1 - Keane - Somewhere Only We Know (320).mp3"
  },
  {
    title: "Rivers Between Us",
    artist: "Draconian",
    cover: "./image/draconian.jpg",
    url: "./music/1_8 - Rivers Between Us - Draconian (320).mp3"
  },
  {
    title: "Hangman",
    artist: "Madder Mortem",
    cover: "./image/madder mortem.jpg",
    url: "./music/Madder Mortem - Hangman.mp3"
  },
  {
    title: "Majnoon",
    artist: "Unknown",
    cover: "",
    url: "./music/Majnoon.mp3"
  },
  {
    title: "Kenaram",
    artist: "REZ",
    cover: "./image/REZ.jpg",
    url: "./music/REZ - Kenaram.mp3"
  },
  {
    title: "Rangi",
    artist: "REZ",
    cover: "./image/REZ.jpg",
    url: "./music/REZ-Rangi-320.mp3"
  },
  {
    title: "Paganini Cantabile e Valser",
    artist: "Ruggiero Ricci",
    cover: "./image/ricci.jpg",
    url: "./music/Ruggiero Ricci - Paganini  Cantabile e Valser, Op. 19, MS 45.mp3"
  },
  {
    title: "That z My Name",
    artist: "Sly Boogy",
    cover: "./image/boogy.jpg",
    url: "./music/That z My Name (Tha Clean)   Sly Boogy.m4a"
  },
{
  title: "Boulevard of Broken Dreams",
  artist: "Green Day",
  cover: "./image/green day.jpg",
  url: "./music/1_1 - Boulevard of Broken Dreams - Green Day (320).mp3"
},
{
  title: "I don't want to miss a thing",
  artist: "Aerosmith",
  cover: "./image/aerosmith.jpg",
  url: "./music/1_1 - I Don't Want To Miss A Thing - Aerosmith (320).mp3"
},
{
  title: "So Far Away",
  artist: "Staind",
  cover: "./image/staind.jpg",
  url: "./music/1_3 - So Far Away - Staind (320).mp3"
},
{
  title: "It's been a while",
  artist: "Staind",
  cover: "./image/staind.jpg",
  url: "./music/1_4 - It's Been Awhile - Staind (320).mp3"
},
{
  title: "Something to remind you",
  artist: "Staind",
  cover: "./image/staind.jpg",
  url: "./music/1_10 - Something to Remind You - Staind (320).mp3"
},
{
  title: "Outside",
  artist: "Staind",
  cover: "./image/staind.jpg",
  url: "./music/1_11 - Outside - Staind (320).mp3"
},
{
  title: "Something In The Way",
  artist: "Nirvana",
  cover: "./image/nirvana.jpg",
  url: "./music/1_12 - Something In The Way - Nirvana (320).mp3"
},
{
  title: "Dele Tanha",
  artist: "ONEDAM",
  cover: "",
  url: "./music/ONEDAM - Dele Tanha.mp3"
}




];

let currentTrackIndex = 0;
let isPlaying = false;

// Gather DOM Node Elements
const audioEngine = document.getElementById('audio-engine');
const trackTitle = document.getElementById('track-title');
const trackArtist = document.getElementById('track-artist');
const albumArt = document.getElementById('album-art');
const progressBar = document.getElementById('progress-bar');
const currentTimeDisplay = document.getElementById('current-time');
const totalDurationDisplay = document.getElementById('total-duration');

const btnPlayPause = document.getElementById('btn-play-pause');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const themeToggleButton = document.getElementById('theme-toggle');
const themeStorageKey = 'portfolio-theme';

const audioAvailable = Boolean(audioEngine);
if (!audioAvailable) {
  console.warn('Audio engine element not found; audio playback disabled.');
}

function applyTheme(theme) {
  const root = document.documentElement;
  if (theme === 'light') {
    root.classList.add('light');
    if (themeToggleButton) themeToggleButton.textContent = 'Dark Mode';
  } else {
    root.classList.remove('light');
    if (themeToggleButton) themeToggleButton.textContent = 'Light Mode';
  }
}

function getSavedTheme() {
  return localStorage.getItem(themeStorageKey);
}

function saveTheme(theme) {
  localStorage.setItem(themeStorageKey, theme);
}

function getPreferredTheme() {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  return 'light';
}

function initTheme() {
  const saved = getSavedTheme();
  applyTheme(saved || getPreferredTheme());
}

function toggleTheme() {
  const current = document.documentElement.classList.contains('light') ? 'light' : 'dark';
  const nextTheme = current === 'light' ? 'dark' : 'light';
  applyTheme(nextTheme);
  saveTheme(nextTheme);
}

if (themeToggleButton) {
  themeToggleButton.addEventListener('click', toggleTheme);
}

// Initialize the first track data
function loadTrack(index) {
  const track = playlist[index];
  if (audioAvailable) {
    audioEngine.src = track.url;
    audioEngine.load();
  }
  if (trackTitle) trackTitle.textContent = track.title;
  if (trackArtist) trackArtist.textContent = `ARTIST: ${track.artist}`;
  if (albumArt) albumArt.style.backgroundImage = `url('${track.cover}')`;
  
  // Reset track sliders
  if (progressBar) progressBar.value = 0;
  if (currentTimeDisplay) currentTimeDisplay.textContent = "0:00";
  if (totalDurationDisplay) totalDurationDisplay.textContent = "0:00";
}

// Control Toggle Switch Action
function togglePlayPause() {
  if (isPlaying) {
    pauseTrack();
  } else {
    playTrack();
  }
}

function playTrack() {
  if (!audioAvailable) return;
  if (audioEngine.paused) {
    audioEngine.play().then(() => {
      isPlaying = true;
      if (btnPlayPause) btnPlayPause.textContent = "⏸";
    }).catch(err => console.log("Playback interaction blocked:", err));
  }
}

function pauseTrack() {
  if (!audioAvailable) return;
  if (!audioEngine.paused) {
    audioEngine.pause();
    isPlaying = false;
    if (btnPlayPause) btnPlayPause.textContent = "▶";
  }
}

function nextTrack() {
  currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
  loadTrack(currentTrackIndex);
  if (isPlaying) playTrack();
}

function prevTrack() {
  currentTrackIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
  loadTrack(currentTrackIndex);
  if (isPlaying) playTrack();
}

// Convert native seconds tracking strings into readable MM:SS clocks
function formatTime(seconds) {
  if (isNaN(seconds)) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

// Core Hardware Engine Updates
if (audioAvailable) {
  audioEngine.addEventListener('timeupdate', () => {
    if (audioEngine.duration && progressBar) {
      const currentPercent = (audioEngine.currentTime / audioEngine.duration) * 100;
      progressBar.value = currentPercent;
      currentTimeDisplay.textContent = formatTime(audioEngine.currentTime);
    }
  });

  audioEngine.addEventListener('loadedmetadata', () => {
    if (totalDurationDisplay) {
      totalDurationDisplay.textContent = formatTime(audioEngine.duration);
    }
  });

  // Jump timeline manually on scrub input
  if (progressBar) {
    progressBar.addEventListener('input', () => {
      if (audioEngine.duration) {
        const targetTime = (progressBar.value / 100) * audioEngine.duration;
        audioEngine.currentTime = targetTime;
      }
    });
  }

  // Auto-advance song on track termination hook
  audioEngine.addEventListener('ended', () => {
    nextTrack();
  });
}

// Event Binding Listeners
if (btnPlayPause) btnPlayPause.addEventListener('click', togglePlayPause);
if (btnNext) btnNext.addEventListener('click', nextTrack);
if (btnPrev) btnPrev.addEventListener('click', prevTrack);

// Boot Application Player
window.addEventListener('DOMContentLoaded', () => {
  initTheme();
  if (audioAvailable) {
    audioEngine.preload = 'metadata';
    try { audioEngine.crossOrigin = 'anonymous'; } catch (e) {}
  }
  loadTrack(currentTrackIndex);
  if (btnPlayPause) btnPlayPause.textContent = '▶';

  const headerText = document.querySelector('.header-text');
  if (headerText) {
    const title = headerText.querySelector('h1');
    const subtitle = headerText.querySelector('h2');
    const fullTitle = title ? title.textContent.trim() : '';
    const fullSubtitle = subtitle ? subtitle.textContent.trim() : '';

    if (title) title.textContent = '';
    if (subtitle) subtitle.textContent = '';
    headerText.classList.add('typing');

    const parts = [
      {el: title, text: fullTitle, delay: 0},
      {el: subtitle, text: fullSubtitle, delay: fullTitle.length * 80 + 250}
    ];

    parts.forEach(({el, text, delay}) => {
      if (!el) return;
      setTimeout(() => {
        let index = 0;
        const interval = setInterval(() => {
          el.textContent += text[index] || '';
          index += 1;
          if (index >= text.length) {
            clearInterval(interval);
            if (subtitle === el) {
              headerText.classList.remove('typing');
            }
          }
        }, 80);
      }, delay);
    });
  }
});

// Games logic
const guessInput = document.getElementById('guess-input');
const guessButton = document.getElementById('guess-button');
const guessResult = document.getElementById('guess-result');
const rpsButtons = document.querySelectorAll('.rps-buttons button');
const rpsResult = document.getElementById('rps-result');
const tapStart = document.getElementById('tap-start');
const tapButton = document.getElementById('tap-button');
const tapResult = document.getElementById('tap-result');

let secretNumber = Math.floor(Math.random() * 20) + 1;
let tapCount = 0;
let tapStartTime = null;

function resetGuessGame() {
  secretNumber = Math.floor(Math.random() * 20) + 1;
  if (guessResult) guessResult.textContent = 'New number ready.';
}

if (guessButton && guessInput && guessResult) {
  guessButton.addEventListener('click', () => {
    const guess = Number(guessInput.value);
    if (!guess || guess < 1 || guess > 20) {
      guessResult.textContent = 'Pick a number between 1 and 20.';
      return;
    }
    if (guess === secretNumber) {
      guessResult.textContent = `Correct! It was ${secretNumber}. New game started.`;
      resetGuessGame();
    } else if (guess < secretNumber) {
      guessResult.textContent = 'Too low! Try higher.';
    } else {
      guessResult.textContent = 'Too high! Try lower.';
    }
  });
}

if (rpsButtons && rpsResult) {
  const choices = ['rock', 'paper', 'scissors'];
  const beats = { rock: 'scissors', paper: 'rock', scissors: 'paper' };
  rpsButtons.forEach(button => {
    button.addEventListener('click', () => {
      const player = button.dataset.choice;
      const computer = choices[Math.floor(Math.random() * choices.length)];
      let resultText = `Computer picked ${computer}. `;
      if (player === computer) {
        resultText += 'Draw!';
      } else if (beats[player] === computer) {
        resultText += 'You win!';
      } else {
        resultText += 'You lose!';
      }
      rpsResult.textContent = resultText;
    });
  });
}

if (tapStart && tapButton && tapResult) {
  tapStart.addEventListener('click', () => {
    tapCount = 0;
    tapStartTime = Date.now();
    tapButton.disabled = false;
    tapResult.textContent = 'Tap the button 10 times fast!';
  });
  tapButton.addEventListener('click', () => {
    tapCount += 1;
    const elapsed = (Date.now() - tapStartTime) / 1000;
    if (tapCount >= 10) {
      tapButton.disabled = true;
      const score = Math.max(0, Math.round((10 / elapsed) * 100));
      tapResult.textContent = `Done! ${tapCount} taps in ${elapsed.toFixed(2)}s. Score: ${score}`;
    } else {
      tapResult.textContent = `Taps: ${tapCount}/10`;
    }
  });
}

// Preloader hide helper
let preloaderHidden = false;
function hidePreloader() {
  const preloader = document.getElementById('preloader');
  if (!preloader || preloaderHidden) return;
  preloaderHidden = true;
  preloader.classList.add('fade-out');
  preloader.style.pointerEvents = 'none';
  setTimeout(() => {
    if (preloader.parentNode) {
      preloader.parentNode.removeChild(preloader);
    }
  }, 700);
}

function hidePreloaderImmediately() {
  const preloader = document.getElementById('preloader');
  if (!preloader || preloaderHidden) return;
  preloaderHidden = true;
  preloader.style.transition = 'none';
  preloader.style.opacity = '0';
  preloader.style.pointerEvents = 'none';
  if (preloader.parentNode) {
    preloader.parentNode.removeChild(preloader);
  }
}

function tryHidePreloader() {
  if (document.readyState === 'interactive' || document.readyState === 'complete') {
    hidePreloader();
  }
}

document.addEventListener('readystatechange', tryHidePreloader);
tryHidePreloader();
window.addEventListener('load', hidePreloader);
window.addEventListener('DOMContentLoaded', hidePreloader);
setTimeout(hidePreloader, 1500);
setTimeout(hidePreloaderImmediately, 5000);
