import React from 'react';
import { View, Text, ScrollView } from 'react-native';

// Props: collection of content of parameters
const PropsScreen = () => {
    return (
        <ScrollView>
            <View>
                <ExampleComponent text="1st" />
            </View>
        </ScrollView>
    );
};

const ExampleComponent = props => {
    return (
        <View>
            <Text>It's the {props.text} Component</Text>
        </View>
    );
};

export default PropsScreen;
