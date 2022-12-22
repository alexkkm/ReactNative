import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

// State: collection of content of parameters
const StateScreen = () => {
    const [time, updateTime] = useState(0); //parameters '0' within useState() is the inital value of 'time'
    useEffect(() => { //after the components was build do the followings
        let time = getCurrentTime();

        const delay = setInterval(() => {   //create a time variable and start timer
            updateTime(time => getCurrentTime()) //when the time limit reached, do this line: updateTime()
        }, 1000) //time limit set to be 1000ms = 1 second

        return () => {
            clearInterval(delay);   //clear the content of time variable
        }
    }, []);

    const getCurrentTime = () => {
        let timeInfo = new Date();
        let month = ((timeInfo.getMonth()) + 1 < 10 ? '0' : '') + (timeInfo.getMonth() + 1);
        let day = ((timeInfo.getDate()) < 10 ? '0' : '') + (timeInfo.getDate());
        let hours = ((timeInfo.getHours()) < 10 ? '0' : '') + (timeInfo.getHours());
        let minutes = ((timeInfo.getMinutes()) < 10 ? '0' : '') + (timeInfo.getMinutes());
        let seconds = ((timeInfo.getSeconds()) < 10 ? '0' : '') + (timeInfo.getSeconds());
        return month + "/" + day + " " + hours + ":" + minutes + ":" + seconds;
    }

    return (
        <Clock time={time} />
    );
};

const Clock = (props) => {
    return (
        <ScrollView>
            <View>

                <Text style={styles.paragraph}>Current Time is: {props.time}</Text>

            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        borderWidth: 3,
        borderRadius: 5,
        borderColor: 'grey'
    },
});

export default StateScreen;