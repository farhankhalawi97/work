import React from 'react'
import { StyleSheet, Text, View,Button } from 'react-native';
import { useRouter } from 'expo-router';

const index = () => {
    const router = useRouter();

    return (
      <View style={styles.container}>
       <Button title="Login" onPress={() => router.push('/login')} />
       <Button title="Register" onPress={() => router.push('/register')} />
       <Button title="Forget password" onPress={() => router.push('/forgetp')} />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export default index
