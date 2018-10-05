import React from 'react';
import {
    // Text,
    View,
    StyleSheet
} from 'react-native'; // import deconstruring

const styles = StyleSheet.create({
    containerStyle: {
        // elevation: 1,
        justifyContent: 'flex-start',
        backgroundColor: 'rgb(247,243,239)',
        flexDirection: 'row',
        position: 'relative',
        marginTop: 10,
        marginRight: 10,
        marginBottom: 10,
        marginLeft: 10,
        borderColor: 'rgb(234,230,219)',
        borderWidth: 1
    }
});

const CardSection = (props) =>
    (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );

export default CardSection;
