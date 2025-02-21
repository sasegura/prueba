import 'typeface-oswald';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/css/animate.css';
import '@/css/font-awesome.min.css';
import '@/css/icons.css';
import '@/css/preset.css';
import '@/css/theme.css';
import '@/css/responsive.css';
import TagManager from 'react-gtm-module';
import { useEffect } from 'react';
import MenuContextProvider from '@/context/menu-context';
import LocationContextProvider from '@/context/app-location-context';
import AppContextProvider from '@/context/app-context';
import Layout from '@/components/layout';
import HeaderOne from '@/components/header-one';
import Footer from '@/components/footer';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-WKQW932' });
  }, []);

  return (
    <AppContextProvider>
      <MenuContextProvider>
        <LocationContextProvider>
          <Layout>
            <HeaderOne />
            <Component {...pageProps} />
            <Footer />
          </Layout>
        </LocationContextProvider>
      </MenuContextProvider>
    </AppContextProvider>
  );
}

export default MyApp;
