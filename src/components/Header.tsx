import * as React from 'react';
import { Container, Navbar } from "react-bootstrap";

interface  HeaderProps {
};

const Header: React.FunctionComponent< HeaderProps> = (props) => {
  return (
    <Navbar fixed="top" bg="dark" variant="dark">
        <Container>
            <Navbar.Brand>
                Task Tracker
            </Navbar.Brand>
        </Container>
    </Navbar>
  ) ;
};

export default Header;
