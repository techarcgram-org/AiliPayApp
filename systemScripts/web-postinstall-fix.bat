@echo off

REM Fixing PropTypes issues for react-native-web and react-native-snap-carousel

echo Fixing PropTypes issues

REM Fix for react-native-web
if exist node_modules\react-native-web\dist\exports\ViewPropTypes\index.js (
    echo ViewPropTypes problem fixed already!
) else (
    mkdir node_modules\react-native-web\dist\exports\ViewPropTypes
    echo var ViewPropTypes = { style: null }; export default ViewPropTypes;>> node_modules\react-native-web\dist\exports\ViewPropTypes\index.js
    echo export { default as ViewPropTypes } from './exports/ViewPropTypes';>> node_modules\react-native-web\dist\index.js
)

REM Fix for react-native-web Text.propTypes
findstr /C:"Text.propTypes = {}" node_modules\react-native-web\dist\exports\Text\index.js > nul
if %errorlevel% equ 0 (
    echo Text props types problem fixed already!
) else (
    echo Text.propTypes = {}>> node_modules\react-native-web\dist\exports\Text\index.js
)

REM Replace ViewPropTypes.style with ViewPropTypes?.style in react-native-router-flux
findstr /C:"ViewPropTypes?.style" node_modules\react-native-router-flux\src\Router.js > nul
if %errorlevel% equ 0 (
    echo 'ViewPropsTypes' already fixed in react-native-router-flux.
) else (
    powershell -Command "(Get-Content node_modules\react-native-router-flux\src\Router.js -Raw) -replace 'ViewPropTypes.style', 'ViewPropTypes?.style' | Set-Content node_modules\react-native-router-flux\src\Router.js"
    echo Replaced 'ViewPropTypes.style' with 'ViewPropTypes?.style' in react-native-router-flux.
)

echo PropTypes issues fixed successfully!