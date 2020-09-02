import Home from '../pages/Home'

// // Pages Component
import Chat from '../pages/Chat/Chat'

// Pages Calendar
import Calendar from '../pages/Calendar/index'

// //Tasks
import TasksList from '../pages/Tasks/tasks-list'
import TasksKanban from '../pages/Tasks/tasks-kanban'
import TasksCreate from '../pages/Tasks/tasks-create'

// //Projects
import ProjectsGrid from '../pages/Projects/projects-grid'
import ProjectsList from '../pages/Projects/projects-list'
import ProjectsOverview from '../pages/Projects/projects-overview'
import ProjectsCreate from '../pages/Projects/projects-create'

// //Ecommerce Pages
import FindTutors from '../pages/Find-Tutors/Find-Tutors'
import EcommerceProductDetail from '../pages/Find-Tutors/EcommerceProductDetail'
import EcommerceOrders from '../pages/Find-Tutors/EcommerceOrders'
import EcommerceCustomers from '../pages/Find-Tutors/EcommerceCustomers'
import EcommerceCart from '../pages/Find-Tutors/EcommerceCart'
import EcommerceCheckout from '../pages/Find-Tutors/EcommerceCheckout'
import EcommerceShops from '../pages/Find-Tutors/EcommerceShops'
import EcommerceAddProduct from '../pages/Find-Tutors/EcommerceAddProduct'

//Email
import EmailInbox from '../pages/Email/email-inbox'
import EmailRead from '../pages/Email/email-read'

//Invoices
import InvoicesList from '../pages/Invoices/invoices-list'
import InvoiceDetail from '../pages/Invoices/invoices-detail'

// Dashboard
import Dashboard from '../pages/Dashboard/index'
import DashboardSaas from '../pages/Dashboard-saas/index'
import DashboardCrypto from '../pages/Dashboard-crypto/index'

//Crypto
import CryptoWallet from '../pages/Crypto/crypto-wallet'
import CryptoBuySell from '../pages/Crypto/crypto-buy-sell'
import CryptoExchange from '../pages/Crypto/crypto-exchange'
import CryptoLending from '../pages/Crypto/crypto-lending'
import CryptoOrders from '../pages/Crypto/crypto-orders'
import CryptoKYCApplication from '../pages/Crypto/crypto-kyc-application'

// Charts
import ChartApex from '../pages/Charts/Apexcharts'
import ChartistChart from '../pages/Charts/ChartistChart'
import ChartjsChart from '../pages/Charts/ChartjsChart'
import EChart from '../pages/Charts/EChart'
import SparklineChart from '../pages/Charts/SparklineChart'
import ToastUIChart from '../pages/Charts/ToastUIChart'
import ChartsKnob from '../pages/Charts/charts-knob'

// Maps
import MapsGoogle from '../pages/Maps/MapsGoogle'
import MapsVector from '../pages/Maps/MapsVector'
import MapsLeaflet from '../pages/Maps/MapsLeaflet'

//Icons
import IconBoxicons from '../pages/Icons/IconBoxicons'
import IconDripicons from '../pages/Icons/IconDripicons'
import IconMaterialdesign from '../pages/Icons/IconMaterialdesign'
import IconFontawesome from '../pages/Icons/IconFontawesome'

//Tables
import BasicTables from '../pages/Tables/BasicTables'
import DatatableTables from '../pages/Tables/DatatableTables'
import ResponsiveTables from '../pages/Tables/ResponsiveTables'
import EditableTables from '../pages/Tables/EditableTables'

//Ui
import UiAlert from '../pages/Ui/UiAlert'
import UiButtons from '../pages/Ui/UiButtons'
import UiCards from '../pages/Ui/UiCards'
import UiCarousel from '../pages/Ui/UiCarousel'
import UiColors from '../pages/Ui/UiColors'
import UiDropdown from '../pages/Ui/UiDropdown'
import UiGeneral from '../pages/Ui/UiGeneral'
import UiGrid from '../pages/Ui/UiGrid'
import UiImages from '../pages/Ui/UiImages'
import UiLightbox from '../pages/Ui/UiLightbox'
import UiModal from '../pages/Ui/UiModal'
import UiProgressbar from '../pages/Ui/UiProgressbar'
import UiSweetAlert from '../pages/Ui/UiSweetAlert'
import UiTabsAccordions from '../pages/Ui/UiTabsAccordions'
import UiTypography from '../pages/Ui/UiTypography'
import UiVideo from '../pages/Ui/UiVideo'
import UiSessionTimeout from '../pages/Ui/UiSessionTimeout'
import UiRating from '../pages/Ui/UiRating'
import UiRangeSlider from '../pages/Ui/UiRangeSlider'
import UiNotifications from '../pages/Ui/ui-notifications'
import UiImageCropper from '../pages/Ui/ui-image-cropper'

//Pages
import PagesStarter from '../pages/Utility/pages-starter'
import PagesMaintenance from '../pages/Utility/pages-maintenance'
import PagesComingsoon from '../pages/Utility/pages-comingsoon'
import PagesTimeline from '../pages/Utility/pages-timeline'
import PagesFaqs from '../pages/Utility/pages-faqs'
import PagesPricing from '../pages/Utility/pages-pricing'
import Pages404 from '../pages/Utility/pages-404'
import Pages500 from '../pages/Utility/pages-500'

