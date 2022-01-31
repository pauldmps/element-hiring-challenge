import { useContext } from 'react';
import { AppContext } from './context';

export const useAppContext = () => {
  const appContext = useContext(AppContext);
  if (appContext === undefined) {
    throw new Error('AppContext must be used inside AppContextProvider');
  }

  return appContext;
};
