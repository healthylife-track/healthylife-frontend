import SvgIcon from '@/components/svg-icon/svg-icon';
import DashboardLayout from '@/layout/dashboard-layout';
import { CardIconContainer } from '@/styles/common.styles';
import {
  DashboardCardHeaderContainer,
  DashboardContentContainer,
  DashboardDataContainer,
  DashboardWrapper,
  MedDetailsContainer,
  MedHistoryItem,
  MedHistoryItems,
  MedicationHistory,
  MedicationStatus,
  NoNotificationContainer,
  NotificationContainer,
  NotificationItems,
  ProfileContainer,
  SetReminderContainer,
} from '@/styles/dashboard.styles';
import { NextPageWithLayout } from '../_app';
import Button from '@/components/button/button';
import { dateFormatWithTime } from '@/utils/dateFormats';
import dummyData from '@/public/static-data/dummy-medications-data.json';
import ShowView from '@/components/show-view/show-view';

const statusIcon: Record<string, string> = {
  completed: 'happy',
  missed: 'sad',
};

const Dashboard: NextPageWithLayout = () => {
  return (
    <DashboardWrapper>
      <DashboardDataContainer>
        <SetReminderContainer>
          <CardIconContainer isTertiary>
            <SvgIcon name="notification-bell" />
          </CardIconContainer>

          <p>Set Reminders</p>
          <p>
            Set reminders to track your medical adherence, and get notification.
          </p>

          <button>
            <p>Set Reminder</p>
            <SvgIcon name="arrow-right" />
          </button>
        </SetReminderContainer>

        <NotificationContainer>
          <DashboardCardHeaderContainer>
            <SvgIcon name="notification-bell" />
            <p>Upcoming Reminders</p>
          </DashboardCardHeaderContainer>

          <ShowView when={dummyData.length <= 0}>
            <NoNotificationContainer>
              <SvgIcon name="bell-slash" />
              <p>You don’t have any notification.</p>
            </NoNotificationContainer>
          </ShowView>

          <ShowView when={dummyData.length > 0}>
            <NotificationItems>
              {dummyData.map((data) => (
                <li key={data.id}>
                  <DashboardContentContainer>
                    <p>
                      You have a medication for{' '}
                      <strong>{dateFormatWithTime(data.reminderTime)} </strong>
                    </p>
                    <MedDetailsContainer>
                      <SvgIcon name="drugs" />
                      <p>
                        {data.drug_name} <span>{data.drug_dosage}gm</span>
                      </p>
                    </MedDetailsContainer>

                    <DashboardContentContainer isFlex>
                      <Button isTertiary>
                        <p>Taken</p>
                        <SvgIcon name="happy" />
                      </Button>

                      <Button isTertiaryBorder>
                        <p>Missed</p>
                        <SvgIcon name="sad" />
                      </Button>
                    </DashboardContentContainer>
                  </DashboardContentContainer>
                </li>
              ))}
            </NotificationItems>
          </ShowView>
        </NotificationContainer>

        <MedicationHistory>
          <DashboardCardHeaderContainer isPrimary>
            <SvgIcon name="medical-book" />
            <p>Medication History</p>
          </DashboardCardHeaderContainer>

          <ShowView when={dummyData.length <= 0}>
            <NoNotificationContainer>
              <SvgIcon name="file-circle-plus" />
              <p>Your Medication History is empty.</p>
            </NoNotificationContainer>
          </ShowView>

          <ShowView when={dummyData.length > 0}>
            <DashboardContentContainer>
              <p>November 2023</p>

              <MedHistoryItems>
                {dummyData.map(
                  ({ id, drug_dosage, drug_name, status, reminderTime }) => {
                    const icon = statusIcon[status] || 'happy';
                    return (
                      <MedHistoryItem key={id}>
                        <div>
                          <MedDetailsContainer zeroMargin>
                            <SvgIcon name="drugs" />
                            <p>
                              {drug_name} <span>{drug_dosage}gm</span>
                            </p>
                          </MedDetailsContainer>

                          <MedDetailsContainer zeroMargin isNotBold>
                            <SvgIcon name="clock" />
                            <p>{dateFormatWithTime(reminderTime)}</p>
                          </MedDetailsContainer>
                        </div>

                        <MedicationStatus isMissed={status === 'missed'}>
                          <p>{status}</p>
                          <SvgIcon name={icon} />
                        </MedicationStatus>
                      </MedHistoryItem>
                    );
                  }
                )}
              </MedHistoryItems>
            </DashboardContentContainer>
          </ShowView>
        </MedicationHistory>
      </DashboardDataContainer>

      <ProfileContainer>profile</ProfileContainer>
    </DashboardWrapper>
  );
};

Dashboard.getLayout = function (page) {
  return <DashboardLayout pageTitle="Overview">{page}</DashboardLayout>;
};

export default Dashboard;
