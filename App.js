import {  } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import styles from './styles';

export default function App() {
  return (
    // BELOW THIS LINE: code to practice with Flexbox using a constant contained within this file (styles)
    // <View style={styles.mainContainer}>
    //     <View style={styles.containerThree} />
    //     <View style={styles.containerTwo} />
    //     <View style={styles.containerOne} />
    // </View>

//     // BELOW THIS LINE: code demonstrating flexbox using inlined styles
//     <View style={{width: 400, height: 800, flexDirection: 'row'}}>
//       <View style={{width: 100, height: 400, backgroundColor: '#AC009C'}} />
//       <View style={{width: 100, height: 400, backgroundColor: '#51424E'}} />
//       <View style={{width: 100, height: 400, backgroundColor: '#B8A6B4'}} />
//     </View>
//   );
// }

    // BELOW THIS LINE: code demonstrating flexbox using a stylesheet Object
    <View style={styles.mainContainer}>
      <View style={{width: 100, height: 400, backgroundColor: '#AC009C'}} />
      <View style={styles.darkGrayContainer} />
      <View style={{width: 100, height: 400, backgroundColor: '#B8A6B4'}} />
    </View>
  );
}

// BELOW THIS LINE: code to practice with Flexbox using a constant contained within this file (styles)
// const styles = StyleSheet.create({
//   mainContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     width: 200,
//     height: 500,
//   },
//   containerOne: {
//     width: 100,
//     height: 400,
//     backgroundColor: '#AC009C'
//   },
//   containerThree: {
//     width: 100,
//     height: 400,
//     backgroundColor: '#51424E'
//   },
//   containerTwo: {
//     width: 100,
//     height: 400,
//     backgroundColor: '#B8A6B4'
//   },
// });
