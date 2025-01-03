import { toZonedTime } from 'date-fns-tz'

export function timeAgo(dateString) {
  const timeZone = 'America/Sao_Paulo';
  const now = toZonedTime(new Date(), timeZone);
  const postDate = toZonedTime(new Date(dateString), timeZone);
  const diff = Math.floor((now - postDate) / 1000);
  
  const intervals = [
    {label: 'ano', seconds: 31536000},
    {label: 'mês', seconds: 2592000},
    {label: 'dia', seconds: 86400},
    {label: 'hora', seconds: 3600},
    {label: 'minuto', seconds: 60},
    {label: 'segundo', seconds: 1}
  ]
  
  for (let interval of intervals) {
    let count = Math.floor(diff / interval.seconds);
    if (count > 0) {
      return `Publicado há ${count} ${interval.label}${count > 1 ? 's' : ''}`;
    }
  }
  
  return 'Publicado agora';
  
}