import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

// State: collection of content of parameters
const StateScreen = () => {
    const [time,updateTime]=useState(null);
    useEffect(()=>{ //  after the components was build do the followings
        let time= getCurrentTime();

        const delay=setInterval(()=>{   //create a time variable and start timer
            updateTime(time=>getCurrentTime()) //when the time limit reached, do this line: updateTime()
        },1000) //  time limit set to be 1000ms = 1 second
        
        return()=>{
            clearInterval(delay);   //  clear the content of time variable
        }
    },[]);

    const getCurrentTime=()=>{
        let timeInfo=new Date();
        let month=(timeInfo.getMonth())+1;
        let day=(timeInfo.getDate());
        let hours=(timeInfo.getHours())+8;
        let minutes=(timeInfo.getMinutes());
        let seconds=(timeInfo.getSeconds());
        return month+"/"+day+" "+hours+":"+minutes+":"+seconds;
    }

    return (
        <ScrollView>
        <View>
        
            <Text>Current Time is: {time}</Text>
        
        </View>
        </ScrollView>
    );
};

const Clock=(props)=>{
    return(
        null
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#ecf0f1',
      padding: 8,
    },
    paragraph: {
      margin: 24,
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });

export default StateScreen;