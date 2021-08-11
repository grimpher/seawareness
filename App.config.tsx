import React from 'react';
import { Feather } from '@expo/vector-icons';

interface TaskBarIconRendererParams {
  focused: boolean;
  color: string;
  size: number;
}

interface Route {
  name: string;
}

export const getNavigatorScreenOptions = ({ route }: { route: Route }) => ({
  tabBarIcon: ({ focused, color, size }: TaskBarIconRendererParams) => {
    let iconName;
    const iconColor = focused ? '#699DFF' : '#aaa';

    switch (route.name) {
      case 'Home':
        iconName = 'home';
        break;
      case 'Logs':
        iconName = 'menu';
        break;
      case 'Crew':
        iconName = 'users';
        break;
      case 'Settings':
        iconName = 'settings';
        break;
      default:
        iconName = 'menu';
    }

    return <Feather name={iconName} color={iconColor} size={20} />;
  },
  tabBarStyle: {
    height: 72,
    paddingBottom: 10,
    paddingTop: 10,
    elevation: 0
  },
  tabBarActiveTintColor: '#699DFF',
  tabBarLabelStyle: {
    fontSize: 14
  }
});