/**
 * Colors.ts defines the color palette used throughout the app.
 * It includes separate color schemes for light and dark modes.
 * These colors can be used to style components dynamically based on the current theme.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

/*
  Colors object contains the color definitions for light and dark themes.
  Each theme includes colors for text, background, tint, icons, and tab icons.
*/
export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
};