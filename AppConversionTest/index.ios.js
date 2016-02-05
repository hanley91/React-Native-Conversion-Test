/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React, {
  AppRegistry,
  AsyncStorage,
  Component,
  StyleSheet,
  Dimensions,
  DeviceEventEmitter,
  Text,
  TextInput,
  TouchableHighlight,
  View,
  AlertIOS
} from 'react-native';

var styles = require('./CSSContent');
var I18n = require('./Translations');
I18n.fallbacks = true;

class AppConversionTest extends Component {

  constructor(props){
    super(props)
    this.state = {
      visibleHeight: Dimensions.get('window').height,
      mark1: '',
      mark2: '',
      mark3: '',
      mark4: '',
      mark5: '',
      mark6: '',
      mark7: '',
      mark8: '',
      weight1: '',
      weight2: '',
      weight3: '',
      weight4: '',
      weight5: '',
      weight6: '',
      weight7: '',
      weight8: ''
    }
  }

  componentWillMount(){
    DeviceEventEmitter.addListener('keyboardWillShow', this.keyboardWillShow.bind(this))
    DeviceEventEmitter.addListener('keyboardWillHide', this.keyboardWillHide.bind(this))
  }

  keyboardWillShow (e) {
    let newSize = Dimensions.get('window').height - e.endCoordinates.height
    this.setState({visibleHeight: newSize})
  }

  keyboardWillHide (e) {
    this.setState({visibleHeight: Dimensions.get('window').height})
  }

  onCalculateButtonPressed(){

      var m1=parseInt(this.state.mark1);
      var m2=parseInt(this.state.mark2);
      var m3=parseInt(this.state.mark3);
      var m4=parseInt(this.state.mark4);
      var m5=parseInt(this.state.mark5);
      var m6=parseInt(this.state.mark6);
      var m7=parseInt(this.state.mark7);
      var m8=parseInt(this.state.mark8);

      var w1=parseInt(this.state.weight1);
      var w2=parseInt(this.state.weight2);
      var w3=parseInt(this.state.weight3);
      var w4=parseInt(this.state.weight4);
      var w5=parseInt(this.state.weight5);
      var w6=parseInt(this.state.weight6);
      var w7=parseInt(this.state.weight7);
      var w8=parseInt(this.state.weight8);

      var numerator = ((m1*w1)+(m2*w2)+(m3*w3)+(m4*w4)+(m5*w5)+(m6*w6)+(m7*w7)+(m8*w8));
      var denominator = (w1+w2+w3+w4+w5+w6+w7+w8);

      var calculatedYWA = numerator / denominator;

      console.log({calculatedYWA});

      AlertIOS.alert('Calculation Complete!', ('Your YWA Value' + calculatedYWA), [{text: 'Okay'}]);
  }

  onSaveButtonPressed(){

      AsyncStorage.setItem("mark1",this.state.mark1);
      AsyncStorage.setItem("mark2",this.state.mark2);
      AsyncStorage.setItem("mark3",this.state.mark3);
      AsyncStorage.setItem("mark4",this.state.mark4);
      AsyncStorage.setItem("mark5",this.state.mark5);
      AsyncStorage.setItem("mark6",this.state.mark6);
      AsyncStorage.setItem("mark7",this.state.mark7);
      AsyncStorage.setItem("mark8",this.state.mark8);

      AsyncStorage.setItem("weight1",this.state.weight1);
      AsyncStorage.setItem("weight2",this.state.weight2);
      AsyncStorage.setItem("weight3",this.state.weight3);
      AsyncStorage.setItem("weight4",this.state.weight4);
      AsyncStorage.setItem("weight5",this.state.weight5);
      AsyncStorage.setItem("weight6",this.state.weight6);
      AsyncStorage.setItem("weight7",this.state.weight7);
      AsyncStorage.setItem("weight8",this.state.weight8);

  }

  onLoadButtonPressed(){

      AsyncStorage.getItem("mark1").then((value) => {
            this.setState({mark1: value});
        }).done();

      AsyncStorage.getItem("mark2").then((value) => {
            this.setState({mark2: value});
        }).done();

      AsyncStorage.getItem("mark3").then((value) => {
            this.setState({mark3: value});
        }).done();

      AsyncStorage.getItem("mark4").then((value) => {
            this.setState({mark4: value});
        }).done();

      AsyncStorage.getItem("mark5").then((value) => {
            this.setState({mark5: value});
        }).done();

      AsyncStorage.getItem("mark6").then((value) => {
            this.setState({mark6: value});
        }).done();

      AsyncStorage.getItem("mark7").then((value) => {
            this.setState({mark7: value});
        }).done();

      AsyncStorage.getItem("mark8").then((value) => {
            this.setState({mark8: value});
        }).done();

      AsyncStorage.getItem("weight1").then((value) => {
            this.setState({weight1: value});
        }).done();

      AsyncStorage.getItem("weight2").then((value) => {
            this.setState({weight2: value});
        }).done();

      AsyncStorage.getItem("weight3").then((value) => {
            this.setState({weight3: value});
        }).done();

      AsyncStorage.getItem("weight4").then((value) => {
            this.setState({weight4: value});
        }).done();

      AsyncStorage.getItem("weight5").then((value) => {
            this.setState({weight5: value});
        }).done();

      AsyncStorage.getItem("weight6").then((value) => {
            this.setState({weight6: value});
        }).done();

      AsyncStorage.getItem("weight7").then((value) => {
            this.setState({weight7: value});
        }).done();

      AsyncStorage.getItem("weight8").then((value) => {
            this.setState({weight8: value});
        }).done();
  }

