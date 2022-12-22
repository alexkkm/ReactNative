import React, { useState, useEffect } from 'react';
import { Platform, View, Text, StyleSheet, Share, TextInput, Button, Alert } from 'react-native';

const ShareOutwardScreen = () => {
    const [TextInputValue, setTextInputValue] = useState('');

    const ShareMessage = () => {
        Share.share(
            {
                message: TextInputValue.toString()
            }
        ).then(result => console.log(result))
    }

    return (
        <View style={styles.MainContainer}>
            <TextInput
                underlineColorAndroid={"transparent"}
                placeholder="Enter Text Here To Share"
                style={styles.TextInputStyle}
                onChangeText={(TextInputText) => { setTextInputValue(TextInputText) }}
            />

            <Button title="Click here to share text!"
                onPress={() => ShareMessage()}
            />
        </View>
    );
}

const styles = StyleSheet.create(
    {
        MainContainer:
        {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: (Platform.OS === 'ios') ? 20 : 0,
            margin: 10
        },

        TextInputStyle:
        {
            borderWidth: 1,
            borderColor: '#009688',
            width: '100%',
            height: 40,
            borderRadius: 10,
            marginBottom: 10,
            textAlign: 'center'
        }
    });
export default ShareOutwardScreen;