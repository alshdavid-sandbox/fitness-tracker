import './search-panel.scss'
import { h, Fragment } from 'preact';

type InputProps = h.JSX.IntrinsicElements['input']
export interface SearchPanelProps extends InputProps {}

export const SearchPanel = ({ 
  placeholder,
  ...inputProps 
}: SearchPanelProps) => <Fragment>
  <div className="component-search-panel-spacer" />
  <div className="component-search-panel">
    <input 
      {...inputProps}
      type="text" 
      placeholder={placeholder} />
  </div>
</Fragment>