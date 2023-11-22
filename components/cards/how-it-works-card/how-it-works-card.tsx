import SvgIcon from '@/components/svg-icon/svg-icon';
import {
  CardIconContainer,
  HowItWorksCardContainer,
  IHowItWorksCardStyleProps,
} from './how-it-works-card.styles';

interface IHowItWorksCardProps extends IHowItWorksCardStyleProps {
  icon: string;
  title: string;
  description: string;
  buttonText: string;
}
const HowItWorksCard = ({
  isPrimary,
  isTertiary,
  icon,
  title,
  description,
  buttonText,
}: IHowItWorksCardProps) => {
  return (
    <HowItWorksCardContainer isPrimary={isPrimary} isTertiary={isTertiary}>
      <CardIconContainer isPrimary={isPrimary} isTertiary={isTertiary}>
        <SvgIcon name={icon} />
      </CardIconContainer>

      <p>{title}</p>

      <p>{description}</p>

      <button>
        <p>{buttonText}</p>
        <SvgIcon name="arrow-right" />
      </button>
    </HowItWorksCardContainer>
  );
};

export default HowItWorksCard;
