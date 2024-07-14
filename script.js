document.addEventListener("DOMContentLoaded", function () {
    // Section 1 validation
    var currentSection = 1;
    document.getElementById("nextSectionBtn1").addEventListener("click", function () {
        if (!document.getElementById("travelingWithPartner").checked &&
            !document.getElementById("travelingWithChildren").checked &&
            !document.getElementById("travelingWithFriends").checked) {
            return;
        }
        document.getElementById("personalInfoSection").style.display = "block";
        document.getElementById("travelDetailsSection").style.display = "none";
    });

    // Section 2 validation
    document.getElementById("nextSectionBtn2").addEventListener("click", function () {
        var name = document.getElementById("name").value;
        var birthDate = document.getElementById("birthDate").value;
        var gender = document.getElementById("gender").value;
        var dietaryRequirements = document.getElementById("dietaryRequirements").value;

        if (name === "" || birthDate === "" || gender === "default" || dietaryRequirements === "Default") {
            return;
        }
        document.getElementById("travelPreferencesSection").style.display = "block";
        document.getElementById("personalInfoSection").style.display = "none";
    });

    // Section 3 validation
    document.getElementById("nextSectionBtn3").addEventListener("click", function () {
        var preferredTravelDates = document.getElementById("preferredTravelDates").value;
        var budgetRanges = document.getElementById("budgetRanges").value;
        var preferredAccommodation = document.getElementById("preferredAccommodation").value;
        var preferredModesOfTravel = document.getElementById("preferredModesOfTravel").value;
        var preferredTravelEnvironments = document.getElementById("preferredTravelEnvironments").value;
        var preferredDestinations = document.getElementById("preferredDestinations").value;

        if (preferredTravelDates === "" || budgetRanges === "Default" || preferredAccommodation === "Default" ||
            preferredModesOfTravel === "Default" || preferredTravelEnvironments === "Default" ||
            preferredDestinations === "Default") {
            display("Please fill out all required fields.");
            return;
        }
        document.getElementById("submitSection").style.display = "block";
        document.getElementById("travelPreferencesSection").style.display = "none";
    });

    // Form submission validation
    document.getElementById("travelForm").addEventListener("submit", function (event) {
        // Date format validation for birth date
        var birthDate = document.getElementById("birthDate").value;
        var birthDateRegex = /^\d{4}-\d{2}-\d{2}$/;
        if (!birthDate.match(birthDateRegex)) {
            event.preventDefault();
            return;
        }

        // Date format validation for preferred travel dates
        var preferredTravelDates = document.getElementById("preferredTravelDates").value;
        if (!preferredTravelDates.match(birthDateRegex)) {
            event.preventDefault();
            return;
        }
        display("Form submitted successfully!"); // Remove this alert in production
    });
});

// Back buttons for section 2 and section 3
document.getElementById("backSectionBtn").addEventListener("click", function () {
    document.getElementById("travelDetailsSection").style.display = "block";
    document.getElementById("personalInfoSection").style.display = "none";
});

document.getElementById("backSectionBtn1").addEventListener("click", function () {
    document.getElementById("personalInfoSection").style.display = "block";
    document.getElementById("travelPreferencesSection").style.display = "none";
});
