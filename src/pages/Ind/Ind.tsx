import cls from './Ind.module.scss';
import _data from '@shared/data/data';

export const Ind = () => {
  const { PersonalLink } = _data;
  const data = PersonalLink;
  return (
    <section aria-label="Ind" className={cls.ind}>
      <h3 className={cls.indTitle}>{data.title}</h3>
      <div>
        <iframe
          src="https://vkvideo.ru/video_ext.php?oid=-66860138&id=456239306&hd=2&autoplay=1"
          width="640"
          height="360"
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
          frameBorder="0"
          className={cls.frame}
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};
Ind.displaName = 'Ind';
