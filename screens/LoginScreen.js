import { Pressable, StyleSheet, Text, View, Image, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: 'white', alignItems: 'center' }}
    >
      <View>
        <Image
          style={{ width: 150, height: 100, marginTop: 50, }}
          source={{
            uri: "https://static.vecteezy.com/system/resources/previews/019/017/437/original/amazon-logo-free-png.png"
          }}
        />
      </View>
      <KeyboardAvoidingView>
        <View>
          <Text style={{
            fontSize: 18,
            fontWeight: 'bold',
            marginTop: 12,
            color: '#041E42',
            textAlign: 'center',
          }}
          >
            Log In to your Account</Text>
        </View>

        <View style={{ marginTop: 50 }}>
          <View style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
            backgroundColor: "#D0D0D0",
            paddingVertical: 5,
            marginTop: 30,
            borderRadius: 10,
          }}
          >
            <MaterialIcons style={{ marginLeft: 8 }}
              name="email"
              size={24}
              color='gray'
            />

            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={{ color: 'gray', marginVertical: 8, width: 280, fontSize: email ? 16 : 16 }}
              placeholder='enter you Email' />
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "#D0D0D0",
              paddingVertical: 5,
              marginTop: 30,
              borderRadius: 10,
            }}
          >
            <AntDesign style={{ marginLeft: 8 }}
              name="lock1"
              size={24}
              color='gray'
            />
            <TextInput
              value={password}
              onChangetext={(text) => setPassword(text)}
              secureTextEntry={true}
              style={{ color: 'gray', marginVertical: 8, width: 280, fontSize: password ? 16 : 16 }}
              placeholder='enter you Password' />
          </View>
        </View>

        <View style={{ marginTop: 12, flexDirection: "row", alignItems: 'center', justifyContent: "space-between" }}>
          <Text>Keep me logged in</Text>

          <Text style={{ color: "#007FFF", fontWeight: "500" }}>Forgot Password</Text>
        </View>

        <View style={{ marginTop: 70 }} />

        <Pressable style={{
          width: 200,
          backgroundColor: "#FEBE10",
          borderRadius: 6,
          marginLeft: "auto",
          marginRight: "auto",
          padding: 15,
        }}
        >
          <Text style={{textAlign:"center", color: "white", fontSize:16, fontWeight:"bold"}}>Login</Text>
        </Pressable>

        <Pressable onPress={()=> navigation.navigate("Register")} style={{marginTop:15}}>
          <Text style={{textAlign:"center", color: "gray", fontSize:16,}}>Don't have an acount? Sign Up</Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})