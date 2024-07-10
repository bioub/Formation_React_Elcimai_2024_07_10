type Props = {
  name: string;
  age: number;
  active?: boolean;
}

function Hello({ name, age, active = false }: Readonly<Props>) {
  return (
    <div className="Hello">
      Hello my name is {name}, I'm {age} and my
      status is {active ? 'active' : 'inactive'}
    </div>
  );
}

export default Hello;