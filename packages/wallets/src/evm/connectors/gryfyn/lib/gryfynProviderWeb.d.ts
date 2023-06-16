/// <reference types="node" />
import EventEmitter from 'events';
import { EIP1193Provider } from './interfaces/provider';

export declare class GryFynProviderWeb extends EventEmitter implements EIP1193Provider {
    API_ORIGIN: string;
    private isFrameReady;
    private apiKey;
    private messageHeader;
    private responseMap;
    private responseIdx;
    private src;
    private preventCloseFrame;
    private chainIdHex;
    private isLogin;
    private chainIdDec;
    private selectedAccount;
    isMetaMask: boolean;
    isGryfyn: boolean;
    isOpen: boolean;
    private currentSignEventId;
    private loaderIFrame;
    chainId(): string;
    constructor(apiKey?: string);
    getSupportedChainID(): Promise<string[]>;
    setChainID(chainId: string): Promise<void>;
    request(req: any): Promise<any>;
    listen(req: any): Promise<void>;
    dequeue(req: any): Promise<void>;
    enable(req: any): Promise<void>;
    enqueue(req: any): Promise<void>;
    send(req: any): Promise<void>;
    sendAsync(req: any): Promise<unknown>;
    private getGryfynIframe;
    openWallet(): Promise<void>;
    closeWallet(): Promise<void>;
    private openWindow;
    getUserLevel(): Promise<any>;
    setChainId(chainId: number): Promise<any>;
    private requestAPI;
    private setHostname;
    private closeIFrame;
    removeIFrame(): Promise<void>;
    private openIFrame;
    private initIframe;
    private postMessage;
    connect(): Promise<void>;
}
