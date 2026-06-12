export const calculateDaysBetween = (startDate: Date | string, endDate: Date | string = new Date()): number => {
  const start = new Date(startDate)
  const end = new Date(endDate)
  const diffTime = Math.abs(end.getTime() - start.getTime())
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  return diffDays
}

export const formatDatePT = (date: Date | string): string => {
  const d = new Date(date)
  return d.toLocaleDateString('pt-BR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export const formatTimeRemaining = (startDate: Date | string, endDate: Date | string): string => {
  const days = calculateDaysBetween(startDate, endDate)
  return `${days} dias juntos`
}
