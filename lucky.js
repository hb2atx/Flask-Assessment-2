
function processForm(evt) {
    evt.preventDefault(); // Prevent the normal form submission

    // Get form data
    const formData = {
        name: $("#name").val(),
        email: $("#email").val(),
        year: $("#year").val(),
        color: $("#color").val()
    };

    // Make AJAX call to the backend API
    $.ajax({
        type: "POST",
        url: "/api/get-lucky-num",
        contentType: "application/json",
        data: JSON.stringify(formData),
        success: handleResponse,
        error: function (error) {
            console.error("Error:", error);
        }
    });
}


function handleResponse(resp) {
    // Check if the API returned errors
    if (resp.errors) {
        // Display error messages
        $.each(resp.errors, function (field, error) {
            $(`#${field}-err`).text(error[0]);
        });
    } else {
        // Display success message
        const resultDiv = $("#result");
        resultDiv.text(`Your lucky number is ${resp.num.num} (${resp.num.fact}).\nYour birth year (${resp.year.year}) fact is ${resp.year.fact}.`);
    }
}

// Attach a submit event listener to the form
$("#lucky-form").on("submit", processForm);
