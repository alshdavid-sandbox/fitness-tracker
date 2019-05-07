import React from 'react';
import * as exercise from '~/platform/exercise'

export const Sets: any = ({ sets, add, remove, update }: any) => (
    <div className="entry sets">
        { 
            sets.map((set: exercise.Set, i: number) => 
                <div key={i}>
                    <input 
                        type="number" 
                        placeholder="Reps" 
                        onChange={(e) => update(i, parseInt(e.target.value))}/>
                    <input 
                        type="number" 
                        placeholder="Weight" 
                        onChange={(e) => update(i, undefined, parseInt(e.target.value))}/>
                    <div 
                        onClick={() => remove(i)}>
                        x
                    </div>
                </div>) 
        }
        <button
            onClick={() => add({ reps: undefined, weight: undefined })}>
            Add Set
        </button>
    </div>
)