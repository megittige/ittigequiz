let selectedImage = null;

function selectImage(imageId) {
    if (selectedImage) {
        document.getElementById(selectedImage).classList.remove('selected');
    }
    selectedImage = imageId;
    document.getElementById(imageId).classList.add('selected');
}

function submitQuiz() {
    const resultContainer = document.getElementById('result');
    if (selectedImage) {
        resultContainer.textContent = `You selected ${selectedImage === 'image1' ? 'Image 1' : 'Image 2'}.`;
        resultContainer.classList.add('text-success');
        resultContainer.style.display = 'block';
    } else {
        alert('Please select an image.');
    }
}