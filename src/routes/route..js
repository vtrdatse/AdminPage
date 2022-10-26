import Station from '~/pages/station';
import Booking from '~/pages/booking';
import Vehicle from '~/pages/vehicle';
import Customer from '~/pages/Customer/customer';
import Driver from '~/pages/Driver/driver';
import Group from '~/pages/group';
import Home from '~/pages/Home/home';
import Invoice from '~/pages/invoice';
import SignIn from '~/pages/Login/login';
import Order from '~/pages/order';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/login', component: SignIn },
    { path: '/station', component: Station },
    { path: '/orders', component: Order },
    { path: '/bookings', component: Booking },
    { path: '/drivers', component: Driver },
    { path: '/vehicles', component: Vehicle },
    { path: '/groups', component: Group },
    { path: '/customers', component: Customer },
    { path: '/invoices', component: Invoice },
];

const privateRoutes = [];
export { privateRoutes, publicRoutes };
