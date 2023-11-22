import GeneralLayout from '@/layout/general-layout';
import { NextPageWithLayout } from './_app';
import {
  ContactCardContainer,
  ContactPageSubContainer,
  ContactPageWrapper,
} from '@/styles/contact.styles';
import { CardIconContainer, SectionHeaderText } from '@/styles/common.styles';
import SvgIcon from '@/components/svg-icon/svg-icon';

const Contact: NextPageWithLayout = () => {
  return (
    <ContactPageWrapper>
      <SectionHeaderText isCentered>Contact</SectionHeaderText>
      <ContactPageSubContainer>
        <ContactCardContainer bg1>
          <CardIconContainer>
            <SvgIcon name="call" />
          </CardIconContainer>
          <p>+234 8123456789</p>
          <p>Call our hotline to get in touch with us.</p>
        </ContactCardContainer>

        <ContactCardContainer bg2>
          <CardIconContainer bg2>
            <SvgIcon name="message" />
          </CardIconContainer>
          <p>medaidsync@gmail.com</p>
          <p>Contact us at medaidsync@gmail.com for more enquiries.</p>
        </ContactCardContainer>

        <ContactCardContainer bg3>
          <CardIconContainer bg3>
            <SvgIcon name="location" />
          </CardIconContainer>
          <p>Lagos, Nigeria.</p>
          <p>Our head office is located in Lagos state, Nigeria.</p>
        </ContactCardContainer>
      </ContactPageSubContainer>
    </ContactPageWrapper>
  );
};

Contact.getLayout = function (page) {
  return <GeneralLayout pageTitle="Contact">{page}</GeneralLayout>;
};

export default Contact;
