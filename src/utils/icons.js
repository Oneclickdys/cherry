import { ReactComponent as Back } from '../assets/icons/arrow-back.svg';
import { ReactComponent as CheckCheckedRoundFill } from '../assets/icons/check-checked-round-fill.svg';
import { ReactComponent as Close } from '../assets/icons/close.svg';

export default {
  getIcon: (icon) => {
    let componentIcon;
    switch (icon) {
      case 'back':
        componentIcon = Back;
        break;

      case 'checked':
        componentIcon = CheckCheckedRoundFill;
        break;

      case 'close':
        componentIcon = Close;
        break;

      default:
        componentIcon = Back;
        break;
    }

    return { icon: componentIcon };
  },
};
