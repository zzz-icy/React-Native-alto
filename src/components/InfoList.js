import React from 'react';
import {
    Button,
    Text,
    View,
    StyleSheet
} from 'react-native'; // import deconstruring
import Card from './Card';
import CardSection from './CardSection';

const styles = StyleSheet.create({
    // viewStyle: {
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     backgroundColor: 'rgba(157,157,157,0.0)',
    //     height: 60,
    //     paddingTop: 15
    // }
    buttonStyle: {
        borderColor: 'rgb(30,29,30)',
        borderWidth: 10
    }
});

const InfoList = () =>
    (
        <View>
            <Card>
                <CardSection>
                    <Text>Your Trip</Text>
                </CardSection>
                <CardSection>
                    <Text>5:39 PM</Text>
                </CardSection>
                <CardSection>
                    <Text>Estimated arrival at DFW Int'l Airport - Terminal E</Text>
                </CardSection>
                <CardSection>
                    <Text>Estimated Fare:</Text>
                </CardSection>
                <CardSection>
                    <Text>449 Flora St.</Text>
                    <Text>Dallas, Texas 75201</Text>
                </CardSection>
                <CardSection>
                    <Text>DFW International Airport</Text>
                    <Text>American Airline Terminal E</Text>
                    <Text>Irving, Texas 75261</Text>
                </CardSection>
                <CardSection>
                    <Text>note for driver</Text>
                </CardSection>
                <CardSection>
                    <Text>note for driver</Text>
                </CardSection>
                <CardSection style={styles.buttonStyle}>
                    <Button
                        title="CANCEL TRIP"
                        onPress={() => ('haha')}
                        disabled
                    />
                </CardSection>
            </Card>
        </View>
    );

export default InfoList;
