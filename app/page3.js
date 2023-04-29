import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Animated } from 'react-native';
import { useRouter } from "expo-router";

export default function ColorPicke3() {
    const router = useRouter();

    const animationValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        const animation2 = Animated.timing(animationValue, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Escolha um Número</Text>

            <View styles={styles.blocoContainer}>

                <Animated.View style={{...styles.colorContainer, opacity: animationValue}}>
                    <TouchableOpacity style={styles.colorBox1} onPress={() => router.push('/page4')}>
                       <Text style={styles.colorText}>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.colorBox2} onPress={() => router.push('/page4')}>
                        <Text style={styles.colorText}>5</Text>
                    </TouchableOpacity>
                </Animated.View>

                <Animated.View style={{...styles.colorContainer, opacity: animationValue}}>
                    <TouchableOpacity style={styles.colorBox3} onPress={() => router.push('/page4')}>
                        <Text styles={styles.colorText}>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.colorBox4} onPress={() => router.push('/page4')}>
                        <Text style={styles.colorText}>10</Text>
                    </TouchableOpacity>
                </Animated.View>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DFDFE3',
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
        fontSize: 24,
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
