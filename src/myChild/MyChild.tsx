import { useContext } from 'react';
import { CurrentUserContext } from '../App';
import { useCurrentUser } from '../customHook/useCurrentUser';

export const MyChild = () => {
  // const user = useContext(CurrentUserContext);

  const userWithCutomHook = useCurrentUser();

  return (
    <>
      <h1>This is the Child Component!</h1>

      {/* <h3>the current User is :{user?.userName}</h3> */}

      <h3> The current user is : {userWithCutomHook.userName} </h3>
    </>
  );
};
