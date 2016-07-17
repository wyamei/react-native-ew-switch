/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Alert,
} from 'react-native';
var EWSwitch = require('./EWSwitch');

class EWSwitchDemo extends Component {
  render() {
    return (
        <View style={styles.container}>
            <Text>default style/默认样式</Text>
            <EWSwitch initValue={true}/>

            <View style={{marginTop:20}}/>
            <Text>reset color/自定义颜色</Text>
            <EWSwitch initValue={true}
                      activateBackgroundColor='red'
                      deactivateBackgroundColor='gray'/>

            <View style={{marginTop:20}}/>
            <Text>reset color and size/自定义颜色和大小</Text>
            <EWSwitch initValue={true}
                      activateBackgroundColor='red'
                      deactivateBackgroundColor='gray'
                      switchWidth={80}
                      switchHeight={40}
                      switchRadius={20}
                      buttonRadius={20}
                      buttonHeight={40}
                      buttonWidth={40}/>

            <View style={{marginTop:20}}/>
            <Text>reset switch back view size/设置switch背景尺寸</Text>
            <EWSwitch initValue={true}
                      switchWidth={70}
                      switchHeight={20}
                      buttonRadius={15}/>

            <View style={{marginTop:20}}/>
            <Text>reset thumb size/设置滑块的尺寸</Text>
            <EWSwitch initValue={true}
                      switchWidth={70}
                      switchHeight={20}
                      buttonRadius={15}
                      buttonWidth={20}
                      buttonHeight={30}/>

            <View style={{marginTop:20}}/>
            <Text>with callbacks/有回调事件</Text>
            <EWSwitch initValue={true}
                      activateBackgroundColor='blue'
                      deactivateBackgroundColor='gray'
                      switchWidth={70}
                      switchHeight={20}
                      buttonRadius={30}
                      onValueChange={(value) => {alert(value)}}/>

            <View style={{marginTop:20}}/>
            <Text>reset border color and size/自定义边框颜色和宽度</Text>
            <EWSwitch initValue={true}
                      activateBackgroundColor='yellow'
                      deactivateBackgroundColor='gray'
                      activateBorderWidth={2}
                      activateBorderColor='red'
                      deactivateBorderWidth={2}
                      deactivateBorderColor='green'
                      buttonBorderWidth={1}
                      buttonBorderColor='black'/>

            <View style={{marginTop:20}}/>
            <Text>no border/没有边框</Text>
            <EWSwitch initValue={true}
                      activateBackgroundColor='#3281DE'
                      deactivateBackgroundColor='gray'
                      activateBorderWidth={0}
                      deactivateBorderWidth={0}
                      buttonBorderWidth={0}/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    padding:30,
      borderWidth:1,
      borderColor:'gray'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('EWSwitchDemo', () => EWSwitchDemo);
