import { Text, View, TouchableOpacity} from 'react-native';
import * as React from 'react'
import styles from '../../assets/StyleSheet/SearchStyles';



const SearchButton = ({props}) => {
    return (
        
        <View 
        style={styles.SearchButton}
        >
            <TouchableOpacity>
            <Text style={styles.SearchButtonText}>Search flights</Text>
            </TouchableOpacity>
        </View>    
        
    )
}

export default SearchButton;