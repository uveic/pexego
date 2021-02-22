class Global {
  constructor() {
    this.locale = document.documentElement.lang
      ? document.documentElement.lang.toLowerCase().trim()
      : 'en';

    if (['en', 'es', 'gl'].indexOf(this.locale) < 0) {
      this.locale = 'en';
    }
  };

  values = {
    "en": {
      "genericError": "Something went wrong, please try again",
      "genericErrorGetInTouch": "Please, refresh page and get in touch with support if the error persists. Error: ",
      "feedbackSaving": "Nothing to save...",

      "globalRemove": "Remove",
      "globalPreview": "Preview",
      "globalUpdate": "Update",
      "globalUpdated": "Updated",
      "globalSaved": "Saved",
      "globalLoading": "Loading...",
      "globalAt": "at",

      "feedbackPasswordsDoNotMatch": "The passwords do not match. Please, fix it and try it again.",
      "feedbackPasswordTooShort": "The password is too short. Please, fix it and try it again.",
      "feedbackDeleteSectionConfirmation": "Are you sure you want to delete this section?",
      "feedbackDeleteImageConfirmation": "Are you sure you want to delete this image?",
      "feedbackImageDeleted": "Image deleted",
      "feedbackErrorNotAnImage": "is not an image",
      "feedbackAccountUpdated": "Account data updated",

      "editorBold": "Bold",
      "editorItalic": "Italic",
      "editorUnderline": "Underline",
      "editorStrikeThrough": "Strike-through",
      "editorHeading1": "Heading 1",
      "editorHeading2": "Heading 2",
      "editorHeading3": "Heading 3",
      "editorParagraph": "Paragraph",
      "editorQuote": "Quote",
      "editorOrderedList": "Ordered List",
      "editorUnorderedList": "Unordered List",
      "editorCode": "Code",
      "editorInsertHorizontalLine": "Insert Horizontal Line",
      "editorInsertLink": "Insert Link",
      "editorInsertImage": "Insert Image",
      "editorClearFormat": "Clear Format",
      "editorParagraphPlaceholder": "Type here...",
      "editorTitlePlaceholder": "Title",
      "editorSubtitlePlaceholder": "Subtitle",
      "editorVideoUrlTitle": "Video URL? (Only YouTube for now)",
      "editorSectionRemove": "Remove from article",
      "editorSectionMoveUp": "Move Up",
      "editorSection:MoveDown": "Move Down"
    },
    "es": {
      "genericError": "Ha ocurrido un error inesperado, por favor inténtalo de nuevo",
      "genericErrorGetInTouch": "Por favor, actualiza la página y ponte en contacto con el soporte técnico si el error continúa. Error: ",
      "feedbackSaving": "Nada que guardar...",

      "globalRemove": "Eliminar",
      "globalPreview": "Previsualizar",
      "globalUpdate": "Actualizar",
      "globalUpdated": "Actualizado",
      "globalSaved": "Guardado",
      "globalLoading": "Cargando...",
      "globalAt": "a las",

      "feedbackPasswordsDoNotMatch": "Las contraseñas no coinciden. Corrígelo y vuelve a intentarlo.",
      "feedbackPasswordTooShort": "La contraseña es demasiado corta. Corrígelo y vuelve a intentarlo.",
      "feedbackDeleteSectionConfirmation": "¿Estás seguro de querer borrar esta sección?",
      "feedbackDeleteImageConfirmation": "¿Estás seguro de querer borrar esta imagen?",
      "feedbackImageDeleted": "Imagen borrada",
      "feedbackErrorNotAnImage": "no es una imagen",
      "feedbackAccountUpdated": "Datos de la cuenta actualizados",

      "editorBold": "Negrita",
      "editorItalic": "Cursiva",
      "editorUnderline": "Subrayado",
      "editorStrikeThrough": "Tachado",
      "editorHeading1": "Título 1",
      "editorHeading2": "Título 2",
      "editorHeading3": "Título 3",
      "editorParagraph": "Párrafo",
      "editorQuote": "Cita",
      "editorOrderedList": "Lista numérica",
      "editorUnorderedList": "Lista",
      "editorCode": "Código",
      "editorInsertHorizontalLine": "Insertar línea horizontal",
      "editorInsertLink": "Insertar enlace",
      "editorInsertImage": "Insertar imagen",
      "editorClearFormat": "Limpiar formato",
      "editorParagraphPlaceholder": "Escribe aquí...",
      "editorTitlePlaceholder": "Título",
      "editorSubtitlePlaceholder": "Subtítulo",
      "editorVideoUrlTitle": "Introduce la direccioón URL del vídeo (Solo YouTube por ahora)",
      "editorSectionRemove": "Eliminar sección del artículo",
      "editorSectionMoveUp": "Mover para arriba",
      "editorSection:MoveDown": "Mover para abajo"
    },
    "gl": {
      "genericError": "Algo non foi ben, por favor inténtao de novo",
      "genericErrorGetInTouch": "Por favor, actualiza a páxina e ponte en contacto co soporte técnico se o erro persiste. Erro: ",
      "feedbackSaving": "Nada que gardar...",

      "globalRemove": "Eliminar",
      "globalPreview": "Previsualizar",
      "globalUpdate": "Actualizar",
      "globalUpdated": "Actualizado",
      "globalSaved": "Gardado",
      "globalLoading": "Cargando...",
      "globalAt": "ás",

      "feedbackPasswordsDoNotMatch": "Os contrasinais non coinciden. Corríxeo e volve a intentalo.",
      "feedbackPasswordTooShort": "Contrasinal demasiado curto. Corríxeo e volve a intentalo.",
      "feedbackDeleteSectionConfirmation": "Estás seguro de querer eliminar esta sección?",
      "feedbackDeleteImageConfirmation": "Estás seguro de querer eliminar esta imaxe?",
      "feedbackImageDeleted": "Imaxe borrada",
      "feedbackErrorNotAnImage": "non é unha imaxe",
      "feedbackAccountUpdated": "Datos da conta actualizados",

      "editorBold": "Letra grosa",
      "editorItalic": "Cursiva",
      "editorUnderline": "Subliñado",
      "editorStrikeThrough": "Riscado",
      "editorHeading1": "Título 1",
      "editorHeading2": "Título 2",
      "editorHeading3": "Título 3",
      "editorParagraph": "Páragrafo",
      "editorQuote": "Cita",
      "editorOrderedList": "Lista numérica",
      "editorUnorderedList": "Lista",
      "editorCode": "Código",
      "editorInsertHorizontalLine": "Inserir liña horizontal",
      "editorInsertLink": "Inserir ligazón",
      "editorInsertImage": "Inserir imaxe",
      "editorClearFormat": "Limpar formato",
      "editorParagraphPlaceholder": "Escribe aquí...",
      "editorTitlePlaceholder": "Título",
      "editorSubtitlePlaceholder": "Subtítulo",
      "editorVideoUrlTitle": "Introduce o enderezo do vídeo (Só YouTube polo momento)",
      "editorSectionRemove": "Eliminar do artigo",
      "editorSectionMoveUp": "Mover para arriba",
      "editorSection:MoveDown": "Move para abaixo",
    }
  }

  get(key) {
    return this.values[this.locale][key] ?? '';
  }
}

export const global = new Global();
