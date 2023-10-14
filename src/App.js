import { Header } from './header';
import './App.css';
import App4 from './app4';

function App() {
  return (
    <div style={{backgroundColor: 'black', color: 'white',paddingLeft:'10px',paddingRight:'10px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      
  }}>
      <Header/>
      <App4  />
    </div>
  );
}

export default App;
