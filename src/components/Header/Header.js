import s from './Header.module.css'
import headerLogo from '../../assests/images/headerLogo.svg'
import searchIcon from '../../assests/images/search.svg'
import bagIcon from '../../assests/images/shopping bag.svg'
import userImg from '../../assests/images/default.png'
import {NavLink} from "react-router-dom";

const Header = () => {
  return(
      <header>
          <div className={s.inner}>
              <div className={s.left}>
                  <NavLink to='/' className={s.logo}>
                      <img src={headerLogo}/>
                  </NavLink>
                  <div className={s.searchblock}>
                      <div className={s.search}>
                          <input type="text" className={s.searchInput} placeholder='Search'/>
                          <span className={s.searchBtn}>
                              <img src={searchIcon}/>
                          </span>
                      </div>
                  </div>
              </div>
              <div className={s.right}>
                  <nav>
                      <div className={s.navLink}>
                          <a href="#">Restaurants</a>
                          <a href="#">Deals</a>
                      </div>
                      <div className={s.navBtn}>
                          <a href="#" className={s.btn}>My orders</a>
                          <a href="#" className={s.btnImg}>
                              <img src={bagIcon}/>
                              <span>1</span>
                          </a>
                          <NavLink to="settings" className={s.btnImg}>
                              <img src={userImg}/>
                          </NavLink>
                      </div>
                  </nav>
              </div>
          </div>
      </header>
  )
}

export {Header}