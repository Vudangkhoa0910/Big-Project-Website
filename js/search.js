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
    clearHighlights();

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
    highlightText(el, input);
    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  } else {
    alert("Không tìm thấy kết quả.");
  }
}

function highlightText(element, text) {
  const innerHTML = element.innerHTML;
  const index = innerHTML.toLowerCase().indexOf(text.toLowerCase());
  if (index >= 0) {
    const highlightedHTML = innerHTML.substring(0, index) +
                            '<span class="highlight">' +
                            innerHTML.substring(index, index + text.length) +
                            '</span>' +
                            innerHTML.substring(index + text.length);
    element.innerHTML = highlightedHTML;
  }
}

function clearHighlights() {
  const contents = document.querySelectorAll('h1, p');
  contents.forEach(content => {
    const highlightedSpans = content.querySelectorAll('.highlight');
    highlightedSpans.forEach(span => {
      span.outerHTML = span.innerHTML; 
    });
  });
}
