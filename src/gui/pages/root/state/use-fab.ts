import { h } from "preact";
import { useState } from "preact/hooks";

export const useFab = () => {
  const [ icon, setIcon ] = useState<string>('')
  const [ onClick, setOnClick ] = useState<any>(() => {})

  return {
      icon,
      setIcon,
      onClick,
      setOnClick: (value: () => void) => {
        setOnClick(value)
      },
  }
}