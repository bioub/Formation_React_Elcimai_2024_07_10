import Hello from './Hello.js';
import './App.css';
import Select, { SelectRefApi } from './Select.js';
import { useRef, useState } from 'react';

function App() {
  // const [options, setOptions] = useState({
  //   title: 'App',
  //   color: 'blue'
  // });
  const [name, setName] = useState('Titi');
  // const [color, setColor] = useState('blue');
  const selectRef = useRef<SelectRefApi>(null);

  // setOptions({...options, color: 'red'})
  // (avec immer) setOptions((draft) => draft.color = 'red');

  return (
    <>
      <nav className='menu'>
        Home
        About
      </nav>
      <h1>React</h1>
      <Hello name={name} age={38} />
      <Select
        items={['Toto', 'Titi', 'Tata']}
        value={name}
        onValueChange={(v) => {
          setName(v);
          selectRef.current?.openMenu();
        }}
        renderItem={(item) => <div><input type="checkbox" defaultChecked={item === name} /> {item}</div>}
      />
      <Select
        items={['Toto', 'Titi', 'Tata']}
        value={name}
        onValueChange={(v) => setName(v)}
        ref={selectRef}
      />
    </>
  );
}

export default App;
