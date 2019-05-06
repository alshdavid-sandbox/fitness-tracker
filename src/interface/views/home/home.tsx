import React from 'react';
import * as item from '~/platform/item';
import { useObservable } from '~/platform/use-observable';



export const HomeView = (store: item.Store) => () => {
    const items = useObservable<item.Item[]>(store.$)

    return <div>
        <button onClick={() => store.add(item.create('test'))}>Add</button>
        { 
            items.map((item:any, i) => <div key={i}>
                { item.title }
            </div>) 
        }
    </div>
}

