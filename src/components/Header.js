import React from 'react';
import { Image, View, StyleSheet } from 'react-native'; // import deconstruring
import logo from '../../images/Alto_logo.png';

const styles = StyleSheet.create({
    viewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(247, 243, 239)',
        height: 60,
        paddingTop: 15
    }
});
const Header = () =>
    (
        <View style={styles.viewStyle}>
            <Image source={logo} />

        </View>
    );

export default Header;
