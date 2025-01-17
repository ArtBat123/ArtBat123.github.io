import { Card } from 'primereact/card';
import _data from '@shared/data/data';
import cls from './Links.module.scss';

export const Links = () => {
  const { LinkResponse } = _data;
  const data = LinkResponse;

  return (
    <section aria-label="Links" className={cls.links}>
      <p className={cls.title}>
        Техническая и справочная литература
        <div className={cls.cardList}>
          {data.literature.map(literatureItem => (
            <Card className={cls.cardItem} key={literatureItem.title}>
              <p className={cls.literatureTitle}>{literatureItem.title}</p>
              <p className={cls.literatureAuthor}>{literatureItem.authors}</p>
              <p>{literatureItem.description}</p>
            </Card>
          ))}
        </div>
      </p>
      <p className={cls.title}>Специализированные сайты и порталы</p>
      <div className={cls.cardList}>
        {data.saits.map(sait => (
          <Card className={cls.cardItem} key={sait.link}>
            <a
              href={sait.link}
              target="_blank"
              style={{ color: 'var(--primary-600)' }}
            >
              Ссылка
            </a>
            <p className={cls.link}>{sait.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};
Links.displaName = 'Links';
