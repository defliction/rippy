<script lang='ts'>
    import { onMount, onDestroy } from "svelte";
    import { goto } from '$app/navigation';
    import { storeName, publicKey, pmtAmt, showWarning, successArray } from '../stores.js';
    import dayjs from 'dayjs'
 

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

<div class=" card bg-base-200">
        
    <div class="overflow-x-auto">
        <table class="table table-compact w-full ">
          <thead>
            <tr>
              <th>Date</th> 
              <th class="text-left">Tx ID</th> 
              <th class="text-right">Amount</th> 
            </tr>
          </thead> 
          <tbody>
            {#each $successArray as item, i}
            <tr>
              <td>{dayjs.unix(item.blockTime).format("YYYY-MM-DD HH:mm:ss")}</td> 
              <td class="text-left">
                <a class="hover:underline hover:decoration-primary" href="https://solscan.io/tx/{item.transaction.signatures[0]}" target="_blank">
                {item.transaction.signatures[0].substring(0,4)}...</a>
                </td> 
              <td class="text-right">{item.transaction.message.instructions[1].parsed.info.tokenAmount.uiAmount}</td> 
            </tr>
            {/each}
          </tbody> 

        </table>
      </div>
    
</div>
