import React, { PureComponent } from 'react';
import { Container, Row, Col } from 'reactstrap';

class Countdown extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="countdown">
                <Container>
                    <Row>
                        <Col lg="4">bbb</Col>
                        <Col lg="8">aaa</Col>
                    </Row>
                </Container>
            </section>
        );
    }
}

export default Countdown;
