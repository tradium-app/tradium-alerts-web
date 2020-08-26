import React, { useState } from 'react';

import { TabContent, TabPane, Collapse, NavLink, NavItem, CardText, Nav, Card, Row, Col, CardBody, CardTitle, CardSubtitle, CardHeader,Container } from "reactstrap";

import { Link } from "react-router-dom";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

import classnames from "classnames";

const UiTabsAccordions = (props) => {

			const [activeTab, setactiveTab] = useState("1");
			const [activeTab1, setactiveTab1] = useState("5");
			//const [activeTab2, setactiveTab2] = useState("9");
			//const [activeTab3, setactiveTab3] = useState("13");
			const [customActiveTab, setcustomActiveTab] = useState("1");
			const [activeTabJustify, setactiveTabJustify] = useState("5");
			const [col1, setcol1] = useState(true);
			const [col2, setcol2] = useState(false);
			const [col3, setcol3] = useState(false);
			const [col5, setcol5] = useState(true);


	function toggle(tab) {
		if (activeTab !== tab) {
			setactiveTab(tab);
		}
	}
	function toggle1(tab) {
		if (activeTab1 !== tab) {
			setactiveTab1(tab);
		}
	}
	

	function toggleCustomJustified(tab) {
		if (activeTabJustify !== tab) {
			setactiveTabJustify(tab);
		}
	}

	function toggleCustom(tab) {
		if (customActiveTab !== tab) {
			setcustomActiveTab(tab);
		}
	}


    return (
		   <React.Fragment>
				<div className="page-content">
					<Container fluid={true}>
<Breadcrumbs title="UI Elements" breadcrumbItem="Tabs & Accordions" />

						<Row>
							<Col lg={6}>
								<Card>
									<CardBody>
										<CardTitle>Default Tabs</CardTitle>
										<CardSubtitle className="mb-3">
											Use the tab JavaScript plugin—include it individually or through the compiled{" "} <code className="highlighter-rouge">bootstrap.js</code> file—to extend our navigational tabs and pills to create tabbable panes of local content, even via dropdown menus.
                    					</CardSubtitle>

										<Nav tabs>
											<NavItem>
												<NavLink
													style={{ cursor: "pointer" }}
													className={classnames({
														active: activeTab === "1"
													})}
													onClick={() => {
														toggle("1");
													}}
												>
													Home
												</NavLink>
											</NavItem>
											<NavItem>
												<NavLink
													style={{ cursor: "pointer" }}
													className={classnames({
														active: activeTab === "2"
													})}
													onClick={() => {
														toggle("2");
													}}
												>
													Profile
												</NavLink>
											</NavItem>
											<NavItem>
												<NavLink
													style={{ cursor: "pointer" }}
													className={classnames({
														active: activeTab === "3"
													})}
													onClick={() => {
														toggle("3");
													}}
												>
													Messages
												</NavLink>
											</NavItem>
											<NavItem>
												<NavLink
													style={{ cursor: "pointer" }}
													className={classnames({
														active: activeTab === "4"
													})}
													onClick={() => {
														toggle("4");
													}}
												>
													Settings
												</NavLink>
											</NavItem>
										</Nav>

										<TabContent activeTab={activeTab}>
											<TabPane tabId="1" className="p-3">
												<Row>
													<Col sm="12">
														<CardText>
															Raw denim you probably haven't heard of them jean
															shorts Austin. Nesciunt tofu stumptown aliqua, retro
															synth master cleanse. Mustache cliche tempor,
															williamsburg carles vegan helvetica. Reprehenderit
															butcher retro keffiyeh dreamcatcher synth. Cosby
															sweater eu banh mi, qui irure terry richardson ex
															squid. Aliquip placeat salvia cillum iphone. Seitan
															aliquip quis cardigan american apparel, butcher
															voluptate nisi qui.
                          								</CardText>
													</Col>
												</Row>
											</TabPane>
											<TabPane tabId="2" className="p-3">
												<Row>
													<Col sm="12">
														<CardText>
															Food truck fixie locavore, accusamus mcsweeney's
															marfa nulla single-origin coffee squid. Exercitation
															+1 labore velit, blog sartorial PBR leggings next
															level wes anderson artisan four loko farm-to-table
															craft beer twee. Qui photo booth letterpress,
															commodo enim craft beer mlkshk aliquip jean shorts
															ullamco ad vinyl cillum PBR. Homo nostrud organic,
															assumenda labore aesthetic magna delectus mollit.
															Keytar helvetica VHS salvia yr, vero magna velit
															sapiente labore stumptown. Vegan fanny pack odio
															cillum wes anderson 8-bit.
                          								</CardText>
													</Col>
												</Row>
											</TabPane>
											<TabPane tabId="3" className="p-3">
												<Row>
													<Col sm="12">
														<CardText>
															Etsy mixtape wayfarers, ethical wes anderson tofu
															before they sold out mcsweeney's organic lomo retro
															fanny pack lo-fi farm-to-table readymade. Messenger
															bag gentrify pitchfork tattooed craft beer, iphone
															skateboard locavore carles etsy salvia banksy hoodie
															helvetica. DIY synth PBR banksy irony. Leggings
															gentrify squid 8-bit cred pitchfork. Williamsburg
															banh mi whatever gluten-free, carles pitchfork
															biodiesel fixie etsy retro mlkshk vice blog.
															Scenester cred you probably haven't heard of them,
															vinyl craft beer blog stumptown. Pitchfork
															sustainable tofu synth chambray yr.
                          								</CardText>
													</Col>
												</Row>
											</TabPane>
											<TabPane tabId="4" className="p-3">
												<Row>
													<Col sm="12">
														<CardText>
															Trust fund seitan letterpress, keytar raw denim
															keffiyeh etsy art party before they sold out master
															cleanse gluten-free squid scenester freegan cosby
															sweater. Fanny pack portland seitan DIY, art party
															locavore wolf cliche high life echo park Austin.
															Cred vinyl keffiyeh DIY salvia PBR, banh mi before
															they sold out farm-to-table VHS viral locavore cosby
															sweater. Lomo wolf viral, mustache readymade
															thundercats keffiyeh craft beer marfa ethical. Wolf
															salvia freegan, sartorial keffiyeh echo park vegan.
                          								</CardText>
													</Col>
												</Row>
											</TabPane>
										</TabContent>
									</CardBody>
								</Card>
							</Col>

							<Col lg={6}>
								<Card>
									<CardBody>
										<CardTitle>Justify Tabs</CardTitle>
										<CardSubtitle className="mb-3">
											Use the tab JavaScript plugin—include it individually or through the compiled{" "} <code className="highlighter-rouge">bootstrap.js</code> file—to extend our navigational tabs and pills to create tabbable panes of local content, even via dropdown menus.
                    					</CardSubtitle>

										<Nav pills className="navtab-bg nav-justified">
											<NavItem>
												<NavLink
													style={{ cursor: "pointer" }}
													className={classnames({
														active: activeTab1 === "5"
													})}
													onClick={() => {
														toggle1("5");
													}}
												>
													Home
												</NavLink>
											</NavItem>
											<NavItem>
												<NavLink
													style={{ cursor: "pointer" }}
													className={classnames({
														active: activeTab1 === "6"
													})}
													onClick={() => {
														toggle1("6");
													}}
												>
													Profile
												</NavLink>
											</NavItem>
											<NavItem>
												<NavLink
													style={{ cursor: "pointer" }}
													className={classnames({
														active: activeTab1 === "7"
													})}
													onClick={() => {
														toggle1("7");
													}}
												>
													Messages
												</NavLink>
											</NavItem>
											<NavItem>
												<NavLink
													style={{ cursor: "pointer" }}
													className={classnames({
														active: activeTab1 === "8"
													})}
													onClick={() => {
														toggle1("8");
													}}
												>
													Settings
												</NavLink>
											</NavItem>
										</Nav>

										<TabContent activeTab={activeTab1}>
											<TabPane tabId="5" className="p-3">
												<Row>
													<Col sm="12">
														<CardText>
															Raw denim you probably haven't heard of them jean
															shorts Austin. Nesciunt tofu stumptown aliqua, retro
															synth master cleanse. Mustache cliche tempor,
															williamsburg carles vegan helvetica. Reprehenderit
															butcher retro keffiyeh dreamcatcher synth. Cosby
															sweater eu banh mi, qui irure terry richardson ex
															squid. Aliquip placeat salvia cillum iphone. Seitan
															aliquip quis cardigan american apparel, butcher
															voluptate nisi qui.
                          								</CardText>
													</Col>
												</Row>
											</TabPane>
											<TabPane tabId="6" className="p-3">
												<Row>
													<Col sm="12">
														<CardText>
															Food truck fixie locavore, accusamus mcsweeney's
															marfa nulla single-origin coffee squid. Exercitation
															+1 labore velit, blog sartorial PBR leggings next
															level wes anderson artisan four loko farm-to-table
															craft beer twee. Qui photo booth letterpress,
															commodo enim craft beer mlkshk aliquip jean shorts
															ullamco ad vinyl cillum PBR. Homo nostrud organic,
															assumenda labore aesthetic magna delectus mollit.
															Keytar helvetica VHS salvia yr, vero magna velit
															sapiente labore stumptown. Vegan fanny pack odio
															cillum wes anderson 8-bit.
                          								</CardText>
													</Col>
												</Row>
											</TabPane>
											<TabPane tabId="7" className="p-3">
												<Row>
													<Col sm="12">
														<CardText>
															Etsy mixtape wayfarers, ethical wes anderson tofu
															before they sold out mcsweeney's organic lomo retro
															fanny pack lo-fi farm-to-table readymade. Messenger
															bag gentrify pitchfork tattooed craft beer, iphone
															skateboard locavore carles etsy salvia banksy hoodie
															helvetica. DIY synth PBR banksy irony. Leggings
															gentrify squid 8-bit cred pitchfork. Williamsburg
															banh mi whatever gluten-free, carles pitchfork
															biodiesel fixie etsy retro mlkshk vice blog.
															Scenester cred you probably haven't heard of them,
															vinyl craft beer blog stumptown. Pitchfork
															sustainable tofu synth chambray yr.
                          								</CardText>
													</Col>
												</Row>
											</TabPane>

											<TabPane tabId="8" className="p-3">
												<Row>
													<Col sm="12">
														<CardText>
															Trust fund seitan letterpress, keytar raw denim
															keffiyeh etsy art party before they sold out master
															cleanse gluten-free squid scenester freegan cosby
															sweater. Fanny pack portland seitan DIY, art party
															locavore wolf cliche high life echo park Austin.
															Cred vinyl keffiyeh DIY salvia PBR, banh mi before
															they sold out farm-to-table VHS viral locavore cosby
															sweater. Lomo wolf viral, mustache readymade
															thundercats keffiyeh craft beer marfa ethical. Wolf
															salvia freegan, sartorial keffiyeh echo park vegan.
                          								</CardText>
													</Col>
												</Row>
											</TabPane>
										</TabContent>
									</CardBody>
								</Card>
							</Col>
						</Row>


						<Row>
							<Col lg={6}>
								<Card>
									<CardBody>
										<CardTitle>Custom Tabs</CardTitle>
										<CardSubtitle className="mb-3">
											Use the tab JavaScript plugin—include it individually or through the compiled{" "} <code className="highlighter-rouge">bootstrap.js</code> file—to extend our navigational tabs and pills to createtabbable panes of local content, even via dropdown menus.
                    					</CardSubtitle>

										<Nav tabs className="nav-tabs-custom">
											<NavItem>
												<NavLink
													style={{ cursor: "pointer" }}
													className={classnames({
														active: customActiveTab === "1"
													})}
													onClick={() => {
														toggleCustom("1");
													}}
												>
													<span className="d-none d-sm-block">Home</span>
												</NavLink>
											</NavItem>
											<NavItem>
												<NavLink
													style={{ cursor: "pointer" }}
													className={classnames({
														active: customActiveTab === "2"
													})}
													onClick={() => {
														toggleCustom("2");
													}}
												>
													<span className="d-none d-sm-block">Profile</span>
												</NavLink>
											</NavItem>
											<NavItem>
												<NavLink
													style={{ cursor: "pointer" }}
													className={classnames({
														active: customActiveTab === "3"
													})}
													onClick={() => {
														toggleCustom("3");
													}}
												>
													<span className="d-none d-sm-block">Messages</span>
												</NavLink>
											</NavItem>
											<NavItem>
												<NavLink
													style={{ cursor: "pointer" }}
													className={classnames({
														active: customActiveTab === "4"
													})}
													onClick={() => {
														toggleCustom("4");
													}}
												>
													<span className="d-none d-sm-block">Settings</span>
												</NavLink>
											</NavItem>
										</Nav>

										<TabContent activeTab={customActiveTab}>
											<TabPane tabId="1" className="p-3">
												<Row>
													<Col sm="12">
														<CardText>
															Raw denim you probably haven't heard of them jean
															shorts Austin. Nesciunt tofu stumptown aliqua, retro
															synth master cleanse. Mustache cliche tempor,
															williamsburg carles vegan helvetica. Reprehenderit
															butcher retro keffiyeh dreamcatcher synth. Cosby
															sweater eu banh mi, qui irure terry richardson ex
															squid. Aliquip placeat salvia cillum iphone. Seitan
															aliquip quis cardigan american apparel, butcher
															voluptate nisi qui.
                          								</CardText>
													</Col>
												</Row>
											</TabPane>
											<TabPane tabId="2" className="p-3">
												<Row>
													<Col sm="12">
														<CardText>
															Food truck fixie locavore, accusamus mcsweeney's
															marfa nulla single-origin coffee squid. Exercitation
															+1 labore velit, blog sartorial PBR leggings next
															level wes anderson artisan four loko farm-to-table
															craft beer twee. Qui photo booth letterpress,
															commodo enim craft beer mlkshk aliquip jean shorts
															ullamco ad vinyl cillum PBR. Homo nostrud organic,
															assumenda labore aesthetic magna delectus mollit.
															Keytar helvetica VHS salvia yr, vero magna velit
															sapiente labore stumptown. Vegan fanny pack odio
															cillum wes anderson 8-bit.
                          								</CardText>
													</Col>
												</Row>
											</TabPane>
											<TabPane tabId="3" className="p-3">
												<Row>
													<Col sm="12">
														<CardText>
															Etsy mixtape wayfarers, ethical wes anderson tofu
															before they sold out mcsweeney's organic lomo retro
															fanny pack lo-fi farm-to-table readymade. Messenger
															bag gentrify pitchfork tattooed craft beer, iphone
															skateboard locavore carles etsy salvia banksy hoodie
															helvetica. DIY synth PBR banksy irony. Leggings
															gentrify squid 8-bit cred pitchfork. Williamsburg
															banh mi whatever gluten-free, carles pitchfork
															biodiesel fixie etsy retro mlkshk vice blog.
															Scenester cred you probably haven't heard of them,
															vinyl craft beer blog stumptown. Pitchfork
															sustainable tofu synth chambray yr.
                          								</CardText>
													</Col>
												</Row>
											</TabPane>
											<TabPane tabId="4" className="p-3">
												<Row>
													<Col sm="12">
														<CardText>
															Trust fund seitan letterpress, keytar raw denim
															keffiyeh etsy art party before they sold out master
															cleanse gluten-free squid scenester freegan cosby
															sweater. Fanny pack portland seitan DIY, art party
															locavore wolf cliche high life echo park Austin.
															Cred vinyl keffiyeh DIY salvia PBR, banh mi before
															they sold out farm-to-table VHS viral locavore cosby
															sweater. Lomo wolf viral, mustache readymade
															thundercats keffiyeh craft beer marfa ethical. Wolf
															salvia freegan, sartorial keffiyeh echo park vegan.
                          								</CardText>
													</Col>
												</Row>
											</TabPane>
										</TabContent>
									</CardBody>
								</Card>
							</Col>

							<Col lg={6}>
								<Card>
									<CardBody>
										<CardTitle>Custom Tabs Justified</CardTitle>
										<CardSubtitle className="mb-3">
											Use the tab JavaScript plugin—include it individually or through the compiled{" "} <code className="highlighter-rouge">bootstrap.js</code> file—to extend our navigational tabs and pills to create tabbable panes of local content, even via dropdown menus.
                    					</CardSubtitle>

										<Nav tabs className="nav-tabs-custom nav-justified">
											<NavItem>
												<NavLink
													style={{ cursor: "pointer" }}
													className={classnames({
														active: activeTabJustify === "5"
													})}
													onClick={() => {
														toggleCustomJustified("5");
													}}
												>
													<span className="d-none d-sm-block">Home</span>
												</NavLink>
											</NavItem>
											<NavItem>
												<NavLink
													style={{ cursor: "pointer" }}
													className={classnames({
														active: activeTabJustify === "6"
													})}
													onClick={() => {
														toggleCustomJustified("6");
													}}
												>
													<span className="d-none d-sm-block">Profile</span>
												</NavLink>
											</NavItem>
											<NavItem>
												<NavLink
													style={{ cursor: "pointer" }}
													className={classnames({
														active: activeTabJustify === "7"
													})}
													onClick={() => {
														toggleCustomJustified("7");
													}}
												>
													<span className="d-none d-sm-block">Messages</span>
												</NavLink>
											</NavItem>
											<NavItem>
												<NavLink
													style={{ cursor: "pointer" }}
													className={classnames({
														active: activeTabJustify === "8"
													})}
													onClick={() => {
														toggleCustomJustified("8");
													}}
												>
													<span className="d-none d-sm-block">Settings</span>
												</NavLink>
											</NavItem>
										</Nav>

										<TabContent activeTab={activeTabJustify}>
											<TabPane tabId="5" className="p-3">
												<Row>
													<Col sm="12">
														<CardText>
															Raw denim you probably haven't heard of them jean
															shorts Austin. Nesciunt tofu stumptown aliqua, retro
															synth master cleanse. Mustache cliche tempor,
															williamsburg carles vegan helvetica. Reprehenderit
															butcher retro keffiyeh dreamcatcher synth. Cosby
															sweater eu banh mi, qui irure terry richardson ex
															squid. Aliquip placeat salvia cillum iphone. Seitan
															aliquip quis cardigan american apparel, butcher
															voluptate nisi qui.
                          								</CardText>
													</Col>
												</Row>
											</TabPane>
											<TabPane tabId="6" className="p-3">
												<Row>
													<Col sm="12">
														<CardText>
															Food truck fixie locavore, accusamus mcsweeney's
															marfa nulla single-origin coffee squid. Exercitation
															+1 labore velit, blog sartorial PBR leggings next
															level wes anderson artisan four loko farm-to-table
															craft beer twee. Qui photo booth letterpress,
															commodo enim craft beer mlkshk aliquip jean shorts
															ullamco ad vinyl cillum PBR. Homo nostrud organic,
															assumenda labore aesthetic magna delectus mollit.
															Keytar helvetica VHS salvia yr, vero magna velit
															sapiente labore stumptown. Vegan fanny pack odio
															cillum wes anderson 8-bit.
                          								</CardText>
													</Col>
												</Row>
											</TabPane>
											<TabPane tabId="7" className="p-3">
												<Row>
													<Col sm="12">
														<CardText>
															Etsy mixtape wayfarers, ethical wes anderson tofu
															before they sold out mcsweeney's organic lomo retro
															fanny pack lo-fi farm-to-table readymade. Messenger
															bag gentrify pitchfork tattooed craft beer, iphone
															skateboard locavore carles etsy salvia banksy hoodie
															helvetica. DIY synth PBR banksy irony. Leggings
															gentrify squid 8-bit cred pitchfork. Williamsburg
															banh mi whatever gluten-free, carles pitchfork
															biodiesel fixie etsy retro mlkshk vice blog.
															Scenester cred you probably haven't heard of them,
															vinyl craft beer blog stumptown. Pitchfork
															sustainable tofu synth chambray yr.
                          								</CardText>
													</Col>
												</Row>
											</TabPane>

											<TabPane tabId="8" className="p-3">
												<Row>
													<Col sm="12">
														<CardText>
															Trust fund seitan letterpress, keytar raw denim
															keffiyeh etsy art party before they sold out master
															cleanse gluten-free squid scenester freegan cosby
															sweater. Fanny pack portland seitan DIY, art party
															locavore wolf cliche high life echo park Austin.
															Cred vinyl keffiyeh DIY salvia PBR, banh mi before
															they sold out farm-to-table VHS viral locavore cosby
															sweater. Lomo wolf viral, mustache readymade
															thundercats keffiyeh craft beer marfa ethical. Wolf
															salvia freegan, sartorial keffiyeh echo park vegan.
                          								</CardText>
													</Col>
												</Row>
											</TabPane>
										</TabContent>
									</CardBody>
								</Card>
							</Col>

						</Row>


						<Row>
							<Col lg={6}>
								<Card>
									<CardBody>
										<CardTitle>Default Collapse</CardTitle>
										<CardSubtitle className="mb-3">
											You can use a link with the{" "} <code className="highlighter-rouge">href</code> attribute, or a button with the{" "} <code className="highlighter-rouge">data-target</code> attribute. In both cases, the{" "} <code className="highlighter-rouge"> data-toggle="collapse"</code> is required.
                  						</CardSubtitle>

										<p>
											<Link
												to="#"
												onClick={() => { setcol5(!col5) }}
												style={{ cursor: "pointer" }}
												className="btn btn-primary mo-mb-2"
											>
												Link with href </Link>{" "} &nbsp;
											<button
												onClick={() => { setcol5(!col5)  }}
												className="btn btn-primary mo-mb-2"
												type="button"
												style={{ cursor: "pointer" }}
											>
												Button with data-target
                    						</button>
										</p>
										<Collapse isOpen={col5}>
											<Card>
												<CardBody>
													Anim pariatur cliche reprehenderit, enim eiusmod high
													life accusamus terry richardson ad squid. Nihil anim
													keffiyeh helvetica, craft beer labore wes anderson cred
													nesciunt sapiente ea proident.
                      							</CardBody>
											</Card>
										</Collapse>
									</CardBody>
								</Card>
							</Col>

							<Col lg={6}>
								<Card>
									<CardBody>
										<CardTitle>Accordion example</CardTitle>
										<CardSubtitle className="mb-3">
											Extend the default collapse behavior to create an accordion.
                    					</CardSubtitle>

										<div id="accordion">
											<Card className="mb-1">
												<CardHeader className="p-3" id="headingOne">
													<h6 className="m-0 font-14">
														<span onClick={() => { setcol1(!col1) }}
															style={{ cursor: "pointer" }} className="text-dark">
															Collapsible Group Item #1
                          								</span>
													</h6>
												</CardHeader>

												<Collapse isOpen={col1}>
													<Card>
														<CardBody>
															Anim pariatur cliche reprehenderit, enim eiusmod
															high life accusamus terry richardson ad squid. 3
															wolf moon officia aute, non cupidatat skateboard
															dolor brunch. Food truck quinoa nesciunt laborum
															eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put
															a bird on it squid single-origin coffee nulla
															assumenda shoreditch et. Nihil anim keffiyeh
															helvetica, craft beer labore wes anderson cred
															nesciunt sapiente ea proident. Ad vegan excepteur
															butcher vice lomo. Leggings occaecat craft beer
															farm-to-table, raw denim aesthetic synth nesciunt
															you probably haven't heard of them accusamus labore
															sustainable VHS.
                          								</CardBody>
													</Card>
												</Collapse>
											</Card>
											<Card className="mb-1">
												<CardHeader className="p-3" id="headingTwo">
													<h6 className="m-0 font-14">
														<span onClick={() => { setcol2(!col2) }}
															style={{ cursor: "pointer" }} className="text-dark">
															{" "}Collapsible Group Item #2{" "}
														</span>
													</h6>
												</CardHeader>
												<Collapse isOpen={col2}>
													<Card>
														<CardBody>
															Anim pariatur cliche reprehenderit, enim eiusmod
															high life accusamus terry richardson ad squid. 3
															wolf moon officia aute, non cupidatat skateboard
															dolor brunch. Food truck quinoa nesciunt laborum
															eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put
															a bird on it squid single-origin coffee nulla
															assumenda shoreditch et. Nihil anim keffiyeh
															helvetica, craft beer labore wes anderson cred
															nesciunt sapiente ea proident. Ad vegan excepteur
															butcher vice lomo. Leggings occaecat craft beer
															farm-to-table, raw denim aesthetic synth nesciunt
															you probably haven't heard of them accusamus labore
															sustainable VHS.
                          								</CardBody>
													</Card>
												</Collapse>{" "}
											</Card>
											<Card className="mb-0">
												<CardHeader className="p-3" id="headingThree">
													<h6 className="m-0 font-14">
														<span onClick={() => { setcol3(!col3) }}
															style={{ cursor: "pointer" }} className="text-dark">
															Collapsible Group Item #3
                          								</span>
													</h6>
												</CardHeader>
												<Collapse isOpen={col3}>
													<Card>
														<CardBody>
															Anim pariatur cliche reprehenderit, enim eiusmod
															high life accusamus terry richardson ad squid. 3
															wolf moon officia aute, non cupidatat skateboard
															dolor brunch. Food truck quinoa nesciunt laborum
															eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put
															a bird on it squid single-origin coffee nulla
															assumenda shoreditch et. Nihil anim keffiyeh
															helvetica, craft beer labore wes anderson cred
															nesciunt sapiente ea proident. Ad vegan excepteur
															butcher vice lomo. Leggings occaecat craft beer
															farm-to-table, raw denim aesthetic synth nesciunt
															you probably haven't heard of them accusamus labore
															sustainable VHS.
                          								</CardBody>
													</Card>
												</Collapse>{" "}
											</Card>
										</div>
									</CardBody>
								</Card>
							</Col>
						</Row>

					</Container>
				</div>

			</React.Fragment>
		  );
    }

export default UiTabsAccordions;
