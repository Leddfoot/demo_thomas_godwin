import Display from "./Display";
import ButtonArray from "./ButtonArray";
import Footer from "./Footer";

const MainContainer = () => {
  return (
    
    <>
      <div className="main-container">
        <Display />
        <ButtonArray />
        <Footer />
      </div>
    </>
  );
};

export default MainContainer;
