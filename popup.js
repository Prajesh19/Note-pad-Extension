const noteArea = document.getElementById("noteArea");
const themeSelect = document.getElementById("themeSelect");

// Load saved note and theme
chrome.storage.local.get(["note", "theme"], (data) => {
  if (data.note) {
    noteArea.value = data.note;
  }
  const savedTheme = data.theme || "light";
  document.body.className = savedTheme;
  themeSelect.value = savedTheme;
});

// Save note automatically
noteArea.addEventListener("input", () => {
  chrome.storage.local.set({ note: noteArea.value });
});

// Change theme when dropdown changes
themeSelect.addEventListener("change", () => {
  const selectedTheme = themeSelect.value;
  document.body.className = selectedTheme;
  chrome.storage.local.set({ theme: selectedTheme });
});
