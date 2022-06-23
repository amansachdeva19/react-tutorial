import React, {Component} from 'react'
import Table from './Table';
import Form1 from './Form';
import Api from './Api';

class App extends Component {
    state = {  characters : [] } 
      removeCharacters=(index)=>{
        const {characters} =this.state;
        
        this.setState({
        characters: characters.filter((character,i)=>{
            return i!== index
        }),
        })
        }
        handleSubmit=(character)=>{

            this.setState({characters:[...this.state.characters,character]})
        }
        componentDidMount() {
            console.log('I was triggered during componentDidMount')
          }
        render() {
            const { characters } = this.state
          
            return (
              <div className="container">
                <Table characterData={characters} removeCharacter={this.removeCharacters} />
              <Form1 handleSubmit={this.handleSubmit}/>
              <Api></Api>
              </div>
            )
          }
}
 
export default App;