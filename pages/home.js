import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
        <View style={styles.center}>
        <Text style={styles.heading} >Ready To Test Yourself ?</Text>
        </View>
        <View>
        <Image
        
        source={
          {
            uri:'https://cdn.shopify.com/app-store/listing_images/64b09b08365595185c4fa0a3400cddd9/icon/CNqlyYPW6PsCEAE=.jpeg'
          }
        }
        style={styles.heroImg}
      />
        </View>
        <View>
           <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Quiz")}>
            <Text style={styles.btnText}>Start The Quiz</Text>
           </TouchableOpacity >
        </View>
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
  container:{
    
    width:"100",
    height:"100",
    marginTop:30,
    
    alignItems:"center"
  },
  heading:{
    fontSize:30,
    color:"black"

  },
  heroImg:{
    width:300,
    height:300,
    objectFit:"contain"
  },
  button:{
    marginTop:10,
    padding:10,
    backgroundColor:"black",
  },
  btnText:{
    color:'white'

  }

})