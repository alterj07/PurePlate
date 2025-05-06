import { Link } from 'expo-router';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';

/*
  ListofFeatures component renders a list of app features using a FlatList.
  Each feature is displayed as a text item styled with the `styles.item` style.
*/
const ListofFeatures = () => {
    return (
        <FlatList
            data={[
                { key: 'Food Identification Feature' },
                { key: 'Hot Dog Identification Feature' },
                { key: 'You can take a selfie!' },
            ]}
            renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
        />
    );
};

/*
  FeaturesScreen component displays the app's features in a scrollable view.
  It includes a horizontal scrollable list of features and a navigation link to the home screen.
*/
export default function FeaturesScreen() {
    return (
        <ScrollView nestedScrollEnabled={true}>
            <View style={{ flex: 1, alignItems: 'center', marginBottom: '5%' }}>
                <View style={{ flex: 1 }}>
                    <View style={styles.container}>
                        <Text style={styles.title}>
                            Features
                        </Text>
                    </View>
                    <ScrollView horizontal={true}>
                        <ListofFeatures />
                    </ScrollView>
                </View>
                
                <Link href="/">
                    <Text style={styles.button}>
                        Test to index
                    </Text>
                </Link>
            </View>
        </ScrollView>
    );
}

/*
  Styles for the FeaturesScreen component.
  Includes styles for the container, title, button, and list items.
*/
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: '10%',
        flex: 1,
    },
    button: {
        backgroundColor: 'limegreen',
        borderRadius: '20%',
        fontSize: 30,
        fontWeight: 'bold',
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    title: {
        fontSize: 34,
        fontWeight: 'bold',
        marginTop: '10%',
    },
    item: {
        padding: 30,
        fontSize: 18,
        height: '20%',
        color: 'black',
    },
});