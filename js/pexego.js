import {global} from "./localisation.js";
import {uploadImage} from "./imageUploader.js";

const userFeedbackBubble = document.querySelector('#feedback');
const defaultParagraphSeparatorString = 'defaultParagraphSeparator';
const formatBlock = 'formatBlock';
const addEventListener = (parent, type, listener) => parent.addEventListener(type, listener);
const appendChild = (parent, child) => parent.appendChild(child);
const createElement = (tag) => document.createElement(tag);
const queryCommandState = (command) => document.queryCommandState(command);
const queryCommandValue = (command) => document.queryCommandValue(command);

const exec = (command, value = null) => document.execCommand(command, false, value);

const defaultActions = {
  bold: {
    icon: '<img src="/img/svg/text-bolder.svg" class="img-svg" title="' + global.get('editorBold') + '" alt="' + global.get('editorBold') + '">',
    title: global.get('editorBold'),
    state: () => queryCommandState('bold'),
    result: () => exec('bold')
  },
  italic: {
    icon: '<img src="/img/svg/text-italic.svg" class="img-svg" title="' + global.get('editorItalic') + '" alt="' + global.get('editorItalic') + '">',
    title: global.get('editorItalic'),
    state: () => queryCommandState('italic'),
    result: () => exec('italic')
  },
  underline: {
    icon: '<img src="/img/svg/text-underline.svg" class="img-svg" title="' + global.get('editorUnderline') + '" alt="' + global.get('editorUnderline') + '">',
    title: global.get('editorUnderline'),
    state: () => queryCommandState('underline'),
    result: () => exec('underline')
  },
  strikethrough: {
    icon: '<img src="/img/svg/text-strikethrough.svg" class="img-svg" title="' + global.get('editorStrikeThrough') + '" alt="' + global.get('editorStrikeThrough') + '">',
    title: global.get('editorStrikeThrough'),
    state: () => queryCommandState('strikeThrough'),
    result: () => exec('strikeThrough')
  },
  heading1: {
    icon: 'H1',
    title: global.get('editorHeading1'),
    result: () => exec(formatBlock, '<h1>')
  },
  heading2: {
    icon: 'H2',
    title: global.get('editorHeading2'),
    result: () => exec(formatBlock, '<h2>')
  },
  heading3: {
    icon: 'H3',
    title: global.get('editorHeading3'),
    result: () => exec(formatBlock, '<h3>')
  },
  paragraph: {
    icon: '&#182;',
    title: global.get('editorParagraph'),
    result: () => exec(formatBlock, '<p>')
  },
  quote: {
    icon: '&#8220; &#8221;',
    title: global.get('editorQuote'),
    result: () => exec(formatBlock, '<blockquote>')
  },
  olist: {
    icon: '<img src="/img/svg/list-numbers.svg" class="img-svg" title="' + global.get('editorOrderedList') + '" alt="' + global.get('editorOrderedList') + '">',
    title: global.get('editorOrderedList'),
    result: () => exec('insertOrderedList')
  },
  ulist: {
    icon: '<img src="/img/svg/list-dashes.svg" class="img-svg" title="' + global.get('editorUnorderedList') + '" alt="' + global.get('editorUnorderedList') + '">',
    title: global.get('editorUnorderedList'),
    result: () => exec('insertUnorderedList')
  },
  code: {
    icon: '&lt;/&gt;',
    title: global.get('editorCode'),
    result: () => exec(formatBlock, '<pre>')
  },
  line: {
    icon: '&#8213;',
    title: global.get('editorInsertHorizontalLine'),
    result: () => exec('insertHorizontalRule')
  },
  link: {
    icon: '<img src="/img/svg/link.svg" class="img-svg" title="' + global.get('editorInsertLink') + '" alt="' + global.get('editorInsertLink') + '">',
    title: global.get('editorInsertLink'),
    result: () => {
      const url = window.prompt('Enter the link URL')
      if (url) exec('createLink', url)
    }
  },
  image: {
    icon: '&#128247;',
    title: global.get('editorInsertImage'),
    result: () => {
      const url = window.prompt('Enter the image URL')
      if (url) exec('insertImage', url)
    }
  },
  eraser: {
    icon: '<img src="/img/svg/x.svg" class="img-svg" title="' + global.get('editorClearFormat') + '" alt="' + global.get('editorClearFormat') + '">',
    title: global.get('editorClearFormat'),
    result: () => {
      exec('removeFormat');
    }
  }
};

