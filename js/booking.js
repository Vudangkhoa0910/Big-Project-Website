document.addEventListener('DOMContentLoaded', () => {
    const dealsContainers = document.querySelectorAll('.deals-container');
    const animationDuration = 2500; 

    function scrollToNext(container) {
        const dealItems = container.querySelectorAll('.deal-item');
        let currentIndex = 0;
        const scrollAmount = dealItems[0].offsetWidth + parseInt(window.getComputedStyle(dealItems[0]).marginRight);

        function scroll() {
            if (currentIndex >= dealItems.length) {
                container.scrollTo({
                    left: 0,
                    behavior: 'auto' 
                });
                currentIndex = 1;
            } else {
                currentIndex++;
            }
            const newPosition = currentIndex * scrollAmount;
            container.scrollTo({
                left: newPosition,
                behavior: 'smooth'
            });
        }

        setInterval(scroll, animationDuration);
    }

    dealsContainers.forEach(container => {
        scrollToNext(container);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const locations = [
        "TP HCM, Việt Nam (SGN - Sân bay Tân Sơn Nhất)",
        "Tokyo, Nhật Bản (TYO - Tất cả sân bay ở Tokyo)",
        "Hồng Kông, Hồng Kông (HKG - Sân bay quốc tế Hồng Kông)",
        "Đà Nẵng, Việt Nam (DAD - Sân bay Đà Nẵng)",
        "Hà Nội, Việt Nam (HAN - Sân bay Nội Bài)",
        "Đà Lạt, Việt Nam (DLI - Sân bay Liên Khương)",
        "New York, Hoa Kỳ (JFK - Sân bay quốc tế John F. Kennedy)",
        "Los Angeles, Hoa Kỳ (LAX - Sân bay quốc tế Los Angeles)"
    ];

    function setupAutocomplete(inputId) {
        const inputElement = document.getElementById(inputId);
        const autoBox = inputElement.nextElementSibling;

        inputElement.addEventListener("input", function() {
            showSuggestions(inputElement, autoBox, locations);
        });

        inputElement.addEventListener("focus", function() {
            showSuggestions(inputElement, autoBox, locations);
        });

        document.addEventListener("click", function(event) {
            if (!inputElement.contains(event.target) && !autoBox.contains(event.target)) {
                autoBox.classList.remove("active");
            }
        });
    }

    function showSuggestions(inputElement, autoBox, locations) {
        const value = inputElement.value.toLowerCase();
        autoBox.innerHTML = "";
        if (value) {
            const filteredLocations = locations.filter(location => location.toLowerCase().includes(value));
            filteredLocations.forEach(location => {
                const li = document.createElement("li");
                li.textContent = location;
                li.addEventListener("click", function() {
                    inputElement.value = location;
                    autoBox.innerHTML = "";
                    autoBox.classList.remove("active");
                    if (inputElement.id === "from") {
                        updateDepartureDate();
                    }
                });
                autoBox.appendChild(li);
            });
            autoBox.classList.add("active");
        } else {
            autoBox.classList.add("active");
            locations.forEach(location => {
                const li = document.createElement("li");
                li.textContent = location;
                li.addEventListener("click", function() {
                    inputElement.value = location;
                    autoBox.innerHTML = "";
                    autoBox.classList.remove("active");
                    if (inputElement.id === "from") {
                        updateDepartureDate();
                    }
                });
                autoBox.appendChild(li);
            });
        }
    }

    function updateDepartureDate() {
        const departureDateInput = document.getElementById("departure-date");
        const today = new Date().toISOString().split('T')[0];
        departureDateInput.value = today;
    }

    function toggleReturnDate() {
        const returnCheck = document.getElementById("return-check");
        const returnDateContainer = document.getElementById("return-date-container");
        const returnDateInput = document.getElementById("return-date");
        if (returnCheck.checked) {
            returnDateContainer.style.display = "block";
            returnDateInput.removeAttribute("disabled");
        } else {
            returnDateContainer.style.display = "none";
            returnDateInput.setAttribute("disabled", "true");
        }
    }

    setupAutocomplete("from");
    setupAutocomplete("to");

    document.getElementById("return-check").addEventListener("change", toggleReturnDate);
});



