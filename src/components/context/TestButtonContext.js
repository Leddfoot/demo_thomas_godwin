import { createContext, useState } from "react";

const TestButtonContext = createContext();

export const TestButtonProvider = ({ children }) => {

  const [testButtonVisible, setTestButtonVisible] = useState(false)

  const hideTestSuite =()=> {
    setTestButtonVisible(false)
  }

const showRemoveButton =()=>{
  setTestButtonVisible(true)
}

  return (
    <TestButtonContext.Provider
      value={{
        testButtonVisible,
        hideTestSuite, 
        showRemoveButton
      }}>
      {children}
    </TestButtonContext.Provider>
  );
};

export default TestButtonContext;
