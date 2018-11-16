import React, { Component } from 'react';
import fetchJsonp from 'fetch-jsonp'

// const API_KEY = 'Bearer 2a2a8cf01abad41bfd5cda524dc029cd36c01cc52fbbea712561a7e0151662557'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    }
  }
    
  componentDidMount(){
    // fetch('https://api.behance.net/v2/users/yente_ho/projects?client_id=XrTXvo7P59I8TcXEqP0DDRgxi6Jmx5Rd&callback=myCallback')
    //   .then(res => res.json())
    //   .then(json => {
    //     this.setState({
    //       isLoaded: true,
    //       items: json
    //     })
    //   });
    fetchJsonp('https://api.behance.net/v2/projects/68127253?client_id=XrTXvo7P59I8TcXEqP0DDRgxi6Jmx5Rd')
      .then(res => res.json())
      .then(json => {
        console.log(json)
              this.setState({
                isLoaded: true,
                items: json.project.modules
              })
        }).catch(function(ex) {
          console.log('parsing failed', ex)
        })
  }
  
  render() {
    const {isLoaded, items } = this.state;
    if(!isLoaded){
      return <div>Loading...</div>
    }else{
      return (
        <div className="App">
          <ul>
            {items.map(item => (
              <li key={item.id}>
                <img src={item.src} />
                {/* <img src={item.covers["115"]} />
                <img src={item.covers["202"]} />
                <img src={item.covers["230"]} />
                <img src={item.covers["404"]} />
                <img src={item.covers["808"]} />
                <img src={item.covers.original} />
                <img src={item.covers.max_808} /> */}
              </li>
            ))}
          </ul>

        </div>
      );
    }
  }
}

export default App;