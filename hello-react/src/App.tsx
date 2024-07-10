import Hello from './Hello.js';
import './App.css'
import Select from './Select.js';
import { useRef, useState } from 'react';

function App() {
  const [name, setName] = useState('Titi');
  const selectRef = useRef<any>();

  return (
    <>
      <h1>React</h1>
      <Hello name={name} age={38}   />
      <Select items={['Toto', 'Titi', 'Tata']} value={name} onValueChange={(v) => {setName(v); selectRef.current?.openMenu() }} />
      <Select items={['Toto', 'Titi', 'Tata']} value={name} onValueChange={(v) => setName(v)} ref={selectRef} />
      </>
  )
}

export default App
