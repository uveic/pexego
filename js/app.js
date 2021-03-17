import {classes} from "./pexego.js";

document.querySelectorAll('.pexego-section-controls-button').forEach(bu => {
  bu.addEventListener('click', e => {
    e.preventDefault();

    const areControlsActive = bu.dataset.areControlsActive.length > 0;

    if (areControlsActive) {
      bu.innerHTML = '<img class="img-svg m-r-05" src="/img/svg/gear.svg" alt="Display controls">Display Controls';

      document.querySelectorAll('.' + classes.sectionControls).forEach(c => {
        c.classList.add('null');
      });
      document.querySelectorAll('.' + classes.actionBar).forEach(ab => ab.classList.add('null'));
      document.querySelectorAll('.' + classes.sectionWrapper).forEach(sw => {
        sw.classList.remove(classes.sectionWrapperBorder)
      });
    } else {
      bu.innerHTML = '<img class="img-svg m-r-05" src="/img/svg/gear.svg" alt="Display controls">Close Controls';

      document.querySelectorAll('.' + classes.sectionControls).forEach(c => {
        c.classList.remove('null');
      });
      document.querySelectorAll('.' + classes.actionBar).forEach(ab => ab.classList.remove('null'));
      document.querySelectorAll('.' + classes.sectionWrapper).forEach(sw => {
        sw.classList.add(classes.sectionWrapperBorder)
      });
    }

    bu.dataset.areControlsActive = areControlsActive ? '' : '1';
  });
});

document.querySelectorAll('.pexego-preview').forEach(bu => {
  bu.addEventListener('click', e => {
    e.preventDefault();

    const isPreviewActive = bu.dataset.isPreviewActive.length > 0;

    document.querySelectorAll('.' + classes.actionBar).forEach(ab => ab.classList.add('null'));
    document.querySelectorAll('.' + classes.sectionControls).forEach(ab => ab.classList.add('null'));
    const controlsButton = document.querySelector('.pexego-section-controls-button');
    controlsButton.innerHTML =
      '<img class="img-svg m-r-05" src="/img/svg/gear.svg" alt="Display controls">Display Controls';
    controlsButton.dataset.areControlsActive = '';

    if (isPreviewActive) {
      bu.innerHTML = '<img class="img-svg m-r-05" src="/img/svg/arrows-out-simple.svg" alt="Preview">Preview';

      document.querySelector('.pexego-section-controls-button').classList.remove('null');
      document.querySelector('header').classList.remove('null');
      document.querySelector('.pexego-add-sections').classList.remove('null');
      document.querySelectorAll('.' + classes.contentImageCaption).forEach(ic => {
          ic.classList.remove('null');
      });
      document.querySelectorAll(
        '.' + classes.contentParagraph + ', ' +
        '.' + classes.contentTitle + ', ' +
        '.' + classes.contentSubtitle + ', ' +
        '.' + classes.contentImageCaption
      ).forEach(el => el.contentEditable = 'true');
    } else {
      bu.innerHTML = '<img class="img-svg m-r-05" src="/img/svg/arrows-in-simple.svg" alt="Preview">Close Preview';
      document.querySelector('.pexego-section-controls-button').classList.add('null');
      document.querySelector('header').classList.add('null');
      document.querySelector('.pexego-add-sections').classList.add('null');
      document.querySelectorAll('.' + classes.contentImageCaption).forEach(ic => {
        if (!ic.textContent.trim().length) {
          ic.classList.add('null');
        }
      });
      document.querySelectorAll(
        '.' + classes.contentParagraph + ', ' +
        '.' + classes.contentTitle + ', ' +
        '.' + classes.contentSubtitle + ', ' +
        '.' + classes.contentImageCaption
      ).forEach(el => el.contentEditable = 'false');
    }

    bu.dataset.isPreviewActive = isPreviewActive ? '' : '1';
  });
});
