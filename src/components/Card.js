import React from 'react';
import {
    // Text,
    View,
    StyleSheet
} from 'react-native'; // import deconstruring

const styles = StyleSheet.create({
    containerStyle: {
        elevation: 1,
        backgroundColor: 'rgb(247,243,239)'
    }
});

const InfoList = (props) =>
    (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );

export default InfoList;
