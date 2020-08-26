import React, { useState } from 'react';
import { Container, Row, Col, Card, CardBody, Form, FormGroup, InputGroup, Label, Input, Button } from "reactstrap";

import { SketchPicker } from "react-color";
import ColorPicker from "@vtaits/react-color-picker";
import "@vtaits/react-color-picker/dist/index.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Switch from "react-switch";
import Select from "react-select";
import makeAnimated from 'react-select/animated';

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

const animatedComponents = makeAnimated();

	const Offsymbol = props => {
			return (
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						height: "100%",
						fontSize: 12,
						color: "#fff",
						paddingRight: 2
					}}
				>
					{" "}
          No
				</div>
			);
		};

		const OnSymbol = props => {
			return (
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						height: "100%",
						fontSize: 12,
						color: "#fff",
						paddingRight: 2
					}}
				>
					{" "}
          Yes
				</div>
			);
		};



const optionGroup = [
	{
		label: "Picnic",
		options: [
			{ label: "Mustard", value: "Mustard" },
			{ label: "Ketchup", value: "Ketchup" },
			{ label: "Relish", value: "Relish" }
		]
	},
	{
		label: "Camping",
		options: [
			{ label: "Tent", value: "Tent" },
			{ label: "Flashlight", value: "Flashlight" },
			{ label: "Toilet Paper", value: "Toilet Paper" }
		]
	}
];

const optionGroup1 = [
	{
		label: "Picnic",
		options: [
			{ label: "Mustard", value: "Mustard" },
			{ label: "Ketchup", value: "Ketchup" },
			{ label: "Relish", value: "Relish" }
		]
	},
	{
		label: "Camping",
		options: [
			{ label: "Tent", value: "Tent" },
			{ label: "Flashlight", value: "Flashlight" },
			{ label: "Toilet Paper", value: "Toilet Paper" }
		]
	}
];


const optionGroup2 = [
	{
		label: "Picnic",
		options: [
			{ label: "Mustard", value: "Mustard" },
			{ label: "Ketchup", value: "Ketchup" },
			{ label: "Relish", value: "Relish" }
		]
	},
	{
		label: "Camping",
		options: [
			{ label: "Tent", value: "Tent" },
			{ label: "Flashlight", value: "Flashlight" },
			{ label: "Toilet Paper", value: "Toilet Paper" }
		]
	}
];


