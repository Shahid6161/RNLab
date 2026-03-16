import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Camera, useCameraDevice, useCameraFormat } from 'react-native-vision-camera';
import { useNavigation } from '@react-navigation/native';
import { Camera as CameraIcon, SwitchCamera, X } from 'lucide-react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function CameraScreen() {
    const [hasPermission, setHasPermission] = useState(false);
    const [cameraPosition, setCameraPosition] = useState<'back' | 'front'>('back');
    const device = useCameraDevice(cameraPosition);
    const camera = useRef<Camera>(null);
    const navigation = useNavigation<any>();
    const insets = useSafeAreaInsets();

    useEffect(() => {
        (async () => {
            const status = await Camera.requestCameraPermission();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const takePhoto = async () => {
        if (camera.current) {
            try {
                const photo = await camera.current.takePhoto({
                    flash: 'off',
                    enableShutterSound: true,
                });
                navigation.navigate('CreatePost', { photoPath: `file://${photo.path}` });
            } catch (e) {
                console.error('Failed to take photo', e);
            }
        }
    };

    const toggleCamera = () => {
        setCameraPosition(p => (p === 'back' ? 'front' : 'back'));
    };

    if (!hasPermission) {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Camera permission is required to take photos.</Text>
                <TouchableOpacity style={styles.button} onPress={async () => {
                    const status = await Camera.requestCameraPermission();
                    setHasPermission(status === 'granted');
                }}>
                    <Text style={styles.buttonText}>Grant Permission</Text>
                </TouchableOpacity>
            </View>
        );
    }

    if (device == null) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#ffffff" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Camera
                ref={camera}
                style={StyleSheet.absoluteFill}
                device={device}
                isActive={true}
                photo={true}
            />

            <View style={[styles.controls, { top: insets.top + 10, left: 20 }]}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <X color="white" size={32} />
                </TouchableOpacity>
            </View>

            <View style={[styles.bottomControls, { bottom: insets.bottom + 30 }]}>
                <View style={{ width: 40 }} />
                <TouchableOpacity style={styles.captureButton} onPress={takePhoto}>
                    <View style={styles.captureInner} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.flipButton} onPress={toggleCamera}>
                    <SwitchCamera color="white" size={28} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
        padding: 20,
    },
    button: {
        backgroundColor: '#0095f6',
        padding: 15,
        borderRadius: 8,
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    controls: {
        position: 'absolute',
        flexDirection: 'row',
    },
    bottomControls: {
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
        paddingHorizontal: 40,
    },
    captureButton: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    captureInner: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: 'white',
    },
    flipButton: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
