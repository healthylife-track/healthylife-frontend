import SvgIcon from '@/components/svg-icon/svg-icon';
import { HowItWorksCardContainer } from './how-it-works-card.styles';
import { CardIconContainer, ICommonStyleProps } from '@/styles/common.styles';

interface IHowItWorksCardProps extends ICommonStyleProps {
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
