// Create a new file, e.g., ApprovalContext.js
import React, { createContext, useContext, useState } from 'react';

const ApprovalContext = createContext();

export const useApproval = () => {
  return useContext(ApprovalContext);
};

export const ApprovalProvider = ({ children }) => {
  const [isApproved, setIsApproved] = useState();

  const setApproval = (value) => {
    setIsApproved(value);
  };

  return (
    <ApprovalContext.Provider value={{ isApproved, setApproval }}>
      {children}
    </ApprovalContext.Provider>
  );
};
