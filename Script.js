async function shortenUrl() {
    const longUrl = document.getElementById("longUrl").value;
    const resultBox = document.getElementById("result");
    const shortUrlText = document.getElementById("shortUrl");

    if (!longUrl) {
        alert("Please enter a URL");
        return;
    }

    try {
        const response = await fetch(
            `https://tinyurl.com/api-create.php?url=${encodeURIComponent(longUrl)}`
        );

        const shortUrl = await response.text();

        shortUrlText.href = shortUrl;
        shortUrlText.textContent = shortUrl;
        resultBox.style.display = "block";
    } catch {
        alert("Error shortening URL");
    }
}

function copyUrl() {
    const text = document.getElementById("shortUrl").textContent;
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
}

function toggleTheme() {
    document.body.classList.toggle("dark");
}
