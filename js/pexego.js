import {Global} from "./localisation.js";
import {Uploader} from "./Uploader.js";

class Pexego {
  containerId = null;

  static defaultActions= {
    bold: {
      icon: '<img src="/img/svg/text-bolder.svg" class="img-svg" title="' + Global.get('editorBold') + '" alt="' + Global.get('editorBold') + '">',
      title: Global.get('editorBold'),
      state: () => document.queryCommandState('bold'),
      result: () => Pexego.exec('bold')
    },
    italic: {
      icon: '<img src="/img/svg/text-italic.svg" class="img-svg" title="' + Global.get('editorItalic') + '" alt="' + Global.get('editorItalic') + '">',
      title: Global.get('editorItalic'),
      state: () => document.queryCommandState('italic'),
      result: () => Pexego.exec('italic')
    },
    underline: {
      icon: '<img src="/img/svg/text-underline.svg" class="img-svg" title="' + Global.get('editorUnderline') + '" alt="' + Global.get('editorUnderline') + '">',
      title: Global.get('editorUnderline'),
      state: () => document.queryCommandState('underline'),
      result: () => Pexego.exec('underline')
    },
    strikethrough: {
      icon: '<img src="/img/svg/text-strikethrough.svg" class="img-svg" title="' + Global.get('editorStrikeThrough') + '" alt="' + Global.get('editorStrikeThrough') + '">',
      title: Global.get('editorStrikeThrough'),
      state: () => document.queryCommandState('strikeThrough'),
      result: () => Pexego.exec('strikeThrough')
    },
    heading1: {
      icon: '<img src="/img/svg/text-h-one.svg" class="img-svg" title="' + Global.get('editorHeadingOne') + '" alt="' + Global.get('editorHeadingOne') + '">',
      title: Global.get('editorHeadingOne'),
      result: () => Pexego.exec('formatBlock', '<h1>')
    },
    heading2: {
      icon: '<img src="/img/svg/text-h-two.svg" class="img-svg" title="' + Global.get('editorHeadingTwo') + '" alt="' + Global.get('editorHeadingTwo') + '">',
      title: Global.get('editorHeadingTwo'),
      result: () => Pexego.exec('formatBlock', '<h2>')
    },
    heading3: {
      icon: '<img src="/img/svg/text-h-three.svg" class="img-svg" title="' + Global.get('editorHeadingThree') + '" alt="' + Global.get('editorHeadingThree') + '">',
      title: Global.get('editorHeadingThree'),
      result: () => Pexego.exec('formatBlock', '<h3>')
    },
    paragraph: {
      icon: '<img src="/img/svg/text-t.svg" class="img-svg" title="' + Global.get('editorParagraph') + '" alt="' + Global.get('editorParagraph') + '">',
      title: Global.get('editorParagraph'),
      result: () => Pexego.exec('formatBlock', '<p>')
    },
    quote: {
      icon: '<img src="/img/svg/quotes.svg" class="img-svg" title="' + Global.get('editorQuote') + '" alt="' + Global.get('editorQuote') + '">',
      title: Global.get('editorQuote'),
      result: () => Pexego.exec('formatBlock', '<blockquote>')
    },
    olist: {
      icon: '<img src="/img/svg/list-numbers.svg" class="img-svg" title="' + Global.get('editorOrderedList') + '" alt="' + Global.get('editorOrderedList') + '">',
      title: Global.get('editorOrderedList'),
      result: () => Pexego.exec('insertOrderedList')
    },
    ulist: {
      icon: '<img src="/img/svg/list-dashes.svg" class="img-svg" title="' + Global.get('editorUnorderedList') + '" alt="' + Global.get('editorUnorderedList') + '">',
      title: Global.get('editorUnorderedList'),
      result: () => Pexego.exec('insertUnorderedList'),
    },
    code: {
      icon: '<img src="/img/svg/list-dashes.svg" class="img-svg" title="' + Global.get('editorCode') + '" alt="' + Global.get('editorCode') + '">',
      title: Global.get('editorCode'),
      result: () => Pexego.exec('formatBlock', '<pre>'),
    },
    line: {
      icon: '&#8213;',
      title: Global.get('editorInsertHorizontalLine'),
      result: () => Pexego.exec('insertHorizontalRule'),
    },
    link: {
      icon: '<img src="/img/svg/link.svg" class="img-svg" title="' + Global.get('editorInsertLink') + '" alt="' + Global.get('editorInsertLink') + '">',
      title: Global.get('editorInsertLink'),
      result: () => {
        const url = window.prompt('Enter the link URL');
        if (url) Pexego.exec('createLink', url);
      },
    },
    image: {
      icon: '&#128247;',
      title: Global.get('editorInsertImage'),
      result: () => {
        const url = window.prompt('Enter the image URL')
        if (url) Pexego.exec('insertImage', url)
      }
    },
    eraser: {
      icon: '<img src="/img/svg/eraser.svg" class="img-svg" title="' + Global.get('editorClearFormat') + '" alt="' + Global.get('editorClearFormat') + '">',
      title: Global.get('editorClearFormat'),
      result: (e) => {
        Pexego.exec('removeFormat');
        document.getSelection().removeAllRanges();
        e.target.parentNode.parentNode.classList.add(Pexego.classes.displayNone);
      },
    },
    close: {
      icon: '<img src="/img/svg/x.svg" class="img-svg" title="' + Global.get('globalClose') + '" alt="' + Global.get('globalClose') + '">',
      title: Global.get('globalClose'),
      result: (e) => {
        e.target.parentNode.parentNode.classList.add(Pexego.classes.displayNone);
      },
    }
  };

