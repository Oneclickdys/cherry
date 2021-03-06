export default function addQuestionStyle(questionData) {
  const uiStyle = {
    ui_style: {
      ...questionData.data.ui_style,
      columns: 2,
    },
  };

  return {
    ...questionData,
    data: {
      ...questionData.data,
      ...uiStyle,
      showCheckIcon: false,
    },
  };
}
