// Function to change the audio track based on user selection

const songItems = document.querySelectorAll('.song-item');
const audioPlayer = document.getElementById('audioPlayer');
const audioSource = document.getElementById('audioSource');
const trackTitle = document.getElementById('trackTitle');
const trackArtist = document.getElementById('trackArtist');

// Listen for song selection
songItems.forEach(item => {
    item.addEventListener('click', () => {
        const audioSrc = item.getAttribute('data-audio');
        const title = item.getAttribute('data-title');
        const artist = item.getAttribute('data-artist');

        // Update audio source and track details
        audioSource.src = audioSrc;
        trackTitle.textContent = title;
        trackArtist.textContent = artist;

        // Load and play the new song
        audioPlayer.load();
        audioPlayer.play();
    });
});