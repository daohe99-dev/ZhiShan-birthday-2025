document.addEventListener('DOMContentLoaded', () => {

    // --- Element Selectors ---
    const musicButton = document.getElementById('play-music-btn');
    const birthdaySong = document.getElementById('birthday-song');
    const memoryVideo = document.getElementById('memory-video'); // Get the video element
    const hiddenElements = document.querySelectorAll('.hidden');
    let isPlaying = false;

    // --- Music Player Logic ---
    musicButton.addEventListener('click', () => {
        if (isPlaying) {
            birthdaySong.pause();
            musicButton.innerText = 'Resume the Celebration 🎉';
        } else {
            birthdaySong.play();
            musicButton.innerText = 'Pause the Music ⏸️';
        }
        isPlaying = !isPlaying;
    });

    // --- Logic to pause music when video plays ---
    // FIX: Check if the video element actually exists before adding an event listener.
    // This prevents the script from breaking if the video ID is missing.
    if (memoryVideo) {
        memoryVideo.addEventListener('play', () => {
            // Check if the background music is currently playing
            if (isPlaying) {
                birthdaySong.pause();
                musicButton.innerText = 'Resume the Celebration 🎉';
                isPlaying = false;
            }
        });
    }

    // --- Scroll Animation Logic ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.2 // Trigger animation when 20% of the element is visible
    });

    hiddenElements.forEach((el) => observer.observe(el));

});