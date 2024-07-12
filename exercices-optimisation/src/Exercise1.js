import { Component, createRef } from 'react';

class Exercise1 extends Component {
  state = {
    countClickInside: 0,
    countClickOutside: 0,
  };

  boxRef = createRef();

  componentDidMount() {
    document.addEventListener('click', (event) => {
      if (this.boxRef.current.contains(event.target)) {
        this.setState({
          countClickInside: this.state.countClickInside + 1,
        });
      } else {
        this.setState({
          countClickOutside: this.state.countClickOutside + 1,
        });
      }
    });
  }

  render() {
    return (
      <div className="Exercise1">
        <h2>Exercice (fr)</h2>
        <p>
          Lorsque l'on quitte cette page, une erreur se produit. Refactorer le
          code pour ajouter un <code>document.removeEventListener</code> au
          moment où l'on quitte le composant.
        </p>
        <h2>Exercise (en)</h2>
        <p>
          When we leave this page, an error occurs. Refactor the code to add a{' '}
          <code>document.removeEventListener</code> when we leave the component.
        </p>
        <div className="box" ref={this.boxRef}>
          <p>Click inside : {this.state.countClickInside}</p>
          <p>Click outside : {this.state.countClickOutside}</p>
        </div>
      </div>
    );
  }
}

export default Exercise1;
