export const generatemockDataFrom = () => {
  const mockDataFrom = [];

  for (let i = 1; i <= 28; i++) {
    const day = Math.floor(Math.random() * 30) + 1; // Random day between 1 and 30
    const month = Math.floor(Math.random() * 12) + 1; // Random month between 1 and 12
    const year = 2023; // Fixed year for example purposes

    const date = `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;
    const amount = `XAF ${Math.floor(Math.random() * 250001) + 50000}`; // Random amount between 50000 and 300000

    mockDataFrom.push({ date, amount });
  }

  return mockDataFrom;
};
