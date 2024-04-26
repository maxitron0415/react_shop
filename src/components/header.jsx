import flogoimg from '../img/f_logo_white.svg';

function Header() {
    return <header>
        <div className="logo">
            <h3 className='logo-text'>React Shop</h3>
            
        </div>
        <img src={flogoimg} alt="" className='logo-img' />
        <button className="repository-btn">Войти</button>
    </header>
}

export { Header };