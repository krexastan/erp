import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  ImageBackground, 
  Image, 
  TextInput, 
  TouchableOpacity, 
  KeyboardAvoidingView, 
  Platform, 
  ScrollView 
} from 'react-native';
import { useRouter } from 'expo-router';
// import icons, gender picker, and date picker
import { Ionicons, FontAwesome5, Fontisto } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker'; // gender
import DateTimePicker from '@react-native-community/datetimepicker'; // dob

const PassenegerRegister = () => {
  const router = useRouter();

  // form state
  const [fullName, setFullName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('choose'); // gender: choose default
  const [address, setAddress] = useState('');
  const [age, setAge] = useState('');

  // dob state handling
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [formattedDOB, setFormattedDOB] = useState('MM/DD/YYYY');

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === 'ios');
    setDate(currentDate);

  
    let tempDate = new Date(currentDate);
    let fDate = tempDate.getMonth() + 1 + '/' + tempDate.getDate() + '/' + tempDate.getFullYear();
    setFormattedDOB(fDate);
    
    // age auto-calculation based on DOB
    let today = new Date();
    let calculatedAge = today.getFullYear() - tempDate.getFullYear();
    const m = today.getMonth() - tempDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < tempDate.getDate())) {
        calculatedAge--;
    }
    setAge(calculatedAge.toString());
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer} bounces={false}>
        
        {/* bg */}
        <ImageBackground 
          source={require('../assets/erp/bg.png')} 
          style={styles.topSection}
        >
          <View style={styles.logoContainer}>
            <View style={styles.logoBox}>
              <Image 
                source={require('../assets/erp/erp_logo.jpg')} 
                style={styles.logoImage} 
              />
            </View>
          </View>
        </ImageBackground>

        {/* registration */}
        <View style={styles.bottomSection}>
          
          <View style={styles.badgeContainer}>
            <Text style={styles.badgeText}>Passenger Registration</Text>
          </View>
          
          <Text style={styles.sectionTitle}>Basic Information</Text>

          {/* input section */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Full Name</Text>
            <View style={styles.inputContainer}>
              <View style={styles.iconBox}>
                <Ionicons name="person" size={18} color="white" />
              </View>
              <TextInput 
                style={styles.textInput} 
                placeholder="Full Name"
                value={fullName}
                onChangeText={setFullName}
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Mobile Number</Text>
            <View style={styles.inputContainer}>
              <View style={styles.iconBox}>
                <FontAwesome5 name="phone-alt" size={16} color="white" />
              </View>
              <TextInput 
                style={styles.textInput} 
                placeholder="Mobile Number"
                keyboardType="phone-pad"
                value={mobile}
                onChangeText={setMobile}
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Email Address</Text>
            <View style={styles.inputContainer}>
              <View style={styles.iconBox}>
                <Fontisto name="email" size={16} color="white" />
              </View>
              <TextInput 
                style={styles.textInput} 
                placeholder="Email Address"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Gender</Text>

            <View style={styles.dropdownContainer}>
              <Picker
                selectedValue={gender}
                onValueChange={(itemValue) => setGender(itemValue)}
                style={styles.pickerStyle}
                dropdownIconColor="#0047AB"
              >
                <Picker.Item label="Choose" value="choose" color="#A9A9A9" />
                <Picker.Item label="Male" value="male" />
                <Picker.Item label="Female" value="female" />
                <Picker.Item label="Other" value="other" />
              </Picker>
            </View>
          </View>


          <View style={styles.row}>
            {/* dob */}
            <View style={[styles.inputGroup, { flex: 2, marginRight: 15 }]}>
                <Text style={styles.inputLabel}>Date of Birth</Text>
                <TouchableOpacity 
                    style={styles.inputContainerDOB}
                    onPress={() => setShowDatePicker(true)}
                >
                    <Text style={[styles.textInputDOB, formattedDOB === 'MM/DD/YYYY' && {color: '#A9A9A9'}]}>
                        {formattedDOB}
                    </Text>
                    <Fontisto name="date" size={18} color="#0047AB" style={{marginRight: 10}} />
                </TouchableOpacity>
                {showDatePicker && (
                    <DateTimePicker
                        value={date}
                        mode="date"
                        display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                        onChange={onDateChange}
                        maximumDate={new Date()} // prevent future dates to be selected
                    />
                )}
            </View>

            <View style={[styles.inputGroup, { flex: 1 }]}>
                <Text style={styles.inputLabel}>Age</Text>
                <View style={styles.inputContainerAge}>
                    <TextInput 
                        style={styles.textInputAge} 
                        placeholder="00"
                        keyboardType="number-pad"
                        maxLength={3}
                        value={age}
                        onChangeText={setAge}
                    />
                </View>
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Home Address</Text>
            <View style={styles.inputContainer}>
              <View style={styles.iconBox}>
                <Ionicons name="home" size={18} color="white" />
              </View>
              <TextInput 
                style={styles.textInput} 
                placeholder="Home Address"
                value={address}
                onChangeText={setAddress}
                multiline={true} // multi-line if address is tulong
                numberOfLines={2}
              />
            </View>
          </View>


          <View style={styles.footerRow}>
            {/* pagination */}
            <Text style={styles.paginationText}>1 / 3</Text>
            
            <View style={styles.buttonActionGroup}>
                <TouchableOpacity 
                    style={styles.buttonBack}
                    onPress={() => router.back()}
                >
                    <Text style={styles.buttonBackText}>Back</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonNext}>
                    <Text style={styles.buttonNextText}>Next</Text>
                </TouchableOpacity>
            </View>
          </View>

        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

