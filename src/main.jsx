import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx';
import './i18n';
import './index.css';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { StoreProvider } from './store/context.jsx';

function ChakraRTLProvider({ children }) {
  //const { locale } = useRouter()
  const direction = 'ltr' //locale === 'ar' ? 'rtl' : 'ltr'

  // 👇🏻 Here's the place we add direction to the theme
  const theme = extendTheme({ direction })

  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraRTLProvider >
      <BrowserRouter>
        <React.Suspense fallback="Loading...">
          <StoreProvider>
            <App />
          </StoreProvider>
        </React.Suspense>
      </BrowserRouter>
    </ChakraRTLProvider>
  </React.StrictMode>
);
