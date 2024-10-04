import React, { createContext, useState, useEffect } from 'react';
import { auth } from '../../firebase';
import { getFirestore, doc, getDoc } from 'firebase/firestore'; 

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userRole, setUserRole] = useState(null);
  
  const db = getFirestore(); 

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        setCurrentUser(user);
        try {
          const userDocRef = doc(db, 'users', user.uid); 
          const userDoc = await getDoc(userDocRef);  
          if (userDoc.exists()) {
            setUserRole(userDoc.data().role);  
          }
        } catch (error) {
          console.error('Error fetching user role:', error);
        }
      } else {
        setCurrentUser(null);
        setUserRole(null);
      }
    });

    return () => unsubscribe();
  }, [db]);

  return (
    <AuthContext.Provider value={{ currentUser, userRole }}>
      {children}
    </AuthContext.Provider>
  );
};
