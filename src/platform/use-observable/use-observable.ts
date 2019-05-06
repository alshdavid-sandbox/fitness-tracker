import { useState, useEffect } from "react";
import { Observable } from "rxjs";


export function useObservable<T = any>(observable: Observable<T>, initialValue?: T) {
    if (!initialValue && (observable as any).value) {
        initialValue = (observable as any).value
    }
    const [value, setValue] = useState(initialValue);
  
    useEffect(() => {
      const subscription = observable.subscribe(newValue => {
        setValue(newValue);
      });
      return () => subscription.unsubscribe();
    }, []);
  
    return (value as T);
}