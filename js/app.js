import {classes} from "./pexego.js";

document.querySelectorAll('.pexego-rearrange-sections-button').forEach(bu => {
  bu.addEventListener('click', e => {
    e.preventDefault();

    const areControlsActive = bu.dataset.areControlsActive.length > 0;

    if (areControlsActive) {
      bu.innerHTML = '<img class="img-svg m-r-05" src="/img/svg/gear.svg" alt="Rearrange Sections">Rearrange Sections';

      document.querySelectorAll('.' + classes.sectionControls).forEach(c => {
        c.classList.add(classes.displayNone);
      });
      document.querySelector('.pexego-add-sections').classList.remove(classes.displayNone);
      document.querySelector('.pexego-preview').classList.remove(classes.displayNone);
    } else {
      bu.innerHTML = '<img class="img-svg m-r-05" src="/img/svg/gear.svg" alt="Rearrange Sections">Sections rearranged';

      document.querySelectorAll('.' + classes.sectionControls).forEach(c => {
        c.classList.remove(classes.displayNone);
      });
      document.querySelector('.pexego-add-sections').classList.add(classes.displayNone);
      document.querySelector('.pexego-preview').classList.add(classes.displayNone);
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

      document.querySelector('header').classList.remove(classes.displayNone);
      document.querySelector('.pexego-add-sections').classList.remove(classes.displayNone);
      document.querySelector('.pexego-rearrange-sections-button').classList.remove(classes.displayNone);
      document.querySelectorAll('.' + classes.contentImageCaption).forEach(ic => {
          ic.classList.remove(classes.displayNone);
      });
      document.querySelectorAll(
        '.' + classes.contentParagraph + ', ' +
        '.' + classes.contentTitle + ', ' +
        '.' + classes.contentSubtitle + ', ' +
        '.' + classes.contentImageCaption
      ).forEach(el => el.contentEditable = 'true');
    } else {
      bu.innerHTML = '<img class="img-svg m-r-05" src="/img/svg/arrows-in-simple.svg" alt="Preview">Close Preview';
      document.querySelector('header').classList.add(classes.displayNone);
      document.querySelector('.pexego-add-sections').classList.add(classes.displayNone);
      document.querySelector('.pexego-rearrange-sections-button').classList.add(classes.displayNone);
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
    }

    bu.dataset.isPreviewActive = isPreviewActive ? '' : '1';
  });
});
