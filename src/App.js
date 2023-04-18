import logo from './logo.svg';
import './App.css';

function App() {
  const card = document.querySelector('.card');
  const getData = async function() {
    const json =  await fetch(`https://api.escuelajs.co/api/v1/products`);
    const data = await json.json();  
    const html = `${data[0].title}`;
    card.innerHTML=html;
}
getData();
  return (
    <div className="App">
      <div className="card"></div>
    </div>
  );
}

export default App;
