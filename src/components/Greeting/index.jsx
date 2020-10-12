import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import '../../styles.css';

const Greeting = ({name}) => {

    return (
        <Container>
                <div>
                    <h1>
                        Hi {name}, I hope you have an awesome pawsome, super productive and amazing day!
                    </h1>
                </div>
        </Container>
    );
};

export default Greeting;