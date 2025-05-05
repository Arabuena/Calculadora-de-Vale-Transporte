// holidays.js
const holidays = [
  '2024-01-01', // Ano Novo
  '2024-02-12', // Carnaval
  '2024-02-13', // Carnaval
  '2024-03-29', // Sexta-feira Santa
  '2024-04-21', // Tiradentes
  '2024-05-01', // Dia do Trabalho
  '2024-05-30', // Corpus Christi
  '2024-09-07', // Independência
  '2024-10-12', // Nossa Senhora
  '2024-11-02', // Finados
  '2024-11-15', // Proclamação da República
  '2024-12-25', // Natal
];

export const isHoliday = (date) => {
  const formattedDate = date.toISOString().split('T')[0];
  return holidays.includes(formattedDate);
};
  