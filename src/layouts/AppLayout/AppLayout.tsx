import { Navigate, Outlet, useParams } from 'react-router-dom';
import { Navbar } from '@widgets/Navbar';
import { ButtonLanguage } from '@features/ButtonLanguage/ButtonLanguage';
import { lang } from '@shared/enums';
import { ContextUsername } from '@shared/context/username.context';
import { UsernameType } from '@shared/types';
import { useTitle } from '@shared/hooks/useTitle';
import cls from './AppLayout.module.scss';

export const AppLayout = () => {
  const { lg, username } = useParams();
  useTitle(username as string);

  if (!['ru', 'eng'].includes(lg as string)) return <Navigate to={'/ru'} />;

  return (
    <ContextUsername.Provider value={'marko' as UsernameType}>
      <div className={cls.app}>
        <div className={cls.appHeader}>
          <Navbar CurrentLang={(lg as lang) || lang.RU} />
          <ButtonLanguage />
        </div>
        <div className={cls.appPage}>
          <Outlet />
        </div>
      </div>
    </ContextUsername.Provider>
  );
};
