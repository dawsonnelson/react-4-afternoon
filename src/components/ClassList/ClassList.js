import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class ClassList extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      students: []
    };
  }

  componentDidMount(){
    axios.get(`http://localhost:3005/students?class=${ this.props.match.params.class }`).then ( res => {
      console.log(res.data)
      this.setState({
        students: res.data
      });
    });
  }

  render() {
    const students = this.state.students.map((name, i) => (
      <Link key={i} to ={`/student/${name.id}`}><h3> { name.first_name} {name.last_name }</h3></Link>
    )); 
    return (
      <div className='box'>
        <h1>{ this.props.match.params.class }</h1>
        <h2>ClassList:</h2>
        { students }

      </div>
    )
  }
}

