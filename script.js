document.addEventListener('DOMContentLoaded', () => {
    const uploadArea = document.getElementById('upload-area');
    const uploadBtn = document.getElementById('upload-btn');
    const fileInput = document.getElementById('file-input');
    const statusDiv = document.getElementById('status');

    // Trigger file input when the button is clicked
    uploadBtn.addEventListener('click', () => {
        fileInput.click();
    });

    // Handle drag and drop events
    uploadArea.addEventListener('dragover', (event) => {
        event.preventDefault();
        uploadArea.classList.add('hover');
    });

    uploadArea.addEventListener('dragleave', () => {
        uploadArea.classList.remove('hover');
    });

    uploadArea.addEventListener('drop', (event) => {
        event.preventDefault();
        uploadArea.classList.remove('hover');
        const files = event.dataTransfer.files;
        if (files.length > 0) {
            handleFile(files[0]);
        }
    });

    // Handle file selection from the browse button
    fileInput.addEventListener('change', () => {
        if (fileInput.files.length > 0) {
            handleFile(fileInput.files[0]);
        }
    });
    
    // The main function to handle the selected file
    function handleFile(file) {
        if (file.type !== 'application/pdf') {
            statusDiv.textContent = 'Error: Please upload a PDF file.';
            statusDiv.style.color = 'red';
            return;
        }

        statusDiv.textContent = `File selected: ${file.name}`;
        statusDiv.style.color = 'green';

        // LATER: We will add the code here to upload the file to our backend
        // const formData = new FormData();
        // formData.append('pdf_file', file);
        //
        // statusDiv.textContent = 'Uploading and processing...';
        // fetch('YOUR_BACKEND_URL_HERE', {
        //     method: 'POST',
        //     body: formData
        // })
        // .then(response => response.blob())
        // .then(blob => {
        //     // Handle the returned LaTeX file
        // })
        // .catch(error => {
        //     console.error('Error:', error);
        //     statusDiv.textContent = 'An error occurred during upload.';
        //     statusDiv.style.color = 'red';
        // });
    }
});

    
