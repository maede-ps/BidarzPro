import headerLogo from "../../assets/headerLogo.png";
import './Nav.css'; // Import the CSS file

const Nav = () => {
  return (
    <header className='header'>
      <nav className='nav'>
         <div className='nav-button'>
          <a href='/'>شروع ترید</a>
        </div>
        
        <a href='/'>
        <h1>بیدارز پرو</h1>
          <img
            src={headerLogo}
            alt='logo'
            width={129}
            height={29}
            className='nav-logo'
          />
        </a>    
       
      </nav>
      
    </header>
  );
};

export default Nav;
