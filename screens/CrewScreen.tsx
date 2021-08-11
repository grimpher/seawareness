import React from 'react';

import { ScreenHeading, ScreenHeadingSubtitle, ScreenWrapper } from '../styles';

export default function CrewScreen() {
  return (
    <ScreenWrapper>
      <ScreenHeading>Crew</ScreenHeading>
      <ScreenHeadingSubtitle>
        To start using application you need to enter at least 2 crew members. You will be able to change the list at any time.
      </ScreenHeadingSubtitle>
    </ScreenWrapper>
  );
}