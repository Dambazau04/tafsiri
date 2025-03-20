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
const surahs = [
    { name: "Fatiha", arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ(1) الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ(2) الرَّحْمَٰنِ الرَّحِيمِ(3) مَالِكِ يَوْمِ الدِّينِ(4) إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ(5) اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ(6) صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ(7)", translation: "Godiya ta tabbata ga Allah, Ubangijin halittu;Mai rahama, Mai jin ƙai;Mai nuna Mulkin Rãnar Sakamako.Kai muke bauta wa, kuma Kai muke neman taimakonKa.Ka shiryar da mu ga hanya madaidaiciya.Hanyar waɗanda Ka yi wa ni'ima, ba waɗanda aka yi wa fushi ba, kuma ba ɓatattu ba." },
    { name: "Al-Baqara", arabic: "الم", translation: "Alif Lam Mim..." },
];

window.onload = function () {
    let dropdown = document.getElementById("surahDropdown");
    surahs.forEach((surah, index) => {
        let option = document.createElement("option");
        option.value = index;
        option.text = surah.name;
        dropdown.add(option);
    });
};

function loadSurah() {
    let index = document.getElementById("surahDropdown").value;
    document.getElementById("Malam Musa Kassim Tarjamah").innerText = surahs[index].Tarjamah;
    document.getElementById("surah-title").innerText = surahs[index].name;
    document.getElementById("surah-arabic").innerText = surahs[index].arabic;
    document.getElementById("surah-translation").innerText = surahs[index].translation;
}

function downloadSurah() {
    let index = document.getElementById("surahDropdown").value;
    let text = `${surahs[index].name}\n\n${surahs[index].arabic}\n\n${surahs[index].translation}`;
    let blob = new Blob([text], { type: "text/plain" });
    let link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${surahs[index].name}.txt`;
    link.click();
}

function printSurah() {
    window.print();
}
