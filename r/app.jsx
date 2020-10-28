const { Fragment, useState } = React;

function App() {
  const [state, setState] = useState(false);
  const toggleState = () => setState(x => !x);

  return (
    <React.Fragment>
      <button onClick={toggleState}>toggle</button>
      <div id="container">
        <section className={state ? 'pushed' : ''}>
          section 1
        </section>
        <section className={state ? 'pushed' : ''}>
          section 2
        </section>
      </div>
    </React.Fragment>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));
