const { Fragment, useReducer } = React;

function toggleInclusion(arr, value) {
  const result = arr.filter(x => x !== value);

  if (arr.length === result.length) result.push(value);

  return result;
};

function reducerFn(state, name) {
  const visibleHeroes = toggleInclusion(state.visibleHeroes, name);

  return {
    ...state,
    visibleHeroes,
  };
};

const heroNames = characters.map(x => x.name);
const initState = {
  heroes: {},
  visibleHeroes: [],
};
const options = [];

characters.forEach(({ name, ...details }) => {
  initState.heroes[name] = details;
  options.push();
});

const HeroSelect = React.memo(({ visibleHeroes, onChange }) => {
  const availableHeroes = heroNames.filter(x => !visibleHeroes.includes(x));
  const availableOptions = availableHeroes.map(x => (<option key={x} value={x}>{x}</option>));

  return (
    <select value="" onChange={e => onChange(e.target.value)}>
      <option value="">Select...</option>
      {availableOptions}
    </select>
  );
});

function App() {
  const [state, dispatch] = useReducer(reducerFn, initState);

  return (
    <HeroSelect visibleHeroes={state.visibleHeroes} onChange={dispatch} />
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
