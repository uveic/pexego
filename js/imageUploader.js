const logError = (userFeedbackDiv, error) => {
  if (userFeedbackDiv) {
    userFeedbackDiv.textContent = error.message;
    userFeedbackDiv.classList.remove('feedback-success');
    userFeedbackDiv.classList.add('feedback-error');
    userFeedbackDiv.classList.remove('null');
    setTimeout(() => {userFeedbackDiv.classList.add('null')}, 15000);
  }
};

function uploadImage(
  file,
  imageContainer,
  imageClassName,
  userFeedbackDiv,
  then = () => {},
  catchError = () => {}
) {
  if (!/\.(jpe?g|png|gif|webp)$/i.test(file.name)) {
    logError(userFeedbackDiv, new Error(file.name + ' is not an image'));
    return;
  }

  let formData = new FormData();
  formData.append('files[]', file);

  const reader = new FileReader();
  reader.addEventListener('load', function () {
    try {
      let image = new Image();
      image.className = imageClassName;
      image.src = String(reader.result);

      imageContainer.appendChild(image);
      then();
    } catch {
      catchError();
    }
  });

  reader.readAsDataURL(file);
}

export {uploadImage};
