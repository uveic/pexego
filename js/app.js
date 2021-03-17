import {classes} from "./pexego.js";

document.querySelectorAll('.pexego-section-controls-button').forEach(bu => {
  bu.addEventListener('click', e => {
    e.preventDefault();

    const areControlsActive = bu.dataset.areControlsActive.length > 0;

    if (areControlsActive) {
      bu.innerHTML = '<img class="img-svg m-r-05" src="/img/svg/gear.svg" alt="Display controls">Display Controls';

      document.querySelectorAll('.' + classes.sectionControls).forEach(c => {
        c.classList.add(classes.displayNone);
      });
      document.querySelectorAll('.' + classes.actionBar).forEach(ab => {
        ab.classList.add(classes.displayNone)
      });
      document.querySelectorAll('.' + classes.sectionWrapper).forEach(sw => {
        sw.classList.remove(classes.sectionWrapperBorder)
      });
      document.querySelectorAll('.' + classes.sectionWrapperType).forEach(t => {
        t.classList.add(classes.displayNone)
      });
    } else {
      bu.innerHTML = '<img class="img-svg m-r-05" src="/img/svg/gear.svg" alt="Display controls">Close Controls';

      document.querySelectorAll('.' + classes.sectionControls).forEach(c => {
        c.classList.remove(classes.displayNone);
      });
      document.querySelectorAll('.' + classes.actionBar).forEach(ab => {
        ab.classList.remove(classes.displayNone)
      });
      document.querySelectorAll('.' + classes.sectionWrapper).forEach(sw => {
        sw.classList.add(classes.sectionWrapperBorder)
      });
      document.querySelectorAll('.' + classes.sectionWrapperType).forEach(t => {
        t.classList.remove(classes.displayNone)
      });
    }

    bu.dataset.areControlsActive = areControlsActive ? '' : '1';
  });
});

document.querySelectorAll('.pexego-preview').forEach(bu => {
  bu.addEventListener('click', e => {
    e.preventDefault();

    const isPreviewActive = bu.dataset.isPreviewActive.length > 0;

    if (isPreviewActive) {
      bu.innerHTML = '<img class="img-svg m-r-05" src="/img/svg/arrows-out-simple.svg" alt="Preview">Preview';

      document.querySelector('.pexego-section-controls-button')
        .classList.remove(classes.displayNone);
      document.querySelector('header').classList.remove(classes.displayNone);
      document.querySelector('.pexego-add-sections').classList.remove(classes.displayNone);
      document.querySelectorAll('.' + classes.contentImageCaption).forEach(ic => {
          ic.classList.remove(classes.displayNone);
      });
      document.querySelectorAll(
        '.' + classes.contentParagraph + ', ' +
        '.' + classes.contentTitle + ', ' +
        '.' + classes.contentSubtitle + ', ' +
        '.' + classes.contentImageCaption
      ).forEach(el => el.contentEditable = 'true');

      document.querySelectorAll('.' + classes.actionBar).forEach(ab => {
        ab.classList.remove(classes.displayNone)
      });
      document.querySelectorAll('.' + classes.sectionControls).forEach(ab => {
        ab.classList.remove(classes.displayNone)
      });
      const controlsButton = document.querySelector('.pexego-section-controls-button');
      controlsButton.innerHTML =
        '<img class="img-svg m-r-05" src="/img/svg/gear.svg" alt="Display controls">Close Controls';
      controlsButton.dataset.areControlsActive = '1';
      document.querySelectorAll('.' + classes.sectionWrapper).forEach(sw => {
        sw.classList.add(classes.sectionWrapperBorder)
      });
      document.querySelectorAll('.' + classes.sectionWrapperType).forEach(ty => {
        ty.classList.remove(classes.displayNone);
      });
    } else {
      bu.innerHTML = '<img class="img-svg m-r-05" src="/img/svg/arrows-in-simple.svg" alt="Preview">Close Preview';
      document.querySelector('.pexego-section-controls-button').classList.add(classes.displayNone);
      document.querySelector('header').classList.add(classes.displayNone);
      document.querySelector('.pexego-add-sections').classList.add(classes.displayNone);
      document.querySelectorAll('.' + classes.contentImageCaption).forEach(ic => {
        if (!ic.textContent.trim().length) {
          ic.classList.add(classes.displayNone);
        }
      });
      document.querySelectorAll(
        '.' + classes.contentParagraph + ', ' +
        '.' + classes.contentTitle + ', ' +
        '.' + classes.contentSubtitle + ', ' +
        '.' + classes.contentImageCaption
      ).forEach(el => el.contentEditable = 'false');

      document.querySelectorAll('.' + classes.actionBar).forEach(ab => {
        ab.classList.add(classes.displayNone)
      });
      document.querySelectorAll('.' + classes.sectionControls).forEach(ab => {
        ab.classList.add(classes.displayNone)
      });
      const controlsButton = document.querySelector('.pexego-section-controls-button');
      controlsButton.innerHTML =
        '<img class="img-svg m-r-05" src="/img/svg/gear.svg" alt="Display controls">Display Controls';
      controlsButton.dataset.areControlsActive = '';
      document.querySelectorAll('.' + classes.sectionWrapper).forEach(sw => {
        sw.classList.remove(classes.sectionWrapperBorder)
      });
      document.querySelectorAll('.' + classes.sectionWrapperType).forEach(ty => {
        ty.classList.add(classes.displayNone);
      });
    }

    bu.dataset.isPreviewActive = isPreviewActive ? '' : '1';
  });
});
