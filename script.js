document.addEventListener("DOMContentLoaded", function() {
    //function to generate a random 6-digit number
    function generateRandomID() {
        return Math.floor(100000 + Math.random() * 900000);
    }

    //get the hidden input field for userId
    const userIdInput = document.getElementById("userId");

    //generate the id when the form loads
    const generatedId = "#" + generateRandomID();
    userIdInput.value = generatedId;

    //handling form submission
    document.getElementById("machineTestForm").addEventListener("submit", function(event) {
        event.preventDefault(); 

        const userName = document.getElementById("userName").value;
        const userPhoto = document.getElementById("userPhoto").files[0];
        const userRank = document.getElementById("userRank").value;

        document.getElementById("displayId").textContent = generatedId;
        document.getElementById("displayName").textContent = userName;
        document.getElementById("displayRank").textContent = userRank;

        //loading the image and displaying it
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.createElement("img");
            img.src = e.target.result;
            img.style.width = "100px";
            img.style.height = "100px";
            img.style.objectFit = "cover";
            const photoContainer = document.getElementById("photoContainer");
            photoContainer.innerHTML = '';
            photoContainer.appendChild(img);

            //generate the pdf after the image is loaded
            generatePDF();
        };
        reader.readAsDataURL(userPhoto);
    });

    function generatePDF() {
        //show the output container
        const outputContainer = document.getElementById("output");
        outputContainer.style.display = "block";

        //use html2canvas to render the output container as a canvas
        html2canvas(outputContainer).then(function(canvas) {
            const imgData = canvas.toDataURL("image/png");

            //create a new jsPDF instance
            const { jsPDF } = window.jspdf;
            const pdf = new jsPDF({
                orientation: 'landscape'
            });

            //add the rendered image to the pdf
            pdf.addImage(imgData, "PNG", 10, 10);

            //save the PDF
            pdf.save("machine_test_output.pdf");
        });
    }
});
