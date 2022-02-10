import {classes} from "./pexego.js";

document.querySelectorAll('.pexego-rearrange-sections-button').forEach(bu => {
  bu.addEventListener('click', e => {
    e.preventDefault();

    document.querySelectorAll('.' + classes.sectionControls).forEach(c => {
      c.classList.remove(classes.displayNone);
    });
    document.querySelector('.pexego-rearrange-sections-button').classList.add(classes.displayNone);
    document.querySelector('.pexego-preview').classList.add(classes.displayNone);
    document.querySelector('.pexego-rearrange-close').classList.remove(classes.displayNone);
    document.querySelector('.pexego-tools').classList.add(classes.displayNone);
  });
});

document.querySelectorAll('.pexego-rearrange-close').forEach(bu => {
  bu.addEventListener('click', e => {
    e.preventDefault();

    document.querySelectorAll('.' + classes.sectionControls).forEach(c => {
      c.classList.add(classes.displayNone);
    });
    document.querySelector('.pexego-rearrange-sections-button').classList.remove(classes.displayNone);
    document.querySelector('.pexego-preview').classList.remove(classes.displayNone);
    document.querySelector('.pexego-rearrange-close').classList.add(classes.displayNone);
    document.querySelector('.pexego-tools').classList.remove(classes.displayNone);
  });
});

document.querySelectorAll('.pexego-preview').forEach(bu => {
  bu.addEventListener('click', e => {
    e.preventDefault();

    bu.classList.add(classes.displayNone);
    document.querySelector('.pexego-preview-close').classList.remove(classes.displayNone);
    document.querySelector('header').classList.add(classes.displayNone);
    document.querySelector('.pexego-tools').classList.add(classes.displayNone);
    document.querySelector('.pexego-rearrange-sections-button').classList.add(classes.displayNone);
    document.querySelectorAll(
      '.' + classes.contentParagraph + ', ' +
      '.' + classes.contentImageCaption
    ).forEach(el => {
      if (el.textContent === el.dataset.placeholder) {
        el.classList.add(classes.displayNone);
      }
      el.contentEditable = 'false';
    });
  });
});

document.querySelectorAll('.pexego-preview-close').forEach(bu => {
  bu.addEventListener('click', e => {
    e.preventDefault();

    document.querySelector('.pexego-preview').classList.remove(classes.displayNone);
    document.querySelector('.pexego-rearrange-sections-button').classList.remove(classes.displayNone);
    document.querySelector('.pexego-preview-close').classList.add(classes.displayNone);
    document.querySelector('header').classList.remove(classes.displayNone);
    document.querySelector('.pexego-tools').classList.remove(classes.displayNone);
    document.querySelector('.pexego-rearrange-sections-button').classList.remove(classes.displayNone);
    document.querySelectorAll(
      '.' + classes.contentParagraph + ', ' +
      '.' + classes.contentImageCaption
    ).forEach(el => {
      el.classList.remove(classes.displayNone);
      el.contentEditable = 'true';
    });
  });
});
