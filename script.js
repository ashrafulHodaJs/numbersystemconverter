function convertNumber() {
  const numberInput = document.getElementById('numberInput').value;
  const baseInput = parseInt(document.getElementById('baseInput').value, 10);

  if (isNaN(baseInput) || baseInput < 2 || baseInput > 36) {
    document.getElementById('result').textContent = 'Please enter a valid base between 2 and 36.';
    return;
  }

  if (!isValidNumberForBase(numberInput, baseInput)) {
    document.getElementById('result').textContent = 'Invalid number for the specified base.';
    return;
  }

  const convertedNumber = parseInt(numberInput, baseInput).toString();
  
  document.getElementById('result').textContent = `Converted number: ${convertedNumber}`;
}

function isValidNumberForBase(number, base) {
  const validCharacters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'.slice(0, base);
  const pattern = new RegExp(`^[${validCharacters}]+$`);
  return pattern.test(number.toUpperCase());
}
