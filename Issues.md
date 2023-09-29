# Errors related to the UI

1. ## Landing screen

### The loader to automatically take user to the next screen after some seconds of delay.

### An automatic navigation should be added inside a setTimeOut function

- A possible solution

```Javascript
setTimeOut(() => ,{
  // some other animation function
  navigation.navigate('next_screen')
},2500)
```

2. ## Auth Screen

### The links in the auth screens like login and signup do not look clickable

- A possible solution

```Javascript
import {Stylesheet} from 'react-native'

const styles = Stylesheet.create({
  footerText:{
    color:'a color that will make the text look more clickable to the user'
  }
})
```

3. ## Scrollbar with should not be showing

# Errors related to Functionality

1. ## If a user is already having a session, when clicking on the login or signup, would it not best to route them to the next available screen instead?

2. ## The back button that should enable backward navigation is not working

- Possible solution

```Javascript
<Ionicons name="left-arrow" size={30} color="black" style={{
  right:20
}} onPress={() => navigation.goBack()} >
```

3. ## Things related to setting should stay consistent even when the user comes to the application aftet some time

4. ## Translation missing on some screens
- Possible solution
### I will fix that personally

### Taking translation for example. When the app is refeshed, the app goes back to english even if the was already set to french

5. ## Some errors in navigation

```json
 ERROR  The action 'NAVIGATE' with payload {"name":""} was not handled by any navigator.
```
`https://reactnavigation.org/docs/navigation-actions`

# Errors related the API

1. ## ERROR Couldn't get user airlipay balance: 401 {"message": "Unauthorized", "statusCode": 401}

### user does not yet have a wallet and instead of returning a balance of zero, rather a balance with a 401 error

2. ## Property name of undefined

### When navigating to some screens
`will insert the image displaying the error`

3. ## Invalid phone number

### Adding a momo number but receiving an error of Invalid phone number
`will insert the image displaying the error`

4. ## Adding  a credit card

### Is like request is not being sent completely to the backend

### Addition of bank is going on well but is like there is a lack in a get request to get the users bank
