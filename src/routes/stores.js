import { writable } from 'svelte/store';

export const storeName = writable("");
export const publicKey = writable();
export const pmtAmt = writable();
export const mostRecentTxn = writable("");
export const showWarning = writable(true);
export const fullScreen = writable(false);
export let successArray = writable([]);
export const mints = writable([
    {name:"USDC", mint:"EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"},
 
    {name:"BONK", mint:"DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263"}])
export const selectedMint = writable("USDC");