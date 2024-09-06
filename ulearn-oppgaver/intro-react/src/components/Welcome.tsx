type WelcomeProps = {
    name: string;
    age: number;
  };
  
  export default function Welcome(props: WelcomeProps) {
    return (
      <header>
        <h1>Hei, {props.name}!</h1>
        <p>Du er {props.age} år gammel.</p>
      </header>
    );
  }