import { useEffect, ReactNode, useState } from 'react';

import { auth } from '../services/firebaseConnection'
import { onAuthStateChanged } from 'firebase/auth'
import { Navigate } from 'react-router-dom';

interface PrivateProps {
  children: ReactNode
}

export function PrivateRoute({ children}: PrivateProps): any {
  const [loading, setLoadin] = useState(true);
  const [signed, setSigned] = useState(false);

  useEffect(() => {    
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if(user) {
        const userData = {
          uid: user?.uid,
          email: user?.email
        }

        localStorage.setItem("@reactlinks", JSON.stringify(userData))
        setLoadin(false)
        setSigned(true)
      } else {
        setLoadin(false)
        setSigned(false)
      }
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className='flex justify-center items-center h-screen font-medium text-2xl text-cyan-100'>
        Loading...
      </div>
    )
  }

    if (!signed) {
    return <Navigate to="/login" />
  }

  return children;
}

