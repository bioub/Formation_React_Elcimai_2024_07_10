import { useEffect, useMemo, useState } from 'react';

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

function findClosestLowestPrime(num) {
  if (isPrime(num)) {
    return num;
  } else {
    return findClosestLowestPrime(num - 1);
  }
}

function Exercise5() {
  const [value, setValue] = useState(100_000_000);
  // const [value, setValue] = useState(1_000_000_000);
  const [clock, setClock] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setClock(() => new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const prime = useMemo(() => findClosestLowestPrime(value), [value]);

  const render = (
    <div className="Exercise5">
      <h2>Exercice (fr)</h2>
      <p>
        Sur mon laptop, l'horloge ne raffraichit qu'une fois toutes les 2 ou 3
        secondes. (Si la page charge trop lentement réduire le nombre de zéro
        dans la valeur initiale de <code>value</code>).
      </p>
      <p>
        Utiliser l'onglet Profiler de React DevTools pour remarquer que le
        problème de performance vient du composant <code>Exercise5</code>
      </p>
      <p>
        Utiliser ensuite <code>useMemo</code> sur la fonction{' '}
        <code>findClosestLowestPrime</code>
        pour ne recalculer le nombre premier que lorsque le paramètre value
        change.
      </p>
      <h2>Exercise (en)</h2>
      <p>On my laptop, the clock only renders every 2 or 3 seconds.</p> (If the
      page takes to long to load, try to remove some zeros in the initial value
      of <code>value</code>).
      <p>
        Then use the tab Profiler in React DevTools to notice the performance
        issue comes from component <code>Exercise5</code>
      </p>
      <p>
        Then use <code>useMemo</code> on function{' '}
        <code>findClosestLowestPrime</code>
        to compute prime number only when its parameter <code>value</code>{' '}
        changes.{' '}
      </p>
      <div className="box">
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        the closest lowest prime to {value} is {prime}
        <p>It is {clock.toLocaleTimeString()}</p>
      </div>
    </div>
  );

  // console.log('render Exercise5', !isPrime(value));

  return render;
}

export default Exercise5;
