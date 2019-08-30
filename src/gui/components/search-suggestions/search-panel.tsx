import './search-suggestions.scss'
import { h } from 'preact';

export interface SearchSuggestionsProps {
  options: string[]
  onSelect: (option: string) => void
}

export const SearchSuggestions = ({ 
  options = [],
  onSelect = () => {},
}: SearchSuggestionsProps) => 
  <div className="component-search-suggestions">
    { 
      options.map(option => 
        <div 
          onClick={() => onSelect(option)}>
          {option}
        </div>) 
    }
  </div>