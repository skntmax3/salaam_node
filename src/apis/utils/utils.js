 function generatePlaylistName(firstName, email) {
    const randomWords = ["Vibes", "Beats", "Mix", "Groove", "Hits", "Jams", "Wave", "Rhythm"];
    const emailPrefix = email.split("@")[0]; // Extracts the part before '@' in the email
    const randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];
    
    return `${firstName}_${emailPrefix}_${randomWord}`;
}

module.exports = {generatePlaylistName}