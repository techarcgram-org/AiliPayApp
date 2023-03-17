import { StyleSheet, View } from 'react-native';

export default function LineSeparator () {
    return (
        <View style={styles.lineSeparator} />
    );
}

const styles = StyleSheet.create({
    lineSeparator: {
        borderBottomColor: "#ACB3BC",
        borderBottomWidth: 2,
        marginVertical: 20,
      },
})