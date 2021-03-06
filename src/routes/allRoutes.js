import Home from '../pages/Home'

import PagesMaintenance from '../pages/Utility/pages-maintenance'
import Pages404 from '../pages/Utility/pages-404'
import Pages500 from '../pages/Utility/pages-500'

import Stock from '../pages/Stock/Stock'
import Alert from '../pages/Alert'

const userRoutes = [
    { path: '/symbol/:symbol/alert', component: Alert },
    { path: '/symbol/:symbol/alert/:alertId', component: Alert },
]

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/symbol/:symbol', component: Stock },
    { path: '/pages-maintenance', component: PagesMaintenance },
    { path: '/pages-404', component: Pages404 },
    { path: '/pages-500', component: Pages500 },
]

export { userRoutes, publicRoutes }