const FormAdvanced = (props) => {

  const [sq1, setsq1] = useState(false);
  const [sq2, setsq2] = useState(false);
  const [sq3, setsq3] = useState(false);
  const [color, setcolor] = useState("red");
  const [colorRgb, setcolorRgb] = useState("red");
  const [colorCust, setcolorCust] = useState("red");
  const [colorHor, setcolorHor] = useState("#fffff");
  const [colorRGBA, setcolorRGBA] = useState("rgba(0, 194, 255, 0.78)");
  const [display_RGBA, setdisplay_RGBA] = useState(false);

  const [default_date, setdefault_date] = useState(new Date());
  const [monthDate, setmonthDate] = useState(new Date());
  const [yearDate, setyearDate] = useState(new Date());

  const [disbadge, setdisbadge] = useState(true);
  const [disthresh, setdisthresh] = useState(false);
  const [placementbadge, setplacementbadge] = useState(false);
  const [textcount, settextcount] = useState(0);
  const [optioncount, setoptioncount] = useState(0);
  const [placementcount, setplacementcount] = useState(0);
  const [threshhold, setthreshhold] = useState(0);
  const [threshholdcount, setthreshholdcount] = useState(0);
  const [disDefault, setdisDefault] = useState(0);
  const [textareabadge, settextareabadge] = useState(0);
  const [simple_color, setsimple_color] = useState(0);
  const [simple_color1, setsimple_color1] = useState(0);
  const [simple_color2, setsimple_color2] = useState(0);
  
  const [switch1, setswitch1] = useState(true);
  const [switch2, setswitch2] = useState(true);
  const [switch3, setswitch3] = useState(true);
  const [switch4, setswitch4] = useState(true);
  const [switch5, setswitch5] = useState(true);
  const [switch6, setswitch6] = useState(true);
  const [switch7, setswitch7] = useState(true);
  const [switch8, setswitch8] = useState(true);
  const [switch9, setswitch9] = useState(true);

  const [data_attr, setdata_attr] = useState(56);
  const [postfix, setpostfix] = useState(20);
  const [empty_val, setempty_val] = useState(0);
  const [not_attr, setnot_attr] = useState(15);
  const [explicit_val, setexplicit_val] = useState(33);

   const max_len = 25;

  const [selectedGroup, setselectedGroup] = useState(null);
  const [selectedMulti, setselectedMulti] = useState(null);
  const [selectedMulti1, setselectedMulti1] = useState(null);
  const [selectedMulti2, setselectedMulti2] = useState(null);
  const [selectedMulti3, setselectedMulti3] = useState(null);

   const onDrag =(c1) => { setcolor(c1); }
   const onDragRgb =(c1) => { setcolorRgb(c1); }
   const onDragCust =(c1)  =>{ setcolorCust(c1); } 
   const handleHor =(color) => { setcolorHor(color.hex); }
   function handleRGBA(){  setdisplay_RGBA(!display_RGBA); }

   const onSwatchHover_RGBA =(color) =>{
		const format = "rgba(" + color.rgb.r + "," + color.rgb.g + "," + color.rgb.b + "," + color.rgb.a + ")";
		setcolorRGBA(format);
	}

	const  handleDefault=(date)=> {
		setdefault_date(date);
	}
	
	const handleMonthChange=(date) =>{
		setmonthDate(date);
	}
	const handleYearChange=(date)=> {
		setyearDate(date);
	}

	function threshholdchange(event) {
		var count = event.target.value.length;
		var remain_val = max_len-20;

		if (remain_val <= count) {
			setdisthresh(true);
			} else {
				setdisthresh(false);
			}
			setthreshholdcount(event.target.value.length);
	}

	function threshholdDefault(event) {
		var count = event.target.value.length;
		if (count > 0) { setdisDefault(true);
		} else {
			setdisDefault(false);
		}
		setthreshhold(event.target.value.length);
	}

	function optionchange(event) {
		var count = event.target.value.length;
		if (count > 0) {  setdisbadge(true); } else {  setdisbadge(false); }
		setoptioncount(event.target.value.length);
	}

	function placementchange(event) {
		var count = event.target.value.length;
		if (count > 0) { setplacementbadge(true);
		} else { setplacementbadge(false); }
		setplacementcount(event.target.value.length);
	}

	function textareachange(event) {
		var count = event.target.value.length;
		if (count > 0) { settextareabadge(true);
		} else { settextareabadge(false);  }
		settextcount(event.target.value.length);
	}

	function handleSelectGroup(selectedGroup) { setselectedGroup(selectedGroup); }
	function handleMulti(selectedMulti) { setselectedMulti(selectedMulti); }
	function handleMulti1(selectedMulti1) { setselectedMulti1(selectedMulti1); }
	function handleMulti2(selectedMulti2) { setselectedMulti2(selectedMulti2); }
	function handleMulti3(selectedMulti3) { setselectedMulti3(selectedMulti3); }
	
    return (
    	 <React.Fragment>
				<div className="page-content">
					<Container fluid={true}>
						<Breadcrumbs title="Form" breadcrumbItem="Form Advanced" />

						<Row>
							<Col lg="12">
								<Card>
									<CardBody>

										<h4 className="card-title">Select2</h4>
										<p className="card-title-desc">A mobile and touch friendly input spinner component for Bootstrap</p>

										<form>
											<Row>
												<Col lg="6">
													<FormGroup className="select2-container">
														<Label>Single Select</Label>
														<Select
															value={selectedGroup}
															onChange={() => { handleSelectGroup() }}
															options={optionGroup}
															classNamePrefix="select2-selection"
														/>

													</FormGroup>
													<FormGroup className="select2-container">
														<label className="control-label">Multiple Select</label>
														<Select
															value={selectedMulti}
															isMulti={true}
															onChange={() => { handleMulti() }}
															options={optionGroup}
															classNamePrefix="select2-selection"
														/>


													</FormGroup>

													<FormGroup className="mb-0 select2-container">
														<Label>Disable</Label>
														<Select
															value={selectedMulti1}
															isMulti={true}
															onChange={() => { handleMulti1() }}
															options={optionGroup}
															classNamePrefix="select2-selection"
															isDisabled={true}
														/>
													</FormGroup>
												</Col>

												<Col lg="6">
													<FormGroup className="ajax-select mt-3 mt-lg-0 select2-container">
														<Label>Loading</Label>
														<Select
															value={selectedMulti2}
															isMulti={true}
															onChange={() => { handleMulti2() }}
															options={optionGroup1}
															classNamePrefix="select2-selection"
															isLoading={true}
														/>
													</FormGroup>
													<FormGroup className="mb-0 templating-select select2-container">
														<label className="control-label">Animated</label>
														<Select
															value={selectedMulti3}
															isMulti={true}
															onChange={() => { handleMulti3() }}
															options={optionGroup2}
															classNamePrefix="select2-selection"
															closeMenuOnSelect={false}
															components={animatedComponents}
														/>
													</FormGroup>
												</Col>
											</Row>

										</form>

									</CardBody>
								</Card>

							</Col>


						</Row>


						<Row>
							<Col lg="6">
								<Card>
									<CardBody>

										<h4 className="card-title">React Colorpicker</h4>
										<p className="card-title-desc">Fancy and customizable colorpicker
                                            plugin for Twitter Bootstrap.</p>

										<Form action="#">
											<FormGroup>
												<Label>Simple input field</Label>
												<Input
													type="text"
													className="colorpicker-default"
													value={color}
													onClick={() => { setsimple_color(!simple_color) } }
													readOnly
												/>
												{simple_color ? (
													<ColorPicker
														saturationHeight={100}
														saturationWidth={100}
														value={color}
														onDrag={ onDrag }
													/>
												) : null}
											</FormGroup>

											<FormGroup>
												<Label>With custom options - RGBA</Label>
												<Input
													type="text"
													className="colorpicker-rgba form-control"
													value={colorRGBA}
													onClick={handleRGBA}
													readOnly
												/>
												{
													display_RGBA ? (
														<SketchPicker
															color="#fff"
															value={colorRGBA}
															width="160px"
															onChangeComplete={onSwatchHover_RGBA}
														/>
													) : null
												}
											</FormGroup>
											<FormGroup className="m-b-0">
												<Label>As a component</Label>
												<div className="input-group colorpicker-default" title="Using format option">
													<input readOnly value={colorRgb} type="text" className="form-control input-lg" />
													<span className="input-group-append">
														<span
															className="input-group-text colorpicker-input-addon"
															onClick={() => { setsimple_color1(!simple_color1) }}
														>
															<i style={{
																height: "16px",
																width: "16px",
																background: colorRgb
															}}></i>
														</span>
													</span>
												</div>

												{simple_color1 ?
													<ColorPicker saturationHeight={100} saturationWidth={100} value={colorRgb} onDrag={onDragRgb}  />
													: null}
											</FormGroup>
											<FormGroup>
												<Label>Horizontal mode</Label>
												<Input
													type="text"
													onClick={() => { setsimple_color2(!simple_color2);  } }
													value={colorHor}
													readOnly
												/>
												{simple_color2 ? (
													<SketchPicker
														color="#fff"
														value={simple_color2}
														width="160px"
														onChangeComplete={ handleHor }
													/>
												) : null}
											</FormGroup>

											<FormGroup className="mb-0">
												<Label>Inline</Label>


												<ColorPicker
													saturationHeight={100}
													saturationWidth={100}
													value={colorCust}
													onDrag={ onDragCust}
												/>

											</FormGroup>
										</Form>

									</CardBody>
								</Card>

							</Col>
							<Col lg="6">
								<Card>
									<CardBody>

										<h4 className="card-title">Datepicker</h4>
										<p className="card-title-desc">Examples of twitter bootstrap datepicker.</p>

										<Form>
											<FormGroup className="mb-4">
												<Label>Default Functionality</Label>
												<InputGroup>
													<DatePicker
														className="form-control"
														selected={default_date}
														onChange={handleDefault}
													/>
												</InputGroup>
											</FormGroup>

											<FormGroup className="mb-4">
												<Label>Month View</Label>
												<InputGroup>
													<DatePicker
														selected={monthDate}
														className="form-control"
														onChange={handleMonthChange}
														showMonthDropdown
													/>
												</InputGroup>
											</FormGroup>

											<FormGroup className="mb-4">
												<Label>Year View</Label>
												<InputGroup>
													<DatePicker
														selected={yearDate}
														className="form-control"
														onChange={ handleYearChange}
														showYearDropdown
													/>
												</InputGroup>
											</FormGroup>
										</Form>
									</CardBody>
								</Card>


							</Col>
						</Row>


						<Row>


							<Col lg="6">
								<Card>
									<CardBody>

										<h4 className="card-title">Bootstrap MaxLength</h4>
										<p className="card-title-desc">This plugin integrates by default with
										Twitter bootstrap using badges to display the maximum lenght of the
                                            field where the user is inserting text. </p>
										<Label>Default usage</Label>
										<p className="text-muted m-b-15">
											The badge will show up by default when the remaining chars
											are 10 or less:
                    </p>
										<Input
											type="text"
											maxLength="25"
											name="defaultconfig"
											onChange={(e) => { threshholdDefault(e) }}
											id="defaultconfig"
										/>
										{disDefault ? (
											<span className="badgecount badge badge-success">
												{threshhold} / 25{" "}
											</span>
										) : null}

										<div className="mt-3">
											<Label>Threshold value</Label>
											<p className="text-muted m-b-15">
												Do you want the badge to show up when there are 20 chars
                        or less? Use the <code>threshold</code> option:
                      </p>
											<Input
												type="text"
												maxLength={max_len}
												onChange={(e) => { threshholdchange(e) }}
												name="thresholdconfig"
												id="thresholdconfig"
											/>
											{disthresh ? (
												<span className="badgecount badge badge-success">
													{threshholdcount} / 25{" "}
												</span>
											) : null}
										</div>

										<div className="mt-3">
											<Label>All the options</Label>
											<p className="text-muted m-b-15">
												Please note: if the <code>alwaysShow</code> option is
                        enabled, the <code>threshold</code> option is ignored.
                      </p>
											<Input
												type="text"
												maxLength="25"
												onChange={(e) => { optionchange(e) }}
												name="alloptions"
												id="alloptions"
											/>
											{disbadge ? (
												<span className="badgecount">
													You Types <span className="badge badge-success">{optioncount}</span> out of <span className="badge badge-success">25</span> chars
                          available
												</span>
											) : null}
										</div>

										<div className="mt-3">
											<Label>Position</Label>
											<p className="text-muted m-b-15">
												All you need to do is specify the <code>placement</code>{" "}
                        option, with one of those strings. If none is specified,
                        the positioning will be defauted to 'bottom'.
                      </p>
											<Input
												type="text"
												maxLength="25"
												onChange={(e) => {placementchange(e)}}
												name="placement"
												id="placement"
											/>
											{placementbadge ? (
												<span style={{ float: "right" }} className="badgecount badge badge-success">
													{placementcount} / 25{" "}
												</span>
											) : null}
										</div>

										<div className="mt-3">
											<Label>textareas</Label>
											<p className="text-muted m-b-15">
												Bootstrap maxlength supports textarea as well as inputs.
												Even on old IE.
                      </p>
											<Input
												type="textarea"
												id="textarea"
												onChange={(e) => { textareachange(e) }}
												maxLength="225"
												rows="3"
												placeholder="This textarea has a limit of 225 chars."
											/>
											{textareabadge ? (
												<span className="badgecount badge badge-success">
													{" "}
													{textcount} / 225{" "}
												</span>
											) : null}
										</div>
									</CardBody>
								</Card>
							</Col>

							<Col lg="6">
								<Card>
									<CardBody>

										<h4 className="card-title">Bootstrap TouchSpin</h4>
										<p className="card-title-desc">A mobile and touch friendly input spinner component for Bootstrap</p>

										<Form>
											<FormGroup>
												<Label>Using data attributes</Label>
												<InputGroup>
													<div
														className="input-group-append"
														onClick={() => { setdata_attr(data_attr - 1) } }
													>
														<Button type="button" color="primary">
															<i className="mdi mdi-minus"></i>
														</Button>
													</div>
													<input
														type="number"
														className="form-control"
														value={data_attr}
														placeholder="number"
														readOnly
													/>
													<div
														className="input-group-append"
														onClick={() => { setdata_attr(data_attr + 1) } }
													>
														<Button type="button" color="primary">
															<i className="mdi mdi-plus"></i>
														</Button>
													</div>
												</InputGroup>
											</FormGroup>
											<FormGroup>
												<Label>Example with postfix (large)</Label>
												<InputGroup>
													<div
														className="input-group-append"
														onClick={() => { setpostfix(postfix - 1) } }
														>
														<Button type="button" color="primary">
															<i className="mdi mdi-minus"></i>
														</Button>
													</div>
													<input
														type="number"
														className="form-control"
														value={postfix}
														placeholder="number"
														readOnly
													/>
													<div className="input-group-append">
														<span className="input-group-text">%</span>
														<Button
															type="button"
															onClick={() => { setpostfix(postfix + 1) } }
															color="primary"
														>
															<i className="mdi mdi-plus"></i>
														</Button>
													</div>
												</InputGroup>
											</FormGroup>
											<FormGroup>
												<Label>Init with empty value:</Label>
												<InputGroup>
													<div
														className="input-group-append"
														onClick={() => { setempty_val(empty_val - 1) } }>
														<Button type="button" color="primary">
															<i className="mdi mdi-minus"></i>
														</Button>
													</div>
													<input
														type="number"
														className="form-control"
														value={empty_val}
														placeholder="number"
														readOnly
													/>
													<div
														className="input-group-append"
														onClick={() => { setempty_val(empty_val + 1) } }>
														<Button type="button" color="primary">
															<i className="mdi mdi-plus"></i>
														</Button>
													</div>
												</InputGroup>
											</FormGroup>
											<FormGroup>
												<Label>
													Value attribute is not set (applying settings.initval)
                        </Label>
												<InputGroup>
													<div
														className="input-group-append"
														onClick={() => { setnot_attr(not_attr - 1) } }
														>
														<Button type="button" color="primary">
															<i className="mdi mdi-minus"></i>
														</Button>
													</div>
													<input
														type="number"
														className="form-control"
														value={not_attr}
														placeholder="number"
														readOnly
													/>
													<div
														className="input-group-append"
														onClick={() => { setnot_attr(not_attr + 1) } }
														>
														<Button type="button" color="primary">
															<i className="mdi mdi-plus"></i>
														</Button>
													</div>
												</InputGroup>
											</FormGroup>
											<FormGroup className="mb-0">
												<Label>
													Value is set explicitly to 33 (skipping
                          settings.initval){" "}
												</Label>
												<InputGroup>
													<div
														className="input-group-append"
														onClick={() => { setexplicit_val(explicit_val - 1) } }
														>
														<Button type="button" color="primary">
															<i className="mdi mdi-minus"></i>
														</Button>
													</div>
													<input
														type="number"
														className="form-control"
														value={explicit_val}
														placeholder="number"
														readOnly
													/>
													<div
														className="input-group-append"
														onClick={() => { setexplicit_val(explicit_val + 1) } }
														
													>
														<Button type="button" color="primary">
															<i className="mdi mdi-plus"></i>
														</Button>
													</div>
												</InputGroup>
											</FormGroup>
										</Form>{" "}

									</CardBody>
								</Card>

							</Col>
						</Row>


						<Row>
							<Col lg="12">
								<Card>
									<CardBody>

										<h4 className="card-title">Css Switch</h4>
										<p className="card-title-desc">Here are a few types of switches. </p>

										<Row>
											<Col lg="6">
												<h5 className="font-size-14 mb-3">Example switch</h5>
												<div>
													<Switch
														uncheckedIcon={<Offsymbol />}
														checkedIcon={<OnSymbol />}
														onColor="#626ed4"
														onChange={() => {  setswitch1(!switch1)	 } }
														checked={switch1}
													/>
                      &nbsp;
                      <Switch
														uncheckedIcon={<Offsymbol />}
														checkedIcon={<OnSymbol />}
														onColor="#a2a2a2"
														onChange={() =>  { setswitch2(!switch2) } }
														checked={switch2}
													/>
                      &nbsp;
                      <Switch
														uncheckedIcon={<Offsymbol />}
														checkedIcon={<OnSymbol />}
														onColor="#02a499"
														onChange={() => {setswitch3(!switch3)} }
														checked={switch3}
													/>
                      &nbsp;
                      <Switch
														uncheckedIcon={<Offsymbol />}
														checkedIcon={<OnSymbol />}
														onColor="#626ed4"
														onChange={() => {  setswitch4(!switch4) } }
														checked={switch4}
													/>
                      &nbsp;
                      <Switch
														uncheckedIcon={<Offsymbol />}
														checkedIcon={<OnSymbol />}
														onColor="#02a499"
														onChange={() => {  setswitch5(!switch5) } }
														checked={switch5}
													/>
                      &nbsp;
                      <Switch
														uncheckedIcon={<Offsymbol />}
														checkedIcon={<OnSymbol />}
														onColor="#38a4f8"
                                                        onChange={() => { setswitch6(!switch6)} }
														checked={switch6}
													/>
                      &nbsp;
                      <Switch
														uncheckedIcon={<Offsymbol />}
														checkedIcon={<OnSymbol />}
														onColor="#f8b425"
														onChange={() =>  { setswitch7(!switch7) } }
														checked={switch7}
													/>
                      &nbsp;
                      <Switch
														uncheckedIcon={<Offsymbol />}
														checkedIcon={<OnSymbol />}
														onColor="#ec4561"
														onChange={() => { setswitch8(!switch8) }}
														checked={switch8}
													/>
                      &nbsp;
                      <Switch
														uncheckedIcon={<Offsymbol />}
														checkedIcon={<OnSymbol />}
														onColor="#2a3142"
														onChange={() => { setswitch9(!switch9) } }
														checked={switch9}
													/>
												</div>
											</Col>

											<Col lg="6">
												<div className="mt-4 mt-lg-0">
													<h5 className="font-size-14 mb-3">Square switch</h5>
													<div className="d-flex">
														<div className="square-switch">
															<input
																type="checkbox"
																id="square-switch1"
																switch="none"
																checked={sq1}
														        onChange={() => { setsq1(!sq1) } }
															/>
															<label
																htmlFor="square-switch1"
																data-on-label="On"
																data-off-label="Off"
															></label>
														</div>
														<div className="square-switch">
															<input
																type="checkbox"
																id="square-switch2"
																switch="info"
																checked={sq2}
																 onChange={() => { setsq2(!sq2) } }
															/>
															<label
																htmlFor="square-switch2"
																data-on-label="Yes"
																data-off-label="No"
															></label>
														</div>
														<div className="square-switch">
															<input
																type="checkbox"
																id="square-switch3"
																switch="bool"
																checked={sq3}
																 onChange={() => { setsq3(!sq3) } }
															/>
															<label
																htmlFor="square-switch3"
																data-on-label="Yes"
																data-off-label="No"
															></label>
														</div>
													</div>
												</div>
											</Col>
										</Row>


									</CardBody>
								</Card>


							</Col>
						</Row>

					</Container>
				</div>
			</React.Fragment>
		  );
    }

export default FormAdvanced;
