import classNames from 'classnames';
import cls from './Navbar.module.scss';
import { headerItems } from '@widgets/Navbar/model';
import { lang } from '@shared/enums';
import { NavLink } from 'react-router-dom';
import { Sidebar } from 'primereact/sidebar';
import { useState } from 'react';
import { Button } from 'primereact/button';

interface NavbarProps {
  className?: string;
  CurrentLang: lang;
}

export const Navbar = ({ className, CurrentLang }: NavbarProps) => {
  const [visible, setVisible] = useState(false);

  return (
    <div style={{ width: '100%' }}>
      <nav className={classNames(cls.nav, {}, [className])}>
        {headerItems.map(
          item =>
            item.languages.includes(CurrentLang) && (
              <div>
                <NavLink
                  key={item.link}
                  to={`${item.link}`}
                  className={({ isActive }) =>
                    isActive ? classNames(cls.link, cls.isActive) : cls.link
                  }
                >
                  {CurrentLang === lang.RU ? item.text : item.textEng ?? '-'}
                </NavLink>
              </div>
            ),
        )}
      </nav>
      <Button
        className={cls['burger-menu-icon']}
        icon={'pi pi-bars'}
        rounded
        text
        onClick={() => setVisible(true)}
      />
      <Sidebar visible={visible} onHide={() => setVisible(false)}>
        {headerItems.map(
          item =>
            item.languages.includes(CurrentLang) && (
              <div style={{ padding: '5px', fontWeight: 'bold' }}>
                <NavLink
                  key={item.link}
                  to={`${item.link}`}
                  className={({ isActive }) =>
                    isActive ? classNames(cls.link, cls.isActive) : cls.link
                  }
                  onClick={() => setVisible(false)}
                >
                  {CurrentLang === lang.RU ? item.text : item.textEng ?? '-'}
                </NavLink>
              </div>
            ),
        )}
      </Sidebar>
    </div>
  );
};

Navbar.displayName = 'Navbar';
