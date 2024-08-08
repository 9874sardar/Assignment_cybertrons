import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Formik } from "formik";
import AsyncStorage from '@react-native-async-storage/async-storage';

const PersonalInfo = ({ navigation }) => {

    const storeData = async (value) => {
        try {
          await AsyncStorage.setItem('personal', JSON.stringify(value));
          const jsonValue = await AsyncStorage.getItem('personal');
          console.log("Data",jsonValue);
          navigation.navigate('plan');
        } catch (e) {
          console.log("error",e)
        }
      };

  return (
    <View style={styles.container}>
        
      <Text style={styles.formheaderTxt}>Personal Information</Text>
      <Text style={styles.formheaderSubTxt}>
        Enter Your Personal Information
      </Text>
      {/* <View></View> */}

      <Formik
        initialValues={{ firstName: "", lastName: "",mobile: "",
            pinecode: "",
            address: "",
            landmark: "",
            city: "",
         }}
        validate={values => {
            const errors = {};
            if (!values.firstName) {
              errors.firstName = 'Required';
            } 
            if (!values.lastName) {
              errors.lastName = 'Required';
            } 
            if (!values.mobile) {
              errors.mobile = 'Required';
            } 
            if (!values.pinecode) {
              errors.pinecode = 'Required';
            } 
            if (!values.address) {
              errors.address = 'Required';
            } 
            if (!values.landmark) {
              errors.landmark = 'Required';
            } 
            if (!values.city) {
              errors.city = 'Required';
            } 
            return errors;
          }}
        onSubmit={(values) => storeData(values)}
        >
            {({ handleChange,errors, handleSubmit, values }) => (
          <>
        {/* //first  */}
        <View style={styles.coloums}>
          <View style={styles.formContent}>
            <Text style={{ paddingBottom: 5 }}>First Name</Text>
            <TextInput
            name="firstName"
              style={styles.input}
              placeholder="john"
              onChangeText={handleChange('firstName')}
            //   value={values.firstName}
            />
             <Text style={{color:"red"}}>{errors.firstName}</Text>
          </View>
          <View style={styles.formContent}>
            <Text style={{ paddingBottom: 5 }}>Last Name</Text>
            <TextInput
            name="lastName"
              style={styles.input}
              placeholder="Doe"
              onChangeText={handleChange('lastName')}
            //   value={values.lastName}
            />
            <Text style={{color:"red"}}>{errors.lastName}</Text>
          </View>
        </View>

        {/* Second */}
        <View style={styles.coloums}>
          <View style={styles.formContent}>
            <Text style={{ paddingBottom: 5 }}>Mobile</Text>
            <TextInput
              style={styles.input}
              placeholder="202 555 011"
              keyboardType="numeric"
              maxLength={10}
              name="mobile"
              onChangeText={handleChange('mobile')}
              value={values.mobile}
            />
            <Text style={{color:"red"}}>{errors.mobile}</Text>
          </View>
          <View style={styles.formContent}>
            <Text style={{ paddingBottom: 5 }}>Pinecode</Text>
            <TextInput
              style={styles.input}
              placeholder="689421"
              keyboardType="numeric"
              maxLength={6}
              name="pinecode"
              onChangeText={handleChange('pinecode')}  
              value={values.pinecode}
          />
          <Text style={{color:"red"}}>{errors.pinecode}</Text>
          </View>
        </View>

        {/* Thrid */}
        <View style={styles.coloums}>
          <View style={[styles.formContent, { width: "100%" }]}>
            <Text style={{ paddingBottom: 5 }}>Address</Text>
            <TextInput
              style={styles.input}
              placeholder="7777,Mendez Plains, Florida"
              multiline={true}
              name="address"
              onChangeText={handleChange('address')}  
              value={values.address}
            />
             <Text style={{color:"red"}}>{errors.address}</Text>
          </View>
        </View>

        {/* Fourth */}
        <View style={styles.coloums}>
          <View style={[styles.formContent, { width: "100%" }]}>
            <Text style={{ paddingBottom: 5 }}>Landmark</Text>
            <TextInput
              style={styles.input}
              placeholder="Mendex Plains"
              name="landmark"
              onChangeText={handleChange('landmark')}  
              value={values.landmark}
            />
             <Text style={{color:"red"}}> {errors.landmark}</Text>
          </View>
        </View>

        {/* Fifth */}
        <View style={styles.coloums}>
          <View style={styles.formContent}>
            <Text style={{ paddingBottom: 5 }}>City</Text>
            <TextInput
              style={styles.input}
              placeholder="Miami"
              name="city"
              onChangeText={handleChange('city')}  
              value={values.city}
            />
            <Text style={{color:"red"}}>{errors.city}</Text>
          </View>
          <View style={styles.formContent}>
            <Text style={{ paddingBottom: 5 }}>State</Text>
            <TextInput
              style={styles.input}
              placeholder="Doe"
              // onChangeText={onChangeField('email')}
            />
            {/* <FlatList 
            data={["Floria","New York","Paris"]}
            renderItem={({item, index}) => (
              <TouchableOpacity>
                  <Text
                    >
                    {item || ''}
                  </Text>
              </TouchableOpacity>
            )}
          /> */}
          </View>
        </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Button title="<- Previous" />
        <Button
          style={{}}
          title="Next ->"
          onPress={handleSubmit}
              />
      </View>
              </>
               )}
            </Formik>
    </View>
  );
};

export default PersonalInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    // backgroundColor:"#fff"
  },
  formheaderTxt: {
    fontSize: 28,
    color: "black",
    // padding:10
  },
  formheaderSubTxt: {
    fontSize: 16,
    paddingBottom: 25,
    paddingTop: 10,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    width: "100%",
    borderColor: "grey",
    borderRadius: 8,
  },
  coloums: {
    // flex:1,
    flexDirection: "row",
    // height:30,
    justifyContent: "space-evenly",
  },
  formContent: {
    width: "50%",
    padding: 10,
  },
});
