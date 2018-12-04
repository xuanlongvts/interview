import { lazy } from 'react';

import RouterMain from './consts';
import AsyncComponent from '../components/_asynComponent';

const AsyncCountDown = AsyncComponent(lazy(() => import('../components/countDown')));
const AsyncImagesSlider = AsyncComponent(lazy(() => import('../components/ImgSlider')));

const routersAuthen = [
    {
        title: 'Countdown',
        path: RouterMain.countdown,
        component: AsyncCountDown,
        exact: true,
    },
    {
        title: 'Images slider',
        path: RouterMain.imgSlider,
        component: AsyncImagesSlider,
    },
];

export default routersAuthen;
