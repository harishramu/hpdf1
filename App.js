import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import { SocialIcon,Avatar,Icon } from 'react-native-elements';
import { FloatingAction } from 'react-native-floating-action';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.maincontainer}>

      <FloatingAction style={{position:'absolute', zIndex:0}}/>

          <View style={{height:50, flexDirection: 'row', justifyContent: 'flex-end'}} >

                 <View style={{width:70, alignItems:'center'}}>
                        <Avatar
                            small
                            rounded
                            source={{uri: "https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_400x400.jpg"}}
                            activeOpacity={0.7}
                          />
                  </View>    
                  <View style={{flex:1}}>
                    <Text style={{fontWeight:'bold',fontSize:26,color:'black'}}>Home</Text>
                  </View>  

          </View> 


          <View style={{height: 70, flexDirection:'row', elevation: 1, alignItems: 'center' , justifyContent:'space-between', borderBottomWidth:0.1}}>

                  <View style={{width:70}}>
                        <Icon
                                name='home'
                                type='feather'
                                color='#0084b4'
                              />
                  </View>
                   <View style={{width:70}}>
                        <Icon
                                name='search'
                                type='evilicon'
                                color='#0084b4'
                                size={30}
                              />
                  </View>
                   <View style={{width:70}}>
                        <Icon
                                name='ios-notifications-outline'
                                type='ionicon'
                                color='#0084b4'
                                size={30}
                              />
                  </View>
                   <View style={{width:70}}>
                        <Icon
                                name='envelope'
                                type='simple-line-icon'
                                color='#0084b4'
                              />
                  </View>

          </View>    

          <View style={{flex:1, elevation:2}}>

              <View style={{flexDirection:'row'}}> 
                 <View style={{height:30, width:50, paddingTop:10, paddingHorizontal:20}}>
                    <Avatar
                            small
                            rounded
                            source={{uri: "https://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX.jpg"}}
                            activeOpacity={0.7}
                      /> 
                  </View>  
                  <View style={{paddingTop:10, paddingHorizontal:10, alignItems:'center'}}><Text>Barack Obama</Text></View>
              </View>

              <View style={{justifyContent:'flex-start', elevation:2,paddingLeft:60}} >
                    <Text style={{paddingTop:5, textAlignVertical: 'top' }}>Bet you did not know tis meant wiping out the country with nuclear warfare and starting afresh lmaoo </Text>
                    <Image style={{paddingTop:20,height:150, width:300,resizeMode: 'contain'}} source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/81vcb3hRCsL._UX691_.jpg'}}/>
              </View>
              
          </View>  

          <View style={{flex:1, elevation:2}}>

              <View style={{flexDirection:'row'}}> 
                 <View style={{height:30, width:50, paddingTop:10, paddingHorizontal:20}}>
                    <Avatar
                            small
                            rounded
                            source={{uri: "https://pbs.twimg.com/profile_images/782474226020200448/zDo-gAo0_400x400.jpg"}}
                            activeOpacity={0.7}
                      /> 
                  </View>  
                  <View style={{paddingTop:10, paddingHorizontal:10, alignItems:'center'}}><Text>Elon Musk</Text></View>
              </View>

              <View style={{justifyContent:'flex-start', elevation:2,paddingLeft:60}} >
                    <Text style={{paddingTop:5, textAlignVertical: 'top' }}> 0-60 in 1.9  </Text>
                    <Image style={{zIndex:-1,position:'relative', paddingTop:20,height:150, width:300,resizeMode: 'contain'}} source={{uri: 'https://i.kinja-img.com/gawker-media/image/upload/s--h-DkGYWy--/c_scale,fl_progressive,q_80,w_800/raf6cpy8qocflnpjsa12.jpg'}}/>
              </View>
          </View>  

      </View>
    );
  }
}

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    flexDirection:'column',
    justifyContent:'flex-start',
    paddingTop: 40
  },
});
