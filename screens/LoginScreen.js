import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image } from 'react-native'
import { KeyboardAvoidingView } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { TextInput } from 'react-native'

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

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
            marginLeft: 50,
            marginTop: 12,
            color: '#041E42',
          }}
          >
            Log In to your Account</Text>
        </View>

        <View style={{ marginTop: 70 }}>
          <View style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
            backgroundColor: "#D0D0D0",
            paddingVertical: 5,
            marginTop: 30,
            borderRedius: 10,
          }}
          >
            <MaterialIcons style={{ marginLeft: 8 }}
              name="email"
              size={24}
              color='gray'
            />

            <TextInput
              style={{ color: 'gray', marginVertical: 10, width: 250 }}
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
              borderRedius: 10,
            }}
          >
            <AntDesign style={{ marginLeft: 8 }}
              name="lock1"
              size={24}
              color='gray'
            />
            <TextInput
              style={{ color: 'gray', marginVertical: 10, width: 250 }}
              placeholder='enter you Password' />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})