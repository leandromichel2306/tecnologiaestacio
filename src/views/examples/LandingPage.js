import React from "react";
import SectionDownloadLanding from "../../components/sections/SeeMoreSection/SectionDonloadLanding.js";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  //Form,
  //Input,
  //InputGroupAddon,
  //InputGroupText,
  //InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import ProfilePage from "views/examples/ProfilePage.js";

function LandingPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
      <ExamplesNavbar />
      <LandingPageHeader />
      <div className="main">
        <div className="section text-center">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">Vamos falar do curso</h2>
                <h5 className="description">
                O curso de Bacharelado em Ciência da Computação visa formar profissionais capazes de desempenhar atividades na área de computação que envolvam a identificação de problemas, 
                proposta de soluções inéditas ou melhoradas e a operacionalização das soluções definidas.
                </h5>
                <br />
                {/* <Button
                  className="btn-round"
                  color="info"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  Ver grade
                </Button> */}
                <h6 style={ { color: "#4fc3f7" } }>Principais areas</h6>
              </Col>
            </Row>
            <br />
            <br />
            <Row>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-album-2" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Analista de Sistemas</h4>
                    <p className="description">
                      É responsável por elaborar documentos e modelos que especificam os requisitos para o desenvolvimento do software.
                    </p>
                    <Button className="btn-link" color="info" href="https://querobolsa.com.br/carreiras-e-profissoes/analista-de-sistemas" target="_blank">
                      Saiba mais
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-bulb-63" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Arquiteto de Software</h4>
                    <p>
                    Modela os sistemas, gerencia o banco de dados e a infraestrutura que o software precisa para funcionar.
                    </p>
                    <Button className="btn-link" color="info" href="https://medium.com/@alexalvess/o-que-faz-um-arquiteto-de-software-aa45e4bffd28" target="_blank">
                      Saiba mais
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-chart-bar-32" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Gerente de TI</h4>
                    <p>
                    Gerencia os projetos de software, coordenando equipes e planejando o desenvolvimento de sistemas.
                    </p>
                    <Button className="btn-link" color="info" href="https://www.euax.com.br/2018/10/o-que-faz-um-gerente-de-ti/" target="_blank">
                      Saiba mais
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-sun-fog-29" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Docência ou Pesquisa</h4>
                    <p>
                      Trabalha como professor em instituições de ensino ou desenvolve pesquisas tecnológicas.
                    </p>
                    <Button className="btn-link" color="info" href="https://querobolsa.com.br/carreiras-e-profissoes/analista-de-sistemas" target="_blank">
                      Saiba mais
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section section-dark text-center">
          <Container>
            <h2 className="title">Cases de sucesso</h2>
            <Row>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/Linus_Torvalds.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Linus torvalds</CardTitle>
                        <h6 className="card-category">Linux creator</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      Mestrado em Ciência da Computação
	                    nomeado como uma das mais influentes pessoas do mundo.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    {/* <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-google-plus" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button> */}
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/jeff_amazon.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Jeff Bezos</CardTitle>
                        <h6 className="card-category">Amazon CEO</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      Formado em Ciência da Computação
                      eleito um dos maiores lideres dos estados unidos
                      e classificado como CEO de melhor desempenho do mundo.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    {/* <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-google-plus" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button> */}
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/eric_google.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Eric Schmidt</CardTitle>
                        <h6 className="card-category">executive president of google</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                    mestrado e Ph.D em ciencia da computacao
	                  conduziu a startup Google a uma das maiores e 		
                    influentes empresas do mundo.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    {/* <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-google-plus" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button> */}
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section landing-section">
          <SectionDownloadLanding />
          {/* <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="text-center">Keep in touch?</h2>
                <Form className="contact-form">
                  <Row>
                    <Col md="6">
                      <label>Name</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Name" type="text" />
                      </InputGroup>
                    </Col>
                    <Col md="6">
                      <label>Email</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-email-85" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Email" type="text" />
                      </InputGroup>
                    </Col>
                  </Row>
                  <label>Message</label>
                  <Input
                    placeholder="Tell us your thoughts and feelings..."
                    type="textarea"
                    rows="4"
                  />
                  <Row>
                    <Col className="ml-auto mr-auto" md="4">
                      <Button className="btn-fill" color="danger" size="lg">
                        Send Message
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container> */}
        </div>
      </div>
      <ProfilePage />
      <DemoFooter />
    </>
  );
}

export default LandingPage;
