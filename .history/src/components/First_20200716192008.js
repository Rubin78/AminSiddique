import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import hero1 from './hero1.jpg';

// import car from './images/car.png'
// import src from '*.bmp';

class First extends Component {

     submitHandler=()=>{
       this.props.history.push('/second','setsample');


    }
    render() {
        return (
            <Container fluid style={{backgroundColor:'red'}}>

                <button onClick={this.submitHandler} >go to second page</button>






            </Container>




        );
    }
}



const styles = {
    container: {
        backgroundImage: "url(" + hero1 + ")",
       

        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh'
    }
};
export default First;