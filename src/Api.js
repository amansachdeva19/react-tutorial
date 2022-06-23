
import React, { Component } from 'react';

class Api extends Component {
    state = { 
        data:[],
     } 

    componentDidMount(){
        const url=
        'https://en.wikipedia.org/w/api.php?action=opensearch&search=Narendra+Modi&format=json&origin=*'
    fetch(url)
    .then((result)=>(result.json()))
    .then((result)=>{
        this.setState({data:result})
        console.log(result)
    })
    }

    render() { 
        const {data}= this.state
        const resultData= data.map((entry,index)=>{
            return<li key={index}>{entry}</li>
        })

        return <ul>{resultData}</ul>;
    }
}
 
export default Api;