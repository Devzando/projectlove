import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Animated } from 'react-native';
import { useRouter } from "expo-router";
import LottieView from 'lottie-react-native';

export default function ColorPicker7() {
    const router = useRouter();
    const animation = useRef(null);
    const [visible, setVisible] = useState(false);

    const animationValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {

        setTimeout(() => {
            setVisible(true);
            const animation2 = Animated.timing(animationValue, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
            }).start();
            animation.current.play();
        }, 1500)
    }, [])


    return (
        <View style={styles.container}>
            <Text style={styles.title}>A pergunta que não quer calar é, Mariana, meu bem, quer ser minha namorada?</Text>
            <Text style={{ ...styles.title, marginTop: 10, marginBottom: 20 }}></Text>

            <Animated.View style={{...styles.colorContainer, opacity: animationValue}}>
                <TouchableOpacity style={styles.colorBox1} disabled>
                    {visible &&
                        <LottieView
                            autoPlay
                            ref={animation}
                            style={{
                                width: 200,
                                height: 200,
                                backgroundColor: '#3442AF',
                                marginTop: 50,
                            }}
                            // Find more Lottie files at https://lottiefiles.com/featured
                            source={require('../animations/page7/95044-love-dog.json')}
                        />

                    }
                </TouchableOpacity>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => router.push('/page8')}>
                        <Text style={styles.buttonText}>Sim</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => router.push('/page8')}>
                        <Text style={styles.buttonText}>Sim</Text>
                    </TouchableOpacity>
                </View>
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
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 150,
        marginBottom: 20,
        textAlign: 'center',
    },
    colorContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        marginBottom: 20,
    },
    colorBox1: {
        width: 100,
        height: 100,
        borderRadius: 20,
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
        marginTop: 200,
    },
    button: {
        backgroundColor: 'blue',
        padding: 10,
        width: 100,
        alignItems: 'center',
        borderRadius: 5,
        marginHorizontal: 10,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
    },
});
