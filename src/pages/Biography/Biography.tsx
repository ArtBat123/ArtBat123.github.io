import { Card } from 'primereact/card';
import _data from '@shared/data/data';
import cls from './Biography.module.scss';

export const Biography = () => {
  const { biographyResponse } = _data;
  const data = biographyResponse;
  return (
    <section aria-label="biography" className={cls.biography}>
      {data.articles.map((article, index) => (
        <Card key={index} title={article.title} className={cls.article}>
          <p className={cls.articleBody}>{article.body}</p>
        </Card>
      ))}
    </section>
  );
};
Biography.displaName = 'Biography';
