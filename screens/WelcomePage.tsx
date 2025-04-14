import {View, Text, StyleSheet} from 'react-native'


export default function WelcomePage() {
    return(
        <View style = {styles.container}>
            <Text>Welcome Page</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        textAlign: 'center',
        padding:'15%',
        backgroundColor:'grey',
        borderRadius:'10%',
    },
})