import { useContext } from 'react';
import { CurrentUserContext } from '../App';

export const useCurrentUser = () => {
  const currentUserContext = useContext(CurrentUserContext);

  if (!currentUserContext) {
    throw new Error(
      'useCurrentUser has to be used within <CurrentUserContext.Provider>'
    );
  }

  return currentUserContext;
};
