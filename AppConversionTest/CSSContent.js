'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Dimensions,
  DeviceEventEmitter,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5243BB',
  },
  secondaryContainer:{
    flex:1,
    alignItems:'center',
    paddingBottom:480
  },
  headerLabel:{
    flex:1,
    fontSize: 32,
    fontFamily:'System',
    paddingTop: 20,
    color:'#D8C440',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  toolbar:{
    backgroundColor:'#D8C440',
    paddingBottom:0,
    flexDirection:'row'
  },
  toolbarButton:{
    fontSize: 17,
    width: 125,
    color: '#5243BB',
    textAlign:'center',
    flex: 1,
    paddingBottom: 12,
    paddingTop: 12
  },
  labelRow:{
    flexDirection: 'row',
    alignItems:'center',
    alignSelf: 'center'
  },
  labelItem:{
    flex:1,
    fontFamily:'System',
    color:'#D8C440',
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 55,
    marginRight: 55,
    marginTop: 20,
    marginBottom: 5
  },
  textBoxRow:{
    flexDirection: 'row',
    alignItems:'center',
    alignSelf: 'center'
  },
  boxes:{
    flex:1,
    height: 36,
    width: 72,
    marginLeft: 25,
    marginRight: 25,
    marginBottom:10,
    fontSize: 14,
    borderWidth:1,
    borderColor: '#D8C440',
    borderRadius: 8,
    fontFamily:'System',
    color:'#D8C440',
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

module.exports = styles;
