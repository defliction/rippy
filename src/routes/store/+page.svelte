<script lang='ts'>
    import { onMount, onDestroy } from "svelte";
    import * as web3 from '@solana/web3.js';
    import { storeName, publicKey, pmtAmt,  } from '../stores.js';

	import { Focus } from "focus-svelte";
    import { goto } from '$app/navigation';
    import CreateCharge from "./CreateCharge.svelte";
    import Settings from "./Settings.svelte";
    import Transactions from "./Transactions.svelte";

    let cnx;
  

    let activeTab = 1;

    onMount(async () => {
        
        let sol_rpc = process.env.SOLANA_RPC? process.env.SOLANA_RPC : "https://api.mainnet-beta.solana.com";
        cnx = new web3.Connection(sol_rpc);
       

        
    })
    onDestroy(async ()=> {
        //document.body.setAttribute('tabindex', '-1');
       
    })

  

</script>

<div class="grid grid-flow-row justify-center gap-4">
    <h1 class="sm:pt-3 pt-1 font-greycliffbold text-4xl text-center text-transparent bg-clip-text bg-gradient-to-br from-[#20BF55] to-[#01BAEF]">
        {$storeName}</h1>

    <div class="tabs tabs-boxed justify-items-center place-self-center">
    
        {#if activeTab == 1}
            <a class="tab text-[#FFFFFF] bg-gradient-to-br from-[#20BF55] to-[#01BAEF] rounded-lg" on:click={()=>(activeTab=1)}>Create Charge</a> 
            <a class="tab " on:click={()=>(activeTab=2)}>Transactions</a> 
            <a class="tab " on:click={()=>(activeTab=3)}>Settings</a> 
        {:else if activeTab == 2}
            <a class="tab " on:click={()=>(activeTab=1)}>Create Charge</a> 
            <a class="tab text-[#FFFFFF] bg-gradient-to-br from-[#20BF55] to-[#01BAEF] rounded-lg" on:click={()=>(activeTab=2)}>Transactions</a> 
            <a class="tab " on:click={()=>(activeTab=3)}>Settings</a> 
        {:else if activeTab == 3}
            <a class="tab " on:click={()=>(activeTab=1)}>Create Charge</a> 
            <a class="tab " on:click={()=>(activeTab=2)}>Transactions</a> 
            <a class="tab text-[#FFFFFF] bg-gradient-to-br from-[#20BF55] to-[#01BAEF] rounded-lg" on:click={()=>(activeTab=3)}>Settings</a> 
        
        {/if}
        
    </div>


    {#if activeTab == 1}
        <CreateCharge/>
    {:else if activeTab == 2}
        <Transactions/>
    {:else if activeTab == 3}
        <Settings/>
    {/if}
</div>

<div class="flex justify-center flex-row pt-2">
    <footer class="footer footer-center p-2 text-base-content rounded-md">
        
        <div class="items-center ">

            <span class=" text-sm ">rippy © 2023 - built by <a class="hover:underline hover:decoration-primary" href="https://www.riparian.one">
                <svg class = "inline-block align-middle w-20 h-20" viewBox="0 0 330 45" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><path d="M51.081,22.5l-22.501,22.5l-22.499,-22.5l22.499,-22.5l0.001,0l1.309,1.309l21.191,21.191Zm-10.678,5.438c-8.21,-3.17 -10.385,-8.682 -12.564,-14.207c-0.72,-1.827 -1.442,-3.656 -2.409,-5.342l-5.899,5.9c0.878,2.12 1.876,4.175 3.405,5.941c1.769,2.044 4.326,3.79 8.389,4.972c1.432,0.416 3.113,1.087 4.81,1.963c1.059,0.547 2.132,1.175 3.166,1.875l1.102,-1.102Zm-12.277,-22.244c1.367,2.151 2.263,4.422 3.157,6.691c2.001,5.072 3.997,10.131 12.019,12.654l2.539,-2.539l-17.261,-17.261l-0.454,0.455Zm8.506,26.015c-0.722,-0.46 -1.46,-0.881 -2.19,-1.259c-1.496,-0.772 -2.942,-1.353 -4.145,-1.702c-4.847,-1.41 -7.956,-3.561 -10.154,-6.101c-1.506,-1.74 -2.548,-3.619 -3.42,-5.55l-4.206,4.206c0.625,0.581 1.334,1.13 2.147,1.643c1.397,0.879 3.1,1.643 5.206,2.256c2.762,0.802 6.524,2.598 9.595,5.025c1.657,1.31 3.13,2.813 4.181,4.468l2.986,-2.986Zm-5.694,5.694c-0.775,-1.55 -2.149,-3.008 -3.76,-4.281c-2.679,-2.118 -5.945,-3.68 -8.336,-4.374c-0.663,-0.193 -1.294,-0.4 -1.894,-0.62l11.632,11.632l2.358,-2.357Z" style="fill:#0d7071;fill-rule:nonzero;"/><g><path d="M90.555,43.843l-10.221,-15.493c6.171,-2.121 9.45,-7.2 9.45,-13.693c-0,-8.55 -5.722,-14.657 -16.329,-14.657l-13.307,-0c-0.579,-0 -0.964,0.386 -0.964,0.964l-0,43.072c-0,0.578 0.385,0.964 0.964,0.964l6.879,0c0.578,0 0.964,-0.386 0.964,-0.964l-0,-14.657l3.728,-0l9.708,14.978c0.257,0.45 0.642,0.643 1.157,0.643l7.328,0c0.772,0 1.093,-0.45 0.643,-1.157Zm-22.564,-36.064l5.271,-0c4.115,-0 8.1,1.671 8.1,6.878c0,5.272 -3.985,6.879 -8.1,6.879l-5.271,-0l-0,-13.757Z" style="fill:#0d7071;fill-rule:nonzero;"/><path d="M96.534,0.964l-0,43.072c-0,0.578 0.385,0.964 0.964,0.964l6.879,0c0.578,0 0.964,-0.386 0.964,-0.964l-0,-43.072c-0,-0.578 -0.386,-0.964 -0.964,-0.964l-6.879,-0c-0.579,-0 -0.964,0.386 -0.964,0.964Z" style="fill:#0d7071;fill-rule:nonzero;"/><path d="M126.684,-0l-13.307,-0c-0.579,-0 -0.965,0.386 -0.965,0.964l0,43.072c0,0.578 0.386,0.964 0.965,0.964l6.878,0c0.579,0 0.964,-0.386 0.964,-0.964l0,-14.657l5.465,-0c10.607,-0 16.328,-6.108 16.328,-14.722c0,-8.55 -5.721,-14.657 -16.328,-14.657Zm-0.193,21.536l-5.272,-0l0,-13.757l5.272,-0c4.114,-0 8.1,1.671 8.1,6.878c-0,5.272 -3.986,6.879 -8.1,6.879Z" style="fill:#0d7071;fill-rule:nonzero;"/><path d="M180.877,43.907l-15.622,-43.136c-0.193,-0.514 -0.707,-0.771 -1.221,-0.771l-6.429,-0c-0.514,-0 -0.9,0.257 -1.093,0.771l-15.621,43.136c-0.257,0.643 0.064,1.093 0.771,1.093l7.136,0c0.514,0 0.9,-0.193 1.093,-0.771l2.636,-7.779l16.714,-0l2.636,7.779c0.192,0.578 0.578,0.771 1.092,0.771l7.136,0c0.707,0 1.029,-0.45 0.772,-1.093Zm-25.908,-14.914l5.915,-17.55l5.914,17.55l-11.829,-0Z" style="fill:#0d7071;fill-rule:nonzero;"/><path d="M217.198,43.843l-10.221,-15.493c6.171,-2.121 9.45,-7.2 9.45,-13.693c-0,-8.55 -5.722,-14.657 -16.329,-14.657l-13.307,-0c-0.579,-0 -0.964,0.386 -0.964,0.964l-0,43.072c-0,0.578 0.385,0.964 0.964,0.964l6.878,0c0.579,0 0.965,-0.386 0.965,-0.964l-0,-14.657l3.728,-0l9.707,14.978c0.258,0.45 0.643,0.643 1.158,0.643l7.328,0c0.772,0 1.093,-0.45 0.643,-1.157Zm-22.564,-36.064l5.271,-0c4.114,-0 8.1,1.671 8.1,6.878c0,5.272 -3.986,6.879 -8.1,6.879l-5.271,-0l-0,-13.757Z" style="fill:#0d7071;fill-rule:nonzero;"/><path d="M223.177,0.964l-0,43.072c-0,0.578 0.385,0.964 0.964,0.964l6.878,0c0.579,0 0.965,-0.386 0.965,-0.964l-0,-43.072c-0,-0.578 -0.386,-0.964 -0.965,-0.964l-6.878,-0c-0.579,-0 -0.964,0.386 -0.964,0.964Z" style="fill:#0d7071;fill-rule:nonzero;"/><path d="M276.919,43.907l-15.621,-43.136c-0.193,-0.514 -0.707,-0.771 -1.221,-0.771l-6.429,-0c-0.514,-0 -0.9,0.257 -1.093,0.771l-15.621,43.136c-0.257,0.643 0.064,1.093 0.771,1.093l7.136,0c0.514,0 0.9,-0.193 1.093,-0.771l2.635,-7.779l16.715,-0l2.635,7.779c0.193,0.578 0.579,0.771 1.093,0.771l7.136,0c0.707,0 1.029,-0.45 0.771,-1.093Zm-25.907,-14.914l5.915,-17.55l5.914,17.55l-11.829,-0Z" style="fill:#0d7071;fill-rule:nonzero;"/><path d="M317.034,-0l-6.879,-0c-0.578,-0 -0.964,0.386 -0.964,0.964l-0,30.215l-17.293,-30.536c-0.257,-0.45 -0.643,-0.643 -1.157,-0.643l-7.907,-0c-0.579,-0 -0.965,0.386 -0.965,0.964l0,43.072c0,0.578 0.386,0.964 0.965,0.964l6.878,0c0.579,0 0.965,-0.386 0.965,-0.964l-0,-30.215l17.292,30.536c0.258,0.45 0.643,0.643 1.158,0.643l7.907,0c0.578,0 0.964,-0.386 0.964,-0.964l0,-43.072c0,-0.578 -0.386,-0.964 -0.964,-0.964Z" style="fill:#0d7071;fill-rule:nonzero;"/></g></svg>
             stake with us!</a></span>
            </div>
    
    </footer>
</div>
