// Math
function handlePlaygroundInput(inputValue, functionName, operation) {
  const playOutput = document.getElementById('play-output');

  if (!isNaN(inputValue) && inputValue !== "") {
    const result = operation(inputValue);
    playOutput.textContent = `Result: ${result}`;
  } else {
    if (inputValue === "") {
      outputEmptyValueError(functionName, 1, 1);
    } else {
      let nonNumericIndex = inputValue.search(/[^0-9\.]/); 
      nonNumericIndex = nonNumericIndex === -1 ? inputValue.length : nonNumericIndex + functionName.length + 3;
      playOutput.textContent = `❌ Function ${functionName} at 1:${nonNumericIndex} returned an error: expected integer in position 1, got '${inputValue}'`;
    }
  }
}

// $ceil[]
function ceilPlayground(inputValue) {
  handlePlaygroundInput(inputValue, '$ceil', Math.ceil); 
}

// $floor[]
function floorPlayground(inputValue) {
  handlePlaygroundInput(inputValue, '$floor', Math.floor); 
}

// $sqrt[]
function sqrtPlayground(inputValue) {
  handlePlaygroundInput(inputValue, '$sqrt', (value) => Math.round(Math.sqrt(value)));
}

// $round[]
function roundPlayground(inputValue) {
  handlePlaygroundInput(inputValue, '$round', Math.round); 
}

// $charCount[]
function charCountPlayground(inputValue) {
  const playOutput = document.getElementById('play-output');
  const charCount = inputValue.length;
  playOutput.textContent = `Your message has ${charCount} characters.`;
}

// $argCount[]
function argCountPlayground(inputValue) {
  const playOutput = document.getElementById('play-output');
  const argCount = inputValue.trim().split(/\s+/).length;
  playOutput.textContent = `Word count: ${argCount}`;
}

// $isNumber[]
function isNumberPlayground(inputValue) {
  const playOutput = document.getElementById('play-output');
  playOutput.textContent = `Is number? ${!isNaN(parseFloat(inputValue)) && isFinite(inputValue)}`; 
}

// $isInteger[]
function isIntegerPlayground(inputValue) {
  const playOutput = document.getElementById('play-output');
  if (inputValue === "") {
    outputEmptyValueError(`$isInteger`, 1, 1);
  } else {
    playOutput.textContent = `Is integer? ${Number.isInteger(parseFloat(inputValue))}`;
  }
}

// $isValidHex[]
function isValidHexPlayground(inputValue) {
  const playOutput = document.getElementById('play-output');
  playOutput.textContent = `Is valid HEX? ${/^#?[0-9a-fA-F]+$/.test(inputValue)}`;
}

// $isBoolean[]
function isBooleanPlayground(inputValue) {
  const playOutput = document.getElementById('play-output');
  const booleanValues = ['true', 'false', 'on', 'off', 'enable', 'disable', 'yes', 'no'];
  playOutput.textContent = `Is valid HEX? ${booleanValues.includes(inputValue)}`;
}

function preserveLineBreaks(text) {
  return text.replace(/\n/g, '<br>');
}

function limitLines(text, maxLines) {
  const lines = text.split('\n');
  return lines.slice(0, maxLines).join('\n');
}

// $trimSpace[]
function trimSpacePlayground(inputValue) {
  const playOutput = document.getElementById('play-output');
  playOutput.innerHTML = preserveLineBreaks(limitLines(inputValue.trim(), 20)); 
}

// $toLowercase[]
function toLowercasePlayground(inputValue) {
  const playOutput = document.getElementById('play-output');
  playOutput.innerHTML = preserveLineBreaks(limitLines(inputValue.toLowerCase(), 20)); 
}

// $toUppercase[]
function toUppercasePlayground(inputValue) {
  const playOutput = document.getElementById('play-output');
  playOutput.innerHTML = preserveLineBreaks(limitLines(inputValue.toUpperCase(), 20)); 
}

// $toTitleCase[]
function toTitleCasePlayground(inputValue) {
  const playOutput = document.getElementById('play-output');
  playOutput.innerHTML = preserveLineBreaks(limitLines(inputValue.replace(/\w\S*/g, (word) => 
    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() 
  ), 20));
}

// Empty value error
function outputEmptyValueError(functionName, lineNumber, position) {
  const playOutput = document.getElementById('play-output');
  playOutput.innerHTML  = `❌ Function <p id="errorFunctionName">${functionName}</p> at <p id="errorLineNumber">${lineNumber}:${functionName.length + 2}</p> returned an error: expected valid value in position ${position}, got empty value`;
}
