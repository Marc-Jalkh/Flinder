import { View} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import * as React from 'react'
import { DatePickerModal } from "react-native-paper-dates"
import styles from '../../assets/StyleSheet/SearchStyles';
import { SafeAreaView } from 'react-native-safe-area-context';


const CalendarDates = ({props}) => {

    const{range, setRange, Dates, setDates, open, setOpen} = props

    const onDismiss = React.useCallback(() => {
      setOpen(false);
    }, [setOpen]);
  
    const onConfirm = React.useCallback(
      ({ startDate, endDate }) => {
        setOpen(false);
        setRange({ startDate: startDate, endDate: endDate });
        setDates({ Departure: startDate.toString(), Arrival: endDate.toString() })
      },
      [setOpen, setRange]
    );
  
  
    return (
      <View style={styles.CalendarDates}>
        <View >
          <Button onPress={() => setOpen(true)} uppercase={false} mode="outlined">
            Pick range
          </Button>
          <SafeAreaView>
          <DatePickerModal
            locale="en"
            mode="range"
            visible={open}
            onDismiss={onDismiss}
            startDate={range.startDate}
            endDate={range.endDate}
            onConfirm={onConfirm}
            validRange={{ startDate: range.startDate, endDate: undefined, disabledDates: undefined}}
          />
          </SafeAreaView>
        </View>
  
        <View style={{ flex: 1, flexDirection: 'row', marginBottom: '70%', zIndex: 2 }}>
  
          <View style={{ width: '45%', marginTop: '10%', marginLeft: '2%' }}>
            <TextInput
              label="Departure"
              value={Dates.Departure}
              disabled={true}
            />
          </View>
  
          <View style={{ width: '45%', marginTop: '10%', marginRight: '2%', marginLeft: '5%' }}>
            <TextInput
              label="Arrival"
              value={Dates.Arrival}
              disabled={true}
            />
          </View>
  
        </View>
  
      </View>
    )
  }

export default CalendarDates;