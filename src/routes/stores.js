import { writable } from 'svelte/store';

export const storeName = writable("");
export const publicKey = writable("7RwBgoCgjZiVNBfhi5BxHhprZM1DBue5eRLZTVFkPZHr");
export const pmtAmt = writable(0.00);
export const mostRecentTxn = writable("");
export const showWarning = writable(true);
export const fullScreen = writable(false);