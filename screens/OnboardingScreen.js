import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';

export default function OnboardingScreen() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Onboarding
            containerStyles={{
                padding: 15,
            }}
            imageContainerStyles={{
                paddingBottom: 100
            }}
            titleStyles={{
                fontSize: 24,
                fontWeight: 400,
                color: '#04364A'
            }}
            subTitleStyles={{
                fontSize: 16,
                color: '#176B87'
            }}
                onSkip={() => navigation.replace('Home')}
                onDone={() => navigation.replace('Home')}
                bottomBarColor='#DAFFFB'
                pages={[
                    {
                        backgroundColor: '#DAFFFB',
                        image: (
                            <View>
                                <LottieView 
                                source={require('../assets/Animation - 1697427766120.json')} 
                                style={{width: 400, height: 200}}
                                autoPlay 
                                loop />
                            </View>
                        ),
                        title: 'Boost Productivity',
                        subtitle: 'Subscribe this app to get the latest news',
                    },
                    {
                        backgroundColor: '#DAFFFB',
                        image: (
                            <View>
                                <LottieView 
                                source={require('../assets/Animation - 1697428123700.json')} 
                                style={{width: 400, height: 200}}
                                autoPlay 
                                loop />
                            </View>
                        ),
                        title: 'Work Seamlessly',
                        subtitle: 'Get your work done seamlessly without interuptions',
                    },
                    {
                        backgroundColor: '#DAFFFB',
                        image: (
                            <View>
                                <LottieView 
                                source={require('../assets/Animation - 1697428034721.json')} 
                                style={{width: 400, height: 200}}
                                autoPlay 
                                loop />
                            </View>
                        ),
                        title: 'Achieve Higher Goals',
                        subtitle: 'By boosting your productivity we help you achieve higher goals',
                    },
                ]}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }
})