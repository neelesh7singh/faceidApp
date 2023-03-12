import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from 'react-native';

export default class Welcome extends Component {
  naviagateToLogin = () => {
    this.props.navigation.navigate('Login');
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {/* ------------HEADER---------------- */}
        <View style={styles.header}>
          <Image
            source={require('../../../assets/app-logo.png')}
            style={styles.appLogo}
          />
          <Text style={styles.appTitle}>FACE ID</Text>
        </View>

        {/* ------------BODY---------------- */}
        <View style={styles.body}>
          <Image
            source={require('../../../assets/landingImg.png')}
            style={{width: 365, height: 214, alignContent: 'center'}}
            PlaceholderContent={<ActivityIndicator />}
          />
          <View style={styles.bodyTextContainer}>
            <Text style={styles.bodyHeadingText}>
              Welcome to FlokX Face ID App!
            </Text>
            <Text style={styles.bodyText}>
              Your go-to app for all things goats. We’re here to help with your
              most pressing problems.
            </Text>
          </View>
        </View>

        {/* ------------LOGIN BUTTONS---------------- */}
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            activeOpacity={0.9}
            style={styles.logInButton}
            onPress={this.naviagateToLogin}>
            <Text style={styles.logInText}>Log in</Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.9}
            style={styles.signUpButton}
            onPress={this.naviagateToLogin}>
            <Text style={styles.signUpText}>I'm new, sign me up</Text>
          </TouchableOpacity>
        </View>

        {/* ------------TERMS---------------- */}
        <View style={styles.terms}>
          <Text style={styles.termsText}>
            By logging in or registering, you agree to our Terms of Service and
            Privacy Policy.
          </Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    color: 'black',
  },
  header: {
    padding: 12,
    flexDirection: 'row',
  },
  appLogo: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  appTitle: {
    fontFamily: 'Staatliches',
    fontWeight: 'bold',
    fontSize: 16,
    padding: 7,
    color: 'black',
  },
  body: {
    flex: 1,
    marginTop: 200,
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  bodyTextContainer: {
    paddingHorizontal: 30,
    paddingBottom: 10,
  },
  bodyHeadingText: {
    fontFamily: 'Staatliches',
    fontWeight: '700',
    fontSize: 22,
    textAlign: 'center',
    color: 'black',
  },
  bodyText: {
    fontFamily: 'Staatliches',
    fontWeight: '400',
    fontSize: 14,
    textAlign: 'center',
    color: 'black',
  },
  buttonsContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  logInButton: {
    backgroundColor: '#4A8A0E',
    borderWidth: 2,
    borderColor: '#4A8A0E',
    borderRadius: 30,
    width: 350,
    height: 50,
    marginHorizontal: '5%',
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  logInText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  signUpButton: {
    marginTop: 20,
    backgroundColor: '#fff',
    text: '#4A8A0E',
    borderWidth: 1,
    borderColor: '#4A8A0E',
    borderRadius: 30,
    width: 350,
    height: 50,
    marginHorizontal: '5%',
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  signUpText: {
    fontSize: 16,
    color: '#4A8A0E',
    fontWeight: 'bold',
  },
  terms: {
    alignContent: 'center',
    paddingHorizontal: 54,
    paddingBottom: 10,
    marginTop: 20,
  },
  termsText: {
    fontFamily: 'Roboto',
    fontWeight: 100,
    fontSize: 12,
    textAlign: 'center',
  },
});
