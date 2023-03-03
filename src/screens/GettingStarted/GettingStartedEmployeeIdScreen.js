import { 
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Logo from '../../components/Logo';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import CustomHr from '../../components/CustomHr';

export default function GettingStartedEmployeeIdScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Logo color="#063B87" />
      </View>
      <View style={styles.form}>
        <Text style={styles.formHeader}>Lets' get started</Text>
        <View>
          <CustomInput placeholder="Employee ID (required)" />
          <CustomInput placeholder="Last Name (required)" />
          <CustomInput placeholder="Empolyer (optional)" />
          <CustomButton title="Next" backgroundColor="#063B87" color="white" onPress={Actions.verifyIdentify}/>
        </View>
      </View>
      <View style={styles.info}>
        <CustomHr style={styles.hr} text="or" />
        <CustomButton backgroundColor="transparent" title="Try your phone" color="grey" onPress={Actions.gettingStartedPhoneScreen} />
        <CustomButton backgroundColor="transparent" title="Try you Email" color="grey" onPress={Actions.gettingStartedEmailScreen} />
      </View>
      <View style={styles.pageFooter}>
        <Text style={styles.loginInstead}>Login Instead</Text>
        <View style={styles.helpText}>
          <Text style={styles.frontText}>Need Help? </Text>
          <Text>© AirliPay 2023</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    color: "white",
    padding: 40,
    flexDirection: "column"
  },
  header: {
    flexDirection: "row",
    top: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  form: {
    flex: 3,
    marginTop: 40
  },
  info: {
    flex: 2,
    marginTop: 30
  },
  hr: {
    marginBottom: 40
  },
  formHeader: {
    fontWeight: 700,
    fontSize: 25,
    marginTop: 40,
    marginBottom: 20
  },
  pageFooter: {
    flex: 1,
    marginTop: 40,
    alignItems: "center"
  },
  loginInstead: {
    fontWeight: 700,
    color: "#3F5F90",
    marginBottom: 20
  },
  helpText: {
    flexDirection: "row"
  },
  frontText: {
    fontWeight: 600,
  }
});