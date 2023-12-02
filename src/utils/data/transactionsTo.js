export const generateMockDataTo = () => {
  const mockDataTo = [];

  const bankAccountRegex = /^\d{10}$/; // Regular expression for a 10-digit bank account number

  const transferMethods = ["Orange Money","MTN MOMO","Bank","Debit Card"]
  const randomTransferMethod = transferMethods[Math.floor(Math.random() * transferMethods.length)]

  for (let i = 0; i < 28; i++) {
    const bankAccountNumber = generateRandomBankAccountNumber();
    const  bankAccountNumberH = 'x'.repeat(8) + bankAccountNumber.slice(8)

    mockDataTo.push({ accountNumber: bankAccountNumberH ,method:randomTransferMethod});
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
