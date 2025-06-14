import React, { useEffect, useState } from 'react'

const LockScreen = () => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
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
        <div className=''>
            <div className='text-3xl font-[San Francisco] font-bold'>{day + ', ' + date + ' ' + month}</div>
            <div className='font-[San Francisco] text-9xl font-black'>
                <strong>
                    {time.toLocaleTimeString(undefined, {
                        hour: '2-digit',
                        minute: '2-digit',
                        hourCycle: 'h23'
                    })}
                </strong>
            </div>
        </div>
    )
}

export default LockScreen