const classes = {
  actionBar: 'pexego-actionbar',
  actionBarLeft: 'pexego-actionbar-left',
  actionBarRight: 'pexego-actionbar-right',
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
  sectionTitle: 'pexego-section-title',
  sectionSubtitle: 'pexego-section-subtitle',
  sectionParagraph: 'pexego-section-paragraph',
  sectionImage: 'pexego-section-image',
  sectionVideo: 'pexego-section-video',
  contentTitle: 'pexego-content-title',
  contentSubtitle: 'pexego-content-subtitle',
  contentParagraph: 'pexego-content-paragraph',
  contentImage: 'pexego-content-image',
  contentImageCaption: 'pexego-content-image-caption'
};

const init = function(settings) {
  const actions = settings.actions
    ? (
      settings.actions.map(action => {
        if (typeof action === 'string') {
          return defaultActions[action];
        } else if (defaultActions[action.name]) {
          return { ...defaultActions[action.name], ...action };
        }
        return action;
      })
    )
    : Object.keys(defaultActions).map(action => defaultActions[action]);

  const defaultParagraphSeparator = settings[defaultParagraphSeparatorString] || 'div';

  let content = settings.element.querySelector('.' + classes.contentParagraph);
  if (!content) {
    let content = document.createElement('div');
    content.className = 'placeholder ' + classes.contentParagraph;
    content.contentEditable = 'true';
    content.dataset.placeholder = global.get('editorParagraphPlaceholder');
  }
  content.oninput = ({target: {firstChild}}) => {
    if (firstChild && firstChild.nodeType === 3) {
      exec(formatBlock, `<${defaultParagraphSeparator}>`);
    } else if (content.innerHTML === '<br>') {
      content.innerHTML = '';
    }
    settings.onChange(content.innerHTML);
  };

  content.onkeydown = (event) => {
    if (event.key === 'Enter' && queryCommandValue(formatBlock) === 'blockquote') {
      setTimeout(() => exec(formatBlock, `<${defaultParagraphSeparator}>`), 0);
    }
  };
  appendChild(settings.element, content);

  const actionbarWrapper = createElement('div');
  actionbarWrapper.className = classes.actionBar;

  const actionbarLeft = createElement('div');
  actionbarLeft.className = classes.actionBarLeft;
  appendChild(actionbarWrapper, actionbarLeft);
  const actionbarRight = createElement('div');
  actionbarRight.className = classes.actionBarRight;
  appendChild(actionbarWrapper, actionbarRight);
  appendChild(settings.element, actionbarWrapper);

  actions.forEach(action => {
    const button = createElement('button');
    button.className = classes.actionBarButton;
    button.innerHTML = action.icon;
    button.title = action.title;
    button.setAttribute('type', 'button');
    button.onclick = (e) => action.result(e) && content.focus();

    if (action.state) {
      const handler = () => button.classList[action.state() ? 'add' : 'remove'](classes.actionBarButtonSelected);
      addEventListener(content, 'keyup', handler);
      addEventListener(content, 'mouseup', handler);
      addEventListener(button, 'click', handler);
    }

    action.positionRight
      ? appendChild(actionbarRight, button)
      : appendChild(actionbarLeft, button);
  });

  exec(defaultParagraphSeparatorString, defaultParagraphSeparator);

  return settings.element;
};

const loadEditor = (containerId) => {
  let containerHtmlId = containerId + '-html';
  let container = document.querySelector('#' + containerId);
  let containerHtml = document.querySelector('#' + containerHtmlId);

  if (!container || !containerHtml) {
    alert('Error: Missing container(s) for Pexego editor. Aborting...');
    return;
  }

  init({
    element: container,
    onChange: (html) => {containerHtml.textContent = html},
    defaultParagraphSeparator: 'p',
    actions: [
      'bold',
      'italic',
      'underline',
      'strikethrough',
      'heading1',
      'heading2',
      'paragraph',
      'olist',
      'ulist',
      'link',
      'eraser'
    ]
  });
}

const getSectionTypeIdFromClassList = function(classList) {
  if (classList.contains(classes.sectionParagraph)) {
    return 1;
  }

  if (classList.contains(classes.sectionImage)) {
    return 2;
  }

  if (classList.contains(classes.sectionVideo)) {
    return 3;
  }

  if (classList.contains(classes.sectionTitle)) {
    return 4;
  }

  if (classList.contains(classes.sectionSubtitle)) {
    return 5;
  }

  return 0;
};

const generateRandomString = function(length = 10) {
  const dec2hex = function (dec) {
    return dec.toString(16).padStart(2, "0");
  }

  const arr = new Uint8Array((length || 40) / 2);
  window.crypto.getRandomValues(arr);
  return Array.from(arr, dec2hex).join('');
}

