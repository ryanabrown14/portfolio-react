import React, {useState} from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import './App.css';

function App() {
  const [AboutSelected, setAboutSelected] = useState(true);
  const [ResumeSelected, setResumeSelected] = useState(false);
  const [PortfolioSelected, setPortfolioSelected] = useState(false);
  const [ContactSelected, setContactSelected] = useState(false);
  return (
    <div >
      <Header
      ResumeSelected={ResumeSelected}
      setResumeSelected={setResumeSelected}
      ContactSelected={ContactSelected}
      setContactSelected={setContactSelected}
      PortfolioSelected={PortfolioSelected}
      setPortfolioSelected={setPortfolioSelected}
      AboutSelected={AboutSelected}
      setAboutSelected={setAboutSelected}

      >

      </Header>
      <main>
        <div>
          {!AboutSelected ? <></> : <About></About>}
          {!PortfolioSelected ? <></> : <Portfolio></Portfolio>}
          {!ContactSelected ? <></> : <Contact></Contact>}
          {!ResumeSelected ? <></> : <Resume></Resume>}

        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
