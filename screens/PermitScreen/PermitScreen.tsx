import React, { useState, useContext, useEffect } from 'react';
import { View } from 'react-native';
import { DateTime } from 'luxon';

import { ScreenTemplate, ScreenHeading, Button, Select } from '../../components';
import { parseTimeDifference } from './permit-screen.utils';

import { Paragraph } from '../../styles';
import { RowWrapper } from './PermitScreen.styles';
import { PermitContext } from '../../contexts';
import EnteringCrew from './components/EnteringCrew';
import { SelectedCrewMember } from '../../contexts/permit.context';
import StandbyPerson from './components/StandbyPerson';

interface Props {
  navigation: {
    navigate: (route: string, params?: any) => void;
  };
}

const PermitScreen: React.FC<Props> = ({ navigation }) => {
  const { initTime, crew, setCrew, stopPermit, standbyPerson, setStandbyPerson } = useContext(PermitContext);
  const [refresh, setRefresh] = useState(new Date());

  const onStopPermit = () => stopPermit().then(() => navigation.navigate('SetupPermit'));

  useEffect(() => {
    const refresh = setInterval(() => setRefresh(new Date()), 1000);
    return () => clearInterval(refresh);
  }, []);

  const onNewCrewMembers = (crewMembers: SelectedCrewMember[]) => setCrew(crewMembers);
  const onChangeStandbyPerson = (newStandbyPerson: string) => setStandbyPerson(newStandbyPerson);

  if (!initTime) {
    return (
      <ScreenTemplate>
        <ScreenHeading>Error</ScreenHeading>
      </ScreenTemplate>
    );
  }

  return (
    <ScreenTemplate>
      <ScreenHeading>Work in progress</ScreenHeading>

      <RowWrapper marginTop={30}>
        <View style={{ flexBasis: '60%' }}>
          <Paragraph>Work started</Paragraph>
          <Paragraph bold>{DateTime.fromJSDate(initTime).toFormat('dd LLLL, HH:mm')}</Paragraph>
        </View>
        <View style={{ flexBasis: '40%' }}>
          <Paragraph>Duration</Paragraph>
          <Paragraph bold>{parseTimeDifference(initTime)}</Paragraph>
        </View>
      </RowWrapper>

      <RowWrapper marginTop={50}>
        <View style={{ flexBasis: '60%' }}>
          <Paragraph>Communication timer</Paragraph>
          <Paragraph bold>14:47</Paragraph>
        </View>
        <View style={{ flexBasis: '40%' }}>
          <Button title={'Check now'} onPress={() => {}} />
        </View>
      </RowWrapper>

      <RowWrapper marginTop={20}>
        <View style={{ flexBasis: '60%' }}>
          <Paragraph>Measurement timer</Paragraph>
          <Paragraph bold>10:11</Paragraph>
        </View>
        <View style={{ flexBasis: '40%' }}>
          <Button title={'Check now'} onPress={() => {}} />
        </View>
      </RowWrapper>

      <StandbyPerson crew={crew} standbyPerson={standbyPerson} onChangeStandbyPerson={onChangeStandbyPerson} />

      <EnteringCrew crew={crew} onNewCrewMembers={onNewCrewMembers} />

      <Button title={'Stop permit'} variant={'secondary'} marginTop={100} onPress={onStopPermit} />
    </ScreenTemplate>
  );
};

export default PermitScreen;
