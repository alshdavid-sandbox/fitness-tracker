import { h } from 'preact';

export const Tags: any = ({
    tags,
    remove, 
    input
}: any) => (
    <div className="entry">
        <div className="tags">
            { tags.map((tag: string, i: number) => 
                <div 
                    data-field="tags[]"
                    data-field-value={tag}
                    key={tag} 
                    onClick={() => remove(i)}>
                    { tag } x
                </div>) }
            <div 
                className="add" 
                onClick={() => input()}>
                Tap to add
            </div>
        </div>
    </div>
)