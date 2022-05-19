export default function getTestData() {
  return {
    id: 'question',
    currentQuestion: {
      data: {
        showCheckIcon: true,
        options: [
          {
            value: '0',
            feedback: '',
            label: '<p>Iguana</p>',
          },
          {
            value: '1',
            feedback: '',
            label: '<p>Delfín</p>',
          },
          {
            label: '<p>Cacatúa</p>',
            feedback: '',
            value: '2',
          },
          {
            value: '3',
            feedback: '',
            label: '<p>Camello</p>',
          },
        ],
        isEvaluable: true,
        stimulus: '<p>¿Cual de estos animales es color marrón?</p>',
        validation: {
          valid_response: {
            value: ['3'],
            score: 1,
          },
          immediateFeedback: false,
          alt_responses: [],
          scoring_type: 'exactMatch',
        },
        type: 'mcq',
        ui_style: {
          customClass: '',
          inlineFeedback: false,
          type: 'Multiple choice – standard',
          columns: 1,
          labelType: '',
          background: {
            src: 'https://www.zoomadrid.com/content/zoo/es/descubre-el-zoo/animales-y-continentes/continentes/asia/_jcr_content/responsiveGrid/cc18_columns/col_2/ca03_image.coreimg.jpeg/1640248072754/asia-zoo-madrid.jpeg',
            alt: '',
            position: 'center',
            size: 'cover',
          },
        },
      },
      title: '',
      metadata: {
        name: 'Multiple choice – standard',
      },
      reference: '0285ab3a-bc83-4e78-bab4-3234efeea1e7',
      type: 'mcq',
      extraValues: {},
    },
    indexQuestion: 0,
  };
}
