// Math
function handlePlaygroundInput(inputValue, functionName, operation) {
  const playOutput = document.getElementById('play-output');

  if (!isNaN(inputValue) && inputValue !== "") {
    const result = operation(inputValue); // Apply the operation
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
  const spaceCount = inputValue.split(' ').length - 1;
  playOutput.textContent = `Word count: ${spaceCount}`;
}
