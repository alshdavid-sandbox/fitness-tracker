import './date-item.scss'
import { h } from "preact";
import { format } from 'date-fns';
import { useMemo } from 'preact/hooks';

interface DateItemProps {
  dateString: string
}

// <DateItem weekday="Monday" date="22 April 2019" />

export const DateItem = ({ dateString }: DateItemProps) => {
  const date = useMemo(() => new Date(Date.parse(dateString)), [dateString])

  const weekday = format(date, 'EEEE')
  const fmtDate = format(date, 'dd LLLL yyyy')

  return <div className="component-date-item">
    <strong>{weekday}</strong>
    {fmtDate}
  </div>
}
