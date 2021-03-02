import * as Router from 'react-router';
import AuthPage from './pages/AuthPage';
import CouncilPage from './pages/CouncilPage';
import HomePage from './pages/HomePage';

interface RouteProps extends Router.RouteProps {
    inNavigation: boolean;
    key: string;
    label: string;
    icon?: string;
}

export const routePaths = {
    root: () => '/',
    council: () => '/council',
    auth: () => '/auth',
}

export const routes: RouteProps[] = [
    {
        component: HomePage,
        exact: true,
        inNavigation: false,
        key: 'home',
        label: 'Home',
        path: routePaths.root(),
    },
    {
        component: CouncilPage,
        exact: true,
        inNavigation: false,
        key: 'council',
        label: 'Council',
        path: routePaths.council(),
    },
    {
        component: AuthPage,
        exact: true,
        inNavigation: false,
        key: 'auth',
        label: 'Auth',
        path: routePaths.auth(),
    },
];
