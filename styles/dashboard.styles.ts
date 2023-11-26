import getRemValue from '@/utils/getRemValue';
import styled, { css } from 'styled-components';

interface IDashboardStyleProps {
  isPrimary?: boolean;
  isFlex?: boolean;
  zeroMargin?: boolean;
  isNotBold?: boolean;
  isMissed?: boolean;
  isBigger?: boolean;
  isOpen?: boolean;
}

export const DashboardNav = styled.nav`
  padding: 1rem ${getRemValue(24)};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DashboardWrapper = styled.div`
  padding: ${getRemValue(10)} ${getRemValue(24)};

  @media screen and (min-width: 56.25em) {
    display: flex;
    position: relative;
    gap: 2rem;

    & > div:first-of-type {
      flex: 1;
    }
  }
`;

export const LogoutButton = styled.div`
  display: flex;
  align-items: center;
  gap: ${getRemValue(10)};
  margin: 2rem auto;
  width: max-content;
`;

export const UserImageContainer = styled.div<IDashboardStyleProps>`
  padding: 3px;
  border-radius: 50%;
  border: 1px solid rgb(var(--color-primary));
  z-index: 12;

  ${({ isBigger }) =>
    isBigger &&
    `
      border: none;
      margin: 2rem auto;
      position: relative;

      & > div {
         width: ${getRemValue(100)};
         height: ${getRemValue(100)};
         z-index: 0;
      }
   `}
  }
  
  & > div {
     width: ${getRemValue(40)};
     height: ${getRemValue(40)};
     border-radius: 50%;
     position: relative;
     margin: 1rem auto;

  & > img {
    object-fit: contain;
    border-radius: 50%;
  }
`;

const containerStyle = css`
  border-radius: ${getRemValue(20)};
  background: rgb(var(--color-white));
  padding: ${getRemValue(24)};
  transition: box-shadow 0.2s ease-in-out;
  position: relative;

  &:hover {
    box-shadow: var(--box-shadow);
  }
`;

export const DashboardDataContainer = styled.div`
  gap: 2rem;
  display: grid;
  grid-template-areas:
    'reminder'
    'notification'
    'history';

  @media screen and (min-width: 56.25em) {
    grid-template-columns: 1fr 1.5fr;
    grid-template-areas:
      'reminder notification'
      'history history';
  }
`;

export const SetReminderContainer = styled.div`
  ${containerStyle}

  grid-area: reminder;

  & > p:first-of-type {
    font-size: ${getRemValue(20)};
    font-weight: 700;
    margin: ${getRemValue(24)} 0;
  }

  & > button {
    font-size: ${getRemValue(18)};
    font-weight: 700;
    color: rgb(var(--color-tertiary));
    display: flex;
    align-items: center;
    gap: ${getRemValue(10)};
    margin: ${getRemValue(24)} 0;
    padding: ${getRemValue(10)} 0;

    & > svg {
      width: ${getRemValue(15)};
      height: ${getRemValue(15)};
      fill: currentColor;
    }
  }
`;

export const NotificationContainer = styled.div`
  ${containerStyle}
  grid-area: notification;
  position: relative;
  overflow: hidden;
`;

export const MedicationHistory = styled.div`
  ${containerStyle}
  grid-area: history;
`;

export const DashboardCardHeaderContainer = styled.div<IDashboardStyleProps>`
  display: flex;
  gap: ${getRemValue(10)};
  align-items: center;
  font-size: ${getRemValue(18)};
  font-weight: 700;
  position: relative;
  width: max-content;
  padding-bottom: 8px;
  border-color: rgb(var(--color-secondary-o));

  &::before {
    content: '';
    display: block;
    position: absolute;
    border: 1px solid;
    width: 65%;
    bottom: 0;
    border-color: inherit;
  }

  & > svg {
    width: ${getRemValue(25)};
    height: ${getRemValue(25)};
    fill: rgb(var(--color-secondary-o));
  }

  ${({ isPrimary }) =>
    isPrimary &&
    `
      border-color: rgb(var(--color-primary));
      
      & > svg {
         fill: rgb(var(--color-primary));
      }
   `}
`;

export const NotificationItems = styled.ol`
  width: 100%;
  max-height: ${getRemValue(400)};
  overflow-y: auto;
  position: relative;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &:-webkit-scrollbar-thumb {
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
  }
  &:hover::-webkit-scrollbar-thumb {
    background-color: #c1c1c1;
  }

  @media screen and (min-width: 56.25em) {
    max-height: ${getRemValue(250)};
  }
`;

export const NoNotificationContainer = styled.div`
  max-width: ${getRemValue(400)};
  margin: ${getRemValue(10)} auto;
  width: 100%;
  aspect-ratio: 2/1;
  place-items: center;
  display: grid;
  font-size: ${getRemValue(18)};
  font-weight: 700;
  color: rgb(var(--color-secondary-gr));
  text-align: center;
  padding: 1rem 0;

  & > svg {
    width: ${getRemValue(100)};
    height: ${getRemValue(100)};
    fill: rgb(var(--color-secondary-gr), 0.5);
  }
`;

export const DashboardContentContainer = styled.div<IDashboardStyleProps>`
  margin: 1rem 0;

  ${({ isFlex }) =>
    isFlex &&
    `
      display: flex;
      gap: ${getRemValue(12)};
   `}

  ${({ zeroMargin }) =>
    zeroMargin &&
    `
      margin: 0;
   `}
`;

export const MedDetailsContainer = styled.div<IDashboardStyleProps>`
  display: flex;
  font-weight: 700;
  align-self: center;
  gap: 8px;
  margin: ${getRemValue(10)} 0;

  ${({ zeroMargin }) =>
    zeroMargin &&
    `
      margin-bottom: 4px;
   `}

  ${({ isNotBold }) =>
    isNotBold &&
    `
      font-weight: 400;
   `}

   & > p::first-letter {
    text-transform: capitalize;
  }

  & > svg {
    width: ${getRemValue(20)};
    height: ${getRemValue(20)};
  }
`;
export const MedHistoryItems = styled.div`
  max-height: ${getRemValue(400)};
  overflow-y: auto;
  padding-right: 1rem;

  @media screen and (min-width: 56.25em) {
    max-height: ${getRemValue(250)};

    &::-webkit-scrollbar {
      width: 4px;
    }

    &:-webkit-scrollbar-thumb {
      cursor: pointer;
      transition: background-color 0.2s ease-in-out;
    }

    &:hover::-webkit-scrollbar-thumb {
      background-color: #c1c1c1;
    }
  }
`;

export const MedHistoryItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin: ${getRemValue(10)} 0;
  width: 100%;
  border-bottom: 1px solid rgb(var(--color-secondary-gr));

  & > div:first-of-type {
    flex: 1;
  }
`;

export const MedicationStatus = styled.div<IDashboardStyleProps>`
  display: flex;
  color: rgb(var(--color-tertiary));
  text-transform: capitalize;
  align-items: center;
  gap: ${getRemValue(12)};

  & > svg {
    fill: currentColor;
    width: ${getRemValue(15)};
    height: ${getRemValue(15)};
  }

  ${({ isMissed }) =>
    isMissed &&
    `
      color: rgb(var(--color-error));
   `}
`;

export const ProfileContainer = styled.aside<IDashboardStyleProps>`
  ${containerStyle}
  padding: 2rem;
  width: 100%;
  height: max-content;
  position: sticky;
  top: ${getRemValue(24)};

  @media screen and (max-width: 56.25em) {
    position: fixed;
    top: 0;
    right: -100vw;
    z-index: 2;
    height: 100vh;
    background-color: rgb(var(--color-white));
    transition: right 0.2s ease-in-out;

    ${({ isOpen }) =>
      isOpen &&
      `
      right: 0;
      
   `}
  }

  @media screen and (min-width: 56.25em) {
    max-width: ${getRemValue(400)};
  }
`;

export const UserProfileWrapper = styled.div`
  & > p {
    text-align: center;
  }

  & > div {
    margin-top: 3rem;
  }
`;

export const UserDataWrapper = styled.div`
  margin: 8px 0;
`;

export const MobileProfileButton = styled.button`
  display: block;
  width: ${getRemValue(35)};
  height: ${getRemValue(35)};
  position: absolute;
  top: ${getRemValue(20)};
  right: ${getRemValue(24)};

  @media screen and (min-width: 56.25em) {
    display: none;
  }
`;

export const MobileCloseButton = styled.button`
  position: absolute;
  right: ${getRemValue(24)};
  display: none;

  @media screen and (max-width: 56.25em) {
    display: block;
  }

  & > svg {
    width: ${getRemValue(25)};
    height: ${getRemValue(25)};
    fill: rgb(var(--color-primary));
  }
`;
