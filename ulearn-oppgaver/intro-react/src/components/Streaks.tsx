type StreaksProps = {
    streaks: number;
};


export default function Streaks(props: StreaksProps) {
    const streaks = 10;
  
    return (
      <main>
        <h1>Du har oppnådd {props.streaks} streaks.</h1>
        <p>{JSON.stringify(props)}</p>
      </main>
    );
  }