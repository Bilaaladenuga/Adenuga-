document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.getElementById("calculateButton");
    const resultElement = document.getElementById("result");

    calculateButton.addEventListener("click", function () {
        const distanceA = parseFloat(document.getElementById("distanceA").value);
        const distanceB = parseFloat(document.getElementById("distanceB").value);

        if (isNaN(distanceA) || isNaN(distanceB)) {
            resultElement.textContent = "Please enter valid distances.";
        } else {
            const distance = Math.abs(distanceA - distanceB);
            resultElement.textContent = `The distance between A and B is ${distance.toFixed(2)} kilometers.`;
        }
    });
});