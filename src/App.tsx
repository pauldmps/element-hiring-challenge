import { ChakraProvider, theme } from '@chakra-ui/react';
import Header from './components/Header';
import Home from './components/Home';
import { AppContextProvider } from './components/utils/context';

export const App = () => (
  <ChakraProvider theme={theme}>
    <AppContextProvider>
      <Header />
      <Home />
    </AppContextProvider>
  </ChakraProvider>
);
