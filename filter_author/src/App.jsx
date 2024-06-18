import AuthorList from "./AuthorList";
import authors from "./authors";

const App = () => {
  return (
    <main>
      <section className='container'>
        <div className="hidden-div">
          <div className='centered-div'>
            <h2>Filter By Authors</h2>
            <AuthorList authors={authors} />
          </div>
        </div>
      </section>
    </main>
  );
}

export default App