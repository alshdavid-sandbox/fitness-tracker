import React from 'react';

export const Movement = ({ set, value }: any) => (
    <div className="entry">
        <input
            type="text"
            value={value}
            onChange={(e) => set(e.target.value)}
            placeholder="Movement"/>
    </div>
)
