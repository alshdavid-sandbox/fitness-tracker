import { h } from "preact";
import { useState, useMemo } from "preact/hooks";
import { format, getDay } from 'date-fns'

export const useDate = () => {
    const getWeekday = (date: Date) => {
        const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        return days[getDay(date)]
    }
    
    const getMonth = (month: string) => {
        const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
        return months[parseInt(month)]
    }

    const [ dateInput, setDateInput ] = useState<any>(undefined)
    const [ dateLabel, setDateLabel ] = useState<any>(undefined)

    const clickInput = () => {
        if (!dateInput) {
            return
        }
        dateInput.focus()
        dateInput.click()
    }

    const getDate = (dateString?: string) => {
        const date = (() => {
            if (dateString) {
                return new Date(Date.parse(dateString))
            }
            return new Date()
        })()
        const fmtDate = format(date, 'yyyy-MM-dd')
        const year = fmtDate.split('-')[0]
        const month = fmtDate.split('-')[1]
        const day = fmtDate.split('-')[2]
        setDateLabel(<div>
            <strong>{ getWeekday(date) }</strong> { day } {getMonth(month)} {year}
        </div>)
        return fmtDate
    }

    useMemo(() => {
        if (!dateInput) {
            return
        }
        dateInput.value = getDate()
    }, [dateInput])

    return {
        clickInput,
        dateLabel,
        getDate,
        setDateInput
    }
}