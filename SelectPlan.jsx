import { Button, StyleSheet,Alert, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import { RadioButton } from "react-native-paper";
import AsyncStorage from '@react-native-async-storage/async-storage';


const SelectPlan = ({navigation}) => {
  const [checked, setChecked] = useState("second");
  const [form, setForm] = useState({
    cardName: '',
    name: '',
    expiry: '',
    cvv:'',
  });
  const [final,setfinal] = useState({})

  useEffect(()=>{
    const storeData = async (value) => {
        try {
          const jsonValue = await AsyncStorage.getItem('personal');
          console.log("Data",jsonValue);
          setfinal(jsonValue);
        } catch (e) {
          console.log("error",e)
        }
      };
      storeData();
  },[])

  const handlePress = () => {
    setData({...data,form})
    Alert.alert(JSON.stringify(checked));
    Alert.alert(JSON.stringify(form));
    Alert.alert(JSON.stringify(final));
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={{ fontSize: 25, color: "black" }}>Select Plan</Text>
        <Text style={{ paddingBottom: 15, paddingTop: 15 }}>
          Select plan as per your requirement
        </Text>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.card}>
            <Text
              style={{
                textAlign: "center",
                fontSize: 20,
                padding: 8,
                color: "black",
              }}
            >
              Basic
            </Text>
            <Text style={{ textAlign: "center" }}>
              A simple start for startups & Students
            </Text>
            <Text style={{ textAlign: "center", padding: 10 }}>
              <Text style={{ color: "green", fontSize: 20 }}>
                <Text style={{ fontSize: 10 }}>$</Text>0
              </Text>
              /month
            </Text>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                padding: 10,
              }}
            >
              <RadioButton
                value="first"
                status={checked === "first" ? "checked" : "unchecked"}
                onPress={() => setChecked("first")}
              />
            </View>
          </View>
          <View style={styles.card}>
            <Text
              style={{
                textAlign: "center",
                fontSize: 20,
                padding: 8,
                color: "black",
              }}
            >
              Standard
            </Text>
            <Text style={{ textAlign: "center" }}>
              For small to medium businessess
            </Text>
            <Text style={{ textAlign: "center", padding: 10 }}>
              <Text style={{ color: "green", fontSize: 20 }}>
                <Text style={{ fontSize: 10 }}>$</Text>99
              </Text>
              /month
            </Text>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <RadioButton
                value="second"
                status={checked === "second" ? "checked" : "unchecked"}
                onPress={() => setChecked("second")}
              />
            </View>
          </View>
          <View style={styles.card}>
            <Text
              style={{
                textAlign: "center",
                fontSize: 20,
                padding: 8,
                color: "black",
              }}
            >
              Enterprise
            </Text>
            <Text style={{ textAlign: "center" }}>
              Solution for enterprise & organizations
            </Text>
            <Text style={{ textAlign: "center", padding: 10 }}>
              <Text style={{ color: "green", fontSize: 20 }}>
                <Text style={{ fontSize: 10 }}>$</Text>499
              </Text>
              /month
            </Text>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <RadioButton
                value="third"
                status={checked === "third" ? "checked" : "unchecked"}
                onPress={() => setChecked("third")}
              />
            </View>
          </View>
        </View>
      </View>
      <View>
        <Text style={{ fontSize: 25, color: "black", paddingTop: 20 }}>
          Payment Information
        </Text>
        <Text style={{ paddingTop: 15, paddingBottom: 15, fontSize: 15 }}>
          Enter your card information
        </Text>
        <View style={styles.coloums}>
          <View style={[styles.formContent, { width: "100%" }]}>
            <Text style={{ paddingBottom: 5 }}>Card Number</Text>
            <TextInput
              style={styles.input}
              placeholder="0000 0000 0000 0000"
              name="cardname"
              keyboardType="numeric"
              onChangeText={cardName => setForm({ ...form,cardName })}

              // onChangeText={onChangeField('email')}
            />
          </View>
        </View>

        {/* Second */}
        <View style={styles.coloums}>
          <View style={[styles.formContent, { width: "55%" }]}>
            <Text style={{ paddingBottom: 5 }}>Name on Card</Text>
            <TextInput
              style={styles.input}
              placeholder="john"
              onChangeText={name => setForm({ ...form,name })}

              // onChangeText={onChangeField('email')}
            />
          </View>
          <View style={styles.formContent}>
            <Text style={{ paddingBottom: 5 }}>Expiry</Text>
            <TextInput
              style={styles.input}
              placeholder="MM/YY"
            onChangeText={expiry => setForm({ ...form,expiry })}

              // onChangeText={onChangeField('email')}
            />
          </View>
          <View style={styles.formContent}>
            <Text style={{ paddingBottom: 5 }}>CVV</Text>
            <TextInput
              style={styles.input}
              placeholder="234"
              onChangeText={cvv => setForm({ ...form,cvv })}

              // onChangeText={onChangeField('email')}
            />
          </View>
        </View>
      </View>

      <View style={{flexDirection:"row",justifyContent:"space-between",paddingTop:30}}>

<Button title="<- Previous"
    onPress={() => navigation.navigate('Home')}
/>
<Button style={{}} title="Submit"
    onPress={handlePress}
/>
</View>
    </View>
  );
};

export default SelectPlan;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingLeft: 20,
  },
  card: {
    border: 1,
    borderColor: "grey",
    borderWidth: 1,
    width: "30%",
    margin: 5,
    borderRadius: 8,
    // display: "flex",
    // justifyContent: "center",
    // textAlign: "center",
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
    width: "24%",
    padding: 10,
  },
});
