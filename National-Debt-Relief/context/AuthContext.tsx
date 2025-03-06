import { createContext, useContext, useState, useEffect } from "react";
import * as SecureStore from "expo-secure-store";

const API_URL = 'https://your-api-url.com'; // Replace with your actual API URL

export enum Role {
    ADMIN = "ADMIN",
    USER = "USER",
}

export interface User {
    id: string; 
    username: string;
    role: Role;
}

interface AuthState {
    token: string | null;
    authenticated: boolean | null;  
    user: User | null;
    isLoading: boolean;
    isSigningOut: boolean;
}

interface AuthProps {
    authState: AuthState;
    onRegister: (email: string, password: string) => Promise<any>;
    onLogin: (username: string, password: string) => Promise<any>;
    onLogout: () => Promise<any>;
}

const TOKEN_KEY = "token";
const AuthContext = createContext<Partial<AuthProps>>({});

export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [authState, setAuthState] = useState<AuthState>({
        token: null,
        authenticated: null,
        user: null,
        isLoading: false,
        isSigningOut: false,
    });

    useEffect(() => {
        const loadToken = async () => {
            const storedToken = await SecureStore.getItemAsync(TOKEN_KEY);
            setAuthState(prev => ({ ...prev, token: storedToken }));
        };
        loadToken();
    }, []);

    const register = async (email: string, password: string) => {
        const response = await fetch(`${API_URL}/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });
        return response.json();
    };


    const login = async (username: string, password: string): Promise<any> => {
        if(username === "admin" && password === "user"){
            setAuthState({
                authenticated: true,
                token: "1234567890",
                user: {
                    id: "admin123",
                    username: username,
                    role: Role.ADMIN,
                },
                isLoading: false,
                isSigningOut: false
            });
            return { success: true };
        }else if(username === "user" && password === "user"){
            setAuthState({
                authenticated: true,
                token: "1234567890",
                user: {
                    id: "user123",
                    username: username,
                    role: Role.USER,
                },
                isLoading: false,
                isSigningOut: false
            });
            return { success: true };
        }else{
            alert("Invalid username or password");
            throw new Error("Invalid credentials");
        }
    }

    const logout = async () => {
        localStorage.removeItem(TOKEN_KEY);
        setAuthState({ token: null, authenticated: false, user: null, isLoading: false, isSigningOut: false });
    };

    return (
        <AuthContext.Provider value={{ 
            authState, 
            onRegister: register, 
            onLogin: login, 
            onLogout: logout 
        }}>
            {children}
        </AuthContext.Provider>
    );
}