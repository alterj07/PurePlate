import { useTheme } from '@/theme/ThemeProvider';
import { useRouter } from 'expo-router';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";

/*
  A list of articles to be displayed on the home screen.
  Each article contains an ID, title, and snippet.
*/
const articles = [
  { id: '1', title: 'Mr. Luna, please give me a good grade :)', snippet: 'Snippet 1' },
  { id: '2', title: 'Article 2', snippet: 'Snippet 2' },
];

/*
  Type definition for an article object.
  Includes an ID, title, and snippet.
*/
type Article = {
  id: string,
  title: string,
  snippet: string,
};

/*
  HomeScreen component displays a list of articles in a scrollable view.
  It dynamically adjusts styles based on the current theme (dark or light mode).
  Users can navigate to a detailed view of an article by tapping on it.
*/
export default function HomeScreen() {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
  const router = useRouter();

  /*
    Function to render each article as a card.
    The card includes the article's title and snippet.
    Clicking on a card navigates to the article's detailed view.
  */
  const renderItem = ({ item }: { item: Article }) => (
    <TouchableOpacity 
      style={[styles.card, isDarkMode ? styles.darkCard : styles.lightCard]} 
      onPress={() => router.push(`/(tabs)/${item.id}`)}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.snippet}>{item.snippet}</Text>
    </TouchableOpacity>
  );

  /*
    The main return block renders the home screen.
    It includes a FlatList to display the articles and applies background styles based on the theme.
  */
  return (
    <View style={[styles.background, isDarkMode ? styles.darkBackground : styles.lightBackground]}>
      <View style={styles.container}>
        <FlatList
          data={articles}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.listContainer}
        />
      </View>
    </View>
  );
}

/*
  Styles for the HomeScreen component.
  Includes styles for the background, container, list container, cards, and text elements.
  Styles are dynamically adjusted for dark and light themes.
*/
const styles = StyleSheet.create({
  background: {
    backgroundColor: '#f8fdce',
  },
  darkBackground: {
    backgroundColor: '#0e4c28',
  },
  lightBackground: {
    backgroundColor: '#f8fdce',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2%',
    marginBottom: 'auto',
    flex: 1,
    height: '100%',
  },
  card: {
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    width: 'auto',
  },
  darkCard: {
    backgroundColor: '#f8fdce',
  },
  lightCard: {
    backgroundColor: '#b5f973',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  snippet: {
    fontSize: 16,
  },
});