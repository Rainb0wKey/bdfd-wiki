function updateOutput(inputValue) {
    const playOutput = document.getElementById('play-output');

    if (!isNaN(inputValue) && inputValue !== "") {
      const result = Math.ceil(inputValue);
      playOutput.textContent = `Result: ${result}`;
    } else {
      let nonNumericIndex = inputValue.search(/[^0-9\.]/); 
      nonNumericIndex = nonNumericIndex === -1 ? inputValue.length : nonNumericIndex;
        
      playOutput.textContent = `❌ Function $ceil at 1:${nonNumericIndex} returned an error: expected integer in position 1, got '${inputValue}'`;
    }
}
