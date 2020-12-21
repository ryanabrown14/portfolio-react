import React from 'react';

function Header(props){
    const{
        AboutSelected,
        setAboutSelected,
        PortfolioSelected,
        setPortfolioSelected,
        ContactSelected,
        setContactSelected,
        ResumeSelected,
        setResumeSelected

    } = props;
    return(
        <header className="flex-row px-1">
            <h2><a href="#about">Ryan Brown</a></h2>
            <nav>
                <ul className ="flex-row">
                    <li className={`mx-2 ${AboutSelected && 'navActive' }`}>
                        <a href = "#about" onClick={() => {
                            setAboutSelected(true);
                            setPortfolioSelected(false);
                            setContactSelected(false);
                            setResumeSelected(false);

                        }}>
                            About Me
                    
                        </a>    
                        
                    </li>
                    <li className={`mx-2 ${PortfolioSelected && 'navActive' }`}>
                        <a href = "#portfolio" onClick={() => {
                            setAboutSelected(false);
                            setPortfolioSelected(true);
                            setContactSelected(false);
                            setResumeSelected(false);

                        }}>
                            Portfolio
                    
                        </a>    
                        
                    </li>
                    <li className={`mx-2 ${ContactSelected && 'navActive' }`}>
                        <a href = "#contact" onClick={() => {
                            setAboutSelected(false);
                            setPortfolioSelected(false);
                            setContactSelected(true);
                            setResumeSelected(false);

                        }}>
                            Contact Me
                    
                        </a>    
                        
                    </li>
                    <li className={`mx-2 ${ResumeSelected && 'navActive' }`}>
                        <a href = "#resume" onClick={() => {
                            setAboutSelected(false);
                            setPortfolioSelected(false);
                            setContactSelected(false);
                            setResumeSelected(true);

                        }}>
                            Resume
                    
                        </a>    
                        
                    </li>
                </ul>
            </nav>

        </header>
    );
}
export default Header;