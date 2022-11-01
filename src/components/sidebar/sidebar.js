import './sidbar.css'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Avatar from '../../assets/user.png';
import Masgs from '../../assets/email (1).png';
import note from '../../assets/bell-ring.png';
import quotes from '../../assets/quotes.png';
import graduation from '../../assets/graduation-cap.png';
import masg from '../../assets/email.png';
import friends from '../../assets/people.png';
import notification from '../../assets/notification-bell.png';
import setting from '../../assets/setting.png';

function Sidebar() {
  return (
    <>
   
      {[false].map((expand) => (
 <Navbar key={expand} bg="light" expand={expand} className="mb-3">
  <Container fluid>
     <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
      <Navbar.Offcanvas
              style={{width:"15em",padding: "0"}}
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
              
            >
              
              <Offcanvas.Body 
              className="OffcanvasList" >
                <div className="logo">
                  <h1>logo</h1>
                </div>
                <Nav className=" nav justify-content-end flex-grow-1  w-100">
                  <Nav.Link href="#actionaction1" className="lists">
                   <img className="img m-2" src={quotes} alt="quotes" /> <span>My Profile</span>
                   </Nav.Link>
                  <Nav.Link href="#actionaction2"className="lists ">
                    <img className="img m-2" src={graduation} alt="graduation" /><span>My Courses</span>
                    </Nav.Link>
                  <Nav.Link href="#actionaction2"className="lists">
                    <img className="img m-2" src={masg} alt="masg" /><span>My Inbox</span>
                    </Nav.Link>
                  <Nav.Link href="#actionaction2"className="lists">
                     <img className="img m-2" src={friends} alt="friends" /><span>My Friends</span>
                     </Nav.Link>
                  <Nav.Link href="#actionaction2"className="lists">
                    <img className="img m-2" src={Masgs} alt="Masgs" /><span>My Groups</span>
                    </Nav.Link>
                  <Nav.Link href="#actionaction2"className="lists">
                    <img className="img m-2" src={notification} alt="notification" /><span>My Notifications</span>
                    </Nav.Link>
                  <Nav.Link href="#actionaction2"className="lists">
                    <img className="img m-2" src={setting} alt="setting" /><span>My Settings</span>
                    </Nav.Link>
                  <Nav.Link href="#actionaction2"className="lists">
                    <img className="img m-2" src={Masgs} alt="Masgs" /><span>Activities</span>
                    </Nav.Link>                  
                </Nav>
                
              </Offcanvas.Body>

      </Navbar.Offcanvas>


    <Navbar bg="light" expand="lg" style={{color: "red", width: "95%"}}>
      <Container fluid >
         <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>

       
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" >
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" ><span><img className="img " src={Masgs} alt="Masgs" /></span> </Nav.Link>
            <Nav.Link href="#action2" ><span><img className="img  " src={note} alt="note" /></span> </Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown" className="me-5">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            
            <Nav.Link href="#action2"> <span><img className="img" src={Avatar} alt="Avatar" /></span> </Nav.Link>            
          </Nav>
      
        </Navbar.Collapse>
      </Container>
    </Navbar>
     
  </Container>
  </Navbar>
      ))}
      
    </>
  );
}

export default Sidebar;