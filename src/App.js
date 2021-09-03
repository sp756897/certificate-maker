import { white } from 'chalk';
import 'minireset.css';
import './App.css';
import logo from "./S-rmbg.png"

function App({ name1,name2, place,lovedate, txhash, txlink, date }) {
  return (
    <div className="App">
      <Icon />
      <div className="row">
      <p className="byline" style={{"color":"red"}}>Certificate of <b>Love</b></p>
      </div>
      
      <div className="content">
        <h1>{name1}</h1>
        <h1 style={{"color":"red"}}>Love</h1>
        <h1>{name2}</h1>
        <p>Place of Love</p>
        <h2 style={{"color":"white"}}>{place}</h2>
        <p>Date of Love</p>
        <h2 style={{"color":"white"}}>{lovedate}</h2>
      </div>

      {date && (
        <p className="date">
          Issued on{' '}
          <span className="bold">{date}</span>
        </p>
      )}
      {date && (
        <p className="date">
          Trx Hash{' '}
          <span className="bold">{txhash}</span>
        </p>
      )}
      {date && (
        <p className="date">
          Trx Link{' '}
          <span className="bold">{txlink}</span>
        </p>
      )}
    </div>
  );
}

App.defaultProps = {
  name1: 'James Lee',
  name2: 'James Lee',
  place: 'Bangalore',
  lovedate:"10-01-2021",
  txhash:"sample",
  txlink:"link",
  date: 'March 15 2021'
}

const Icon = () => (
  <svg class="heart" viewBox="0 0 32 29.6">
    <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
	c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
  </svg>
)

export default App;
