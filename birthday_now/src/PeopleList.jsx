const PeopleList = ({people}) => {
  return (
    <>
     {people.map((person)=>(
      <article key={person.id} className="person">
       <img src={person.image} alt={person.name} />
       <div>
        <h4>{person.name}</h4>
        <p>{person.age}</p>
       </div>
      </article>
     ))}
     </>
  );
};

export default PeopleList