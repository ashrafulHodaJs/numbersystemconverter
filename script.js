function convertNumber() {
  const numberInput = document.getElementById('numberInput').value;
  const baseInput = parseInt(document.getElementById('baseInput').value, 10);

  if (isNaN(baseInput) || baseInput < 2 || baseInput > 36) {
    document.getElementById('result').textContent = 'Please enter a valid base between 2 and 36.';
    return;
  }

  if (!isValidNumberForBase(numberInput, baseInput)) {
    document.getElementById('result').textContent = 'Invalid number for the entered base.';
    return;
  }

  const convertedNumber = parseInt(numberInput, baseInput).toString(); // i used inbuilt js function to convert number of any base to decimal
  
  document.getElementById('result').textContent = `Converted number: ${convertedNumber}`;
}

function isValidNumberForBase(number, base) {
  const validCharacters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'.slice(0, base); // this will slice the given string to an array depending on the bases.
  const pattern = new RegExp(`^[${validCharacters}]+$`);
  return pattern.test(number.toUpperCase());
}
