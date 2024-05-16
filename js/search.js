let currentIndex = -1;
let matchingElements = [];

document.getElementById("searchInput").addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    searchAndHighlight();
  }
});

document.addEventListener("click", function(event) {
  if (event.target !== document.getElementById("searchInput") && event.target.tagName !== 'BUTTON' && event.target.tagName !== 'IMG') {
    clearHighlights();
    currentIndex = -1;
    matchingElements = [];
  }
});

function searchAndHighlight() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const contents = document.querySelectorAll('h1, p');

  if (currentIndex === -1 || input !== matchingElements.input) {
    // Xóa highlight cũ
    contents.forEach(content => {
      content.innerHTML = content.textContent;
    });

    matchingElements = [];
    contents.forEach(content => {
      if (content.textContent.toLowerCase().includes(input)) {
        matchingElements.push(content);
      }
    });
    matchingElements.input = input;
    currentIndex = -1;
  }

  if (matchingElements.length > 0) {
    currentIndex = (currentIndex + 1) % matchingElements.length;
    const el = matchingElements[currentIndex];
    const regex = new RegExp(`(${input})`, 'gi');
    el.innerHTML = el.textContent.replace(regex, '<span class="highlight">$1</span>');
    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  } else {
    alert("Không tìm thấy kết quả.");
  }
}

function clearHighlights() {
  const contents = document.querySelectorAll('h1, p');
  contents.forEach(content => {
    content.innerHTML = content.textContent;
  });
}
