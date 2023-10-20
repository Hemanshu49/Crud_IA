import React, { useState } from 'react';

const GeneratorRandomPassword = () => {
  const [password, setPassword] = useState('');

  const generatePassword = () => {
    const length = 10; // Length of the generated password
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()';
    let newPassword = '';

    // Ensure at least one capital letter
    newPassword += uppercaseChars[Math.floor(Math.random() * uppercaseChars.length)];

    // Ensure at least one special character
    newPassword += specialChars[Math.floor(Math.random() * specialChars.length)];

    // Ensure at least one number
    newPassword += numberChars[Math.floor(Math.random() * numberChars.length)];

    // Fill the rest of the password with random characters
    for (let i = 3; i < length; i++) {
      const charSet = lowercaseChars + uppercaseChars + numberChars + specialChars;
      newPassword += charSet[Math.floor(Math.random() * charSet.length)];
    }

    // Shuffle the password characters
    newPassword = newPassword.split('').sort(() => Math.random() - 0.5).join('');

    setPassword(newPassword);
  };

  return (
    <div>
      <button onClick={generatePassword}>Generate Password</button>
      <p>{password}</p>
    </div>
  );
};

export default GeneratorRandomPassword;
