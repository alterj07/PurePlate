import { Stack } from 'expo-router';

/*
  TabLayout component defines the layout for the tab-based navigation structure.
  It uses a Stack navigator to manage the screens within the tabs.
  The header is hidden for all screens in this layout.
*/
export default function TabLayout() {
  /*
    The main return block renders a Stack navigator.
    It includes a screen named "(home)" as part of the tab navigation structure.
  */
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(home)" />
    </Stack>
  );
}