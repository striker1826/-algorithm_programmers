const config = {
  "(": ")",
  "{": "}",
  "[": "]",
  '"': '"',
  "'": "'",
};

const autoComplete = (e) => {
  const key = e.key;
  let text;

  if (Object.keys(config).includes(key)) {
    const textarea = document.querySelector("textarea");
    const startDrag = textarea.selectionStart;
    const endDrag = textarea.selectionEnd;

    text = textarea.value;
    console.log(text.slice(startDrag, endDrag));
    console.log(text.slice(0, startDrag));
    console.log(text.slice(endDrag));
    textarea.value =
      text.slice(0, startDrag) + key + text.slice(startDrag, endDrag) + config[key] + text.slice(endDrag);

    e.preventDefault();
  }
};

document.addEventListener("keydown", autoComplete);
