import {Global} from './localisation.js';

class UploaderClass {
  logError(errorObj = null, errorMessage = null) {
    const feedbackDiv = document.querySelector('#feedback');

    if (!feedbackDiv) return;

    feedbackDiv.textContent = errorMessage ?? (errorObj ? errorObj.message : Global.get('genericError'));
    feedbackDiv.classList.remove('feedback-success');
    feedbackDiv.classList.add('feedback-error');
    feedbackDiv.classList.remove('null');
    setTimeout(() => {feedbackDiv.classList.add('null')}, 15000);

    console.log(errorObj);
  }

  uploadImage(
    file,
    imageContainer,
    imageClassName,
    then = () => {},
    catchError = () => {}
  ) {
    if (!/\.(jpe?g|png|gif|webp)$/i.test(file.name)) {
      this.logError(new Error(file.name + ' is not an image'));
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
}

export const Uploader = new UploaderClass();
