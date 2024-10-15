import React, { useState, useEffect } from 'react'
import { Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { getLocationAsync, isOnRoadPath } from '../../api/locationService';
import { NavigationProp } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { nav, search, styles } from '../Styles/styles';
import { color } from '../../constants/colors';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MAP_KEY } from '../../constants/key';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LottieView from "lottie-react-native"
// import { schedulePushNotification } from '../../api/notificationServices';
import * as Notifications from "expo-notifications";


Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: true,
    }),
});


const VehicleHome = ({ navigation }: { navigation: NavigationProp<any> }) => {
    const [origin, setOrigin] = useState({
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0.008,
        longitudeDelta: 0.007,
    })
    const [name, setName] = useState("name")
    const [loaded, setLoaded] = useState(false)
    const [show, setshow] = useState(false)

    const origin1 = {
        latitude: 13.047145,
        longitude: 80.079348,
        latitudeDelta: 0.008,
        longitudeDelta: 0.007,
    }
    const origin2 = {
        latitude: 13.047610,
        longitude: 80.011561,
        latitudeDelta: 0.008,
        longitudeDelta: 0.007,
    }
    const origin3 = {
        latitude: 13.049192,
        longitude: 80.087674,
        latitudeDelta: 0.008,
        longitudeDelta: 0.007,
    }
    const origin4 = {
        latitude: 13.050913,
        longitude: 80.092163,
        latitudeDelta: 0.008,
        longitudeDelta: 0.007,
    }
    const origin5 = {
        latitude: 13.050882,
        longitude: 80.094742,
        latitudeDelta: 0.008,
        longitudeDelta: 0.007,
    }


    useEffect(() => {
        const handleLocationChange = async (name: string) => {
            const location = await getLocationAsync();
            if (!location) return;
            const { latitude, longitude } = location;

            const current_location = {
                coordinates: {
                    latitude: latitude,
                    longitude: longitude,
                    pincode: 560087
                }
            }

            setOrigin({
                latitude: latitude,
                longitude: longitude,
                latitudeDelta: 0.008,
                longitudeDelta: 0.007,
            })
            setLoaded(true)
            // console.log(`(amb.) ${na} ↓`)
            // console.log(current_location)
        };


        // Set up location tracking
        const locationTask = setInterval(() => handleLocationChange(name), 10000);
        return () => clearInterval(locationTask);
    }, [name]);
    return (
        <View style={styles.container}>
            <SafeAreaView>
                {/* Preloader start */}
                <LottieView
                    source={require("../../assets/loader.json")}
                    style={{
                        width: "100%",
                        height: "100%",
                        backgroundColor: color.secondary,
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        zIndex: 55,
                        display: loaded ? 'none' : 'flex'
                    }}
                    autoPlay
                    loop
                />
                {/* Preloader End */}

                {/* Map View Start  */}
                <MapView style={styles.map}
                    region={origin}
                >
                    <Marker coordinate={origin} title="Marker">
                        <Image
                            source={require('../../assets/originMarker.png')}
                            style={{
                                width: 35,
                                height: 35,
                                resizeMode: 'contain'
                            }}
                        />
                    </Marker>
                    {show &&<Marker coordinate={origin1} title="Marker">
                        <Image
                            source={require('../../assets/amb.png')}
                            style={{
                                width: 35,
                                height: 35,
                                resizeMode: 'contain'
                            }}
                        />
                    </Marker>}
                    {show &&<Marker coordinate={origin2} title="Marker">
                        <Image
                            source={require('../../assets/amb.png')}
                            style={{
                                width: 35,
                                height: 35,
                                resizeMode: 'contain'
                            }}
                        />
                    </Marker>}
                    {show &&<Marker coordinate={origin3} title="Marker">
                        <Image
                            source={require('../../assets/amb.png')}
                            style={{
                                width: 35,
                                height: 35,
                                resizeMode: 'contain'
                            }}
                        />
                    </Marker>}
                    {show &&<Marker coordinate={origin4} title="Marker">
                        <Image
                            source={require('../../assets/amb.png')}
                            style={{
                                width: 35,
                                height: 35,
                                resizeMode: 'contain'
                            }}
                        />
                    </Marker>}
                    {show && <Marker coordinate={origin5} title="Marker">
                        <Image
                            source={require('../../assets/amb.png')}
                            style={{
                                width: 35,
                                height: 35,
                                resizeMode: 'contain'
                            }}
                        />
                    </Marker>
                    }
                </MapView>
                {/* Map View End  */}


                {/* Search places End  */}
                <SafeAreaView>
                    {/* Bottom Nav Start  */}
                    <View style={nav.navWrap}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('VehicleHome')}
                        >
                            <Icon name="home" style={[nav.icons, nav.selected]} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setshow(true)}
                        >
                            <Icon name="search" style={nav.icons} />
                        </TouchableOpacity>
                        <TouchableOpacity
                           
                        >
                            <Icon name="comments" style={nav.icons} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon name="user" style={nav.icons} />
                        </TouchableOpacity>
                    </View>
                    {/* Bottom Nav End  */}


                
                </SafeAreaView>
                <StatusBar backgroundColor={loaded ? color.primary : color.secondary} />
            </SafeAreaView>
        </View >
    )
}

export async function schedulePushNotification(title, body) {
    await Notifications.scheduleNotificationAsync({
        content: {
            title: title,
            body: body,
            data: { data: "goes here" },
            // icon: require('')
        },
        trigger: { seconds: 1 },
    });
}

export default VehicleHome