import React from 'react';
import Icon from '../../../atoms/Icon/Icon';

const BarStats = ({ agroupAnswers = [] }) => {
  return (
    <div className="bar-stats">
      {agroupAnswers.map((item, index) => (
        <div className={`bar-stats__bar`}>
          <div className="bar-stats__bar-progress" style={{ height: item.count + '%' }}></div>
          <div className="bar-stats__bar-fixed">
            <div></div>
            {index + 1}
            <div>{item.correct ? <Icon type="checked" /> : <Icon type="close" />}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BarStats;
