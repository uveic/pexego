class GlobalClass {
  DEFAULT_LANGUAGE_ISO_CODE = 'en';

  constructor() {
    this.locale = document.documentElement.lang
      ? document.documentElement.lang.toLowerCase().trim()
      : this.DEFAULT_LANGUAGE_ISO_CODE;

    if (['en', 'es', 'gl'].indexOf(this.locale) < 0) {
      this.locale = this.DEFAULT_LANGUAGE_ISO_CODE;
    }
  };

  values = {
    "en": {
      "genericError": "Something went wrong, please try again.",
      "genericErrorGetInTouch": "An unexpected error has occurred. Please, refresh the page and try it again. Get in touch with support if the error persists. Error: ",
      "feedbackSaving": "Nothing to save...",
      "feedbackCopyLinkSuccess": "Ligazón copiada!",
      "feedbackCopyLinkError": "Non se puido copiar a ligazón",

      "globalSave": "Save",
      "globalModify": "Modify",
      "globalRemove": "Remove",
      "globalPreview": "Preview",
      "globalUpdate": "Update",
      "globalUpdated": "Updated",
      "globalSaved": "Saved",
      "globalSent": "Sent",
      "globalLoading": "Loading...",
      "globalAt": "at",
      "globalMinutes": "minutes",
      "globalClose": "Close",
      "globalUploadedOn": "Uploaded on",
      "globalAppearsOn": "Appears on",
      "globalBy": "by",
      "globalSelectImage": "Add image",

      "feedbackDeleteGeneric": "Are you sure you want to delete it?",
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
      "editorHeadingOne": "Heading 1",
      "editorHeadingTwo": "Heading 2",
      "editorHeadingThree": "Heading 3",
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
      "editorTitlePlaceholder": "Title...",
      "editorSubtitlePlaceholder": "Subtitle...",
      "editorImageCaptionPlaceholder": "Image caption...",
      "editorVideoUrlTitle": "Video URL? (Only YouTube for now)",
      "editorSectionRemove": "Remove from article",
      "editorSectionMoveUp": "Move Up",
      "editorSectionMoveDown": "Move Down",
      "editorDisableControls": "Disable controls",
      "editorEnableControls": "Enable controls",
      "editorLinkPlaceholder": "Paste or type a link",
      "editorLinkOpenBlank": "Open in a new window",

      "appGroupPeriodPartialData": "current period: partial data",
    },
    "es": {
      "genericError": "Ha ocurrido un error inesperado, por favor inténtalo de nuevo.",
      "genericErrorGetInTouch": "Ha ocurrido un error inesperado. Por favor, actualiza la página e intétalo de nuevo. Ponte en contacto con el soporte técnico si el error continúa. Error: ",
      "feedbackSaving": "Nada que guardar...",
      "feedbackCopyLinkSuccess": "¡Enlace copiado!",
      "feedbackCopyLinkError": "No se ha podido copiar el enlace",

      "globalSave": "Guardar",
      "globalModify": "Modificar",
      "globalRemove": "Eliminar",
      "globalPreview": "Previsualizar",
      "globalUpdate": "Actualizar",
      "globalUpdated": "Actualizado",
      "globalSaved": "Guardado",
      "globalSent": "Enviado",
      "globalLoading": "Cargando...",
      "globalAt": "a las",
      "globalMinutes": "minutos",
      "globalClose": "Cerrar",
      "globalUploadedOn": "Subida el",
      "globalAppearsOn": "Aparece en",
      "globalBy": "por",
      "globalSelectImage": "Seleccionar imagen",

      "feedbackDeleteGeneric": "¿Estás seguro/a de querer borrarlo?",
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
      "editorHeadingOne": "Título",
      "editorHeadingTwo": "Subtítulo",
      "editorHeadingThree": "Título 3",
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
      "editorTitlePlaceholder": "Título...",
      "editorSubtitlePlaceholder": "Subtítulo...",
      "editorImageCaptionPlaceholder": "Descripción de la imagen...",
      "editorVideoUrlTitle": "Introduce la direccioón URL del vídeo (Solo YouTube por ahora)",
      "editorSectionRemove": "Eliminar sección del artículo",
      "editorSectionMoveUp": "Mover para arriba",
      "editorSectionMoveDown": "Mover para abajo",
      "editorDisableControls": "Desactivar controles",
      "editorEnableControls": "Activar controles",
      "editorLinkPlaceholder": "Pega o escribe un enlace",
      "editorLinkOpenBlank": "Abrir en una ventana nueva",

      "appGroupPeriodPartialData": "período en curso: datos parciales",
    },
    "gl": {
      "genericError": "Algo non foi ben, por favor inténtao de novo.",
      "genericErrorGetInTouch": "Erro inesperado. Por favor, actualiza a páxina e inténtao de novo. Ponte en contacto co soporte técnico se o erro persiste. Erro: ",
      "feedbackSaving": "Nada que gardar...",
      "feedbackCopyLinkSuccess": "Ligazón copiada!",
      "feedbackCopyLinkError": "Non se puido copiar a ligazón",

      "globalSave": "Gardar",
      "globalModify": "Modificar",
      "globalRemove": "Eliminar",
      "globalPreview": "Previsualizar",
      "globalUpdate": "Actualizar",
      "globalUpdated": "Actualizado",
      "globalSaved": "Gardado",
      "globalSent": "Enviado",
      "globalLoading": "Cargando...",
      "globalAt": "ás",
      "globalMinutes": "minutos",
      "globalClose": "Pechar",
      "globalUploadedOn": "Subida o",
      "globalAppearsOn": "Aparece en",
      "globalBy": "por",
      "globalSelectImage": "Seleccionar imaxe",

      "feedbackDeleteGeneric": "Estás seguro/a de querer borralo?",
      "feedbackPasswordsDoNotMatch": "Os contrasinais non coinciden. Corríxeo e volve intentalo.",
      "feedbackPasswordTooShort": "Contrasinal demasiado curto. Corríxeo e volve intentalo.",
      "feedbackDeleteSectionConfirmation": "Estás seguro de querer eliminar esta sección?",
      "feedbackDeleteImageConfirmation": "Estás seguro de querer eliminar esta imaxe?",
      "feedbackImageDeleted": "Imaxe borrada",
      "feedbackErrorNotAnImage": "non é unha imaxe",
      "feedbackAccountUpdated": "Datos da conta actualizados",

      "editorBold": "Letra grosa",
      "editorItalic": "Cursiva",
      "editorUnderline": "Subliñado",
      "editorStrikeThrough": "Riscado",
      "editorHeadingOne": "Título",
      "editorHeadingTwo": "Subtítulo",
      "editorHeadingThree": "Título 3",
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
      "editorTitlePlaceholder": "Título...",
      "editorSubtitlePlaceholder": "Subtítulo...",
      "editorImageCaptionPlaceholder": "Descrición da imaxe...",
      "editorVideoUrlTitle": "Introduce o enderezo do vídeo (Só YouTube polo momento)",
      "editorSectionRemove": "Eliminar do artigo",
      "editorSectionMoveUp": "Mover para arriba",
      "editorSectionMoveDown": "Mover para abaixo",
      "editorDisableControls": "Desactivar controis",
      "editorEnableControls": "Activar controis",
      "editorLinkPlaceholder": "Pega ou escribe unha ligazón",
      "editorLinkOpenBlank": "Abrir nunha nova ventá",

      "appGroupPeriodPartialData": "período en curso: datos parciais",
    }
  }

  get(key) {
    return this.values[this.locale][key] ?? '';
  }

  formatDate(
    dateObj,
    includeWeedDay = true,
    includeMonthDay = true,
    includeYear = true,
    includeYearSeparator = true,
    includeTime = false,
  ) {
    if (this.locale === 'gl') {
      const months = ['xaneiro', 'febreiro', 'marzo', 'abril', 'maio', 'xuño', 'xullo',
        'agosto', 'setembro', 'outubro', 'novembro', 'decembro'];
      const days = ['domingo', 'luns', 'martes', 'mércores', 'xoves', 'venres', 'sábado'];

      return (includeWeedDay ? days[dateObj.getDay()] + ', ' : '')
        + (includeMonthDay ? dateObj.getDate() + ' de ' : '')
        + months[dateObj.getMonth()]
        + (includeYear ? (includeYearSeparator ? ' de ' : ' ') + dateObj.getFullYear() : '')
        + (includeTime ? ' ás ' + (('0' + dateObj.getHours()).slice(-2) + ':' + ('0' + dateObj.getMinutes()).slice(-2)) : '');
    }

    if (this.locale === 'es') {
      const months = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio',
        'agosto', 'septiembre', 'octubre', 'noviembre', 'dieciembre'];
      const days = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];

      return (includeWeedDay ? days[dateObj.getDay()] + ', ' : '')
        + (includeMonthDay ? dateObj.getDate() + ' de ' : '')
        + months[dateObj.getMonth()]
        + (includeYear ? (includeYearSeparator ? ' de ' : ' ') + dateObj.getFullYear() : '')
        + (includeTime ? ' a las ' + (('0' + dateObj.getHours()).slice(-2) + ':' + ('0' + dateObj.getMinutes()).slice(-2)) : '');
    }

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
      'August', 'September', 'October', 'November', 'December'];
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    return (includeWeedDay ? days[dateObj.getDay()] + ', ' : '')
      + (includeMonthDay ? dateObj.getDate() + ' ' : '')
      + months[dateObj.getMonth()] + ' '
      + (includeYear ? dateObj.getFullYear() : '')
      + (includeTime ? ' at ' + (('0' + dateObj.getHours()).slice(-2) + ':' + ('0' + dateObj.getMinutes()).slice(-2)) : '');
  }
}

export const Global = new GlobalClass();
