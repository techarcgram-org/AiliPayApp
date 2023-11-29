{/* <Formik
                validationSchema={ bankValidationSchema }
                initialValues={{ accountName: '', accountNumber: '', routingNumber: '', bankName: '', bankAddress: '', swiftCode: '' }}
                onSubmit={(values) => {
                  //handle submission code goes here

                  console.log(`bank details are  ${values}`);
                }}>
                {({ handleSubmit, isValid }) => (
                  <>
                    <Field
                      component={CustomInput}
                      name="accountName"
                      placeholder="Account Holder Name"
                      // inputMode="accountName"
                    />
                    <ErrorMessage component={InputErrorMessage} name="accountName" /> 
                    <Field
                      component={CustomInput}
                      name="accountNumber"
                      placeholder="Account Number"
                      // inputMode="accountNumber"
                    />
                    <ErrorMessage component={InputErrorMessage} name="accountNumber" />
                    <Field
                      component={CustomInput}
                      name="routingNumber"
                      placeholder="Routing Number"
                      // inputMode="routingNumber"
                    />
                    <ErrorMessage component={InputErrorMessage} name="routingNumber" /> 
                    <Field
                      component={CustomInput}
                      name="bankName"
                      placeholder="Bank Name"
                      // inputMode="bankName"
                    />
                    <ErrorMessage component={InputErrorMessage} name="bankName" />
                    <Field
                      component={CustomInput}
                      name="bankAddress"
                      placeholder="Bank Address"
                      // inputMode="bankAddress"
                    />
                    <ErrorMessage component={InputErrorMessage} name="bankAddress" />
                    <Field
                      component={CustomInput}
                      name="swiftCode"
                      placeholder="SWIFT/BIC Code"
                      // inputMode="swiftCode"
                    />
                    <ErrorMessage component={InputErrorMessage} name="swiftCode" /> 
                    <CustomButton
                      style={{ marginTop: 10 }}
                      title={'Add Bank Account'}
                      backgroundColor="#063B87"
                      color="white"
                      onPress={handleSubmit}
                      disabled={!isValid}
                      type='submit'
                    />
                  </>
                )}
              </Formik> */}