(() => {
  const $displayEle = document.getElementById('calc-input');
  const $calcControlsEle = document.getElementById('calc-controls');

  let output = '';
  $displayEle.innerText = 0;

  $calcControlsEle.addEventListener('click', (event) => {
    event.stopPropagation();

    if (event.target.tagName === 'BUTTON') {
      const controlType = event.target.dataset.id;

      switch (controlType) {
        case 'clear': {
          output = '';
          break;
        }
        case 'backspace': {
          output = output.slice(0, output.length - 1);
          break;
        }
        case 'result': {
          output = String(eval(output));
          break;
        }
        default: {
          output += event.target.innerText;
          break;
        }
      }

      $displayEle.innerText = output || 0;
    }

  })
})();