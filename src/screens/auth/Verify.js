import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Welcome extends Component {
  constructor() {
    super();
    this.state = {
      otp: '',
      invalidOtp: false,
    };
  }

  handleOtpChange = text => {
    this.setState({...this.state, otp: text});
  };

  handleOtpSubmit = () => {
    const {otp} = this.state;
    if (this.props.route.params.otp !== otp) {
      this.setState({...this.state, invalidOtp: true});
      return;
    }
    this.setState({...this.state, invalidOtp: false});
    this.props.navigation.navigate('Welcome');
  };

  naviagateBack = () => {
    this.props.navigation.goBack();
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
          <Icon style={styles.backIcon} name="arrow-back" size={24} />
        </TouchableOpacity>

        {/* ------------HEADING---------------- */}
        <Text style={styles.heading}>Enter OTP code</Text>
        <Text style={styles.subHeading}>
          Enter the OTP code we sent via SMS to your registered phone number.
        </Text>

        {/* ------------FORM---------------- */}
        <Text style={styles.formText}>
          OTP <Text style={{color: 'red'}}>*</Text>
        </Text>
        <TextInput
          style={styles.formInput}
          keyboardType="phone-pad"
          onChangeText={this.handleOtpChange}
        />
        {this.state.invalidOtp && (
          <Text style={styles.invalidText}>Please enter valid OTP</Text>
        )}

        {/* ------------CONTINUE BUTTON---------------- */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            activeOpacity={0.9}
            style={styles.continueButton}
            onPress={this.handleOtpSubmit}>
            <Text style={styles.continueText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  backIcon: {
    marginLeft: 25,
    marginTop: 30,
    color: 'black',
  },
  heading: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 35,
    marginLeft: 25,
  },
  subHeading: {
    marginLeft: 25,
    fontSize: 16,
    marginRight: 10,
  },
  formText: {
    marginTop: 20,
    marginLeft: 25,
    fontSize: 14,
    fontWeight: 'bold',
  },
  formInput: {
    fontWeight: 'bold',
    borderBottomColor: 'black',
    borderBottomWidth: 1.0,
    justifyContent: 'center',
    width: '70%',
    alignItems: 'center',
    marginLeft: 50,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 8,
    marginBottom: 21,
  },
  continueButton: {
    backgroundColor: '#BDBDBC',
    borderWidth: 2,
    borderColor: '#BDBDBC',
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
  continueText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  invalidText: {
    color: 'red',
    marginLeft: 50,
    marginTop: 10,
  },
});
