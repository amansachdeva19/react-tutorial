import React, { Component } from 'react';
import { Form } from "react-bootstrap";

class Form1 extends Component {
    
    intialstate={
        name:"",
        job:""
    }
    state = this.intialstate

    handleChange=(event)=>{
        const {name, value} = event.target

        this.setState({
            [name]:value,
        })
    }
    submitForm= ()=>{
        this.props.handleSubmit(this.state)
        this.setState(this.intialstate)
    }
    render() { 
        const { name, job } = this.state;
        return (
<Form >
    <label htmlFor='name'>Name</label>
    <input
    type="text"
    name="name"
    id="name"
    value={name}
    onChange={this.handleChange}
    />
     <label htmlFor='job'>Job</label>
    <input
    type="text"
    name="job"
    id="job"
    value={job}
    onChange={this.handleChange}
    />
    <input type="button" value="Submit" onClick={this.submitForm}></input>
</Form>

        );
    }
}
 
export default Form1;
