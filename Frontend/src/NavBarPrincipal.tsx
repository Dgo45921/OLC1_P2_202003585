import 'bootstrap/dist/css/bootstrap.css';
import * as ReactBootstrap from 'react-bootstrap';



async function errorReport() {
    const response = await fetch("http://localhost:5000/ping");
    const jsonData = await response
    console.log(jsonData);
}


function errorRepot() {
    console.log("reporte errores")
    fetch("localhost:5000/ping")
        .then(data => console.log(data))

}

function ASTreport() {
    console.log("reporte ast")
}

function SymbolTableReport() {
    console.log("Reporte tabla de simbolos")
}


function NavBarPrincipal() {


    return (
        <ReactBootstrap.Navbar bg="dark" variant="dark">
            <ReactBootstrap.Navbar.Brand style={{marginLeft: 50}}>TypeWise</ReactBootstrap.Navbar.Brand>
            <ReactBootstrap.Nav className="mr-auto">
                <ReactBootstrap.NavDropdown title="File" id="reportes-dropdown">
                    <ReactBootstrap.NavDropdown.Item>Nuevo</ReactBootstrap.NavDropdown.Item>
                    <ReactBootstrap.NavDropdown.Item>Abrir</ReactBootstrap.NavDropdown.Item>
                    <ReactBootstrap.NavDropdown.Item>Guardar</ReactBootstrap.NavDropdown.Item>
                </ReactBootstrap.NavDropdown>
                <ReactBootstrap.NavDropdown title="Reportes" id="reportes-dropdown">
                    <ReactBootstrap.NavDropdown.Item onClick={errorReport}>Reporte de errores</ReactBootstrap.NavDropdown.Item>
                    <ReactBootstrap.NavDropdown.Item onClick={ASTreport}>Reporte AST</ReactBootstrap.NavDropdown.Item>
                    <ReactBootstrap.NavDropdown.Item onClick={SymbolTableReport}>Reporte Tabla de símbolos</ReactBootstrap.NavDropdown.Item>
                </ReactBootstrap.NavDropdown>
                <ReactBootstrap.Nav.Link>Pricing</ReactBootstrap.Nav.Link>
            </ReactBootstrap.Nav>
        </ReactBootstrap.Navbar>
    );
}


export default NavBarPrincipal
