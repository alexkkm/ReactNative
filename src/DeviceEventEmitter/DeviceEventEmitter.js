import React, { useState, useEffect } from "react";
import { Button, Text, View, DeviceEventEmitter } from "react-native";

const DeviceEventEmitterScreen = ({ navigation }) => {
    const [result, setResult] = useState('default value');      //create state to store the result of the text
    useEffect(() => {       //after the Text component mount,
        this.listener = DeviceEventEmitter.addListener('NameOfMessageListener', (message) => setResult(message))    // add listener to listen for any emit,if listen emit,update the 'result' with 'message'
        return () => {      //after the above was done
            if (listener) {     //if there is a listener,
                listener.remove();     //remove the listener
            }
        }
    }, []);

    const switchPage = () => {
        navigation.navigate('DeviceEventEmitterScreen2');
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button title='go to page 2'
                onPress={() => switchPage()} />
            <Text style={{ fontSize: 20, marginTop: 30 }}>
                {result}
            </Text>
        </View>
    )
}

export default DeviceEventEmitterScreen