  static classes = {
    displayNone: 'null',
    actionBar: 'pexego-actionbar',
    actionBarButton: 'pexego-actionbar-button',
    actionBarButtonSelected: 'pexego-button-selected',
    container: 'pexego-container',
    section: 'pexego-section',
    sectionControls: 'pexego-section-controls',
    sectionControlsButton: 'pexego-section-button',
    sectionControlsButtonUp: 'pexego-section-button-up',
    sectionControlsButtonDown: 'pexego-section-button-down',
    sectionControlsButtonDelete: 'pexego-section-button-delete',
    sectionWrapper: 'pexego-section-wrapper',
    sectionParagraph: 'pexego-section-paragraph',
    sectionParagraphPlaceholder: 'pexego-section-paragraph-placeholder',
    sectionImage: 'pexego-section-image',
    sectionVideo: 'pexego-section-video',
    contentParagraph: 'pexego-content-paragraph',
    contentImage: 'pexego-content-image',
    contentImageCaption: 'pexego-content-image-caption',
  };

  static exec(command, value = null) {
    document.execCommand(command, false, value);
  }

  constructor() {}

  init(settings) {
    const actions = settings.actions
      ? (
        settings.actions.map(action => {
          if (typeof action === 'string') {
            return Pexego.defaultActions[action];
          } else if (Pexego.defaultActions[action.name]) {
            return { ...Pexego.defaultActions[action.name], ...action };
          }
          return action;
        })
      )
      : Object.keys(Pexego.defaultActions).map(action => Pexego.defaultActions[action]);

    const mainContainer = settings.mainContainer;

    let content = mainContainer.querySelector('.' + Pexego.classes.contentParagraph);
    if (!content) {
      let content = document.createElement('div');
      content.className = Pexego.classes.contentParagraph;
      content.contentEditable = 'true';
    }

    content.addEventListener('mouseup', this.displayActionBar);
    content.addEventListener('keyup', this.displayActionBar);
    content.addEventListener('focus', this.displayPlaceholderFocus);
    content.addEventListener('blur', this.displayPlaceholderBlur);
    content.addEventListener('touchend', this.displayPlaceholderBlur);
    content.addEventListener('touchend', this.displayActionBar);

    content.addEventListener('input', ({target: {firstChild}}) => {
      if (firstChild && firstChild.nodeType === Node.TEXT_NODE) {
        Pexego.exec('formatBlock', `<${settings.paragraphSeparator}>`);
      } else if (content.textContent.trim().length === 0) {
        content.innerHTML = '<p></p>';
      }
      settings.onChange(content.innerHTML);
    });

    mainContainer.appendChild(content);

    const actionBar = document.createElement('div');
    actionBar.className = Pexego.classes.actionBar + ' ' + Pexego.classes.displayNone;
    mainContainer.appendChild(actionBar);

    actions.forEach(action => {
      const button = document.createElement('button');
      button.className = Pexego.classes.actionBarButton;
      button.innerHTML = action.icon;
      button.title = action.title;
      button.setAttribute('type', 'button');
      button.addEventListener('click', (e) => {
        action.result(e);
        setTimeout(() => content.focus(), 0);
      });

      if (action.state) {
        const handler = action.state
          ? () => button.classList.add(Pexego.classes.actionBarButtonSelected)
          : () => button.classList.remove(Pexego.classes.actionBarButtonSelected);

        content.addEventListener('keyup', handler);
        content.addEventListener('mouseup', handler);
        button.addEventListener('click', handler);
      }

      actionBar.appendChild(button);
    });

    Pexego.exec('paragraphSeparator', settings.paragraphSeparator);

    return mainContainer;
  }

