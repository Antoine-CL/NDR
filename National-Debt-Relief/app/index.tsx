import React, { useState } from 'react';
import {
	Text,
	KeyboardAvoidingView,
	Platform,
	StyleSheet,
	TextInput,
	TouchableOpacity,
    Image,
	Pressable
} from 'react-native';
import { KeyboardProvider, KeyboardAwareScrollView} from 'react-native-keyboard-controller';
import { Input } from '@rneui/themed';
import { useAuth } from '../context/AuthContext';
import tw from 'twrnc';
import { Link } from 'expo-router';
const Page = () => {
	const [username, setUsername] = useState('admin');
	const [password, setPassword] = useState('admin');
	const { onLogin } = useAuth();

	const onSignInPress = async () => {
		onLogin!(username, password);
	};

	return (
        
		<KeyboardAwareScrollView bottomOffset={62}
            contentContainerStyle={styles.container}
		>
            <Image source={require('../assets/images/NDR-logo.png')} style={styles.logo} />
			<Text style={styles.header}>Welcome Back</Text>
            <Text style={styles.hint}>Enter your email and password to continue</Text>
        
			<Input
				autoCapitalize="none"
				placeholder="Email"
				value={username}
				onChangeText={setUsername}
				style={styles.inputField}
                containerStyle={tw `w-full my-2`}
                inputContainerStyle={tw `py-2`}
			/>
			<Input
				placeholder="Password"
				value={password}
				onChangeText={setPassword}
				secureTextEntry
				style={styles.inputField}
                containerStyle={tw `w-full my-2`}
                inputContainerStyle={tw `py-2`}
			/>

			<TouchableOpacity onPress={onSignInPress} style={styles.button}>
				<Text style={{ color: '#fff' }}>Sign in</Text>
			</TouchableOpacity>

			
				<Link href="/(tabs)" style={tw `text-center`}>

					<Text>Forgot Password?</Text>

				</Link>
			
		</KeyboardAwareScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		paddingHorizontal: '10%',
		justifyContent: 'center'
	},
    logo: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        marginBottom: 20
    },
	header: {
		fontSize: 30,
		textAlign: 'center',
		marginBottom: 20
	},
    hint: {
		fontSize: 16,
		textAlign: 'center',
		marginBottom: 40,
        color: '#666'
	},
	inputField: {
		// marginVertical: 4,
		// height: 50,
		// borderWidth: 1,
		// borderColor: '#ccc',
		// borderRadius: 4,
		// padding: 10
	},
	button: {
		marginVertical: 15,
		alignItems: 'center',
		backgroundColor: '#1f2147',
		padding: 12,
		borderRadius: 20
	}
});
export default Page;

