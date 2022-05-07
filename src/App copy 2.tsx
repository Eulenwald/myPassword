import React from 'react';
//import logo from './logo.svg';
import './App.css';

interface MyPropsSingle {
  crypto: {
    "id": string,
    "symbol": string,
    "name": string,
    "image": string,
    "current_price": number,
    "market_cap": number,
    "market_cap_rank": number,
    "fully_diluted_valuation": number | null,
    "total_volume": number,
    "high_24h": number,
    "low_24h": number,
    "price_change_24h": number,
    "price_change_percentage_24h": number,
    "market_cap_change_24h": number,
    "market_cap_change_percentage_24h": number,
    "circulating_supply": number,
    "total_supply": number | null,
    "max_supply": number | null,
    "ath": number,
    "ath_change_percentage": number,
    "ath_date": string,
    "atl": number,
    "atl_change_percentage": number,
    "atl_date": string,
    "roi":any,
    "last_updated": string
  };
}

interface MyProps {
  cryptos: MyPropsSingle["crypto"][]
} 

interface MyPropsPlus {
  cryptos: MyPropsSingle["crypto"][],
  searchText: string
} 

interface MyPropsSearch {
  searchText: string,
  onSearchChange: (searchText: string) => void
} 

class SearchBar extends React.Component<MyPropsSearch, {}> {
  constructor(props: MyPropsSearch | Readonly<MyPropsSearch>) {
    super(props);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  handleSearchChange(e: { target:{ value: string;};}) {
    this.props.onSearchChange(e.target.value);
  }
  
  render() {
    const searchText = this.props.searchText;
    return(
      <form>
        <input 
          type="text" 
          placeholder="Suche..." 
          value={searchText}
          onChange={this.handleSearchChange} />
      </form>
    );
  }
}

class CryptoRow extends React.Component<MyPropsSingle, {}> {
  render() {
    const crypto = this.props.crypto;
    const name = crypto.name;
    const current_price  = crypto.current_price;
    return (
      <tr>
        <td>{name}</td>
        <td>{current_price}</td>
      </tr>

    )
  }
}

class CryptoTable extends React.Component<MyPropsPlus, {}> {
  render() {
    const rows: JSX.Element[] = [];
    const searchText = this.props.searchText;

    this.props.cryptos.forEach((crypto) => {
      if(crypto.name.indexOf(searchText) === -1){
        return;
      }
      rows.push(<CryptoRow crypto={crypto} />);
    });

    return(
      <table>
        <thead>
          <tr>
            <th>
              Name
            </th>
            <th>
              Preis
            </th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }
  
}

class SearchableCryptoTabe extends React.Component<MyProps, {searchText: string}> {

