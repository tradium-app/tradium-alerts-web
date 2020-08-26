import React from "react";
import { Route,Redirect,withRouter } from "react-router-dom";

const Authmiddleware = ({
	component: Component,
	layout: Layout
}) => (
		<Route
			render={props => {
			
			// here you can apply condition
			if (!localStorage.getItem("authUser")) {
					return (
						<Redirect to={{ pathname: "/login", state: { from: props.location } }} />
					);
				}
				
				return (
		     	<Layout>
						<Component {...props} />
					</Layout>
				);
			}}
		/>
	);

export default withRouter(Authmiddleware);

