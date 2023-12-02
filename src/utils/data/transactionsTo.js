export const generateMockDataTo = () => {
  const mockDataTo = [];

  const bankAccountRegex = /^\d{10}$/; // Regular expression for a 10-digit bank account number

  for (let i = 0; i < 28; i++) {
    const bankAccountNumber = generateRandomBankAccountNumber();

    mockDataTo.push({ accountNumber: bankAccountNumber });
  }

  return mockDataTo;
};

const generateRandomBankAccountNumber = () => {
  const bankAccountRegex = /^\d{10}$/; // Regular expression for a 10-digit bank account number

  let bankAccountNumber = '';

  for (let i = 0; i < 10; i++) {
    bankAccountNumber += Math.floor(Math.random() * 10).toString();
  }

  return bankAccountRegex.test(bankAccountNumber)
    ? bankAccountNumber
    : generateRandomBankAccountNumber();
};
