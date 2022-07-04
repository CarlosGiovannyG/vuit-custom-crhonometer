import React, { useEffect, useState } from 'react'
import moment, { duration } from 'moment'
import { useCssHandles } from 'vtex.css-handles'
import './styles.css'

type ChronometerDisplayProps = {
  futureDate: string
}

interface EndateProps {
  [key: string]: number
  days: number
  hours: number
  mins: number
  secs: number
}


const ChronometerDisplay = ({ futureDate }: ChronometerDisplayProps) => {
  const [endDate, setEndDate] = useState<EndateProps>(
    {
      days: 0,
      hours: 0,
      mins: 0,
      secs: 0,
    }

  )
  const { secs } = endDate


  const setChronometer = () => {
    const fechaFin = moment(futureDate);
    const today = moment();
    const clockDuration = duration(fechaFin.diff(today))
    const days = Math.floor(clockDuration.asDays());
    const hours = clockDuration.hours();
    const mins = clockDuration.minutes();
    const secs = clockDuration.seconds();
    setEndDate({
      days,
      hours,
      mins,
      secs,
    });

  }

  useEffect(() => {
    setTimeout(() => {
      setChronometer();
    }, 1000);
  }, [secs])

  const CSS_HANDLES = ['containerDate', 'styleDisplay', 'containerDescription', 'DateNumber', 'containerDateAlert']
  const handles = useCssHandles(CSS_HANDLES)


  return (
    <div className={handles.styleDisplay}>
      {Object.keys(endDate).map((date, index) => (
        <div className={handles.containerDate} key={index}>
          <span className={`${handles.DateNumber}  ${endDate[date] < 0 ? handles.containerDateAlert : null}`}>
            {endDate[date].toLocaleString('en-US', { minimumIntegerDigits: 2 })}
          </span>
          <span className={handles.containerDescription}>
            {date[0].toUpperCase() + date.slice(1)}
          </span>
        </div>
      ))
      }
    </div>
  )
}

export default ChronometerDisplay
