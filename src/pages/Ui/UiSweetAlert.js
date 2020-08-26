import React, { useState } from 'react';
import { Row, Col, Card, CardBody, Button,Container } from "reactstrap";
import logolight from "../../assets/images/logo-light.png";

//SweetAlert
import SweetAlert from "react-bootstrap-sweetalert";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';


const UiSweetAlert = (props) => {

	  const [basic, setbasic] = useState(false);
	  const [with_title, setwith_title] = useState(false);
	  const [success_msg, setsuccess_msg] = useState(false);
	  const [success_dlg, setsuccess_dlg] = useState(false);
	  const [error_dlg, seterror_dlg] = useState(false);
	  const [dynamic_title, setdynamic_title] = useState("");
	  const [dynamic_description, setdynamic_description] = useState("");
	  const [confirm_both, setconfirm_both] = useState(false);
	  const [img_header, setimg_header] = useState(false);
	  const [img_html, setimg_html] = useState(false);
	  const [custom_div, setcustom_div] = useState(false);
	  const emailtxt = "";
	  // const [emailtxt, setemailtxt] = useState("");
	  // const [emailerr, setemailerr] = useState("");
	  const [step1, setstep1] = useState(false);
	  const [step1_txt, setstep1_txt] = useState("");
	  const [step2, setstep2] = useState(false);
	  const [step2_txt, setstep2_txt] = useState("");
	  const [step3, setstep3] = useState(false);
	  const [step3_txt, setstep3_txt] = useState("");
	  const [step_queue, setstep_queue] = useState(false);
	  const [final_queue, setfinal_queue] = useState(false);
	  const current_ip = "219.91.239.22";
	  // const [close_timer, setclose_timer] = useState(false);
	  const [ajax_div, setajax_div] = useState(false);
	  const [final_step, setfinal_step] = useState(false);
	  // const [timeralert, settimeralert] = useState(null);

	function handleStep1Change(e) {
		setstep1_txt(e.target.value);
	}

	function handleStep2Change(e) {
		setstep2_txt(e.target.value);
	}

	function handleStep3Change(e) {
		setstep3_txt(e.target.value);
	}

	// function stimer() {
	// 	const getTimer = () => (
	// 		<SweetAlert
	// 			title={
	// 				<span>
	// 					HTML <small>AutoClose Timer</small>!
 //          </span>
	// 			}
	// 			onConfirm={() => hideTimeAlert()}
	// 		>
	// 			{" "}
	// 			<span>Timer Will Expire after 3 Seconds.</span>
	// 		</SweetAlert>
	// 	);
	// 	settimeralert(getTimer());
	// 	setTimeout(
	// 		function () {
 //                     settimeralert(null);
	// 		}.bind(this),
	// 		3000
	// 	);
	// }

	// function hideTimeAlert() {
 //       settimeralert(null);
	// }


    return (
		  	<React.Fragment>
				<div className="page-content">
					<Container fluid={true}>

						<Breadcrumbs title="UI Elements" breadcrumbItem="SweetAlert 2" />

						{success_dlg ? (
							<SweetAlert
								success
								title={dynamic_title}
								onConfirm={() => { setsuccess_dlg(false) } }
							>
								{dynamic_description}
							</SweetAlert>
						) : null}

						{error_dlg ? (
							<SweetAlert
								error
								title={dynamic_title}
								onConfirm={() => { seterror_dlg(false)  } }
							>
								{dynamic_description}
							</SweetAlert>
						) : null}

						<Card>
							<CardBody>
								<Row className="text-center">
									<Col xl="3" lg="4" sm="6" className="m-b-30">
										<p>A basic message</p>
										<Button
											color="primary"
											onClick={() => { setbasic(true) }}
											id="sa-basic"
										>
											Click me
                  </Button>
										{basic ? (
											<SweetAlert
												title="Any fool can use a computer"
												onConfirm={() =>{ setbasic(false)} }
											></SweetAlert>
										) : null}
									</Col>

									<Col xl="3" lg="4" sm="6" className="m-b-30">
										<p>A title with a text under</p>
										<Button
											color="primary"
											onClick={() => { setwith_title(true); } }
											id="sa-title"
										>
											Click me
                  </Button>
										{with_title ? (
											<SweetAlert
												title="The Internet?"
												warning
												onConfirm={() => { setwith_title(false);  }}
											>
												That thing is still around?
											</SweetAlert>
										) : null}
									</Col>

									<Col xl="3" lg="4" sm="6" className="m-b-30">
										<p>A success message!</p>
										<Button
											color="primary"
											onClick={() =>  { setsuccess_msg(true); } }
											id="sa-success"
										>
											Click me
                  </Button>
										{success_msg ? (
											<SweetAlert
												title="Good job!"
												success
												showCancel
												confirmBtnBsStyle="success"
												cancelBtnBsStyle="danger"
												onConfirm={() => { setsuccess_msg(false); } }
												onCancel={() => { setsuccess_msg(false); }}
											>
												You clicked the button!
											</SweetAlert>
										) : null}
									</Col>

									<Col xl="3" lg="4" sm="6" className="m-b-30">
										<p>
											By passing a parameter, you can execute something else for
											"Cancel".
                  </p>
										<Button
											color="primary"
											onClick={() => { setconfirm_both(true)  } }
											id="sa-params"
										>
											Click me
                  </Button>
										{confirm_both ? (
											<SweetAlert
												title="Are you sure?"
												warning
												showCancel
												confirmBtnBsStyle="success"
												cancelBtnBsStyle="danger"
												onConfirm={() => {
													 setconfirm_both(false);
													 setsuccess_dlg(true);
													 setdynamic_title("Deleted");
													 setdynamic_description("Your file has been deleted.");
												  }
												}
												onCancel={() =>
													{
													 setconfirm_both(false);
													 setsuccess_dlg(true);
													 setdynamic_title("Cancelled");
													 setdynamic_description("Your imaginary file is safe :)");
													}
												}
											>
												You won't be able to revert this!
											</SweetAlert>
										) : null}
									</Col>
								</Row>
								<br />  <br />
								<Row className="text-center">
									<Col xl="3" lg="4" sm="6" className="m-b-30">
										<p>A message with custom Image Header</p>
										<Button
											color="primary"
											onClick={() => { setimg_header(true); } }
											id="sa-image"
										>
											Click me
                  </Button>
										{img_header ? (
											<SweetAlert
												title="Sweet!"
												custom
												customIcon={logolight}
												onConfirm={() => { setimg_header(false) } }
											>
												Modal with a custom image.
											</SweetAlert>
										) : null}
									</Col>

									<Col xl="3" lg="4" sm="6" className="m-b-30">
										<p>Custom HTML description and buttons</p>
										<Button
											color="primary"
											className="mb-md-4"
											onClick={() => { setimg_html(true) } }
											id="custom-html-alert"
										>
											Click me
                  </Button>
										{img_html ? (
											<SweetAlert
												title={
													<span>
														HTML <u>example</u>!
                        </span>
												}
												warning
												onConfirm={() =>{ setimg_html(false) }}
											>
												You can use <b>bold</b> text, links and other HTML tags
											</SweetAlert>
										) : null}
									</Col>

									<Col xl="3" lg="4" sm="6" className="m-b-30">
										<p>A message with custom width, padding and background</p>
										<Button
											color="primary"
											onClick={() => { setcustom_div(true) } }
											id="custom-padding-width-alert"
										>
											Click me
                  </Button>
										{custom_div ? (
											<SweetAlert
												title="Custom width, padding, background."
												style={{
													backgroundColor: "#ebebeb",
													padding: "3em",
													borderRadius: "20px"
												}}
												onConfirm={() =>  { setcustom_div(false) }}
											></SweetAlert>
										) : null}
									</Col>

									<Col xl="3" lg="4" sm="6" className="m-b-30">
										<p>Ajax request example</p>
										<Button
											color="primary"
											onClick={() => { setajax_div(true) } }
											id="ajax-alert"
										>
											Click me
                  </Button>
										{ajax_div ? (
											<SweetAlert
												showCancel
												title="Submit email to run ajax request"
												cancelBtnBsStyle="danger"
												confirmBtnBsStyle="success"
												onConfirm={() =>
													{
														setajax_div(false);
														setsuccess_dlg(true);
														setdynamic_title("Ajax request finished!");
														setdynamic_description("Submitted email : " + emailtxt);
													}
												}
												onCancel={() => { setajax_div(false) }}
											>
												<input
													type="email"
													className="form-control"
													placeholder="Enter Email"
												/>
											</SweetAlert>
										) : null}
									</Col>
								</Row>
								<br />  <br />
								<Row className="text-center">
									<Col xl="3" lg="4" sm="6" className="m-b-30">
										<p>Chaining modals (queue) example</p>
										<Button
											color="primary"
											onClick={() => { setstep1(true) } }
											id="chaining-alert"
										>
											Click me
                  </Button>
										{step1 ? (
											<SweetAlert
												showCancel
												title="Question 1"
												cancelBtnBsStyle="danger"
												confirmBtnText="Next"
												onConfirm={() => { setstep1(false); setstep2(true) } }
												onCancel={() => { setstep1(false); } }
											>
												Chaining swal2 modals is easy
												<input
													type="text"
													className="form-control"
													onChange={(e) => { handleStep1Change(e)  }}
												/>
											</SweetAlert>
										) : null}

										{step2 ? (
											<SweetAlert
												showCancel
												title="Question 2"
												cancelBtnBsStyle="danger"
												confirmBtnText="Next"
												onConfirm={() => { setstep2(false); setstep3(true); } }
												onCancel={() => { setstep2(false) }}
											>
												Chaining swal2 modals is easy
												<input
													type="text"
													className="form-control"
													onChange={(e) => { handleStep2Change(e) }}
												/>
											</SweetAlert>
										) : null}

										{step3 ? (
											<SweetAlert
												showCancel
												title="Question 3"
												cancelBtnBsStyle="danger"
												confirmBtnText="Next"
												onConfirm={() => { setstep3(false); setfinal_step(true); } }
												onCancel={() => { setstep3(false); }}
											>
												Chaining swal2 modals is easy
												<input
													type="text"
													className="form-control"
													onChange={(e) => { handleStep3Change(e) } }
												/>
											</SweetAlert>
										) : null}

										{final_step ? (
											<SweetAlert
												title="All done!"
												confirmBtnText="Lovely!"
												onConfirm={() => { setfinal_step(false) } }
											>
												Your answers : [{step1_txt},{" "}
												{step2_txt}, {step3_txt}]
											</SweetAlert>
										) : null}
									</Col>

									<Col xl="3" lg="4" sm="6" className="m-b-30">
										<p>Dynamic queue example</p>
										<Button
											color="primary"
											onClick={() =>{ setstep_queue(true); } }
											id="dynamic-alert"
										>
											Click me
                  </Button>
										{step_queue ? (
											<SweetAlert
												title="Your public IP"
												confirmBtnText="Show my public IP"
												onConfirm={() => { setstep_queue(false); setfinal_queue(true);
												}
												}
											>
												Your public IP will be received via AJAX request
											</SweetAlert>
										) : null}

										{final_queue ? (
											<SweetAlert
												confirmBtnText="OK"
												title=""
												onConfirm={() => { setfinal_queue(false) } }
											>
												{current_ip}
											</SweetAlert>
										) : null}
									</Col>
								</Row>
							</CardBody>
						</Card>
					</Container>
				</div>

			</React.Fragment> 
		  );
    }

export default UiSweetAlert;
