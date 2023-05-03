import { Text, View,ScrollView, TouchableWithoutFeedback } from 'react-native';
import { TextInput } from 'react-native-paper';
import * as React from 'react'
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown';
import { Keyboard } from 'react-native';
import styles from '../../assets/StyleSheet/SearchStyles';


const FlightInformation = ({ props }) => {

  const { datas, Adults, setAdults, From, setFrom, To, setTo } = props

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss()}>
  
        <View style={styles.FlightInformation}>
          <View style={{width: '100%', zIndex: 10 }}>
  
            <Text styles={styles.FormText}>Departing airport</Text>
            <AutocompleteDropdown
              clearOnFocus={false}
              showChevron={false}
              showClear={false}
              initialValue={{ id: 'BEY' }}
              onSelectItem={setFrom}
              dataSet={datas}
              suggestionsListMaxHeight={130}
            />
  
          </View>
  
  
          <View style={{ marginTop: '5%', width: '100%', zIndex: 9 }}>
  
            <Text styles={styles.FormText}>Arriving airport</Text>
  
  
            <AutocompleteDropdown
              clearOnFocus={false}
              showChevron={false}
              showClear={false}
              initialValue={{ id: 'NCE' }}
              onSelectItem={setTo}
              dataSet={datas}
              suggestionsListMaxHeight={70}
            />
  
          </View>
  
          
          <View style={{ marginTop: '5%', flex:1 }}>
  
  
            <TextInput
              keyboardType='number-pad'
              mode="outlined"
              label="Adults"
              value={Adults}
              onChangeText={(text) => {
                if (text.length > 1) {
                  text = text.slice(0, 1)
                  setAdults(text)
                }
                else setAdults(text)
              }}
              maxLength={10}
            />
  
          </View>
        
  
      </View>
      </TouchableWithoutFeedback>
    )
  }
  
  export default FlightInformation;