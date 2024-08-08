import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PersonalInfo from "./PersonalInfo";
import SelectPlan from "./SelectPlan";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    // <PersonalInfo/>
    // <SelectPlan/>
    <NavigationContainer>
        <Stack.Navigator>
         <Stack.Screen name="Home" component={PersonalInfo} />
         <Stack.Screen name="plan" component={SelectPlan} />
       </Stack.Navigator>
   </NavigationContainer>
  );
};

export default App;
