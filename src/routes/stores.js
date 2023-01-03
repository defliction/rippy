import { writable } from 'svelte/store';

export const storeName = writable("");
export const publicKey = writable();
export const pmtAmt = writable();
export const mostRecentTxn = writable("");
export const showWarning = writable(true);
export const fullScreen = writable(false);
export let successArray = writable([]);