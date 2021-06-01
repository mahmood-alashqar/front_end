import React, { Component } from 'react'
import axios from 'axios';
import Form from './components/Form';
export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      showData: false,
    }

  };
  async componentDidMount() {

    const url = (`http://localhost:8080/getdata`);
    const results = await axios.get(url);
    console.log('check the props', results);
    await this.setState({ data: results.data });
    console.log(this.state.data);
  }

  render() {
    return (
      <>
        <Form data={this.state.data} />
      </>
    );
  }
}

export default App


