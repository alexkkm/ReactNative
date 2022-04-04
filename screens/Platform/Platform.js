import React from 'react';
import { Platform, View, Text, ScrollView } from 'react-native';


const PlatfromScreen = ({ navigation }) => {
    return (
        <ScrollView>
            <View>
                <Text>
                    The platform of this device is {Platform.OS}!
                </Text>
            </View>
        </ScrollView>
    );
};

export default PlatfromScreen;