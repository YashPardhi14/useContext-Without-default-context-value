import { createContext, useState } from 'react';
import { FC } from 'react';
import { MyChild } from './myChild/MyChild';

import './style.css';

interface CurrentUserContextTpe {
  userName: string;
}

export const CurrentUserContext = createContext<CurrentUserContextTpe | null>(
  null
);

export const App = () => {
  const [user, setUser] = useState<CurrentUserContextTpe>({
    userName: 'KrantiVeer',
  });
  return (
    <CurrentUserContext.Provider value={user}>
      <MyChild />
    </CurrentUserContext.Provider>
  );
};
