import { 
  StyleSheet,
  Text,
} from 'react-native';

export default function Logo(props) {
  return (
    <Text style={styles.logo(props.color)}>AirliPay.</Text>
  );
}

const styles = StyleSheet.create({
  logo: (color) => ({
    fontSize: 42,
    fontWeight: 700,
    color: color ? color : "white"
  }),
});