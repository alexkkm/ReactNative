import React, { useState } from 'react';
import { TextInput, View, Text, ScrollView } from 'react-native';


const TextInputScreen = () => {
    const [text, setText] = useState('');
    return (
        <ScrollView>
            <View>
                <TextInput
                    style={{ height: 40 }}
                    placeholder="Type words here!"
                    onChangeText={text => setText(text)}
                    defaultValue={text}
                />
                <Text>
                    {text}
                </Text>
            </View>
        </ScrollView>
    );
};

export default TextInputScreen;