import React from "react";
import { View, Button, DeviceEventEmitter } from "react-native";

const DeviceEventEmitterScreen2 = () => {
    const emitChange = () => {
        const message = 'Listener Emited, make change on page 1';
        DeviceEventEmitter.emit('NameOfMessageListener', message);
    };
    const emitReset = () => {
        const message = 'default value';
        DeviceEventEmitter.emit('NameOfMessageListener', message);

    }
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button title="Trigger the listener event for page 1" onPress={() => { emitChange() }} />
            <Button title="Reset Page 1 Button" onPress={() => { emitReset() }} />
        </View>
    );
}

export default DeviceEventEmitterScreen2;