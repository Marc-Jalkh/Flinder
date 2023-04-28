import * as Font from 'expo-font';

// Define the font names
const fontNames = {
  regular: 'UncutSansRegular',
  bold: 'Uncut-Sans-Bold',
  medium: 'Uncut-Sans-Medium',
};

// Load the fonts
const customFonts = async () => {
  await Font.loadAsync({
    [fontNames.regular]: require('../font/UncutSansRegular.otf'),
    [fontNames.bold]: require('../font/Uncut-Sans-Bold.otf'),
    [fontNames.medium]: require('../font/Uncut-Sans-Medium.otf'),
  });
};


const colors = {
    primary: '#2A1E5C',
    secondary: '#759FBC',
    seconds: 'lightblue',
    tertiary: '#EEFFFF',
    white: '#FFFFFF',
    black: '#1F271B',
}

export default colors;
export { customFonts };