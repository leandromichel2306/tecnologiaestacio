/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Row, Container } from "reactstrap";

function DemoFooter() {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <Row>
          <nav className="footer-nav">
            <ul>
              <li>
                <a
                  href="mailto:henrique19.marcelo@gmail.com?Subject=Hello&Body=Show"
                  target="_blank"
                >
                  E-mail
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/marcelo-henrique-sousa"
                  target="_blank"
                >
                  GITHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/marcelohenriquesousa"
                  target="_blank"
                >
                  Linkedin
                </a>
              </li>
            </ul>
          </nav>
          <div className="credits ml-auto">
            <span className="copyright">
              © {new Date().getFullYear()}, feito com{" "}
              <i className="fa fa-heart heart" /> por Marcelo Henrique
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default DemoFooter;
