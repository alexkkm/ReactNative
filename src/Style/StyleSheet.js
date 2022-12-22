import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';


const StyleSheetScreen = ({ navigation }) => {
    return (
        <ScrollView>
            <Text>StyleSheet is just like css. Below component is decorated by StyleSheet:</Text>
            <View style={styles.Border}>
                <Text>
                    <Text style={styles.textA}>color: "skyblue",
                        fontWeight: 'bold',
                        fontSize: 15{"\n"}</Text>

                    <Text>borderWidth: 1,
                        borderRadius: 10,
                        borderColor: "grey"</Text>
                </Text>
            </View>
        </ScrollView>
    );
};

export default StyleSheetScreen;
const styles = StyleSheet.create({
    textA: {
        color: "skyblue",
        fontWeight: 'bold',
        fontSize: 15
    },
    Border: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "grey"
    }
})