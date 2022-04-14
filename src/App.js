/* import logo from './logo.svg'; */
import './App.css';
import './Data/index';
import { BookCard } from './components/Main';
import { Title } from './components/Header';
import { data } from './Data/index';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title />
      </header>
      <main>
        {
          data.products.map((item) => (
            <BookCard
              key={item.id}
              name={item.name}
              img={item.img}
              description={item.description} />
          ))
        }
      </main>
    </div>
  );
}

export default App;
