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

    setupAutocomplete("from");
    setupAutocomplete("to");
});