  loadEditor(containerId) {
    const container = document.querySelector('#' + containerId);

    if (!container) {
      alert('Error: Missing container(s) for Pexego editor. Aborting...');
      return;
    }

    this.containerId = containerId;
    let containerHtml = document.querySelector('#' + this.containerId + '-html');
    if (!containerHtml) {
      containerHtml = document.createElement('div');
      containerHtml.id = this.containerId + '-html';
      container.style.display = 'none';
      container.parentElement.appendChild(containerHtml);
    }

    this.init({
      mainContainer: container,
      onChange: (html) => containerHtml.textContent = html,
      paragraphSeparator: 'p',
      actions: [
        'bold',
        'italic',
        'underline',
        'strikethrough',
        'heading1',
        'heading2',
        'heading3',
        'paragraph',
        'olist',
        'ulist',
        'link',
        'eraser',
        'close',
      ]
    });
  }

  generateRandomString(length = 10) {
    const dec2hex = function (dec) {
      return dec.toString(16).padStart(2, "0");
    }

    const arr = new Uint8Array((length || 40) / 2);
    window.crypto.getRandomValues(arr);
    return Array.from(arr, dec2hex).join('');
  }

  insertAfter(el, referenceNode) {
    referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
  }

  hideActionBar() {
    const activeEl = document.activeElement;

    document.querySelectorAll('.' + Pexego.classes.sectionParagraph)
      .forEach(el => {
        if (!el.contains(activeEl)) {
          el.querySelector('.' + Pexego.classes.actionBar).classList.add(Pexego.classes.displayNone);
        }
      });
  }

  displayActionBar(event) {
    const element = event.currentTarget;
    if (element.contentEditable === 'false') {
      return;
    }

    const sectionWrapper = element.parentNode.parentNode;
    const actionBar = sectionWrapper.querySelector('.' + Pexego.classes.actionBar);
    const selectedText = window.getSelection().toString().trim();

    if (!selectedText.length) {
      actionBar.classList.add(Pexego.classes.displayNone);
      return;
    }

    const elPositionTop = element.getBoundingClientRect().top;
    const mouseOrTouchPositionY = event.changedTouches
      ? event.changedTouches[0].clientY
      : event.clientY;

    actionBar.classList.remove(Pexego.classes.displayNone);
    const actionBarTopPosition = event.type === 'keyup'
      ? -1 * actionBar.clientHeight
      : mouseOrTouchPositionY - elPositionTop - actionBar.clientHeight - 30;
    actionBar.style.top = actionBarTopPosition + 'px';
  }

  displayPlaceholderFocus(event) {
    const element = event.currentTarget;
    const content = element.textContent.trim();

    element.classList.remove(Pexego.classes.sectionParagraphPlaceholder);

    if (content === element.dataset.placeholder) {
      element.innerHTML = '<p></p>';
    }
  }

  displayPlaceholderBlur(event) {
    const element = event.currentTarget;
    const content = element.textContent.trim();

    if (!content.length) {
      element.innerHTML = '<p>' + element.dataset.placeholder + '</p>';
      element.classList.add(Pexego.classes.sectionParagraphPlaceholder);
    }
  }

  getYoutubeVideoIdFromUrl(url) {
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[7].length === 11 ? match[7] : false;
  }