  render(){

  return(
    <View style={{height: this.state.visibleHeight}}>
      <View style={styles.container}>

        <Text style={styles.headerLabel}>
          YWA Calculator
        </Text>

        <View style={styles.secondaryContainer}>
            <View style={styles.labelRow}>
                <Text style={styles.labelItem}>
                  #1
                </Text>
                <Text style={styles.labelItem}>
                  #2
                </Text>
                <Text style={styles.labelItem}>
                  #3
                </Text>
            </View>
            <View style={styles.textBoxRow}>

                <TextInput style={styles.boxes}
                  value = {this.state.mark1}
                  returnKeyType = 'done'
                  onChangeText= {(text) => {this.setState({mark1: text});}}/>

                <TextInput style={styles.boxes}
                  value = {this.state.mark2}
                  returnKeyType = 'done'
                  onChangeText = {(text) => {this.setState({mark2: text});}} />

                <TextInput style={styles.boxes}
                  value = {this.state.mark3}
                  returnKeyType = 'done'
                  onChangeText = {(text) => {this.setState({mark3: text});}}/>

            </View>
            <View style={styles.textBoxRow}>

                <TextInput style={styles.boxes}
                  value = {this.state.weight1}
                  returnKeyType = 'done'
                  onChangeText = {(text) => {this.setState({weight1: text});}}/>

                <TextInput style={styles.boxes}
                  value = {this.state.weight2}
                  returnKeyType = 'done'
                  onChangeText = {(text) => {this.setState({weight2: text});}}/>

                <TextInput style={styles.boxes}
                  value = {this.state.weight3}
                  returnKeyType = 'done'
                  onChangeText = {(text) => {this.setState({weight3: text});}}/>

            </View>
            <View style={styles.labelRow}>

                <Text style={styles.labelItem}>
                  #4
                </Text>
                <Text style={styles.labelItem}>
                  #5
                </Text>
                <Text style={styles.labelItem}>
                  #6
                </Text>

            </View>
            <View style={styles.textBoxRow}>

                <TextInput style={styles.boxes}
                  value = {this.state.mark4}
                  returnKeyType = 'done'
                  onChangeText = {(text) => {this.setState({mark4: text});}}/>

                <TextInput style={styles.boxes}
                  value = {this.state.mark5}
                  returnKeyType = 'done'
                  onChangeText = {(text) => {this.setState({mark5: text});}}/>

                <TextInput style={styles.boxes}
                  value = {this.state.mark6}
                  returnKeyType = 'done'
                  onChangeText = {(text) => {this.setState({mark6: text});}}/>

            </View>
            <View style={styles.textBoxRow}>

                <TextInput style={styles.boxes}
                  value = {this.state.weight4}
                  returnKeyType = 'done'
                  onChangeText = {(text) => {this.setState({weight4: text});}}/>

                <TextInput style={styles.boxes}
                  value = {this.state.weight5}
                  returnKeyType = 'done'
                  onChangeText = {(text) => {this.setState({weight5: text});}}/>

                <TextInput style={styles.boxes}
                  value = {this.state.weight6}
                  returnKeyType = 'done'
                  onChangeText = {(text) => {this.setState({weight6: text});}}/>

            </View>
            <View style={styles.labelRow}>

                <Text style={styles.labelItem}>
                  #7
                </Text>
                <Text style={styles.labelItem}>
                  #8
                </Text>

            </View>
            <View style={styles.textBoxRow}>

                <TextInput  style={styles.boxes}
                  value = {this.state.mark7}
                  returnKeyType = 'done'
                  onChangeText = {(text) => {this.setState({mark7: text});}}/>

                <TextInput  style={styles.boxes}
                  value = {this.state.mark8}
                  returnKeyType = 'done'
                  onChangeText = {(text) => {this.setState({mark8: text});}}/>

            </View>
            <View style={styles.textBoxRow}>

                <TextInput  style={styles.boxes}
                  value = {this.state.weight7}
                  returnKeyType = 'done'
                  onChangeText = {(text) => {this.setState({weight7: text});}}/>

                <TextInput style={styles.boxes}
                  value = {this.state.weight8}
                  returnKeyType = 'done'
                  onChangeText = {(text) => {this.setState({weight8: text});}}/>

            </View>
        </View>
        <View style={styles.toolbar}>

            <TouchableHighlight
              underlayColor='#D8C440'
              activeOpacity={0.4}
              onPress={this.onSaveButtonPressed.bind(this)}>

            <Text style={styles.toolbarButton}>Save</Text>

            </TouchableHighlight>

            <TouchableHighlight
              underlayColor='#D8C440'
              activeOpacity={0.4}
              onPress={this.onCalculateButtonPressed.bind(this)}>

            <Text style={styles.toolbarButton}>Calculate</Text>

            </TouchableHighlight>

            <TouchableHighlight
              underlayColor='#D8C440'
              activeOpacity={0.4}
              onPress={this.onLoadButtonPressed.bind(this)}>

            <Text style={styles.toolbarButton}>Load</Text> 

            </TouchableHighlight>

          </View>
      </View>
      </View>
  );

}
}

AppRegistry.registerComponent('AppConversionTest', () => AppConversionTest);

