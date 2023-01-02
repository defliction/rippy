<script lang='ts'>
    import { onMount, onDestroy } from "svelte";
    import * as web3 from '@solana/web3.js';
    import { storeName, publicKey } from '../stores.js';
    import * as KioskBoard from 'kioskboard';
    import englishKeypbad from "../../keyboards/kioskboard-keys-english.json"
	import { Focus } from "focus-svelte";
    import { goto } from '$app/navigation';

    let cnx;
    let keyboardRef = null;


    onMount(async () => {
        
        let sol_rpc = "https://withered-distinguished-pallet.solana-mainnet.quiknode.pro/f98c9d657e37a766115f45e72eaef0bc5836f7f6/";
        cnx = new web3.Connection(sol_rpc);
       
        cnx.focus()
    })
    onDestroy(async ()=> {
        //document.body.setAttribute('tabindex', '-1');
       
    })
    async function cancel() {
        goto('/store', { state: { foo: 'bar' } });
        
    }

</script>

<div class="grid grid-flow-row justify-center">
    
    <h1 class="sm:pt-3 pt-1 font-greycliffbold text-4xl text-center text-[#0D7071] ">
        {$storeName}</h1>
        <div class="border border-[#0D7071] ">
            
          
        </div>
        
</div>

<div class="grid grid-flow-row justify-center pt-5 gap-3">
    <div class="indicator justify-items-center place-self-center">
        <div class="">
            <button on:click={cancel} class="btn normal-case btn-lg btn-primary">Cancel</button>
        </div>
    </div>

</div>