  removeSection(e, sectionId) {
    e.preventDefault();

    const delRes = confirm(Global.get('feedbackDeleteSectionConfirmation'));
    if (!delRes) {
      return;
    }

    const pexegoContent = document.querySelector('.' + Pexego.classes.container);
    const section = document.querySelector('#' + Pexego.classes.sectionWrapper + '-' + sectionId);

    if (pexegoContent && section) {
      pexegoContent.removeChild(section);
    }

    const sectionHtml = document.querySelector('#' + Pexego.classes.sectionParagraph + '-' + sectionId + '-html');
    if (sectionHtml) {
      const divHtml = document.querySelector('.' + Pexego.classes.container + '-output');
      if (divHtml) {
        divHtml.removeChild(sectionHtml);
      }
    }

    this.displayUpAndDownArrowsWhenAppropriate();
  }

  moveSectionUp(e, id) {
    e.preventDefault();

    const selectedSection = document.querySelector('#' + Pexego.classes.sectionWrapper + '-' + id);

    let previousElement = null;

    let allSections = [];
    document.querySelectorAll('.' + Pexego.classes.sectionWrapper).forEach(s => {
      allSections.push({id: s.dataset.sectionId, element: s});
    });

    for (let i = 0; i < allSections.length; i++) {
      if (allSections[i].id === id) {
        if (previousElement) {
          selectedSection.parentNode.insertBefore(selectedSection, previousElement);
        }
        break;
      }

      previousElement = allSections[i].element;
    }

    this.displayUpAndDownArrowsWhenAppropriate();
  }

  moveSectionDown(e, id) {
    e.preventDefault();

    const selectedSection = document.querySelector('#' + Pexego.classes.sectionWrapper + '-' + id);

    if (!selectedSection.nextElementSibling) {
      return;
    }

    this.insertAfter(selectedSection, selectedSection.nextElementSibling);
    this.displayUpAndDownArrowsWhenAppropriate();
  }

  generateSectionWrapperFor(pexegoSectionElement, id) {
    const pexegoContent = document.querySelector('.' + Pexego.classes.container);

    const sectionWrapperClasses = Pexego.classes.sectionWrapper;
    let sectionWrapper = document.createElement('div');
    sectionWrapper.id = Pexego.classes.sectionWrapper + '-' + id;
    sectionWrapper.className = sectionWrapperClasses;
    sectionWrapper.dataset.sectionId = id;

    let trashImg = new Image();
    trashImg.className = 'img-svg img-svg-30';
    trashImg.title = Global.get('editorSectionRemove');
    trashImg.alt = Global.get('editorSectionRemove');
    trashImg.src = '/img/svg/trash.svg';

    let deleteButton = document.createElement('a');
    deleteButton.href = '#';
    deleteButton.id = Pexego.classes.sectionControlsButtonDelete + '-' + id;
    deleteButton.className = Pexego.classes.sectionControlsButton + ' ' + Pexego.classes.sectionControlsButtonDelete;
    deleteButton.addEventListener('click', e => this.removeSection(e, id));
    deleteButton.appendChild(trashImg);

    let arrowUpImg = new Image();
    arrowUpImg.className = 'img-svg img-svg-30';
    arrowUpImg.title = Global.get('editorSectionMoveUp');
    arrowUpImg.alt = Global.get('editorSectionMoveUp');
    arrowUpImg.src = '/img/svg/arrow-fat-up.svg';

    let moveUpButton = document.createElement('a');
    moveUpButton.href = '#';
    moveUpButton.id = Pexego.classes.sectionControlsButtonUp + '-' + id;
    moveUpButton.className = Pexego.classes.sectionControlsButton + ' ' + Pexego.classes.sectionControlsButtonUp;
    moveUpButton.addEventListener('click', e => this.moveSectionUp(e, id));
    moveUpButton.appendChild(arrowUpImg);

    let arrowDownImg = new Image();
    arrowDownImg.className = 'img-svg img-svg-30';
    arrowDownImg.title = Global.get('editorSectionMoveDown');
    arrowDownImg.alt = Global.get('editorSectionMoveDown');
    arrowDownImg.src = '/img/svg/arrow-fat-down.svg';

    let moveDownButton = document.createElement('a');
    moveDownButton.href = '#';
    moveDownButton.id = Pexego.classes.sectionControlsButtonDown + '-' + id;
    moveDownButton.className = Pexego.classes.sectionControlsButton + ' ' + Pexego.classes.sectionControlsButtonDown;
    moveDownButton.addEventListener('click', e => this.moveSectionDown(e, id));
    moveDownButton.appendChild(arrowDownImg);

    let sectionControlDiv = document.createElement('div');
    sectionControlDiv.id = Pexego.classes.sectionControls + '-' + id;
    sectionControlDiv.className = Pexego.classes.sectionControls + ' ' + Pexego.classes.displayNone;

    sectionControlDiv.appendChild(moveUpButton);
    sectionControlDiv.appendChild(moveDownButton);
    sectionControlDiv.appendChild(deleteButton);

    sectionWrapper.appendChild(pexegoSectionElement);
    sectionWrapper.appendChild(sectionControlDiv);

    pexegoContent.appendChild(sectionWrapper);

    this.displayUpAndDownArrowsWhenAppropriate();
  }

