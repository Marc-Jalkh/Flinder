import { Text, View } from 'react-native';
import { RadioButton } from 'react-native-paper';
import * as React from 'react'
import styles from '../../assets/StyleSheet/SearchStyles'

const RadioButtons = ({ props }) => {

  const { OWchecked, setOwChecked, RTchecked, setRtChecked } = props

  return (
    <View style={styles.RadioView}>

      <View style={styles.IndevRadioView}>
        <View style={{ borderWidth: 0.5, height: '90%', borderRadius: '50%', margin: '2%' }}>
          <RadioButton
            value='first'
            status={OWchecked ? 'checked' : 'unchecked'}
            onPress={() => {
              setOwChecked(!OWchecked)
              setRtChecked(OWchecked)
            }}
          />
        </View>
        <Text style={styles.RadioText}>  Economy</Text>

      </View>

      <Text>           </Text>

      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <View style={{ borderWidth: 0.5, height: '90%', borderRadius: '50%', margin: '2%' }}>
          <RadioButton
            value='first'
            status={RTchecked ? 'checked' : 'unchecked'}
            onPress={() => {
              setRtChecked(!RTchecked)
              setOwChecked(RTchecked )
            }}
          />
        </View>
        <Text style={styles.RadioText}> Business</Text>

      </View>

    </View>
  )

}

export default RadioButtons;