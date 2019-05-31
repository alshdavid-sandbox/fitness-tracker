import { h } from 'preact';

export const Date = ({ set, value }: any) => (
    <div className="entry">
        <input
            data-field="date"
            onChange={(e: any) => set(e.target.value)}
            value={value}
            type="date" />
    </div>  
) 