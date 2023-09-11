import { StyleSheet, View } from 'react-native';
import { ErrorMessage, Field, Formik } from 'formik';
import { bankValidationSchema } from '../../validationSchemas/verificationSchema';
import CustomButton from '../../components/CustomButton';
import InputErrorMessage from '../../components/InputErrorMessage';
import CustomInput from '../../components/CustomInput';
import { CustomModal } from '../../components/CustomModal';
import { phoneValidationSchema } from '../../validationSchemas/modalInputSchemas';

const MobileMoneyModal = ({ handleSubmit, loading, modalVisible, setModalVisible }) => {
  return (
    <View style={styles.container}>
      <CustomModal setModalVisible={setModalVisible} modalVisible={modalVisible}>
        <Formik
          validationSchema={phoneValidationSchema}
          initialValues={{ phone_number: '' }}
          onSubmit={(values) => handleSubmit(values)}>
          {({ handleSubmit, isValid }) => (
            <>
              <Field
                component={CustomInput}
                name="phone_number"
                placeholder="Enter Phone Number"
                editable={!loading}
                inputMode="number"
              />
              <ErrorMessage component={InputErrorMessage} name="phone_number" />
              <CustomButton
                style={{ marginTop: 10 }}
                title={'Add MoMo Account'}
                backgroundColor="#063B87"
                color="white"
                onPress={handleSubmit}
                disabled={!isValid}
                loading={loading}
                type="submit"
              />
            </>
          )}
        </Formik>
      </CustomModal>
      <View style={styles.buttonContainer}>
        <CustomButton
          title="Add new MoMo account"
          color="white"
          backgroundColor="#063B87"
          onPress={() => setModalVisible(true)}
        />
      </View>
    </View>
  );
};

export default MobileMoneyModal;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    flex: 1
  },
  close: {
    position: 'absolute',
    top: 10,
    right: 15,
    width: '10%'
  },
  buttonContainer: {
    padding: 20,
    width: '100%'
  }
});
