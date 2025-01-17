import { useLanguageData } from '@shared/hooks/useLanguageData';
import cls from './Referat.module.scss';

export const Referat = () => {
  const { referatResponse } = useLanguageData();
  return (
    <section aria-label="referat" className={cls.biography}>
      {referatResponse.map((article, index) => (
        <div style={{ marginBottom: '20px' }}>
          <h1 key={index} style={{ margin: '30px 0 7px 0' }}>
            {article.title}
          </h1>
          <div dangerouslySetInnerHTML={{ __html: article.body }}></div>
        </div>
      ))}
    </section>
  );
};
Referat.displaName = 'Referat';
