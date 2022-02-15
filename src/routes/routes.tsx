import React from 'react';
import HomePage from '../pages/HomePage';
import NotFound from '../pages/NotFound';
        
export type route = {
  label: string
  path: string
  component?: () => JSX.Element
}

type navroutes = {
  content:route,
  children_routes?: route[],
  isDropdown?: boolean,
  parentPath?: string,
}

export const toRoute = (label:string, path:string, component?:(props?: any) => JSX.Element): route => ({
  label, path, component
});

export const HOME_PAGE = toRoute('Home', '/', HomePage);

export const NOTFOUND_PAGE = toRoute('Not Found', '/:rest*', NotFound);

/*export const NavbarRoutes: navroutes[] = [
  {
    content: HOME_PAGE,
  },
  {
    content: EVENT_PAGE,
  },
  {
    content: PRODUK_INDEX,
    children_routes: [GATHERTOWN_PAGE, MAJALAH_PAGE, MINIGAME_PAGE],
    isDropdown: true,
    parentPath: '',
  },
  {
    content: GALERI_HMJ_PAGE,
  },
];*/

export const AllRoutes = [
  HOME_PAGE,
  NOTFOUND_PAGE,
];