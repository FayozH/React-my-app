import React from "react";


export default class Search extends React.Component{
    state = {
        search:'cars',
        type:'all'
    }
   
    handleKey = (e) => {
      if(e.key === 'Enter'){
        this.props.searchMovies(this.state.search);
      } 
    }

    handleFilter = (e) => {
      this.setState(()=> ({type: e.target.dataset.type}),()=>{
        this.props.searchMovies(this.state.search,this.state.type)
      })
    }

    render(){
        return(
           <div className="row">
              <div className="input-field ">
                <input
                placeholder="Search"
                type="search"
                className="validate ser__colr" 
                value={this.state.search}
                onChange={(e)=> this.setState({search:e.target.value})}
                onKeyDown={this.handleKey}
                />
                <button 
                className="btn search-btn" 
                onClick={() => this.props.searchMovies(this.state.search,this.state.type)}>
                Search Movies
                </button>
              </div>
              <div className="sereil-movies">
              <label>
                <input className="with-gap" name="type" type="radio" data-type="all" onChange={this.handleFilter} checked={this.state.type === 'all'}/>
                 <span>all</span>
                </label>
                <label>
                <input className="with-gap" name="type" type="radio" data-type="movie" onChange={this.handleFilter} checked={this.state.type === 'movie'}/>
                 <span>Movies only</span>
                </label>
                <label>
                <input className="with-gap" name="type" type="radio" data-type="series" onChange={this.handleFilter} checked={this.state.type === 'series'}/>
                 <span>Series</span>
                </label>
              </div>
          </div>
        )
    }
}