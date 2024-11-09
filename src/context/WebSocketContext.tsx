import React, { createContext, useContext, useEffect, useRef, useState } from 'react';

type WebSocketContextType = {
    sendMessage: (message: string) => void;
    lastMessage: string | null;
    isConnected: boolean;
};

const WebSocketContext = createContext<WebSocketContextType | undefined>(undefined);

const WebSocketProvider: React.FC<{ url: string; children: React.ReactNode }> = ({ url, children }) => {
    const [isConnected, setIsConnected] = useState(false);
    const [lastMessage, setLastMessage] = useState<string | null>(null);
    const wsRef = useRef<WebSocket | null>(null);
    const reconnectTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    const connect = () => {
        const ws = new WebSocket(url);
        wsRef.current = ws;

        ws.onopen = () => {
            setIsConnected(true);
            // console.log('Connected to WebSocket');
            if (reconnectTimeoutRef.current) {
                clearTimeout(reconnectTimeoutRef.current);
                reconnectTimeoutRef.current = null;
            }
        };

        ws.onclose = () => {
            setIsConnected(false);
            // console.log('Disconnected from WebSocket, trying to reconnect in 3 seconds...');
            reconnectTimeoutRef.current = setTimeout(connect, 3000);
        };

        ws.onmessage = (event) => {
            setLastMessage(event.data);
        };
    };

    useEffect(() => {
        connect();

        return () => {
            if (wsRef.current) {
                wsRef.current.close();
            }
            if (reconnectTimeoutRef.current) {
                clearTimeout(reconnectTimeoutRef.current);
            }
        };
    }, [url]);

    const sendMessage = (message: string) => {
        if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
            wsRef.current.send(message);
        } else {
            console.error('WebSocket is not open');
        }
    };

    const value = { sendMessage, lastMessage, isConnected };

    return <WebSocketContext.Provider value={value}>{children}</WebSocketContext.Provider>;
};


const useWebSocket = (): WebSocketContextType => {
    const context = useContext(WebSocketContext);
    if (!context) {
        throw new Error('useWebSocket must be used within a WebSocketProvider');
    }
    return context;
};

export { WebSocketProvider, useWebSocket}