 function generatePlaylistName(firstName, email) {
    const randomWords = ["Vibes", "Beats", "Mix", "Groove", "Hits", "Jams", "Wave", "Rhythm"];
    const emailPrefix = email.split("@")[0]; // Extracts the part before '@' in the email
    const randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];
    
    return `${firstName}_${emailPrefix}_${randomWord}`;
}



function getTime(date) {
// Convert to 12-hour format
let dateObj = new Date(date)
let hours = dateObj.getUTCHours();
let minutes = dateObj.getUTCMinutes();
let amPm = hours >= 12 ? "PM" : "AM";

hours = hours % 12 || 12; // Convert 0 to 12-hour format

const formattedTime = `${hours}:${minutes.toString().padStart(2, "0")} ${amPm}`;
// console.log(formattedTime); // Output: 2:00 PM
return formattedTime 
}

module.exports = {generatePlaylistName , getTime  } 