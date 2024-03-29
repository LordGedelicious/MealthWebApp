import { Suspense } from 'react';
//import './App.scss';
import { Route, Switch } from 'wouter';
//import { Footer } from './component/NavbarFooter/Footer';
import { AllRoutes } from './routes/routes';
//import { Loading } from './component/Loading/Loading';
//import { ScrollToTop } from './component/ScrollToTop/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App(): JSX.Element {
  return (
    <div className='App'>
      <Navbar />
      <div className="app-content">
        <Switch>
          { AllRoutes.map(({ label, path, component: Component}, props) => (
            <Route
              key={label}
              path={path}
              component={Component}
              {...props}
            />
          ))}
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;