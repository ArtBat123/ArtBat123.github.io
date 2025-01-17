import { Card } from 'primereact/card';
import _data from '@shared/data/data';
import cls from './Library.module.scss';

export const Library = () => {
  const { LibraryResponse } = _data;
  const data = LibraryResponse;
  return (
    <section aria-label="Library">
      <h3 className={cls.title}>
        Библиотека материалов по теме выпускной работы
      </h3>
      {data.map((link, index) => (
        <Card key={index} className={cls.card}>
          <p className={cls.cardTitle}>{link.title}</p>
          <p className={cls.authors}>{link.authors}</p>
          <p>{link.description}</p>
          <p className={cls.authors}>{link.source}</p>
        </Card>
      ))}
    </section>
  );
};
Library.displaName = 'Library';
