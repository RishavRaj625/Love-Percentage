function calculateLove() {
    const name1 = document.getElementById("name1").value.trim();
    const name2 = document.getElementById("name2").value.trim();

    if (name1 === "" || name2 === "") {
        alert("⚠️ Please enter both names!");
        return;
    }

    const lovePercentage = Math.floor(Math.random() * 101);
    const result = document.getElementById("result");
    let emoji = "";
    let prediction = "";

    // Assign emoji and prediction based on love percentage
    if (lovePercentage < 30) {
        emoji = "💔";
        prediction = "Not much love here. Keep looking!";
    } else if (lovePercentage >= 30 && lovePercentage < 50) {
        emoji = "😊";
        prediction = "It's a start, but you'll need to work on it!";
    } else if (lovePercentage >= 50 && lovePercentage < 70) {
        emoji = "💞";
        prediction = "There’s potential for love. Keep trying!";
    } else if (lovePercentage >= 70 && lovePercentage < 90) {
        emoji = "💕";
        prediction = "This is a strong connection. Love is growing!";
    } else {
        emoji = "❤️‍🔥";
        prediction = "Perfect match! True love is in the air!";
    }

    // Display result
    result.innerHTML = `💖 ${name1} and ${name2}'s Love Percentage: <strong>${lovePercentage}% ${emoji}</strong>`;
    result.innerHTML += `<br>${prediction}`;
}

function resetFields() {
    document.getElementById("name1").value = "";
    document.getElementById("name2").value = "";
    document.getElementById("result").innerHTML = "💌 Result will appear here...";
}
