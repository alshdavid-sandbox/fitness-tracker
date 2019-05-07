import moment from 'moment'
import React from 'react';

export const Date = ({ set, value }: any) => (
    <div className="entry">
        <input
            data-field="date"
            onChange={(e) => set(e.target.value)}
            value={value}
            type="date" />
    </div>  
) 