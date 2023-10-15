import { Pressable, StyleSheet, Text, View, Image, KeyboardAvoidingView,TextInput } from 'react-native'
import React, {useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const RegisterScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
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
            Register To Your Acount</Text>
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
            <Ionicons style={{ marginLeft: 8 }}
              name="person"
              size={24}
              color='gray'
            />

            <TextInput
              value={name}
              onChangeText={(text) => setName(text)}
              style={{ color: 'gray', marginVertical: 8, width: 280, fontSize: email ? 16 : 16 }}
              placeholder='enter you name' />
          </View>

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
          <Text style={{textAlign:"center", color: "white", fontSize:16, fontWeight:"bold"}}>Register</Text>
        </Pressable>

        <Pressable onPress={()=> navigation.navigate("Login")} style={{marginTop:15}}>
          <Text style={{textAlign:"center", color: "gray", fontSize:16,}}>Already have an acount? Sign In</Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({})