  displayUpAndDownArrowsWhenAppropriate() {
    let arrowDownAll = document.querySelectorAll('.' + Pexego.classes.sectionControlsButtonDown);
    let count = 0;

    arrowDownAll.forEach(d => {
      if (arrowDownAll.length && count !== arrowDownAll.length - 1) {
        d.classList.remove(Pexego.classes.displayNone);
      } else {
        d.classList.add(Pexego.classes.displayNone);
      }
      count++;
    });

    let arrowUpAll = document.querySelectorAll('.' + Pexego.classes.sectionControlsButtonUp);

    count = 0;
    arrowUpAll.forEach(u => {
      if (arrowUpAll.length && count !== 0) {
        u.classList.remove(Pexego.classes.displayNone);
      } else {
        u.classList.add(Pexego.classes.displayNone);
      }
      count++;
    });
  }

  addNewParagraph(focus = false) {
    const existingSections = document.querySelectorAll('.' + Pexego.classes.section);
    if (existingSections.length &&
      existingSections[existingSections.length - 1].classList.contains(Pexego.classes.sectionParagraph)
    ) {
      let id = existingSections[existingSections.length - 1].dataset.sectionId
        ?? existingSections[existingSections.length - 1].dataset.editorId;
      const divEditor =document.querySelector('#' + Pexego.classes.sectionParagraph + '-' + id)
        .querySelector('.' + Pexego.classes.contentParagraph);
      divEditor.scrollIntoView({behavior: 'smooth', block: 'start' });
      divEditor.focus();
      return;
    }

    const pexegoContentHtml = document.querySelector('.' + Pexego.classes.container + '-output');
    const id = this.generateRandomString(5);
    const sectionId = Pexego.classes.sectionParagraph + '-' + id;

    let pexegoSectionParagraphHtml = document.createElement('div');
    pexegoSectionParagraphHtml.id = sectionId + '-html';

    let pexegoSectionParagraph = document.createElement('section');
    pexegoSectionParagraph.id = sectionId;
    pexegoSectionParagraph.dataset.editorId = id;
    pexegoSectionParagraph.className =  Pexego.classes.section + ' ' + Pexego.classes.sectionParagraph;

    let divEditor = document.createElement('div');
    divEditor.contentEditable = 'true';
    divEditor.spellcheck = true;
    divEditor.autocapitalize = 'sentences';
    divEditor.translate = false;
    divEditor.role = 'textbox';
    divEditor.ariaMultiline = 'true';

    divEditor.classList.add(Pexego.classes.contentParagraph);
    divEditor.classList.add(Pexego.classes.sectionParagraphPlaceholder);
    divEditor.dataset.placeholder = Global.get('editorParagraphPlaceholder');
    let firstParagraph = document.createElement('p');
    firstParagraph.textContent = Global.get('editorParagraphPlaceholder');
    divEditor.appendChild(firstParagraph);

    pexegoSectionParagraph.appendChild(divEditor);

    this.generateSectionWrapperFor(pexegoSectionParagraph, id);
    pexegoContentHtml.appendChild(pexegoSectionParagraphHtml);

    this.loadEditor(sectionId);

    if (focus) {
      divEditor.scrollIntoView({behavior: 'smooth', block: 'start' });
      divEditor.focus();
    }
  }
}

const PexegoEditor = new Pexego();

document.querySelectorAll('.pexego-add-section-paragraph').forEach(bu => {
  bu.addEventListener('click', (e) => {
    e.preventDefault();

    PexegoEditor.addNewParagraph(true);
  });
});