//Contacts
import ContactsGrid from '../pages/Contacts/contacts-grid'
import ContactsList from '../pages/Contacts/contacts-list'
import ContactsProfile from '../pages/Contacts/contacts-profile'

import EditProfile from '../pages/Edit-Profile'
import BookClass from '../pages/BookClass'

const userRoutes = [
    { path: '/dashboard', component: Dashboard },
    { path: '/dashboard-saas', component: DashboardSaas },
    { path: '/dashboard-crypto', component: DashboardCrypto },

    //Crypto
    { path: '/crypto-wallet', component: CryptoWallet },
    { path: '/crypto-buy-sell', component: CryptoBuySell },
    { path: '/crypto-exchange', component: CryptoExchange },
    { path: '/crypto-lending', component: CryptoLending },
    { path: '/crypto-orders', component: CryptoOrders },
    { path: '/crypto-kyc-application', component: CryptoKYCApplication },

    //chat
    { path: '/chat', component: Chat },

    // //calendar
    { path: '/calendar', component: Calendar },

    // //profile
    { path: '/profile', component: ContactsProfile },

    //Ecommerce
    { path: '/ecommerce-product-detail', component: EcommerceProductDetail },
    { path: '/ecommerce-orders', component: EcommerceOrders },
    { path: '/ecommerce-customers', component: EcommerceCustomers },
    { path: '/ecommerce-cart', component: EcommerceCart },
    { path: '/ecommerce-checkout', component: EcommerceCheckout },
    { path: '/ecommerce-shops', component: EcommerceShops },
    { path: '/ecommerce-add-product', component: EcommerceAddProduct },

    //Email
    { path: '/email-inbox', component: EmailInbox },
    { path: '/email-read', component: EmailRead },

    //Invoices
    { path: '/invoices-list', component: InvoicesList },
    { path: '/invoices-detail', component: InvoiceDetail },

    // Tasks
    { path: '/tasks-list', component: TasksList },
    { path: '/tasks-kanban', component: TasksKanban },
    { path: '/tasks-create', component: TasksCreate },

    //Projects
    { path: '/projects-grid', component: ProjectsGrid },
    { path: '/projects-list', component: ProjectsList },
    { path: '/projects-overview', component: ProjectsOverview },
    { path: '/projects-create', component: ProjectsCreate },

    // Contacts
    { path: '/contacts-grid', component: ContactsGrid },
    { path: '/contacts-list', component: ContactsList },
    { path: '/contacts-profile', component: ContactsProfile },

    //Charts
    { path: '/apex-charts', component: ChartApex },
    { path: '/chartist-charts', component: ChartistChart },
    { path: '/chartjs-charts', component: ChartjsChart },
    { path: '/e-charts', component: EChart },
    { path: '/sparkline-charts', component: SparklineChart },
    { path: '/tui-charts', component: ToastUIChart },
    { path: '/charts-knob', component: ChartsKnob },

    // Icons
    { path: '/icons-boxicons', component: IconBoxicons },
    { path: '/icons-dripicons', component: IconDripicons },
    { path: '/icons-materialdesign', component: IconMaterialdesign },
    { path: '/icons-fontawesome', component: IconFontawesome },

    // Tables
    { path: '/tables-basic', component: BasicTables },
    { path: '/tables-datatable', component: DatatableTables },
    { path: '/tables-responsive', component: ResponsiveTables },
    { path: '/tables-editable', component: EditableTables },

    // Maps
    { path: '/maps-google', component: MapsGoogle },
    { path: '/maps-vector', component: MapsVector },
    { path: '/maps-leaflet', component: MapsLeaflet },

    // Ui
    { path: '/ui-alerts', component: UiAlert },
    { path: '/ui-buttons', component: UiButtons },
    { path: '/ui-cards', component: UiCards },
    { path: '/ui-carousel', component: UiCarousel },
    { path: '/ui-colors', component: UiColors },
    { path: '/ui-dropdowns', component: UiDropdown },
    { path: '/ui-general', component: UiGeneral },
    { path: '/ui-grid', component: UiGrid },
    { path: '/ui-images', component: UiImages },
    { path: '/ui-lightbox', component: UiLightbox },
    { path: '/ui-modals', component: UiModal },
    { path: '/ui-progressbars', component: UiProgressbar },
    { path: '/ui-sweet-alert', component: UiSweetAlert },
    { path: '/ui-tabs-accordions', component: UiTabsAccordions },
    { path: '/ui-typography', component: UiTypography },
    { path: '/ui-video', component: UiVideo },
    { path: '/ui-session-timeout', component: UiSessionTimeout },
    { path: '/ui-rating', component: UiRating },
    { path: '/ui-rangeslider', component: UiRangeSlider },
    { path: '/ui-notifications', component: UiNotifications },
    { path: '/ui-image-cropper', component: UiImageCropper },

    //Utility
    { path: '/pages-starter', component: PagesStarter },
    { path: '/pages-timeline', component: PagesTimeline },
    { path: '/pages-faqs', component: PagesFaqs },
    { path: '/pages-pricing', component: PagesPricing },
    { path: '/edit-profile', component: EditProfile },
    { path: '/book-class', component: BookClass },
]

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/find-tutors', component: FindTutors },

    { path: '/pages-maintenance', component: PagesMaintenance },
    { path: '/pages-comingsoon', component: PagesComingsoon },
    { path: '/pages-404', component: Pages404 },
    { path: '/pages-500', component: Pages500 },
]

export { userRoutes, publicRoutes }
