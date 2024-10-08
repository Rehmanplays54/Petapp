import { View, Text, TextComponent, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import Inputbox from '../Components/inputbox'
import Button from '../Components/Button'

const Login= () => {
 
  const [Email,setEmail]=useState('')
  const [Password,setPassword]=useState('')
  const [loading,setloading]=useState(false)


  const handlesubmit=()=>{
    try{
    setloading(true)
    if( !Email || !Password)
    {Alert.alert("Please fill All feilds");
        setloading(false)
        return
    }
    setloading(false)
    console.log("Login",{Email,Password});
    
} catch(error){
    setloading(false);
    console.log(error);
    
};
  }
  return (
    <View style
    =
    {
      {
        backgroundColor:'#FFFAE8',
        width:'100%',
        height:'100%',
        flex:1,justifyContent:'center',
        alignItems:'center'

      }
    }
        >
          <Text
          style={{
            fontSize:34
          }}
          >Login</Text>
    
      <Inputbox inputtitle={'Email'}
      keyboardType="email-address"
      autoComplete="email"
         value={Email}
         setValue={setEmail}
      />
      <Inputbox inputtitle={'Password'}
      secureTextEntry={true}
         autoComplete="password"
            value={Password}
            setValue={setPassword}
      />
      <Button inputtitle={'Login'}
      loading={loading}
      handlesubmit={handlesubmit}/>
    </View>
  )
}

export default Login