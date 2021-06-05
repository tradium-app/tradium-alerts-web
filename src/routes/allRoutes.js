import Home from '../pages/Home'
import Search from '../pages/Search'

import PagesMaintenance from '../pages/Utility/pages-maintenance'
import Pages404 from '../pages/Utility/pages-404'
import Pages500 from '../pages/Utility/pages-500'

import Profile from '../pages/Profile/profile'
import Poll from '../pages/Poll/index'
import Settings from '../pages/Settings'

const userRoutes = [{ path: '/settings', component: Settings }]

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/search/:searchText?', component: Search },
    { path: '/profile/:userUrlId?', component: Profile },
    { path: '/:userUrlId/:pollUrlId', component: Poll },
    { path: '/pages-maintenance', component: PagesMaintenance },
    { path: '/pages-404', component: Pages404 },
    { path: '/pages-500', component: Pages500 },
]

export { userRoutes, publicRoutes }
