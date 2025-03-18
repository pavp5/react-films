import './App.css'


function Star() {
  return(    
    <svg fill="#D3BCA2" height="28" viewBox="0 0 18 18" width="28" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z"/>
        <path d="M0 0h18v18H0z" fill="none"/>
    </svg>
  )

}


function Stars(props: { count: 1 | 2 | 3 | 4 | 5 }) {

  const stars: number[] = [1];
  while (stars.length < props.count) {
    stars.push(stars.length + 1);
  }

  return (
    <ul className="card-body-stars u-clearfix">
      {stars.map(item => <li key={item}><Star /></li>)}
    </ul>
  )

}

function App() {

  return (

    <Stars count={4} />

  )
}

export default App
