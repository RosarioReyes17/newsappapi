import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import ListaNoticias from './components/ListaNoticias';
import SearchBox from './components/SearchBox';
// import FiltrosBox from './components/FiltrosBox';
import NewsRest from './data/datanews';
import { categorias, paises } from './data/data';
import Select from 'react-select';



class App extends Component {

  state = {
    isLoading: false,
    articles: [],
    query: '',
    pais: 'us',
    categoria: '',
    
  }

  componentDidMount() {
    this.search(null)
  }


  search = async (value) => {

    this.setState({
      query: value,
      isLoading: true
    });

    var res = await NewsRest({
      q: value,
      country: this.state.pais,
      category: this.state.categoria,

    })

    this.setState({
      articles: res.data.articles,
      isLoading: false
    })
  }

  setCountry = (option) => {
    this.setState({
      country: option.value
    });
  }
  setCategory = (option) => {
    this.setState({
      categoria: option.value
    });
  }


  render() {

    return (
      <div className="App container">
        <header>
          <h1>
            WORLD NEWS
         </h1>
        </header>

        <Select options={paises} placeholder='Select country' onChange={this.setCountry} />
        <div style={{ height: "10px" }} />
        <Select options={categorias} placeholder='Select category' onChange={this.setCategory} />
        <div style={{ height: "10px" }} />
        <SearchBox onSearch={this.search} />
        <ListaNoticias isLoading={this.state.isLoading} articles={this.state.articles} />
      </div>
    );
  }
}

export default App;

