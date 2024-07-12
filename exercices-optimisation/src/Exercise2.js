import { useEffect, useRef, useState } from 'react';

function Exercise2() {
  const [countClickInside, setCountClickInside] = useState(0);
  const [countClickOutside, setCountClickOutside] = useState(0);

  const boxRef = useRef();

  useEffect(() => {
    console.log('addEventListener');
    const callback = (event) => {
      if (boxRef.current?.contains(event.target)) {
        setCountClickInside((c) => c + 1);
      } else {
        setCountClickOutside((c) => c + 1);
      }
    };
    document.addEventListener('click', callback);
    return () => {
      console.log('removeEventListener');
      document.removeEventListener('click', callback);
    }
  }, []);

  return (
    <div className="Exercise2">
      <h2>Exercice (fr)</h2>
      <p>
        Lorsque l'on quitte cette page, une erreur se produit. Refactorer le
        code pour ajouter un <code>document.removeEventListener</code> au moment
        où l'on quitte le composant (ou lorsque <code>countClickInside</code> ou{' '}
        <code>countClickOutside</code> changent de valeur).
      </p>
      <p>
        Réécrire ensuite les appels à <code>setCountClickInside</code> et{' '}
        <code>setCountClickOutside</code>
        pour utiliser les{' '}
        <a
          href="https://reactjs.org/docs/hooks-reference.html#functional-updates"
          target="_blank"
          rel="noreferrer"
        >
          functional updates
        </a>{' '}
        et ainsi retirer les dépendences vers <code>countClickInside</code> et{' '}
        <code>countClickOutside</code> de <code>useEffect</code>.
      </p>
      <h2>Exercise (en)</h2>
      <p>
        When we leave this page, an error occurs. Refactor the code to add a{' '}
        <code>document.removeEventListener</code> when we leave the component
        (or when <code>countClickInside</code> or <code>countClickOutside</code>{' '}
        are getting a new value)
      </p>
      <p>
        Then rewrite calls to <code>setCountClickInside</code> and{' '}
        <code>setCountClickOutside</code>
        to use{' '}
        <a
          href="https://reactjs.org/docs/hooks-reference.html#functional-updates"
          target="_blank"
          rel="noreferrer"
        >
          functional updates
        </a>{' '}
        and then remove deps to <code>countClickInside</code> and{' '}
        <code>countClickOutside</code> form <code>useEffect</code>.
      </p>
      <div className="box" ref={boxRef}>
        <p>Click inside : {countClickInside}</p>
        <p>Click outside : {countClickOutside}</p>
      </div>
    </div>
  );
}

export default Exercise2;
