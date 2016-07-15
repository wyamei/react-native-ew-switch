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
var EWCSwitch = require('./EWCSwitch');

class EWSwitchDemo extends Component {
  render() {
    return (
      <View style={styles.container}>
          <Text>默认样式</Text>
        <EWCSwitch initValue={true}/>

        <View style={{marginTop:20}}/>
          <Text>自定义颜色</Text>
        <EWCSwitch initValue={true}
                      activateBackgroundColor='red'
                      deactivateBackgroundColor='gray'
        />

        <View style={{marginTop:20}}/>
          <Text>自定义颜色和大小</Text>
        <EWCSwitch initValue={true}
                      activateBackgroundColor='red'
                      deactivateBackgroundColor='gray'
                      switchWidth={80}
                      switchHeight={40}
                      switchRadius={20}
                      buttonRadius={20}
                      buttonHeight={40}
                      buttonWidth={40}
        />

        <View style={{marginTop:20}}/>
          <Text>滑块可以比switch bar高</Text>
        <EWCSwitch initValue={true}
                      activateBackgroundColor='red'
                      deactivateBackgroundColor='gray'
                      switchWidth={70}
                      switchHeight={20}
                      buttonRadius={30}
        />

        <View style={{marginTop:20}}/>
          <Text>改变switch状态时，有回调事件</Text>
        <EWCSwitch initValue={true}
                      activateBackgroundColor='blue'
                      deactivateBackgroundColor='gray'
                      switchWidth={70}
                      switchHeight={20}
                      buttonRadius={30}
                      onValueChange={(value) => {alert(value)}}
        />

        <View style={{marginTop:20}}/>
          <Text>修改switch背景/滑块的边框颜色、宽度</Text>
        <EWCSwitch initValue={true}
                      activateBackgroundColor='yellow'
                      deactivateBackgroundColor='gray'
                      activateBorderWidth={2}
                      activateBorderColor='red'
                      deactivateBorderWidth={2}
                      deactivateBorderColor='green'
                      buttonBorderWidth={1}
                      buttonBorderColor='black'
        />
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