const insertAfter = (el, referenceNode) => {
  referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
};

const managePlaceholderForEditableElements = (event) => {
  const element = event.currentTarget;
  if (!element.textContent.trim().length) {
    element.innerHTML = '';
  }
}

const getYoutubeVideoIdFromUrl = (url) => {
  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[7].length === 11 ? match[7] : false;
}

const removeSection = function(e, sectionId) {
  e.preventDefault();

  const delRes = confirm(global.get('feedbackDeleteSectionConfirmation'));
  if (!delRes) {
    return;
  }

  const pexegoContent = document.querySelector('.' + classes.container);
  const section = document.querySelector('#' + classes.sectionWrapper + '-' + sectionId);

  if (pexegoContent && section) {
    pexegoContent.removeChild(section);
  }

  const sectionHtml = document.querySelector('#' + classes.sectionParagraph + '-' + sectionId + '-html');
  if (sectionHtml) {
    const divHtml = document.querySelector('.' + classes.container + '-output');
    if (divHtml) {
      divHtml.removeChild(sectionHtml);
    }
  }

  displayUpAndDownArrowsWhenAppropriate();
};

const moveSectionUp = function(e, id) {
  e.preventDefault();

  const selectedSection = document.querySelector('#' + classes.sectionWrapper + '-' + id);

  let previousElement = null;

  let allSections = [];
  document.querySelectorAll('.' + classes.sectionWrapper).forEach(s => {
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

  displayUpAndDownArrowsWhenAppropriate();
};

const moveSectionDown = function(e, id) {
  e.preventDefault();

  const selectedSection = document.querySelector('#' + classes.sectionWrapper + '-' + id);

  if (!selectedSection.nextElementSibling) {
    return;
  }

  insertAfter(selectedSection, selectedSection.nextElementSibling);
  displayUpAndDownArrowsWhenAppropriate();
}

const generateSectionWrapperFor = function(pexegoSectionElement, id) {
  const pexegoContent = document.querySelector('.' + classes.container);

  let sectionWrapper = document.createElement('div');
  sectionWrapper.id = classes.sectionWrapper + '-' + id;
  sectionWrapper.className = classes.sectionWrapper;
  sectionWrapper.dataset.sectionId = id;

  let trashImg = new Image();
  trashImg.className = 'img-svg';
  trashImg.title = global.get('editorSectionRemove');
  trashImg.alt = global.get('editorSectionRemove');
  trashImg.src = '/img/svg/trash.svg';

  let deleteButton = document.createElement('a');
  deleteButton.href = '#';
  deleteButton.id = classes.sectionControlsButtonDelete + '-' + id;
  deleteButton.className = classes.sectionControlsButton + ' ' + classes.sectionControlsButtonDelete;
  deleteButton.addEventListener('click', e => removeSection(e, id));
  deleteButton.appendChild(trashImg);

  let arrowUpImg = new Image();
  arrowUpImg.className = 'img-svg';
  arrowUpImg.title = global.get('editorSectionMoveUp');
  arrowUpImg.alt = global.get('editorSectionMoveUp');
  arrowUpImg.src = '/img/svg/arrow-fat-up.svg';

  let moveUpButton = document.createElement('a');
  moveUpButton.href = '#';
  moveUpButton.id = classes.sectionControlsButtonUp + '-' + id;
  moveUpButton.className = classes.sectionControlsButton + ' ' + classes.sectionControlsButtonUp;
  moveUpButton.addEventListener('click', e => moveSectionUp(e, id));
  moveUpButton.appendChild(arrowUpImg);

  let arrowDownImg = new Image();
  arrowDownImg.className = 'img-svg';
  arrowDownImg.title = global.get('editorSectionMoveDown');
  arrowDownImg.alt = global.get('editorSectionMoveDown');
  arrowDownImg.src = '/img/svg/arrow-fat-down.svg';

  let moveDownButton = document.createElement('a');
  moveDownButton.href = '#';
  moveDownButton.id = classes.sectionControlsButtonDown + '-' + id;
  moveDownButton.className = classes.sectionControlsButton + ' ' + classes.sectionControlsButtonDown;
  moveDownButton.addEventListener('click', e => moveSectionDown(e, id));
  moveDownButton.appendChild(arrowDownImg);

  let sectionControlDiv = document.createElement('div');
  sectionControlDiv.id = classes.sectionControls + '-' + id;
  sectionControlDiv.className = classes.sectionControls + ' null';

  sectionControlDiv.appendChild(moveUpButton);
  sectionControlDiv.appendChild(moveDownButton);
  sectionControlDiv.appendChild(deleteButton);

  sectionWrapper.appendChild(pexegoSectionElement);
  sectionWrapper.appendChild(sectionControlDiv);

  pexegoContent.appendChild(sectionWrapper);

  displayUpAndDownArrowsWhenAppropriate();
};

const displayUpAndDownArrowsWhenAppropriate = function() {
  let arrowDownAll = document.querySelectorAll('.' + classes.sectionControlsButtonDown);
  let count = 0;

  arrowDownAll.forEach(d => {
    if (arrowDownAll.length && count !== arrowDownAll.length - 1) {
      d.classList.remove('null');
    } else {
      d.classList.add('null');
    }
    count++;
  });

  let arrowUpAll = document.querySelectorAll('.' + classes.sectionControlsButtonUp);

  count = 0;
  arrowUpAll.forEach(u => {
    if (arrowUpAll.length && count !== 0) {
      u.classList.remove('null');
    } else {
      u.classList.add('null');
    }
    count++;
  });
};

document.querySelectorAll('.pexego-add-section-paragraph').forEach(bu => {
  bu.addEventListener('click', (e) => {
    e.preventDefault();

    const existingSections = document.querySelectorAll('.' + classes.section);
    if (existingSections.length &&
      existingSections[existingSections.length - 1].classList.contains(classes.sectionParagraph)
    ) {
      let id = existingSections[existingSections.length - 1].dataset.sectionId
        ?? existingSections[existingSections.length - 1].dataset.editorId;
      document.querySelector('.' + classes.sectionParagraph + '-' + id).focus();
      return;
    }

    const pexegoContentHtml = document.querySelector('.' + classes.container + '-output');
    const id = generateRandomString(5);
    const sectionId = classes.sectionParagraph + '-' + id;

    let pexegoSectionParagraphHtml = document.createElement('div');
    pexegoSectionParagraphHtml.id = sectionId + '-html';

    let pexegoSectionParagraph = document.createElement('section');
    pexegoSectionParagraph.id = sectionId;
    pexegoSectionParagraph.dataset.editorId = id;
    pexegoSectionParagraph.className =  classes.section + ' ' + classes.sectionParagraph;

    let divEditor = document.createElement('div');
    divEditor.className = 'placeholder ' + classes.contentParagraph;
    divEditor.contentEditable = 'true';
    divEditor.dataset.placeholder = global.get('editorParagraphPlaceholder');
    divEditor.appendChild(document.createElement('p'));
    pexegoSectionParagraph.appendChild(divEditor);

    generateSectionWrapperFor(pexegoSectionParagraph, id);
    pexegoContentHtml.appendChild(pexegoSectionParagraphHtml);

    loadEditor(sectionId);
    divEditor.focus();
  });
});

document.querySelectorAll('.pexego-add-section-title').forEach(bu => {
  bu.addEventListener('click', (e) => {
    e.preventDefault();

    const id = generateRandomString(5);
    const sectionId = classes.sectionTitle + '-' + id;

    let pexegoSectionWrapper = document.createElement('section');
    pexegoSectionWrapper.id = sectionId;
    pexegoSectionWrapper.className =  classes.section + ' ' + classes.sectionTitle;

    let pexegoSectionTitle = document.createElement('h1');
    pexegoSectionTitle.className = classes.contentTitle + ' placeholder';
    pexegoSectionTitle.dataset.placeholder = global.get('editorTitlePlaceholder');
    pexegoSectionTitle.contentEditable = 'true';

    pexegoSectionWrapper.appendChild(pexegoSectionTitle);
    generateSectionWrapperFor(pexegoSectionWrapper, id);

    document.querySelector('#' + sectionId + ' > h1').focus();
  });
});

document.querySelectorAll('.pexego-add-section-subtitle').forEach(bu => {
  bu.addEventListener('click', (e) => {
    e.preventDefault();

    const id = generateRandomString(5);
    const sectionId = classes.sectionSubtitle + '-' + id;

    let pexegoSectionWrapper = document.createElement('section');
    pexegoSectionWrapper.id = sectionId;
    pexegoSectionWrapper.className =  classes.section + ' ' + classes.sectionSubtitle;

    let pexegoSectionSubtitle = document.createElement('h2');
    pexegoSectionSubtitle.className = classes.contentSubtitle + ' placeholder';
    pexegoSectionSubtitle.dataset.placeholder = global.get('editorSubtitlePlaceholder');
    pexegoSectionSubtitle.contentEditable = 'true';

    pexegoSectionWrapper.appendChild(pexegoSectionSubtitle);
    generateSectionWrapperFor(pexegoSectionWrapper, id);

    document.querySelector('#' + sectionId + ' > h2').focus();
  });
});

document.querySelectorAll('.pexego-add-section-video').forEach(bu => {
  bu.addEventListener('click', (e) => {
    e.preventDefault();

    // ToDo: Implement popup to get the video URL
    const videoUrl = window.prompt(global.get('editorVideoUrlTitle'));
    if (videoUrl) {
      const ytVideoId = getYoutubeVideoIdFromUrl(videoUrl);
      if (!ytVideoId) {
        return;
      }

      let pexegoSectionVideo = document.createElement('section');
      pexegoSectionVideo.className =  classes.section + ' ' + classes.sectionVideo;
      let iframeWrapper = document.createElement('div');
      iframeWrapper.className = classes.sectionVideo;
      let pexegoSectionIframe = document.createElement('iframe');
      pexegoSectionIframe.width = '560';
      pexegoSectionIframe.height = '315';
      pexegoSectionIframe.src = 'https://www.youtube-nocookie.com/embed/' + ytVideoId;
      pexegoSectionIframe.frameBorder = '0';
      pexegoSectionIframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
      pexegoSectionIframe.allowFullscreen = true;

      iframeWrapper.appendChild(pexegoSectionIframe);
      pexegoSectionVideo.appendChild(iframeWrapper);

      generateSectionWrapperFor(pexegoSectionVideo, generateRandomString(5));
    }
  });
});

document.querySelectorAll('.pexego-add-section-html').forEach(bu => {
  bu.addEventListener('click', (e) => {
    e.preventDefault();
    alert('ToDo');
  });
});

document.querySelectorAll('input[name="pexego-add-image-input"]').forEach(pi => {
  pi.addEventListener('change', e => {
    e.preventDefault();

    for (let i = 0; i < pi.files.length; i++) {
      let file = pi.files[i];

      let id = generateRandomString(5);
      let pexegoSectionImage = document.createElement('section');
      pexegoSectionImage.className =  classes.section + ' ' + classes.sectionImage;

      let imageCaption = document.createElement('p');
      imageCaption.className = 'placeholder ' + classes.contentImageCaption;
      imageCaption.dataset.placeholder = global.get('editorImageCaptionPlaceholder');
      imageCaption.contentEditable = 'true';
      imageCaption.addEventListener('focus', managePlaceholderForEditableElements);

      generateSectionWrapperFor(pexegoSectionImage, id);

      uploadImage(
        file,
        pexegoSectionImage,
        classes.contentImage,
        userFeedbackBubble,
        () => {pexegoSectionImage.appendChild(imageCaption)},
        () => {
          const pexegoContentDiv = document.querySelector('.' + classes.container);
          const sectionWrapper = document.querySelector('#' + classes.sectionWrapper + '-' + id);
          if (pexegoContentDiv && sectionWrapper) {
            pexegoContentDiv.removeChild(sectionWrapper);
          }
        }
      );
    }
  });
});

document.querySelectorAll('.placeholder').forEach(el => {
  el.addEventListener('focus', managePlaceholderForEditableElements);
})

document.querySelectorAll('.' + classes.sectionControlsButtonDelete).forEach(el => {
  el.addEventListener('click', e => removeSection(e, el.parentNode.parentNode.dataset.sectionId));
});

document.querySelectorAll('.' + classes.sectionControlsButtonUp).forEach(el => {
  el.addEventListener('click', e => moveSectionUp(e, el.parentNode.parentNode.dataset.sectionId));
});

document.querySelectorAll('.' + classes.sectionControlsButtonDown).forEach(el => {
  el.addEventListener('click', e => moveSectionDown(e, el.parentNode.parentNode.dataset.sectionId));
});

document.querySelectorAll('.' + classes.sectionParagraph).forEach(s => loadEditor(s.id));

document.querySelectorAll('.pexego-section-controls-button').forEach(bu => {
  bu.addEventListener('click', e => {
    e.preventDefault();

    document.querySelectorAll('.' + classes.sectionControls).forEach(c => {
      c.classList.toggle('null');
    });
  });
});

document.querySelectorAll('.pexego-preview').forEach(bu => {
  bu.addEventListener('click', e => {
    e.preventDefault();

    document.querySelector('header').classList.toggle('null');
    document.querySelector('.pexego-add-sections').classList.toggle('null');
  });
});

export {classes, getSectionTypeIdFromClassList};
