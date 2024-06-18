import { useState } from "react";
import "./index.css";
import {FaSearch} from 'react-icons/fa'

const AuthorList = ({authors}) => {
 const [search, setSearch] = useState('');


 const handleSearchQuery= (e)=>{
  e.preventDefault();
  setSearch(e.target.value);
 }

  const getHighlightedText = (text, highlight) => {
    // Split the text into parts based on the highlight
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return (
      <span>
        {parts.map((part, id) =>
          part.toLowerCase() === highlight.toLowerCase() ? (
            <span  className="highlighted" key={id} >
              {part}
            </span>
          ) : (
            part
          )
        )}
      </span>
    );
  };
  return (
    <div >
      <div className='search-container'>
        <FaSearch className='search-icon' />
        <input
          type='text'
          placeholder='search for author'
          value={search}
          onChange={handleSearchQuery}
          className='search-bar'
        />
      </div>
      <ul>
        {authors.map((author) => (
          <li key={authors.id}>{getHighlightedText(author.name, search)}</li>
        ))}
      </ul>
    </div>
  );
}

export default AuthorList