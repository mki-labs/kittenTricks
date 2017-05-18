import React from 'react';
import {
  ScrollView,
  View,
  StyleSheet
} from 'react-native';
import {
  RkText,
  RkTextInput,
  RkAvoidKeyboard
} from 'react-native-ui-kitten';
import {Users} from '../../data/appData';
import {Avatar} from '../../components';
import {KittenTheme} from '../../config/theme';
import {SocialSetting} from '../../components';
import {FontAwesome} from '../../assets/icons';
import {Colors} from '../../config/theme';
import {GradientButton} from '../../components';

export class ProfileSettings extends React.Component {
  static navigationOptions = {
    title: 'Profile Settings'.toUpperCase()
  };

  constructor(props) {
    super(props);
    this.user = Users[0];

    this.state = {
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      email: this.user.email,
      country: this.user.country,
      phone: this.user.phone,
      password: this.user.password,
      newPassword: this.user.newPassword,
      confirmPassword: this.user.confirmPassword,
      twitter: true,
      google: false,
      facebook: false
    }
  }

  render() {
    return (
      <ScrollView>
        <RkAvoidKeyboard>
          <View style={styles.header}>
            <Avatar img={this.user.photo} rkType='big'/>
          </View>
          <View style={styles.section}>
            <View style={[styles.row, styles.heading]}>
              <RkText rkType='header6 primary'>INFO</RkText>
            </View>
            <View style={styles.row}>
              <RkTextInput label='First Name'
                           value={this.state.firstName}
                           rkType='right clear'
                           onChangeText={(text) => this.setState({firstName: text})}/>
            </View>
            <View style={styles.row}>
              <RkTextInput label='Last Name'
                           value={this.state.lastName}
                           onChangeText={(text) => this.setState({lastName: text})}
                           rkType='right clear'/>
            </View>
            <View style={styles.row}>
              <RkTextInput label='Email'
                           value={this.state.email}
                           onChangeText={(text) => this.setState({email: text})}
                           rkType='right clear'/>
            </View>
            <View style={styles.row}>
              <RkTextInput label='Country'
                           value={this.state.country}
                           onChangeText={(text) => this.setState({country: text})}
                           rkType='right clear'/>
            </View>
            <View style={styles.row}>
              <RkTextInput label='Phone'
                           value={this.state.phone}
                           onChangeText={(text) => this.setState({phone: text})}
                           rkType='right clear'/>
            </View>

          </View>

          <View style={styles.section}>
            <View style={[styles.row, styles.heading]}>
              <RkText rkType='primary header6'>CHANGE PASSWORD</RkText>
            </View>
            <View style={styles.row}>
              <RkTextInput label='Old Password'
                           value={this.state.password}
                           rkType='right clear'
                           secureTextEntry={true}
                           onChangeText={(text) => this.setState({password: text})}/>
            </View>
            <View style={styles.row}>
              <RkTextInput label='New Password'
                           value={this.state.newPassword}
                           rkType='right clear'
                           secureTextEntry={true}
                           onChangeText={(text) => this.setState({newPassword: text})}/>
            </View>
            <View style={styles.row}>
              <RkTextInput label='Confirm Password'
                           value={this.state.confirmPassword}
                           rkType='right clear'
                           secureTextEntry={true}
                           onChangeText={(text) => this.setState({confirmPassword: text})}/>
            </View>
          </View>

          <View style={styles.section}>
            <View style={[styles.row, styles.heading]}>
              <RkText rkType='primary header6'>CONNECT YOUR ACCOUNT</RkText>
            </View>
            <View style={styles.row}>
              <SocialSetting name='Twitter' icon={FontAwesome.twitter} tintColor={Colors.twitter}/>
            </View>
            <View style={styles.row}>
              <SocialSetting name='Google' icon={FontAwesome.google} tintColor={Colors.google}/>
            </View>
            <View style={styles.row}>
              <SocialSetting name='Facebook' icon={FontAwesome.facebook} tintColor={Colors.facebook}/>
            </View>
          </View>
          <GradientButton rkType='large' style={styles.button} text='SAVE'/>
        </RkAvoidKeyboard>
      </ScrollView>
    )
  }
}

let styles = StyleSheet.create({
  header: {
    backgroundColor: KittenTheme.colors.back.neutral,
    paddingVertical: 25
  },
  section: {
    marginVertical: 25
  },
  heading: {
    paddingBottom: 12.5
  },
  row: {
    flexDirection: 'row',
    paddingHorizontal: 17.5,
    borderBottomWidth: 1,
    borderColor: KittenTheme.colors.border.underline,
    alignItems: 'center'
  },
  button: {
    marginHorizontal: 16,
    marginBottom: 32
  }
});