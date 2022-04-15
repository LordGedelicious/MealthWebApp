import React from "react";
import HomePage from "../pages/HomePage";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsAndConditions from "../pages/TermsAndConditions";
import NotFound from "../pages/NotFound";
import About from "../pages/AboutUs";
import Konsultasi from "../pages/Konsultasi";
import Events from "../pages/EventsPage";
import Payment from "../pages/Payment";
export type route = {
  label: string;
  path: string;
  component?: () => JSX.Element;
};

type navroutes = {
  content: route;
  children_routes?: route[];
  isDropdown?: boolean;
  parentPath?: string;
};

export const toRoute = (label: string, path: string, component?: (props?: any) => JSX.Element): route => ({
  label,
  path,
  component,
});

export const HOME_PAGE = toRoute("Home", "/", HomePage);

export const PRIVACYPOLICY_PAGE = toRoute("Privacy Policy", "/PrivacyPolicy", PrivacyPolicy);

export const TERMSANDCONDITIONS_PAGE = toRoute("Terms and Conditions", "/TermsAndConditions", TermsAndConditions);

export const ABOUTUS_PAGE = toRoute("About Us", "/About", About);

export const KONSULTASI_PAGE = toRoute("Konsultasi", "/Konsultasi", Konsultasi);

export const EVENTS_PAGE = toRoute("Events", "/Events", Events);

export const PAYMENT_PAGE = toRoute("Payment", "/Payment/:consultationType", Payment);

export const NOTFOUND_PAGE = toRoute("Not Found", "/:rest*", NotFound);

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

export const AllRoutes = [HOME_PAGE, PRIVACYPOLICY_PAGE, TERMSANDCONDITIONS_PAGE, ABOUTUS_PAGE, KONSULTASI_PAGE, EVENTS_PAGE, PAYMENT_PAGE, NOTFOUND_PAGE];
