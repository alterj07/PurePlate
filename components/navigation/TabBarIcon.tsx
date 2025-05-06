import Ionicons from '@expo/vector-icons/Ionicons';
import { type IconProps } from '@expo/vector-icons/build/createIconSet';
import { type ComponentProps } from 'react';

/*
  TabBarIcon component renders an Ionicons icon for use in the tab bar.
  It accepts props for customization, including style and icon name.
  The component applies a default size and margin to ensure consistent appearance.
*/
export default function TabBarIcon({ style, ...rest }: IconProps<ComponentProps<typeof Ionicons>['name']>) {
  return <Ionicons size={28} style={[{ marginBottom: -3 }, style]} {...rest} />;
}