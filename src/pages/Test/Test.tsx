import cls from './Test.module.scss';

export const Test = () => {
  return (
    <div className={cls.profile}>
      <script src="https://forms.yandex.ru/_static/embed.js"></script>
      <iframe
        src="https://forms.yandex.ru/u/67897c4d90fa7b83461c1647/?iframe=1"
        frameborder="0"
        name="ya-form-67897c4d90fa7b83461c1647"
        width="650"
      ></iframe>
    </div>
  );
};

Test.displayName = 'Test';
