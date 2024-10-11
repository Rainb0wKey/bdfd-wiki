// Math
function handlePlaygroundInput(inputValue, functionName, operation) {
  const playOutput = document.getElementById('play-output');

  if (!isNaN(inputValue) && inputValue !== "") {
    const result = operation(inputValue);
    playOutput.textContent = `Result: ${result}`;
  } else {
    if (inputValue === "") {
      playOutput.textContent = `❌ Function ${functionName} at 1:7 returned an error: expected valid value in position 1, got empty value`;
    } else {
      let nonNumericIndex = inputValue.search(/[^0-9\.]/); 
      nonNumericIndex = nonNumericIndex === -1 ? inputValue.length : nonNumericIndex + 8;

      playOutput.textContent = `❌ Function ${functionName} at 1:${nonNumericIndex} returned an error: expected integer in position 1, got '${inputValue}'`;
    }
  }
}

// $ceil[]
function ceilPlayground(inputValue) {
  handlePlaygroundInput(inputValue, '$ceil', Math.ceil); 
}

// floor[]
function floorPlayground(inputValue) {
  handlePlaygroundInput(inputValue, 'floor', Math.floor); 
}

// $sqrt[]
function sqrtPlayground(inputValue) {
  handlePlaygroundInput(inputValue, '$sqrt', Math.sqrt);
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
  const argCount = inputValue.trim().split(/\s+|(?<!\w\-)[^a-zA-Z0-9\-]+/).length; 
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
    playOutput.textContent = `❌ Function $isInteger at 1:7 returned an error: expected valid value in position 1, got empty value`;
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

// $toLowercase[]
function toLowercasePlayground(inputValue) {
  const playOutput = document.getElementById('play-output');
  playOutput.textContent = `${inputValue.toLowerCase()}`;
}

// $toUppercase[]
function toUppercasePlayground(inputValue) {
  const playOutput = document.getElementById('play-output');
  playOutput.textContent = `${inputValue.toUpperCase()}`;
}

// $toTitleCase[]
function toTitleCasePlayground(inputValue) {
  const playOutput = document.getElementById('play-output');
  playOutput.textContent = `${inputValue.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase())}`;
}
