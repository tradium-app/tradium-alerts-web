import Home from '../pages/Home'

import PagesMaintenance from '../pages/Utility/pages-maintenance'
import PagesComingsoon from '../pages/Utility/pages-comingsoon'
import Pages404 from '../pages/Utility/pages-404'
import Pages500 from '../pages/Utility/pages-500'

import Profile from '../pages/Profile/profile'
import CreatePoll from '../pages/Create-Poll'
import EditProfile from '../pages/Edit-Profile'

const userRoutes = [
    { path: '/create-poll', component: CreatePoll },
    { path: '/edit-profile', component: EditProfile },
]

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/profile', component: Profile },
    { path: '/pages-maintenance', component: PagesMaintenance },
    { path: '/pages-comingsoon', component: PagesComingsoon },
    { path: '/pages-404', component: Pages404 },
    { path: '/pages-500', component: Pages500 },
]

export { userRoutes, publicRoutes }
