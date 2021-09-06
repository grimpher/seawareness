import React, { useContext, useRef } from 'react';
import type { ScrollView } from 'react-native';

import { CrewList, SaveableInput, ScreenTemplate } from '../components';

import { AppContext } from '../contexts';
import { ScreenHeading, FixedToBottom } from '../styles';

export default function CrewScreen() {
  const { crewMembers, setCrewMembers } = useContext(AppContext);

  const handleMemberSubmit = (value: string) => {
    const isAlreadySaved = crewMembers.indexOf(value) !== -1;

    if (value.length >= 2 && !isAlreadySaved) {
      setCrewMembers([...crewMembers, value]);
      return true;
    }
  };

  const handleMemberDelete = (name: string) => {
    setCrewMembers(crewMembers.filter((memberName) => memberName !== name));
  };

  return (
    <>
      <ScreenTemplate extraPaddingBottom={60}>
        <ScreenHeading>Crew</ScreenHeading>

        <CrewList names={crewMembers} marginTop={24} onDelete={handleMemberDelete} />
      </ScreenTemplate>
      <FixedToBottom>
        <SaveableInput onSubmit={handleMemberSubmit} placeholder={'Name, surname and rank'} />
      </FixedToBottom>
    </>
  );
}
