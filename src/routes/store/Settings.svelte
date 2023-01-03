<script lang='ts'>
    import { onMount, onDestroy } from "svelte";
    import { goto } from '$app/navigation';
    import { storeName, publicKey, pmtAmt, showWarning } from '../stores.js';
    

    onMount(async () => {
        
       
       
       
    // Initialize KioskBoard (default/all options)

    
        
    })
    onDestroy(async ()=> {
        //document.body.setAttribute('tabindex', '-1');
       
    })
    async function reset() {
        goto('/', { state: { foo: 'bar' } });
    }
    
</script>

<div class="card w-96 bg-base-200 shadow border">
        
    <div class="card-body px-6 pb-4 text-center ">
        <h1 class="align-center text-xl font-greycliffbold -mt-5 pb-1 text-transparent bg-clip-text bg-gradient-to-br from-[#20BF55] to-[#01BAEF]">Settings</h1>
        <div class="form-control">
            <label class="cursor-pointer label">
              <span class="label-text">Show no custody warning</span>
              <input type="checkbox" bind:checked={$showWarning} class="checkbox checkbox-success" />
            </label>
          </div>
          <div class="card-actions justify-center">
            <button on:click={reset} class="btn normal-case btn-sm bg-gradient-to-br border-accent hover:border-accent from-[#20BF55] to-[#01BAEF]">Reset Store</button>
        </div>
    </div>
    


    
</div>
