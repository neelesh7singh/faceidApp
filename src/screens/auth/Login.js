import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Welcome extends Component {
  constructor() {
    super();
    this.state = {
      number: '',
      invalidNumber: false,
      internalError: false,
    };
  }

  handleNumberChange = text => {
    this.setState({...this.state, number: text});
  };

  handleSaveNumber = async () => {
    const {number} = this.state;

    if (number.length !== 10) {
      this.setState({...this.state, invalidNumber: true});
      return;
    }

    fetch('http://localhost:8000/api/create/', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({number: number}),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.props.navigation.navigate('Verify', {otp: data.otp});
      })
      .catch(error => {
        console.log(error);
        this.setState({...this.state, internalError: true});
      });
  };

  naviagateBack = () => {
    this.props.navigation.goBack();
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity onPress={this.naviagateBack}>
          <Icon style={styles.backIcon} name="arrow-back" size={24} />
        </TouchableOpacity>

        {/* ------------HEADING---------------- */}
        <Text style={styles.heading}>Enter your phone number</Text>
        <Text style={styles.subHeading}>
          You can log in or make an account if you’re new to the FlokX Face ID
          App.
        </Text>

        {/* ------------FORM---------------- */}
        <Text style={styles.formText}>
          Phone Number <Text style={{color: 'red'}}>*</Text>
        </Text>
        <TextInput
          style={styles.formInput}
          keyboardType="phone-pad"
          placeholder="23456789"
          onChangeText={this.handleNumberChange}
        />
        {this.state.invalidNumber && (
          <Text style={styles.invalidText}>
            Please enter valid phone number
          </Text>
        )}
        {this.state.internalError && (
          <Text style={styles.invalidText}>Something went wrong</Text>
        )}

        {/* ------------CONTINUE BUTTON---------------- */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            activeOpacity={0.9}
            style={styles.continueButton}
            onPress={this.handleSaveNumber}>
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
    fontWeight: 'bold',
    fontSize: 16,
  },
  formInput: {
    marginTop: 10,
    marginLeft: 50,
    marginRight: 50,
    fontWeight: 'bold',
    borderBottomColor: 'black',
    borderBottomWidth: 1.0,
    padding: 0,
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
