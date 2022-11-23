import logo from './logo.svg';
import './App.css';
import Student from './Student';

function App() {
  return (
    <div className="App">
      <Student ad="Vusal" soyad="elekberzade" kurs={3} group="601.20" />
      <Student ad="zelimxan" soyad="Yaqub" kurs={2} group="603.20" />
      <Student ad="Qezenfer" soyad="Nureddinzade" kurs={11} group="125.20"  />
    </div>
  );
}

export default App;