// styling for registration screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  topSection: {
    height: 180, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    backgroundColor: 'rgba(0, 71, 171, 0.4)', 
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoBox: {
    width: 140, 
    height: 140,
    backgroundColor: '#fff',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  logoImage: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
  },
  bottomSection: {
    flex: 1,
    backgroundColor: '#F8FBFF', 
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingHorizontal: 25,
    paddingTop: 20,
    marginTop: -40, 
  },
  badgeContainer: {
    backgroundColor: '#0047AB',
    paddingVertical: 10,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 10,
  },
  badgeText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
  sectionTitle: {
    fontSize: 15,
    color: '#0047AB',
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: '600',
  },
  inputGroup: {
    marginBottom: 15,
  },
  inputLabel: {
    fontSize: 11,
    color: '#6B82A6',
    fontWeight: '600',
    marginBottom: 4,
    marginLeft: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D8E2F0',
    borderRadius: 8,
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  iconBox: {
    width: 40,
    height: 42,
    backgroundColor: '#0047AB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    height: 42,
    paddingHorizontal: 12,
    fontSize: 14,
    color: '#000',
  },

  // dropdown and DOB styling
  row: {
    flexDirection: 'row',
  },
  dropdownContainer: {
    borderWidth: 1,
    borderColor: '#D8E2F0',
    borderRadius: 8,
    backgroundColor: '#fff',
    height: 42,
    justifyContent: 'center',
  },
  pickerStyle: {
    color: '#000',
    transform: [{ scaleX: 0.9 }, { scaleY: 0.9 }], 
  },
  inputContainerDOB: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D8E2F0',
    borderRadius: 8,
    backgroundColor: '#fff',
    height: 42,
  },
  textInputDOB: {
    flex: 1,
    paddingHorizontal: 15,
    fontSize: 14,
    color: '#000',
  },
  inputContainerAge: {
    borderWidth: 1,
    borderColor: '#D8E2F0',
    borderRadius: 8,
    backgroundColor: '#fff',
    overflow: 'hidden',
    height: 42,
  },
  textInputAge: {
    flex: 1,
    textAlign: 'center',
    fontSize: 14,
    color: '#0047AB', 
    fontWeight: '600',
  },
 
  footerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 15,
    marginBottom: 20,
    paddingHorizontal: 5,
  },
  paginationText: {
    color: '#0047AB',
    fontSize: 16,
    fontWeight: '700',
  },
  buttonActionGroup: {
    flexDirection: 'row',
    gap: 15, 
  },
 
  buttonBack: {
    backgroundColor: '#F8FBFF',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#0047AB',
  },
  buttonBackText: {
    color: '#0047AB',
    fontSize: 15,
    fontWeight: '700',
  },
 
  buttonNext: {
    backgroundColor: '#0047AB',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 8,
    elevation: 3,
  },
  buttonNextText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '700',
  },
});

export default PassenegerRegister;