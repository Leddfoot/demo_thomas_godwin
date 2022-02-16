import { createContext, useState } from "react";

const TestButtonContext = createContext();

export const TestButtonProvider = ({ children }) => {

  const [testButtonVisible, setTestButtonVisible] = useState(false)

  const hideButtons =()=> {
    setTestButtonVisible(false)
  }

const showRemoveButton =()=>{
  setTestButtonVisible(true)
}

  return (
    <TestButtonContext.Provider
      value={{
        testButtonVisible,
        hideButtons, 
        showRemoveButton
      }}>
      {children}
    </TestButtonContext.Provider>
  );
};

export default TestButtonContext;
