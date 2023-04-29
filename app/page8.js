import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Animated } from 'react-native';
import { useRouter } from "expo-router";
import LottieView from 'lottie-react-native';

export default function ColorPicker8() {
    const router = useRouter();
    const animation = useRef(null);

    const animationValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        const animation2 = Animated.timing(animationValue, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start();
        animation.current.play();
    }, [])


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sou longe de perfeito, mas lhe garanto, bem, que darei o meu máximo por você e por nós!</Text>
            <Animated.View style={{...styles.colorContainer, opacity: animationValue}}>
                    <TouchableOpacity style={styles.colorBox1} disabled>
                        <LottieView
                            autoPlay
                            ref={animation}
                            style={{
                                width: 300,
                                height: 300,
                                backgroundColor: '#3442AF',
                            }}
                            // Find more Lottie files at https://lottiefiles.com/featured
                            source={require('../animations/page8/95046-love-sheep.json')}
                        />
                    </TouchableOpacity>
                </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3442AF',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    blocoContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 1000,
        backgroundColor: 'white',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 150,
        marginBottom: 100,
    },
    colorContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    colorBox1: {
        width: 100,
        height: 100,
        borderRadius: 20,
        backgroundColor: 'green',
        marginRight: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    colorBox2: {
        width: 100,
        height: 100,
        borderRadius: 20,
        backgroundColor: 'red',
        marginRight: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    colorBox3: {
        width: 100,
        height: 100,
        borderRadius: 20,
        backgroundColor: 'blue',
        marginRight: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    colorBox4: {
        width: 100,
        height: 100,
        borderRadius: 20,
        backgroundColor: 'yellow',
        marginRight: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    colorText: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    button: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        marginHorizontal: 10,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
});
