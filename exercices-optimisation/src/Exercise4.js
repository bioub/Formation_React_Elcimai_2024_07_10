import { memo, useCallback, useState } from 'react';

function Exercise4() {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([{ text: value, id: Math.random() }, ...todos]);
  }

  const handleDelete = useCallback(function handleDelete(todo) {
    setTodos((todos) => todos.filter((t) => t.id !== todo.id));
  }, []);

  console.log('render Exercise4');
  return (
    <div className="Exercise4">
      <h2>Exercice (fr)</h2>
      <p>
        Remarquer dans la console du navigateur que saisir dans le champs
        provoque un render du composant <code>Exercise4</code> mais aussi du
        composant <code>TodosList</code> qui n'est pas concerné par l'update.
      </p>
      <p>
        Utiliser <code>memo</code> ou sur le composant <code>TodosList</code>{' '}
        pour qu'il ne soit rendu que lorsque ses props sont modifiées. Attention
        il faudra s'assurer que sa prop <code>onDelete</code> ne soit pas recréé
        entre 2 render de <code>Exercise4</code> en utilisant{' '}
        <code>useCallback</code>.
      </p>
      <h2>Exercise (en)</h2>
      <p>
        Notice in the browser console that when we type into the field,{' '}
        <code>Exercise4</code> compoennt renders but the same happens to{' '}
        <code>TodosList</code>
        which is not concerned by the update.
      </p>
      <p>
        Use <code>memo</code> on component <code>TodosList</code> so it is
        rendered only when its props are modified. Be aware that its prop{' '}
        <code>onDelete</code> should not be create again between two renders of{' '}
        <code>Exercise4</code> by using <code>useCallback</code>.
      </p>
      <div className="box">
        <form onSubmit={handleSubmit}>
          <input value={value} onChange={(e) => setValue(e.target.value)} />
          <button>+</button>
        </form>
        <TodosList todos={todos} onDelete={handleDelete} />
      </div>
    </div>
  );
}

const TodosList = memo(function TodosList(props) {
  console.log('render TodosList');
  return (
    <div className="TodosList">
      {props.todos.map((t) => (
        <div key={t.id}>
          {t.text}
          <button onClick={() => props.onDelete(t)}>-</button>
        </div>
      ))}
    </div>
  );
})

export default Exercise4;
