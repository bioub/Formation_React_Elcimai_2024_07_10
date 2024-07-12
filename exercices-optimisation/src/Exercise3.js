import { Component } from 'react';

class Exercise3 extends Component {
  state = {
    value: '',
    todos: [],
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      todos: [
        { text: this.state.value, id: Math.random() },
        ...this.state.todos,
      ],
    });
  };

  render() {
    console.log('render Exercise3');
    return (
      <div className="Exercise3">
        <h2>Exercice (fr)</h2>
        <p>
          Remarquer dans la console du navigateur que saisir dans le champs
          provoque un render du composant <code>Exercise3</code> mais aussi du
          composant <code>TodosList</code> qui n'est pas concerné par l'update.
        </p>
        <p>
          Utiliser <code>PureComponent</code> ou{' '}
          <code>shouldComponentUpdate</code> sur le composant{' '}
          <code>TodosList</code> pour qu'il ne soit rendu que lorsque ses props
          sont modifiées. Attention il faudra s'assurer que sa prop{' '}
          <code>onDelete</code> ne soit pas recréé entre 2 render de{' '}
          <code>Exercise3</code>.
        </p>
        <h2>Exercise (en)</h2>
        <p>
          Notice in the browser console that when we type into the field,{' '}
          <code>Exercise3</code> compoennt renders but the same happens to{' '}
          <code>TodosList</code>
          which is not concerned by the update.
        </p>
        <p>
          Use <code>PureComponent</code> or <code>shouldComponentUpdate</code>{' '}
          on component <code>TodosList</code> so it is rendered only when its
          props are modified. Be aware that its prop <code>onDelete</code>{' '}
          should not be create again between two renders of{' '}
          <code>Exercise3</code>.
        </p>
        <div className="box">
          <form onSubmit={this.handleSubmit}>
            <input
              value={this.state.value}
              onChange={(e) => this.setState({ value: e.target.value })}
            />
            <button>+</button>
          </form>
          <TodosList
            todos={this.state.todos}
            onDelete={(todo) =>
              this.setState({
                todos: this.state.todos.filter((t) => t.id !== todo.id),
              })
            }
          />
        </div>
      </div>
    );
  }
}

class TodosList extends Component {
  render() {
    console.log('render TodosList');
    return (
      <div className="TodosList">
        {this.props.todos.map((t) => (
          <div key={t.id}>
            {t.text}
            <button onClick={() => this.props.onDelete(t)}>-</button>
          </div>
        ))}
      </div>
    );
  }
}

export default Exercise3;
