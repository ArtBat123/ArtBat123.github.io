import { useParams } from 'react-router-dom';
import { lang } from '@shared/enums';
import _data from '@shared/data/data';

export const useLanguageData = () => {
  const { lg } = useParams();
  const {
    mainResponseRu,
    mainResponseEng,
    referatResponseRu,
    referatResponseEng,
  } = _data;

  const mainResponse = lg === lang.RU ? mainResponseRu : mainResponseEng;
  const referatResponse =
    lg === lang.RU ? referatResponseRu : referatResponseEng;
  return { mainResponse, referatResponse };
};