document.querySelectorAll('.pexego-add-section-video').forEach(bu => {
  bu.addEventListener('click', (e) => {
    e.preventDefault();

    const videoUrl = window.prompt(Global.get('editorVideoUrlTitle'));
    if (videoUrl) {
      const ytVideoId = PexegoEditor.getYoutubeVideoIdFromUrl(videoUrl);
      if (!ytVideoId) {
        return;
      }

      let pexegoSectionVideo = document.createElement('section');
      pexegoSectionVideo.className =  Pexego.classes.section + ' ' + Pexego.classes.sectionVideo;
      let iframeWrapper = document.createElement('div');
      iframeWrapper.className = Pexego.classes.sectionVideo;
      let pexegoSectionIframe = document.createElement('iframe');
      pexegoSectionIframe.width = '560';
      pexegoSectionIframe.height = '315';
      pexegoSectionIframe.src = 'https://www.youtube-nocookie.com/embed/' + ytVideoId;
      pexegoSectionIframe.frameBorder = '0';
      pexegoSectionIframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
      pexegoSectionIframe.allowFullscreen = true;

      iframeWrapper.appendChild(pexegoSectionIframe);
      pexegoSectionVideo.appendChild(iframeWrapper);

      PexegoEditor.generateSectionWrapperFor(pexegoSectionVideo, PexegoEditor.generateRandomString(5));
      PexegoEditor.addNewParagraph();
    }
  });
});

document.querySelectorAll('input[name="pexego-add-image-input"]').forEach(pi => {
  pi.addEventListener('change', e => {
    e.preventDefault();

    for (let i = 0; i < pi.files.length; i++) {
      let file = pi.files[i];

      let id = PexegoEditor.generateRandomString(5);
      let pexegoSectionImage = document.createElement('section');
      pexegoSectionImage.className =  Pexego.classes.section + ' ' + Pexego.classes.sectionImage;

      let imageCaption = document.createElement('div');
      imageCaption.dataset.placeholder = Global.get('editorImageCaptionPlaceholder');
      imageCaption.contentEditable = 'true';
      imageCaption.innerHTML = '<p>' + imageCaption.dataset.placeholder + '</p>';
      imageCaption.classList.add(Pexego.classes.contentImageCaption);
      imageCaption.classList.add(Pexego.classes.sectionParagraphPlaceholder);
      imageCaption.addEventListener('focus', PexegoEditor.displayPlaceholderFocus);
      imageCaption.addEventListener('blur', PexegoEditor.displayPlaceholderBlur);

      PexegoEditor.generateSectionWrapperFor(pexegoSectionImage, id);

      Uploader.uploadImage(
        file,
        pexegoSectionImage,
        Pexego.classes.contentImage,
        () => {pexegoSectionImage.appendChild(imageCaption)},
        () => {
          const pexegoContentDiv = document.querySelector('.' + Pexego.classes.container);
          const sectionWrapper = document.querySelector('#' + Pexego.classes.sectionWrapper + '-' + id);
          if (pexegoContentDiv && sectionWrapper) {
            pexegoContentDiv.removeChild(sectionWrapper);
          }
        },
      );
    }

    PexegoEditor.addNewParagraph();
  });
});

document.querySelectorAll('.' + Pexego.classes.sectionControlsButtonDelete).forEach(el => {
  el.addEventListener('click', e => PexegoEditor.removeSection(e, el.parentNode.parentNode.dataset.sectionId));
});

document.querySelectorAll('.' + Pexego.classes.sectionControlsButtonUp).forEach(el => {
  el.addEventListener('click', e => PexegoEditor.moveSectionUp(e, el.parentNode.parentNode.dataset.sectionId));
});

document.querySelectorAll('.' + Pexego.classes.sectionControlsButtonDown).forEach(el => {
  el.addEventListener('click', e => PexegoEditor.moveSectionDown(e, el.parentNode.parentNode.dataset.sectionId));
});

document.querySelectorAll('.' + Pexego.classes.sectionParagraph).forEach(s => PexegoEditor.loadEditor(s.id));

document.querySelectorAll('.' + Pexego.classes.contentImageCaption).forEach(s => {
  s.addEventListener('focus', PexegoEditor.displayPlaceholderFocus);
  s.addEventListener('blur', PexegoEditor.displayPlaceholderBlur);
});

document.body.addEventListener('click', PexegoEditor.hideActionBar);

const pexegoClasses = Pexego.classes;
export {PexegoEditor, pexegoClasses};
