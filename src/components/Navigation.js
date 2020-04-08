import React from 'react'
import {NavLink} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar , Nav } from 'react-bootstrap';


export default function Navigation() {
    return (
        
            <div>
            <Navbar bg="dark" variant="dark" >
            <Navbar.Brand className="d-inline-block align-top"><img src={require('../logo.svg')}/> React </Navbar.Brand>
            <Navbar.Toggle className=""/>
            <Navbar.Collapse className="">
            <Nav style={{marginLeft:'auto'}}>
               

                <NavLink to="/" className = "text-light p-2 bg-dark">Home</NavLink> 
                

                
                <NavLink to="/em" className = "text-light p-2 bg-dark" >Employee</NavLink> 

                
                
                
                <NavLink to="/de" className = "text-light p-2 bg-dark">Department</NavLink> 


                
            </Nav>
            </Navbar.Collapse>
            </Navbar>

            </div>
                
        
    )
}
