import React from 'react';
import { Button, StyleSheet, View, Text, ScrollView } from 'react-native';

const StyleScreen = ({ navigation }) => {
    return (
        <View>
            <Button
                title="StyleSheet"
                onPress={() =>
                    navigation.navigate('StyleSheetScreen')
                }
            />
        </View>
    )
}


export default StyleScreen;