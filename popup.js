const inputText = document.getElementById("inputText");
const wordCountDisplay = document.getElementById("wordCount");
const charCountDisplay = document.getElementById("charCount");
const clearButton = document.getElementById("clearButton");

function updateCounts() {
  const text = inputText.value.trim();
  const words = text ? text.split(/\s+/).length : 0;
  const chars = text.length;

  wordCountDisplay.textContent = words;
  charCountDisplay.textContent = chars;
}

async function fetchClipboardText() {
  try {
    const text = await navigator.clipboard.readText();
    inputText.value = text.trim();
    updateCounts();
  } catch (error) {
    console.error("Failed to read clipboard:", error);
    displayMessage("Clipboard access is restricted. Please paste the text manually.");
  }
}

function displayMessage(message) {
  const messageContainer = document.createElement("div");
  messageContainer.style.color = "#ff0000";
  messageContainer.style.fontSize = "12px";
  messageContainer.style.marginTop = "10px";
  messageContainer.textContent = message;

  const container = document.querySelector(".container");
  container.appendChild(messageContainer);

  setTimeout(() => {
    messageContainer.remove();
  }, 5000);
}

clearButton.addEventListener("click", () => {
  inputText.value = "";
  updateCounts();
});

inputText.addEventListener("input", updateCounts);
document.getElementById("fetchClipboardButton")?.addEventListener("click", fetchClipboardText);
