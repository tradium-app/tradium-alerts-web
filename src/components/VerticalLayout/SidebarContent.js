import React, {  useEffect } from 'react';

// MetisMenu
import MetisMenu from "metismenujs";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

//i18n
import { withNamespaces } from 'react-i18next';

const SidebarContent = (props) => {
        
    // Use ComponentDidMount and ComponentDidUpdate method symultaniously
     useEffect(() => {

        var pathName = props.location.pathname;

        const initMenu = () => {
            new MetisMenu("#side-menu");
            var matchingMenuItem = null;
            var ul = document.getElementById("side-menu");
            var items = ul.getElementsByTagName("a");
            for (var i = 0; i < items.length; ++i) {
                if (pathName === items[i].pathname) {
                    matchingMenuItem = items[i];
                    break;
                }
            }
            if (matchingMenuItem) {
                activateParentDropdown(matchingMenuItem);
            }
        }
         initMenu();
      }, [props.location.pathname]);

  
    function  activateParentDropdown(item) {
        item.classList.add("active");
        const parent = item.parentElement;

        if (parent) {
            parent.classList.add("mm-active");
            const parent2 = parent.parentElement;

            if (parent2) {
                parent2.classList.add("mm-show");

                const parent3 = parent2.parentElement;

                if (parent3) {
                    parent3.classList.add("mm-active"); // li
                    parent3.childNodes[0].classList.add("mm-active"); //a
                    const parent4 = parent3.parentElement;
                    if (parent4) {
                        parent4.classList.add("mm-active");
                    }
                }
            }
            return false;
        }
        return false;
    };

          return (
           
            <React.Fragment>
                 <div id="sidebar-menu">
                <ul className="metismenu list-unstyled" id="side-menu">
                    <li className="menu-title">{props.t('Menu') }  </li>
                     <li>
                         <Link to="/#" className="waves-effect">
                                    <i className="bx bx-home-circle"></i><span className="badge badge-pill badge-info float-right">03</span>
                                    <span>{props.t('Dashboards') }</span>
                                </Link>
                                <ul className="sub-menu" aria-expanded="false">
                                    <li><Link to="/dashboard">{props.t('Default') }</Link></li>
                                    <li><Link to="/dashboard-saas">{props.t('Saas') }</Link></li>
                                    <li><Link to="/dashboard-crypto">{props.t('Crypto') }</Link></li>
                                </ul>
                     </li>

                    <li className="menu-title">{props.t('Apps') }</li>

                    <li>
                        <Link to="calendar" className=" waves-effect">
                            <i className="bx bx-calendar"></i>
                            <span>{props.t('Calendar') }</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="chat" className=" waves-effect">
                            <i className="bx bx-chat"></i>
                            <span className="badge badge-pill badge-success float-right">{props.t('New') }</span>
                            <span>{props.t('Chat') }</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/#" className="has-arrow waves-effect">
                            <i className="bx bx-store"></i>
                            <span>{props.t('Ecommerce') }</span>
                        </Link>
                        <ul className="sub-menu" aria-expanded="false">
                            <li><Link to="ecommerce-products">{props.t('Products') }</Link></li>
                            <li><Link to="ecommerce-product-detail">{props.t('Product Detail') }</Link></li>
                            <li><Link to="ecommerce-orders">{props.t('Orders') }</Link></li>
                            <li><Link to="ecommerce-customers">{props.t('Customers') }</Link></li>
                            <li><Link to="ecommerce-cart">{props.t('Cart') }</Link></li>
                            <li><Link to="ecommerce-checkout">{props.t('Checkout') }</Link></li>
                            <li><Link to="ecommerce-shops">{props.t('Shops') }</Link></li>
                            <li><Link to="ecommerce-add-product">{props.t('Add Product') }</Link></li>
                        </ul>
                    </li>

                    <li>
                        <Link to="/#" className="has-arrow waves-effect">
                            <i className="bx bx-bitcoin"></i>
                            <span>{props.t('Crypto')}</span>
                        </Link>
                            <ul className="sub-menu" aria-expanded="false">
                                <li><Link to="crypto-wallet">{props.t('Wallet')}</Link></li>
                                <li><Link to="crypto-buy-sell">{props.t('Buy/Sell')}</Link></li>
                                <li><Link to="crypto-exchange">{props.t('Exchange')}</Link></li>
                                <li><Link to="crypto-lending">{props.t('Lending')}</Link></li>
                                <li><Link to="crypto-orders">{props.t('Orders')}</Link></li>
                                <li><Link to="crypto-kyc-application">{props.t('KYC Application')}</Link></li>
                                <li><Link to="crypto-ico-landing">{props.t('ICO Landing')}</Link></li>
                            </ul>
                        </li>

                    <li>
                        <Link to="/#" className="has-arrow waves-effect">
                            <i className="bx bx-envelope"></i>
                            <span>{props.t('Email')}</span>
                        </Link>
                        <ul className="sub-menu" aria-expanded="false">
                            <li><Link to="email-inbox">{props.t('Inbox')}</Link></li>
                            <li><Link to="email-read">{props.t('Read Email')} </Link></li>
                        </ul>
                    </li>

                    <li>
                        <Link to="/#" className="has-arrow waves-effect">
                            <i className="bx bx-receipt"></i>
                            <span>{props.t('Invoices')}</span>
                        </Link>
                        <ul className="sub-menu" aria-expanded="false">
                            <li><Link to="invoices-list">{props.t('Invoice List')}</Link></li>
                            <li><Link to="invoices-detail">{props.t('Invoice Detail')}</Link></li>
                        </ul>
                    </li>

                    <li>
                        <Link to="/#" className="has-arrow waves-effect">
                            <i className="bx bx-briefcase-alt-2"></i>
                            <span>{props.t('Projects')}</span>
                        </Link>
                        <ul className="sub-menu" aria-expanded="false">
                            <li><Link to="projects-grid">{props.t('Projects Grid')}</Link></li>
                            <li><Link to="projects-list">{props.t('Projects List')}</Link></li>
                            <li><Link to="projects-overview">{props.t('Project Overview')}</Link></li>
                            <li><Link to="projects-create">{props.t('Create New')}</Link></li>
                        </ul>
                    </li>

                    <li>
                        <Link to="/#" className="has-arrow waves-effect">
                            <i className="bx bx-task"></i>
                            <span>{props.t('Tasks')}</span>
                        </Link>
                        <ul className="sub-menu" aria-expanded="false">
                            <li><Link to="tasks-list">{props.t('Task List')}</Link></li>
                            <li><Link to="tasks-kanban">{props.t('Kanban Board')}</Link></li>
                            <li><Link to="tasks-create">{props.t('Create Task')}</Link></li>
                        </ul>
                    </li>

                    <li>
                        <Link to="/#" className="has-arrow waves-effect">
                            <i className="bx bxs-user-detail"></i>
                            <span>{props.t('Contacts')}</span>
                        </Link>
                        <ul className="sub-menu" aria-expanded="false">
                            <li><Link to="contacts-grid">{props.t('User Grid')}</Link></li>
                            <li><Link to="contacts-list">{props.t('User List')}</Link></li>
                            <li><Link to="contacts-profile">{props.t('Profile')}</Link></li>
                        </ul>
                    </li>

                    <li className="menu-title">Pages</li>
                    <li>
                        <Link to="/#" className="has-arrow waves-effect">
                            <i className="bx bx-user-circle"></i>
                            <span>{props.t('Authentication')}</span>
                        </Link>
                        <ul className="sub-menu">
                            <li><Link to="pages-login">{props.t('Login')}</Link></li>
                            <li><Link to="pages-register">{props.t('Register')}</Link></li>
                            <li><Link to="pages-forget-pwd">{props.t('Forget Password')}</Link></li>
                            <li><Link to="auth-lock-screen">{props.t('Lock Screen')}</Link></li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/#" className="has-arrow waves-effect">
                            <i className="bx bx-file"></i>
                            <span>{props.t('Utility')}</span>
                        </Link>
                        <ul className="sub-menu" aria-expanded="false">
                            <li><Link to="pages-starter">{props.t('Starter Page')}</Link></li>
                            <li><Link to="pages-maintenance">{props.t('Maintenance')}</Link></li>
                            <li><Link to="pages-comingsoon">{props.t('Coming Soon')}</Link></li>
                            <li><Link to="pages-timeline">{props.t('Timeline')}</Link></li>
                            <li><Link to="pages-faqs">{props.t('FAQs')}</Link></li>
                            <li><Link to="pages-pricing">{props.t('Pricing')}</Link></li>
                            <li><Link to="pages-404">{props.t('Error 404')}</Link></li>
                            <li><Link to="pages-500">{props.t('Error 500')}</Link></li>
                        </ul>
                    </li>

                    <li className="menu-title">{props.t('Components')}</li>

                    <li>
                        <Link to="/#" className="has-arrow waves-effect">
                            <i className="bx bx-tone"></i>
                            <span>{props.t('UI Elements')}</span>
                        </Link>
                        <ul className="sub-menu" aria-expanded="false">
                            <li><Link to="ui-alerts">{props.t('Alerts')}</Link></li>
                            <li><Link to="ui-buttons">{props.t('Buttons')}</Link></li>
                            <li><Link to="ui-cards">{props.t('Cards')}</Link></li>
                            <li><Link to="ui-carousel">{props.t('Carousel')}</Link></li>
                            <li><Link to="ui-dropdowns">{props.t('Dropdowns')}</Link></li>
                            <li><Link to="ui-grid">{props.t('Grid')}</Link></li>
                            <li><Link to="ui-images">{props.t('Images')}</Link></li>
                            <li><Link to="ui-lightbox">{props.t('Lightbox')}</Link></li>
                            <li><Link to="ui-modals">{props.t('Modals')}</Link></li>
                            <li><Link to="ui-rangeslider">{props.t('Range Slider')}</Link></li>
                            <li><Link to="ui-session-timeout">{props.t('Session Timeout')}</Link></li>
                            <li><Link to="ui-progressbars">{props.t('Progress Bars')}</Link></li>
                            <li><Link to="ui-sweet-alert">{props.t('Sweet-Alert')}</Link></li>
                            <li><Link to="ui-tabs-accordions">{props.t('Tabs & Accordions')}</Link></li>
                            <li><Link to="ui-typography">{props.t('Typography')}</Link></li>
                            <li><Link to="ui-video">{props.t('Video')}</Link></li>
                            <li><Link to="ui-general">{props.t('General')}</Link></li>
                            <li><Link to="ui-colors">{props.t('Colors')}</Link></li>
                            <li><Link to="ui-rating">{props.t('Rating')}</Link></li>
                            <li><Link to="ui-notifications">{props.t('Notifications')}</Link></li>
                            <li><Link to="ui-image-cropper">{props.t('Image Cropper')}</Link></li>
                        </ul>
                    </li>

                    <li>
                        <Link to="/#" className="waves-effect">
                            <i className="bx bxs-eraser"></i>
                            <span className="badge badge-pill badge-danger float-right">6</span>
                            <span>{props.t('Forms')}</span>
                        </Link>
                        <ul className="sub-menu" aria-expanded="false">
                            <li><Link to="form-elements">{props.t('Form Elements')}</Link></li>
                            <li><Link to="form-validation">{props.t('Form Validation')}</Link></li>
                            <li><Link to="form-advanced">{props.t('Form Advanced')}</Link></li>
                            <li><Link to="form-editors">{props.t('Form Editors')}</Link></li>
                            <li><Link to="form-uploads">{props.t('Form File Upload')} </Link></li>
                            <li><Link to="form-xeditable">{props.t('Form Xeditable')}</Link></li>
                            <li><Link to="form-repeater">{props.t('Form Repeater')}</Link></li>
                            <li><Link to="form-wizard">{props.t('Form Wizard')}</Link></li>
                            <li><Link to="form-mask">{props.t('Form Mask')}</Link></li>
                        </ul>
                    </li>

                    <li>
                        <Link to="/#" className="has-arrow waves-effect">
                            <i className="bx bx-list-ul"></i>
                            <span>{props.t('Tables')}</span>
                        </Link>
                        <ul className="sub-menu" aria-expanded="false">
                            <li><Link to="tables-basic">{props.t('Basic Tables')}</Link></li>
                            <li><Link to="tables-datatable">{props.t('Data Tables')}</Link></li>
                            <li><Link to="tables-responsive">{props.t('Responsive Table')}</Link></li>
                            <li><Link to="tables-editable">{props.t('Editable Table')}</Link></li>
                        </ul>
                    </li>

                    <li>
                        <Link to="/#" className="has-arrow waves-effect">
                            <i className="bx bxs-bar-chart-alt-2"></i>
                            <span>{props.t('Charts')}</span>
                        </Link>

                        <ul className="sub-menu" aria-expanded="false">
                            <li><Link to="apex-charts">{props.t('Apex charts')}</Link></li>
                            <li><Link to="chartist-charts">{props.t('Chartist Chart')}</Link></li>
                            <li><Link to="chartjs-charts">{props.t('Chartjs Chart')}</Link></li>
                            <li><Link to="e-charts">{props.t('E Chart')}</Link></li>
                            <li><Link to="tui-charts">{props.t('Toast UI Chart')}</Link></li>
                            <li><Link to="sparkline-charts">{props.t('Sparkline Chart')}</Link></li>
                            <li><Link to="charts-knob">{props.t('Knob Chart')}</Link></li>
                        </ul>
                    </li>

                    <li>
                        <Link to="/#" className="has-arrow waves-effect">
                            <i className="bx bx-aperture"></i>
                            <span>{props.t('Icons')}</span>
                        </Link>
                        <ul className="sub-menu" aria-expanded="false">
                            <li><Link to="icons-boxicons">{props.t('Boxicons')}</Link></li>
                            <li><Link to="icons-materialdesign">{props.t('Material Design')}</Link></li>
                            <li><Link to="icons-dripicons">{props.t('Dripicons')}</Link></li>
                            <li><Link to="icons-fontawesome">{props.t('Font awesome')}</Link></li>
                        </ul>
                    </li>

                    <li>
                        <Link to="/#" className="has-arrow waves-effect">
                            <i className="bx bx-map"></i>
                            <span>{props.t('Maps')}</span>
                        </Link>
                        <ul className="sub-menu" aria-expanded="false">
                            <li><Link to="maps-google">{props.t('Google Maps')}</Link></li>
                            <li><Link to="maps-vector">{props.t('Vector Maps')}</Link></li>
                            <li><Link to="maps-leaflet">{props.t('Leaflet Maps')}</Link></li>
                        </ul>
                    </li>

                    <li>
                        <Link to="/#" className="has-arrow waves-effect">
                            <i className="bx bx-share-alt"></i>
                            <span>{props.t('Multi Level')}</span>
                        </Link>
                        <ul className="sub-menu" aria-expanded="true">
                            <li><Link to="#">{props.t('Level 1.1')}</Link></li>
                            <li><Link to="#" className="has-arrow">{props.t('Level 1.2')}</Link>
                                <ul className="sub-menu" aria-expanded="true">
                                    <li><Link to="#">{props.t('Level 2.1')}</Link></li>
                                    <li><Link to="#">{props.t('Level 2.2')}</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            </React.Fragment>
          );
        }

    export default withRouter(withNamespaces()(SidebarContent));


