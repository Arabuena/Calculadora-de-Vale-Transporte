// holidays.js
const holidays = [
  '2025-01-01', // Ano Novo
  '2025-02-12', // Carnaval
  '2025-02-13', // Carnaval
  '2025-03-29', // Sexta-feira Santa
  '2025-04-21', // Tiradentes
  '2025-05-01', // Dia do Trabalho
  '2025-05-30', // Corpus Christi
  '2025-09-07', // Independência
  '2025-10-12', // Nossa Senhora
  '2025-11-02', // Finados
  '2025-11-15', // Proclamação da República
  '2025-12-25', // Natal
];

export const isHoliday = (date) => {
  const formattedDate = date.toISOString().split('T')[0];
  return holidays.includes(formattedDate);
};
  