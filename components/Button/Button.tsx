import React from 'react';
import { TouchableOpacity } from 'react-native';

import { ButtonBody, ButtonText } from './Button.styles';

interface Props {
  title: string;
  onPress: () => void;
  marginTop?: number;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

const Button: React.FC<Props> = ({ title, onPress, marginTop = 0, variant = 'primary', disabled = false }) => {
  const onButtonPress = disabled ? () => {} : onPress;

  return (
    <TouchableOpacity onPress={onButtonPress} activeOpacity={0.8} style={{ marginTop }}>
      <ButtonBody variant={variant} disabled={disabled}>
        <ButtonText variant={variant}>{title}</ButtonText>
      </ButtonBody>
    </TouchableOpacity>
  );
};

export default Button;