  constructor(props: MyProps | Readonly<MyProps>) {
    super(props);

    this.state = {
      searchText: 'Bitcoin'
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  handleSearchChange(searchText: string) {
    this.setState({
      searchText: searchText
    });
  }
  render() {
    return(
      <div>
        <SearchBar
          searchText={this.state.searchText}
          onSearchChange={this.handleSearchChange} />
        <CryptoTable 
          searchText={this.state.searchText}
          cryptos={this.props.cryptos} />
      </div>
    )
  } 
}

function App() {
  const CRYPTOS = [
    {"id":"bitcoin","symbol":"btc","name":"Bitcoin","image":"https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579","current_price":36730,"market_cap":698197922997,"market_cap_rank":1,"fully_diluted_valuation":772259442218,"total_volume":22873573085,"high_24h":37495,"low_24h":36160,"price_change_24h":156.11,"price_change_percentage_24h":0.42682,"market_cap_change_24h":-2584105961.3171387,"market_cap_change_percentage_24h":-0.36875,"circulating_supply":18986050.0,"total_supply":21000000.0,"max_supply":21000000.0,"ath":59717,"ath_change_percentage":-38.53052,"ath_date":"2021-11-10T14:24:11.849Z","atl":51.3,"atl_change_percentage":71457.04597,"atl_date":"2013-07-05T00:00:00.000Z","roi":null,"last_updated":"2022-03-17T16:36:27.145Z"},
    {"id":"ethereum","symbol":"eth","name":"Ethereum","image":"https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880","current_price":2525.69,"market_cap":303566821868,"market_cap_rank":2,"fully_diluted_valuation":null,"total_volume":14021201953,"high_24h":2550.95,"low_24h":2421.72,"price_change_24h":81.99,"price_change_percentage_24h":3.35524,"market_cap_change_24h":7738067834,"market_cap_change_percentage_24h":2.61573,"circulating_supply":119999178.6865,"total_supply":null,"max_supply":null,"ath":4228.93,"ath_change_percentage":-40.30765,"ath_date":"2021-12-01T08:38:24.623Z","atl":0.381455,"atl_change_percentage":661667.50328,"atl_date":"2015-10-20T00:00:00.000Z","roi":{"times":90.94838573780828,"currency":"btc","percentage":9094.838573780828},"last_updated":"2022-03-17T16:35:12.938Z"},
    {"id":"solana","symbol":"sol","name":"Solana","image":"https://assets.coingecko.com/coins/images/4128/large/solana.png?1640133422","current_price":80.64,"market_cap":25877507566,"market_cap_rank":8,"fully_diluted_valuation":null,"total_volume":1754051332,"high_24h":81.7,"low_24h":75.49,"price_change_24h":4.6,"price_change_percentage_24h":6.05407,"market_cap_change_24h":1188011229,"market_cap_change_percentage_24h":4.81181,"circulating_supply":319966229.172377,"total_supply":508180963.57,"max_supply":null,"ath":225.04,"ath_change_percentage":-64.22178,"ath_date":"2021-11-06T21:54:35.825Z","atl":0.46316,"atl_change_percentage":17284.18693,"atl_date":"2020-05-11T19:35:23.449Z","roi":null,"last_updated":"2022-03-17T16:35:06.252Z"},
    {"id":"cardano","symbol":"ada","name":"Cardano","image":"https://assets.coingecko.com/coins/images/975/large/cardano.png?1547034860","current_price":0.760135,"market_cap":24399981254,"market_cap_rank":9,"fully_diluted_valuation":34241432651,"total_volume":810740346,"high_24h":0.776695,"low_24h":0.73263,"price_change_24h":0.0209443,"price_change_percentage_24h":2.83341,"market_cap_change_24h":512107521,"market_cap_change_percentage_24h":2.1438,"circulating_supply":32066390668.4135,"total_supply":45000000000.0,"max_supply":45000000000.0,"ath":2.61,"ath_change_percentage":-70.87941,"ath_date":"2021-09-02T06:00:10.474Z","atl":0.01722339,"atl_change_percentage":4307.2241,"atl_date":"2020-03-13T02:22:55.044Z","roi":null,"last_updated":"2022-03-17T16:35:38.361Z"},
    {"id":"dash","symbol":"dash","name":"Dash","image":"https://assets.coingecko.com/coins/images/19/large/dash-logo.png?1548385930","current_price":87.53,"market_cap":931732045,"market_cap_rank":92,"fully_diluted_valuation":null,"total_volume":171079571,"high_24h":90.63,"low_24h":86.87,"price_change_24h":0.610453,"price_change_percentage_24h":0.70229,"market_cap_change_24h":-200059.32815146446,"market_cap_change_percentage_24h":-0.02147,"circulating_supply":10628940.6472111,"total_supply":18920000.0,"max_supply":null,"ath":1257.39,"ath_change_percentage":-93.04379,"ath_date":"2017-12-20T00:00:00.000Z","atl":0.163048,"atl_change_percentage":53544.93257,"atl_date":"2014-02-14T00:00:00.000Z","roi":null,"last_updated":"2022-03-17T16:36:02.338Z"}];
  

  return (
    <div className="App">
      <SearchableCryptoTabe cryptos={CRYPTOS} />
    </div>
  );
}

export default App;
