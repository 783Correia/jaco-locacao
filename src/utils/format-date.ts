// Formata 'YYYY-MM-DD' sem criar Date: new Date('2026-07-08') é meia-noite UTC,
// que no fuso do Brasil vira o dia anterior — divergindo do HTML do servidor
// (erro de hidratação React #418/#425) e exibindo a data errada.
const MONTHS_SHORT = ['jan.', 'fev.', 'mar.', 'abr.', 'mai.', 'jun.', 'jul.', 'ago.', 'set.', 'out.', 'nov.', 'dez.']
const MONTHS_LONG = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']

function parts(dateStr: string): { day: string; month: number; year: string } {
  const [year, month, day] = dateStr.slice(0, 10).split('-')
  return { day, month: Number(month) - 1, year }
}

export function formatDateShort(dateStr: string, withYear = false): string {
  const { day, month, year } = parts(dateStr)
  const base = `${day} de ${MONTHS_SHORT[month] ?? ''}`
  return withYear ? `${base} de ${year}` : base
}

export function formatDateLong(dateStr: string): string {
  const { day, month, year } = parts(dateStr)
  return `${day} de ${MONTHS_LONG[month] ?? ''} de ${year}`
}
