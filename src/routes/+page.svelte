<script lang='ts'>
    import { onMount } from "svelte";
    import * as web3 from '@solana/web3.js';
    import { storeName, publicKey } from './stores';
    import { goto } from '$app/navigation';

    let cnx;

    onMount(async () => {
        
        let sol_rpc = "https://withered-distinguished-pallet.solana-mainnet.quiknode.pro/f98c9d657e37a766115f45e72eaef0bc5836f7f6/";
        cnx = new web3.Connection(sol_rpc);
        
    })

    async function createStore() {
        console.log($storeName, $publicKey)
        goto('/store', { state: { foo: 'bar' } });
    }

</script>

<div class="grid grid-flow-row justify-center">
    
    <h1 class="sm:pt-3 pt-1 font-greycliffbold text-4xl text-center text-[#0D7071] ">
        rippy</h1>
  
</div>

<div class="grid grid-flow-row justify-center pt-5 gap-3">
    <div class="indicator justify-items-center place-self-center">
        
        <div class="card w-96 bg-base-200 shadow border">
            <div class="card-body px-6 pb-4">
                <h1 class="card-title text-md align-bottom font-greycliffbold -mt-5 pb-1 text-[#0D7071] ">Enter your merchant details</h1>
                <input bind:value={$storeName} type="text" placeholder="Store name e.g. Benedict's Burritos" class="input input-sm input-bordered input-accent w-full max-w-xs" /> 
                <input bind:value={$publicKey} type="text" placeholder="Merchant wallet address (Solana Public Key)" class="input input-sm input-bordered input-accent w-full max-w-xs" />    
                <div class="card-actions justify-end">
                    <button on:click={createStore} class="btn normal-case btn-xs btn-primary">Create Store</button>
                  </div>
            </div>
        </div>
    </div>

</div>
