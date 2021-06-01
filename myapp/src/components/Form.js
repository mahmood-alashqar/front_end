import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Row, Image } from 'react-bootstrap';

export class Form extends Component {

  render() {
    console.log(this.props.data);
    const results = this.props.data.map(data1 => {
      return (
        <>
          <Row>
            <Card>
              <Card.Title>{data1.title}</Card.Title>
              <Image height='50%' width='50%' src={data1.image} alt='' />
              <Card.Text> {data1.description}</Card.Text>
            </Card>
          </Row>
        </>
      );
    }
    );

    return (

      <>

        {results}
      </>
    )
  }

}



export default Form;

/*
render() {
  return (

    <>
      { this.props.data.map(data1 =>
      return (<>
        <p>{data1.id}</p>
        <p>{data1.volumeInfo.title}</p>
        <p>{data1.volumeInfo.description}</p>
        <img src={data1.volumeInfo.imageLinks.smallThumbnail} alt=''> </img>
        <img src={data1.volumeInfo.imageLinks.thumbnail} alt=''> </img>
      </>)
      )}
    </>
  )
}
*/