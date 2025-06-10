'use client';
import React, { useEffect, useState } from 'react'
const MenuBarDate = () => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const [time, setTime] = useState(new Date())
    const currentDate = new Date();
    const month = months[currentDate.getMonth()];
    const day = days[currentDate.getDay()]
    const date = currentDate.getDate()

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000)
        return () => clearInterval(timer)
    }, [])

    return (
        <div className='flex gap-1 text-sm font-normal'>
            <div className='select-none cursor-default'>{day}</div>
            <div className='select-none cursor-default'>{date}</div>
            <div className='select-none cursor-default'>{month}</div>
            <div className='select-none cursor-default'>
                {time.toLocaleTimeString(undefined, {
                    hour: '2-digit',
                    minute: '2-digit',
                    hourCycle: 'h23'
                })}
            </div>

        </div>
    )
}

export default MenuBarDate