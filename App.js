// App.js
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';

import { withAuthenticator } from 'aws-amplify-react-native'

import { Auth } from 'aws-amplify' 

class App extends React.Component {
  async componentDidMount() {
    const user = await Auth.currentAuthenticatedUser()
    console.log('user:', user)
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Hola Mundo</Text>
        <Text style={styles.banner}>Me first React Native app</Text>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 40,
    color: 'gold'
  },
  banner: {
    fontSize: 26
  }
})

export default withAuthenticator(App, {
  includeGreetings: true
})
