import { useState } from "react";
import PeopleList from "./PeopleList";
import data from "./data.js";

const App = () => {
   const [people, setPeople] = useState(data);
  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthdays today</h3>
        <PeopleList people={people} />
        <button onClick={()=>setPeople([])}>Clear all</button>
      </section>
    </main>
  );
}

export default App