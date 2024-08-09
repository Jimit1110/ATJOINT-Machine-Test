# Machine Test Form

This project is a simple HTML form that allows users to input their name, upload a photo, and select their rank. Upon submission, the form generates a unique ID for the user, displays their information in a formatted output section, and generates a PDF with the details.

## Features

- **User Input**: The form collects the user's name, photo, and rank.
- **Unique ID Generation**: A random 6-digit ID is generated for each user.
- **PDF Generation**: After submission, the form displays the user's details and generates a PDF with the content.
- **Responsive Design**: The form is styled to be responsive and user-friendly.

## Technologies Used

- **HTML**: Markup for the form and output container.
- **CSS**: Styling for the form and output, including the background color and button styles.
- **JavaScript**: Handles form submission, image loading, ID generation, and PDF creation.
- **jsPDF**: Library for generating PDFs in the browser.
- **html2canvas**: Library for capturing the output section as an image to be added to the PDF.