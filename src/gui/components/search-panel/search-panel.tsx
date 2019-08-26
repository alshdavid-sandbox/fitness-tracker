import './search-panel.scss'
import { h } from 'preact';

type InputProps = h.JSX.IntrinsicElements['input']
export interface SearchPanelProps extends InputProps {}

export const SearchPanel = ({ 
  placeholder,
  ...inputProps 
}: SearchPanelProps) => 
  <div className="component-search-panel">
    <input 
      {...inputProps}
      type="text" 
      placeholder={placeholder} />
  </div>