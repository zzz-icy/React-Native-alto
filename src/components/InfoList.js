import React from 'react';
import {
    Image,
    Button,
    Text,
    View,
    StyleSheet,
    TextInput
} from 'react-native'; // import deconstruring
import Card from './Card';
import InfoIcon from '../../images/Info_icon.png';
import EditIcon from '../../images/Edit_icon.png';

// import CardSection from './CardSection';

const styles = StyleSheet.create({
    borderTopViewStyle: {
        borderColor: 'rgb(234,230,219)',
        borderTopWidth: 1,
        width: '30%'
    }
});

class InfoList extends React.Component {
    render() {
        return (
            <View>
                <Card>
                    <View
                        style={{
                            marginTop: 26,
                            marginBottom: 26,
                            marginRight: 10,
                            marginLeft: 10
                        }}
                    >
                        <Text style={{ fontSize: 36 }}>Your Trip</Text>
                    </View>

                    <View
                        style={{
                            marginTop: 5,
                            marginBottom: 0,
                            marginRight: 10,
                            marginLeft: 10
                        }}
                    >

                        <Text style={{ fontSize: 54 }}>
                            5:39
                            <Text style={{ fontSize: 36 }}>
                                PM
                            </Text>
                        </Text>
                    </View>

                    <View
                        style={{
                            marginTop: 0,
                            marginBottom: 10,
                            marginRight: 10,
                            marginLeft: 10
                        }}
                    >
                        <Text>Estimated arrival at DFW Int'l Airport - Terminal E</Text>
                    </View>

                    <View
                        style={{
                            marginTop: 26,
                            marginBottom: 26,
                            marginRight: 10,
                            marginLeft: 10,
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}
                    >

                        <View style={styles.borderTopViewStyle}>
                            <View style={{ justifyContent: 'center', paddingTop: 10 }}>
                                <Text style={{ color: 'rgb(63,56,37)' }}>Estimated Fare:</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                    <Text style={{ color: 'rgb(63,56,37)' }}>$60 - $75</Text>
                                    <Image
                                        style={{ marginLeft: 5, marginTop: 2 }}
                                        source={InfoIcon}
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={styles.borderTopViewStyle}>
                            <View style={{ justifyContent: 'center', paddingTop: 10 }}>
                                <Text style={{ color: 'rgb(63,56,37)' }}>Passenger:</Text>
                                <Text style={{ color: 'rgb(63,56,37)' }}>1 - 5</Text>
                            </View>
                        </View>
                        <View style={styles.borderTopViewStyle}>
                            <View style={{ justifyContent: 'center', paddingTop: 10 }}>
                                <Text style={{ color: 'rgb(63,56,37)' }}>Payment:</Text>
                                <Text style={{ color: 'rgb(63,56,37)' }}>Amex01</Text>
                            </View>
                        </View>
                    </View>

                    <View
                        style={{
                            marginTop: 26,
                            marginBottom: 20,
                            marginRight: 10,
                            marginLeft: 10,
                        }}
                    >
                        <Text style={{ color: 'rgb(63,56,37)' }}>449 Flora St.</Text>
                        <Text style={{ color: 'rgb(63,56,37)' }}>Dallas, Texas 75201</Text>
                    </View>
                    <View
                        style={{
                            marginRight: 10,
                            marginLeft: 10,
                            width: '25%',
                            borderColor: 'rgb(234,230,219)',
                            borderBottomWidth: 1,
                        }}
                    />

                    <View
                        style={{
                            marginTop: 20,
                            marginBottom: 26,
                            marginRight: 10,
                            marginLeft: 10
                        }}
                    >
                        <Text style={{ color: 'rgb(63,56,37)' }}>DFW International Airport</Text>
                        <Text style={{ color: 'rgb(63,56,37)' }}>American Airline Terminal E</Text>
                        <Text style={{ color: 'rgb(63,56,37)' }}>Irving, Texas 75261</Text>
                    </View>

                    <View
                        style={{
                            marginTop: 10,
                            marginBottom: 10,
                            marginRight: 10,
                            marginLeft: 10
                        }}
                    >
                        <TextInput>note for driver</TextInput>
                        <Image
                            style={{ marginLeft: 5, marginTop: 2 }}
                            source={EditIcon}
                        />
                    </View>

                    <View
                        style={{
                            marginTop: 26,
                            marginBottom: 26,
                            marginRight: 10,
                            marginLeft: 10,
                            borderColor: 'rgb(234,230,219)',
                            borderWidth: 1,
                        }}
                    >
                        <Button
                            title="CANCEL TRIP"
                            onPress={() => ('haha')}
                            disabled
                        />
                    </View>
                </Card>
            </View>
        );
    }
}

export default InfoList;
