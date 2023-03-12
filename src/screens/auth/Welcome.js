import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  Button,
} from 'react-native';
import RadioButton from 'react-native-radio-button';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Welcome extends Component {
  constructor() {
    super();
    this.state = {
      languagePopUp: false,
      selectedLaunguage: 'English',
      languages: [
        {title: 'English', code: 'English'},
        {title: 'Tamil', code: 'Tamil'},
        {title: 'Telugu', code: 'Telugu'},
        {title: 'Kanadda', code: 'Kanadda'},
      ],
    };
  }

  naviagateToLogin = () => {
    this.props.navigation.navigate('Login');
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {/* ------------HEADER---------------- */}
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <Image
              source={require('../../../assets/app-logo.png')}
              style={styles.appLogo}
            />
            <Text style={styles.appTitle}>FACE ID</Text>
          </View>
          <TouchableOpacity
            style={styles.translateButton}
            activeOpacity={0.9}
            onPress={() => {
              this.setState({...this.state, languagePopUp: true});
            }}>
            <Image
              source={require('../../../assets/g-translate-icon.png')}
              style={styles.translateLogo}
            />
            <Text style={styles.translateText}>
              {this.state.selectedLaunguage}
            </Text>
          </TouchableOpacity>
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

        {this.state.languagePopUp && (
          <View style={styles.languagePopUpBackground}>
            <View style={styles.languagePopUp}>
              <View style={styles.closeIconContainer}>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({...this.state, languagePopUp: false});
                  }}>
                  <Icon
                    style={styles.closeIcon}
                    name="close-outline"
                    size={30}
                  />
                </TouchableOpacity>
              </View>
              <View>
                <Text style={styles.languagePopUpHeading}>Change Language</Text>
                <Text style={styles.languagePopUpSubheading}>
                  Which language do you prefer?
                </Text>
              </View>
              <View style={styles.languageContainer}>
                {this.state.languages.map(language => {
                  return (
                    <View key={language.code}>
                      <View style={styles.language}>
                        <Text style={styles.languageText}>
                          {language.title}
                        </Text>
                        <RadioButton
                          animation={'bounceIn'}
                          isSelected={
                            this.state.selectedLaunguage === language.code
                          }
                          onPress={() =>
                            this.setState({
                              ...this.state,
                              selectedLaunguage: language.code,
                            })
                          }
                          innerColor={'#4A8A0E'}
                          outerColor={'#4A8A0E'}
                        />
                      </View>
                      <View style={styles.line} />
                    </View>
                  );
                })}
              </View>
              <TouchableOpacity
                activeOpacity={0.9}
                style={styles.languageButton}
                onPress={() => {
                  this.setState({...this.state, languagePopUp: false});
                }}>
                <Text style={styles.languageButtonText}>
                  Continue in {this.state.selectedLaunguage}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
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
    justifyContent: 'space-between',
  },
  appLogo: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  logoContainer: {
    flexDirection: 'row',
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
  languagePopUpBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  languagePopUp: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'white',
    alignItems: 'flex-start',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  languageContainer: {
    width: 350,
    marginLeft: 20,
  },
  language: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  languageText: {
    fontSize: 16,
    fontWeight: 600,
    color: 'black',
    marginBottom: 18,
    marginTop: 15,
  },
  line: {
    height: 1,
    backgroundColor: '#BDBDBC',
  },
  languagePopUpHeading: {
    fontSize: 20,
    marginLeft: 20,
    marginTop: 27,
    color: 'black',
    fontWeight: 700,
    marginBottom: 5,
  },
  languagePopUpSubheading: {
    fontSize: 14,
    fontWeight: 400,
    marginLeft: 20,
    marginBottom: 47,
    color: '#545454',
  },
  languageButton: {
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
    marginTop: 30,
    marginBottom: 25,
  },
  languageButtonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 700,
  },
  closeIconContainer: {
    backgroundColor: 'white',
    position: 'absolute',
    top: -74,
    right: 25,
    height: 53,
    width: 50,
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
  closeIcon: {color: 'black'},
  translateButton: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#EFEEEF',
    paddingHorizontal: 13,
    paddingVertical: 8,
  },
  translateLogo: {width: 13, height: 12, marginRight: 7},
  translateText: {fontSize: 16, fontWeight: 400, color: '#545454'},
});
