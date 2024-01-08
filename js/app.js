import {pexegoClasses} from "./pexego.js";

document.querySelectorAll('.pexego-rearrange-sections-button').forEach(bu => {
  bu.addEventListener('click', e => {
    e.preventDefault();

    document.querySelectorAll('.' + pexegoClasses.sectionControls).forEach(c => {
      c.classList.remove(pexegoClasses.displayNone);
    });
    document.querySelector('.pexego-rearrange-sections-button').classList.add(pexegoClasses.displayNone);
    document.querySelector('.pexego-preview').classList.add(pexegoClasses.displayNone);
    document.querySelector('.pexego-rearrange-close').classList.remove(pexegoClasses.displayNone);
    document.querySelector('.pexego-tools').classList.add(pexegoClasses.displayNone);
  });
});

document.querySelectorAll('.pexego-rearrange-close').forEach(bu => {
  bu.addEventListener('click', e => {
    e.preventDefault();

    document.querySelectorAll('.' + pexegoClasses.sectionControls).forEach(c => {
      c.classList.add(pexegoClasses.displayNone);
    });
    document.querySelector('.pexego-rearrange-sections-button').classList.remove(pexegoClasses.displayNone);
    document.querySelector('.pexego-preview').classList.remove(pexegoClasses.displayNone);
    document.querySelector('.pexego-rearrange-close').classList.add(pexegoClasses.displayNone);
    document.querySelector('.pexego-tools').classList.remove(pexegoClasses.displayNone);
  });
});

document.querySelectorAll('.pexego-preview').forEach(bu => {
  bu.addEventListener('click', e => {
    e.preventDefault();

    bu.classList.add(pexegoClasses.displayNone);
    document.querySelector('.pexego-preview-close').classList.remove(pexegoClasses.displayNone);
    document.querySelector('header').classList.add(pexegoClasses.displayNone);
    document.querySelector('.pexego-tools').classList.add(pexegoClasses.displayNone);
    document.querySelector('.pexego-rearrange-sections-button').classList.add(pexegoClasses.displayNone);
    document.querySelectorAll(
      '.' + pexegoClasses.contentParagraph + ', ' +
      '.' + pexegoClasses.contentImageCaption
    ).forEach(el => {
      if (el.textContent === el.dataset.placeholder) {
        el.classList.add(pexegoClasses.displayNone);
      }
      el.contentEditable = 'false';
    });
  });
});

document.querySelectorAll('.pexego-preview-close').forEach(bu => {
  bu.addEventListener('click', e => {
    e.preventDefault();

    document.querySelector('.pexego-preview').classList.remove(pexegoClasses.displayNone);
    document.querySelector('.pexego-rearrange-sections-button').classList.remove(pexegoClasses.displayNone);
    document.querySelector('.pexego-preview-close').classList.add(pexegoClasses.displayNone);
    document.querySelector('header').classList.remove(pexegoClasses.displayNone);
    document.querySelector('.pexego-tools').classList.remove(pexegoClasses.displayNone);
    document.querySelector('.pexego-rearrange-sections-button').classList.remove(pexegoClasses.displayNone);
    document.querySelectorAll(
      '.' + pexegoClasses.contentParagraph + ', ' +
      '.' + pexegoClasses.contentImageCaption
    ).forEach(el => {
      el.classList.remove(pexegoClasses.displayNone);
      el.contentEditable = 'true';
    });
  });
});
