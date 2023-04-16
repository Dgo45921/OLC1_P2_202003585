import 'bootstrap/dist/css/bootstrap.css';
import * as ReactBootstrap from 'react-bootstrap';



async function errorReport() {
    const response = await fetch("http://localhost:5000/interpreter/getErrors");
    const textData = await response.text();
    const jsonbody = JSON.parse(textData)
   // console.log(jsonbody.dotCode);
    const url = "https://quickchart.io/graphviz?graph=" +  encodeURIComponent(jsonbody.dotCode);
    console.log(url)
    window.open(url, "_blank");


}

function ASTreport() {
    console.log("reporte ast")
}

function SymbolTableReport() {
    console.log("Reporte tabla de simbolos")
}


function NavBarPrincipal() {


    return (
        <ReactBootstrap.Navbar bg="dark" variant="dark" style={{marginBottom: 10}}>
            <ReactBootstrap.Navbar.Brand style={{marginLeft: 50}}>TypeWise</ReactBootstrap.Navbar.Brand>
            <ReactBootstrap.Nav className="mr-auto">
                <ReactBootstrap.NavDropdown title="Reportes" id="reportes-dropdown">
                    <ReactBootstrap.NavDropdown.Item onClick={errorReport}>Reporte de errores</ReactBootstrap.NavDropdown.Item>
                    <ReactBootstrap.NavDropdown.Item onClick={ASTreport}>Reporte AST</ReactBootstrap.NavDropdown.Item>
                    <ReactBootstrap.NavDropdown.Item onClick={SymbolTableReport}>Reporte Tabla de símbolos</ReactBootstrap.NavDropdown.Item>
                </ReactBootstrap.NavDropdown>
            </ReactBootstrap.Nav>
        </ReactBootstrap.Navbar>
    );
}


export default NavBarPrincipal
