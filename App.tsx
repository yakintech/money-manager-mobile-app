import { View, Text, SafeAreaView, Button, NativeModules, Platform } from 'react-native'
import React, { useEffect, useState } from 'react'
import MainScreen from './src/screens/MainScreen';
import './src/assets/i18n/i18n';
import { useTranslation } from 'react-i18next';
import { NavigationContainer } from '@react-navigation/native';
import Tab from './src/navigations/Index';




const App = () => {
  
  // const { t, i18n } = useTranslation();

  // const [currentLanguage, setLanguage] = useState('');


  // const changeLanguage = (language: string) => {
  //   i18n
  //     .changeLanguage(language)
  //     .then(() => setLanguage(language))
  //     .catch(err => console.log(err));
  // }

  return (<>
  <NavigationContainer>
    <Tab/>
  </NavigationContainer>
    {/* <SafeAreaView>
      <Text style={{ fontSize: 40 }}>{t('hello')}</Text>
      <Button
        title='TR'
        onPress={() => changeLanguage('tr')}></Button>
      <Button
        title='AZ'
        onPress={() => changeLanguage('az')}></Button>
      <Button
        title='EN'
        onPress={() => changeLanguage('en')}></Button>
    </SafeAreaView> */}

  </>
  )
}

export default App