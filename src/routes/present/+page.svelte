<script lang='ts'>
    import { onMount, onDestroy, } from "svelte";
    import * as web3 from '@solana/web3.js';
    import { createQR, encodeURL, findReference, FindReferenceError} from "@solana/pay"
    import { storeName, publicKey, pmtAmt, mostRecentTxn} from '../stores.js';
    import * as KioskBoard from 'kioskboard';
    import englishKeypbad from "../../keyboards/kioskboard-keys-english.json"
	import { Focus } from "focus-svelte";
    import { goto } from '$app/navigation';
    import QRCodeStyling from '@solana/qr-code-styling'
    import BigNumber from 'bignumber.js';
    import InlineSVG from 'svelte-inline-svg'
    import card_svg from './card.svg'

    let cnx;
    let keyboardRef = null;
    let qrCode
    let qrCode2
    let qrRef = null
    let svg_container;
    let txnConfirmed = false
    //const element = document.getElementById('qr-code');
  
    //let sol_rpc = "https://solana-mainnet.g.alchemy.com/v2/AtE9_yJOMYOrEYcu5EpkPPvEv-jVKafC";
    let sol_rpc = "https://rpc.helius.xyz/?api-key=c0a55043-481b-403d-8a8b-7a1779f49d23"
    let connection = new web3.Connection(sol_rpc);

    const splToken = new web3.PublicKey('EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v');
    const reference = web3.Keypair.generate().publicKey;

    const label = 'Payment to ' + {$storeName};
    const message = 'marked for future use';
    const memo = 'marked for future use';

    onMount(async () => {
        
        let recipient = new web3.PublicKey($publicKey)
        let amount = new BigNumber($pmtAmt);
        let url = ($publicKey) ? encodeURL({ recipient, amount, splToken, reference, label, message, memo }) : null;
        
        try {
            qrCode = createQR(url, 360, 'transparent')
           // qrCode2 = qrCode._svg.innerHTML
            const element = document.getElementById('qr-code');
            qrCode.append(element);
            console.log(qrCode)
            //console.log(await qrCode.getRawData())
            //()
        }
        catch (e) {
           // qrCode = null
            qrCode._svg = ""
            console.log("error making QR ", e)
           
        }
        
        const interval = setInterval(async () => {
            try {
                // Check if there is any transaction for the reference
                let untilTxn = undefined
                if ($mostRecentTxn != "") {
                    untilTxn = $mostRecentTxn
                }
                const signatureInfo = await findReference(connection, reference, { until: untilTxn });
                if (signatureInfo.confirmationStatus == "finalized" || signatureInfo.confirmationStatus == "confirmed") {
                    txnConfirmed = true
                }
                
                console.log('Transaction confirmed', signatureInfo);
                //notify({ type: 'success', message: 'Transaction confirmed', txid: signatureInfo.signature });
                $mostRecentTxn = signatureInfo.signature;
               

                
            } catch (e) {
                if (e instanceof FindReferenceError) {
                // No transaction found yet, ignore this error
                return;
                }
                console.error('Unknown error', e)
            }
            }, 250)
            return () => {
            clearInterval(interval)
        }
       
        //qrCode2 =decodeURIComponent(qrCode.toString()).replace('data:image/svg+xml,', '')
        
    })
    onDestroy(async ()=> {
        //document.body.setAttribute('tabindex', '-1');
       // <img src={qrCode._qr.createDataURL()}/>
      // <svg width=512 height=512 viewBox="-1 -1 2 2" bind:this={qrCode}/>
    })
    async function cancel() {
        goto('/store', { state: { foo: 'bar' } });
    }

</script>
<div class="grid h-screen">
<div class="grid grid-flow-row justify-center">
    
    <h1 class="sm:pt-3 pt-1 font-greycliffbold text-4xl text-center text-transparent bg-clip-text bg-gradient-to-br from-[#20BF55] to-[#01BAEF] ">
        {$storeName}</h1>
        <div id="qr-code" >
            <qrCode/>
        </div>
        
  
</div>
<div class="grid grid-flow-row justify-center pt-5 gap-3">
    <div class="indicator justify-items-center place-self-center">
        <div class="">
            {#if !txnConfirmed}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Awaiting Payment Confirmation
            {:else}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Transaction Confirmed!
            {/if}
        </div>
    </div>
</div>
<div class="grid grid-flow-row justify-center pt-5 gap-3 pb-20">
    <div class="indicator justify-items-center place-self-center">
        <div class="">
            <button on:click={cancel} class="btn normal-case btn-lg bg-gradient-to-br border-accent hover:border-accent from-[#20BF55] to-[#01BAEF]"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="inline w-6 h-6 ">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
              </svg>
            <span class="pl-2">{txnConfirmed? "Return" : "Cancel"}</span></button>
        </div>
    </div>

</div>
</div>

