import React from 'react'

const Clock = () => {
    return (
        <div>
            <svg width="12" height="12" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="60" cy="60" r="55" stroke="#0090F3" strokeWidth="10" />
                <line x1="61" y1="58" x2="61" y2="18" stroke="#0090F3" strokeWidth="12" />
                <line x1="67" y1="63" x2="22" y2="63" stroke="#0090F3" strokeWidth="10" />
            </svg>
        </div>
    )
}

export default Clock