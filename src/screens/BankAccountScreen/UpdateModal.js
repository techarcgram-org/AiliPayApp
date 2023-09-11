import { StyleSheet, View } from 'react-native';
import { ErrorMessage, Field, Formik } from 'formik';
import { bankValidationSchema } from '../../validationSchemas/verificationSchema';
import CustomButton from '../../components/CustomButton';
import CustomSelectInput from '../../components/CustomSelectInput';
import InputErrorMessage from '../../components/InputErrorMessage';
import CustomInput from '../../components/CustomInput';
import { CustomModal } from '../../components/CustomModal';

const UpdateModal = ({ handleSubmit, loading, modalVisible, setModalVisible, banks }) => {
  return (
    <View style={styles.container}>
      <CustomModal setModalVisible={setModalVisible} modalVisible={modalVisible}>
        <Formik
          validationSchema={bankValidationSchema}
          initialValues={{ bank_id: '', account_number: '' }}
          onSubmit={(values) => handleSubmit(values)}>
          {({ handleSubmit, isValid }) => (
            <>
              <Field
                component={CustomInput}
                name="account_number"
                placeholder="Bank Account Number"
                editable={!loading}
                inputMode="text"
              />
              <ErrorMessage component={InputErrorMessage} name="account_number" />
              <Field
                component={CustomSelectInput}
                name="bank_id"
                placeholder="Select Your Bank"
                editable={!loading}
                options={banks}
              />
              <ErrorMessage component={InputErrorMessage} name="bank_id" />
              <CustomButton
                style={{ marginTop: 10 }}
                title={'Add Bank'}
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
          title="Add new bank account"
          color="white"
          backgroundColor="#063B87"
          onPress={() => setModalVisible(true)}
        />
      </View>
    </View>
  );
};

export default UpdateModal;

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
