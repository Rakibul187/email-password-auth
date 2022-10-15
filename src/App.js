import './App.css';
import { getAuth } from 'firebase/auth'

const auth = getAuth()
function App() {
  return (
    <div className="App">
      <form>
        <input type='email' name='' id='' placeholder='Your Email' />
        <br />
        <input type='password' name='' id='' placeholder='Your Password' />
      </form>
    </div>
  );
}

export default App;
