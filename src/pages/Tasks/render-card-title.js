import React from 'react';
import { CardTitle, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

const RenderCardTitle = (props) => {

    return (
             <React.Fragment>
                <UncontrolledDropdown className="float-right">
                    <DropdownToggle href="#" className="arrow-none" tag="i">
                        <i className="mdi mdi-dots-vertical m-0 text-muted h5"></i>
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem href="#">Edit</DropdownItem>
                        <DropdownItem href="#">Delete</DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
                <CardTitle className="mb-4">{props.title}</CardTitle>
            </React.Fragment>
          );
    }
        
export default RenderCardTitle;