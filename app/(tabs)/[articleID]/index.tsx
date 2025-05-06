import { useRoute } from '@react-navigation/native';
import { Link } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

/*
  ArticleDetail component displays the details of a specific article.
  It retrieves the article ID from the route parameters and fetches the corresponding article data.
  If the article is not found, it displays a "not found" message.
*/
const ArticleDetail = () => {
  const route = useRoute();
  const { articleID } = route.params as { articleID: string };

  /*
    getArticleDetails function fetches the details of an article based on its ID.
    For this example, it uses a placeholder dataset. In a real application,
    this function would fetch data from an API or a local database.
  */
  const getArticleDetails = (id: string) => {
    const dummyArticles: { [key: string]: { title: string; content: string } } = {
      '1': { title: 'Article 1', content: 'This is the content of article 1.' },
      '2': { title: 'Article 2', content: 'This is the content of article 2.' },
    };
    return dummyArticles[id] || { title: 'Article Not Found', content: 'Article not found.' };
  };

  const article = getArticleDetails(articleID);

  /*
    The main return block renders the article details.
    It includes the article title, content, and a navigation link to go back to the home screen.
  */
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{article.title}</Text>
      <Text style={styles.content}>{article.content}</Text>
      <Link href="/">Go Back</Link>
    </ScrollView>
  );
};

/*
  Styles for the ArticleDetail component.
  Includes styles for the container, title, and content to ensure a clean and readable layout.
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8fdce',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export default ArticleDetail;