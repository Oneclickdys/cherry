import { useCallback } from 'react';
import { config, useLemonadeQuestion } from 'react-lemonade-editor';
import addQuestionStyle from '../../../../../../utils/addQuestionStyle';
import { DEVMODE } from '../../../../../../utils/config';
import getTestData from '../../../../Host/HostQuestion/util/testData';

// reduce el tiempo de debounce de acciones de usuario
// para evitar sensación de lag
config.debounceTime = 100;

// devMode usa datos dummy en vez de los reales
// para poder refrescar la página sin que de un error
export default function useGuestControls({ currentPage, onResponse }) {
  const devMode = DEVMODE;
  const data = devMode ? getTestData() : currentPage;

  // modifica los datos para establecer el modo 2 columnas
  // para las opciones de respuesta de usuario
  const questionData = addQuestionStyle(data.currentQuestion);

  // crea lemonade
  const { exercise } = useLemonadeQuestion({ data: questionData });

  const handleChange = useCallback(
    ({ store }) => {
      const response = store.getUserResponse();
      response.length > 0 && onResponse(response);
    },
    [onResponse]
  );

  return {
    handleChange,
    Question: exercise.Question,
  };
}
