import { ReactComponent as Back } from '../assets/icons/arrow-back.svg';

export default {
  getIcon: (icon) => {
    let componentIcon;
    switch (icon) {
      case 'back':
        componentIcon = Back;
        break;

      default:
        componentIcon = Back;
        break;
    }

    return { icon: componentIcon };
  },
};
