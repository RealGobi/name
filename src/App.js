import React, { Component } from 'react';
import './App.css';
import ListName from './components/listName';
import Credit from './components/credit';
import Search from './components/search';
import ShortList from './components/shortList';

class  App extends Component {
  state= {
    filterText:'',
    favourite: []
  }

  filterUpdate(value) {
    this.setState({
      filterText: value
     
    })
  }

  addFavourite(id){
    const favList = this.state.favourite.concat([id])
    this.setState({
      favourite:favList
    })
  }
  render() {
    return(
      <div>
        <Search 
        filterText={this.state.filterText}
        filterUpdate={this.filterUpdate.bind(this)}/>
          <main>
            <ShortList 
            data={this.props.data}
            favourite={this.state.favourite}/>
            <ListName 
            data={this.props.data}
            filterText={this.state.filterText} 
            addFavourite={this.addFavourite.bind(this)}
            />
            <Credit />
          </main>
      </div>
    )
  
  }
  }

export default App;
