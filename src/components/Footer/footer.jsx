import React from "react";
import { MDBCol, MDBContainer, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
     
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} By: <a href="https://github.com/Mustapha-lourika"> Mustapha Lourika </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;