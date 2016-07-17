# react-native-ew-switch
Customizable switch for react-native
为react-native自定义的switch控件

![demoImg1](https://raw.githubusercontent.com/wyamei/react-native-ew-switch/master/demoImgs/demoImg1.jpg) ![demoImg2](https://raw.githubusercontent.com/wyamei/react-native-ew-switch/master/demoImgs/demoImg2.jpg)

### Content/内容
* [support](#support)
* [function](#function)
* [Usage example](#Usage example)
* [Properties](#Properties)
* [Event](#Event)
* [Run](#Run)

### support
android & ios

### function
* custom switch color / 自定义switch颜色；
* custom switch width and height / 自定义switch控件的高度，宽度；
* custom switch border color and width / 自定义switch控件的边框颜色和宽度

### Usage example
```javascript
var EWSwitch = require('./EWSwitch');

class EWSwitchDemo extends Component {
  render() {
    return (
        <View style={styles.container}>
            <EWSwitch initValue={true}
                      activateBackgroundColor='blue'
                      deactivateBackgroundColor='gray'
                      switchWidth={70}
                      switchHeight={20}
                      buttonRadius={30}
                      onValueChange={(value) => {alert(value)}}/>
        </View>
    );
  }
}
```

### Properties
* switchWidth (Number) - default:55
* switchHeight (Number) - defalut:30
* activateBackgroundColor (String) - defalut:'#3281DE'
* deactivateBackgroundColor (String) - defalut:'#f9f9f9'
* activateBorderWidth (Number) - default:0.5
* activateBorderColor (String) - defalut:'#d1d3d4'
* deactivateBorderWidth (Number) - default:0.5
* deactivateBorderColor (String) - defalut:'#d1d3d4'
* buttonWidth (Number) - default:30
* buttonHeight (Number) - default:30
* buttonRadius (Number) - default:15
* buttonBackgroundColor (String) - defalut:'#ffffff'
* buttonBorderWidth (Number) - default:0.5
* buttonBorderColor (String) - defalut:'#d1d3d4'

* initValue (Boolean) - defalut:false
* animationTime (Number) - default:100

### Event
* onValueChange: Sends the current state of switch

### Run
```bash
git clone https://github.com/wyamei/react-native-ew-switch.git
cd EWSwitchDemo
npm install
react-natvie run-android
```
