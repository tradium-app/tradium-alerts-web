import Home from '../pages/Home'
import Dashboard from '../pages/Dashboard/index'
import Chat from '../pages/Chat/Chat'
import FindTutors from '../pages/Find-Tutors/Find-Tutors'

import PagesMaintenance from '../pages/Utility/pages-maintenance'
import PagesComingsoon from '../pages/Utility/pages-comingsoon'
import Pages404 from '../pages/Utility/pages-404'
import Pages500 from '../pages/Utility/pages-500'

import ContactsProfile from '../pages/Contacts/contacts-profile'
import EditProfile from '../pages/Edit-Profile'
import BookClass from '../pages/BookClass'
import Wallet from '../pages/Wallet/wallet'

const userRoutes = [
    { path: '/dashboard', component: Dashboard },
    { path: '/wallet', component: Wallet },
    { path: '/chat', component: Chat },
    { path: '/profile', component: ContactsProfile },
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
