import { h } from 'preact';

export const Movement = ({ set, value }: any) => (
    <div className="entry">
        <input
            type="text"
            value={value}
            onChange={(e: any) => set(e.target.value)}
            placeholder="Movement"/>
    </div>
)
