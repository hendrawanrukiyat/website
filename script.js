function startLoveRain() {
    const loveRain = document.getElementById('loveRain');
    loveRain.innerHTML = ''; // Kosongkan efek sebelumnya

    for (let i = 0; i < 20; i++) { // Menghasilkan 20 hati
        const heart = document.createElement('span');
        heart.className = 'heart';
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + 'vw'; // Posisi acak
        heart.style.animationDuration = Math.random() * 2 + 3 + 's'; // Durasi acak antara 3-5 detik
        loveRain.appendChild(heart);

        // Menghapus hati setelah animasi selesai
        heart.addEventListener('animationend', () => {
            heart.remove();
        });
    }
}