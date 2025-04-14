import {View, StyleSheet} from 'react-native';
import React from 'react';
import MapView from 'react-native-maps';
import markers from '@/assets/markers';


export default function LocationScreen() {
    return (
        <View style = {styles.container}>
            <MapView 
                style = {styles.map} 
                initialRegion = {markers[0].coordinates}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    map: {
        flex: 1,
    }
})