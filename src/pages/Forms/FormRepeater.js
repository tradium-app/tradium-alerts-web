import React, { useState } from 'react';
import { Row, Col, Card, CardBody, Form, FormGroup, Label, Input, Button, CardTitle,Container } from "reactstrap";

import Breadcrumbs from '../../components/Common/Breadcrumb';

const FormRepeater = (props) => {

  const [rows1, setrows1] = useState([]);

  function handleAddRowNested(){
    const item1 = { name1: "" };
    setrows1([...rows1, item1]);
  };
 
 function  handleRemoveRowNested(e, idx)
  {
    document.getElementById("nested" + idx).style.display = "none";
  };

    return (
         <React.Fragment>
        <div className="page-content">
          <Container fluid={true}>

            <Breadcrumbs title="Forms" breadcrumbItem="Form Repeater" />

            <Row>
              <Col lg={12}>
                <Card>
                  <CardBody>
                    <CardTitle className="mb-4">Nested</CardTitle>
                    <Form className="outer-repeater">
                      <div data-repeater-list="outer-group" className="outer">
                        <div data-repeater-item className="outer">
                          <div className="form-group">
                            <Label htmlFor="formname">Name : </Label>
                            <Input
                              type="text"
                              id="formname"
                              placeholder="Enter your Name..."
                              className="form-control"
                            />
                          </div>

                          <div className="form-group">
                            <Label htmlFor="formemail">Email :</Label>
                            <Input
                              type="email"
                              id="formemail"
                              placeholder="Enter your Email..."
                              className="form-control"
                            />
                          </div>

                          <div className="inner-repeater mb-4">
                            <Label>Phone no :</Label>
                            <table style={{ width: "100%" }}>
                              <tbody>
                                <tr id="addrMain" key="">
                                  <td>
                                    <Row className="mb-2">
                                      <Col md="10">
                                        <Input
                                          type="text"
                                          className="inner form-control"
                                          placeholder="Enter your phone no... 1"
                                        />
                                      </Col>
                                      <Col md="2">
                                        <Button
                                          color="primary"
                                          className="btn-block inner"
                                          style={{ width: "100%" }}
                                          onClick={(e) => { e.preventDefault() } }
                                        >
                                          {" "}
                                        Delete{" "}
                                        </Button>
                                      </Col>
                                    </Row>
                                  </td>
                                </tr>

                                {rows1.map((item1, idx) => (
                                  <tr id={"nested" + idx} key={idx}>
                                    <td>
                                      <Row className="mb-2">
                                        <Col md="10">
                                          <Input
                                            type="text"
                                            className="inner form-control"
                                            placeholder={
                                              "Enter your phone no... " +
                                              (idx + 2)
                                            }
                                          />
                                        </Col>
                                        <Col md="2">
                                          <Button
                                            onClick={(e) => { handleRemoveRowNested(e, idx) }
                                            }
                                            color="primary"
                                            className="btn-block inner"
                                            style={{ width: "100%" }}
                                          >
                                            {" "}
                                          Delete{" "}
                                          </Button>
                                        </Col>
                                      </Row>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                            <Button
                              onClick={() => { handleAddRowNested() }}
                              color="success"
                              className="mt-1"
                            >
                              Add Number
                          </Button>
                          </div>

                          <FormGroup>
                            <Label className="d-block mb-3">Gender :</Label>
                            <div className="custom-control custom-radio custom-control-inline">
                              <Input
                                type="radio"
                                id="customRadioInline1"
                                name="customRadioInline1"
                                className="custom-control-input"
                              />
                              <Label
                                className="custom-control-label"
                                htmlFor="customRadioInline1"
                              >
                                Male
                            </Label>
                            </div>
                          &nbsp;
                          <div className="custom-control custom-radio custom-control-inline">
                              <Input
                                type="radio"
                                id="customRadioInline2"
                                name="customRadioInline1"
                                className="custom-control-input"
                              />
                              <Label
                                className="custom-control-label"
                                htmlFor="customRadioInline2"
                              >
                                Female
                            </Label>
                            </div>
                          </FormGroup>

                          <FormGroup>
                            <Label htmlFor="formmessage">Message :</Label>
                            <Input
                              type="textarea"
                              id="formmessage"
                              className="form-control"
                              rows="3"
                            />
                          </FormGroup>
                          <Button type="submit" color="primary">
                            Submit
                        </Button>
                        </div>
                      </div>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
      );
    }

export default FormRepeater;
