import { useState } from "react";

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
            <span key={id} style={{ backgroundColor: 'yellow' }}>
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
    <div>
     <input type="text"
     placeholder="search for author"
     value={search}
     onChange={handleSearchQuery}
     />
     <ul>
      {authors.map((author)=>(
       <li key={authors.id}>
        {getHighlightedText(author.name, search)}
       </li>
      ))}
     </ul>
    </div>
  )
}

export default AuthorList