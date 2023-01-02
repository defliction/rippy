<script lang='ts'>
    import { onMount, onDestroy } from "svelte";
    import * as web3 from '@solana/web3.js';
    import { storeName, publicKey, pmtAmt } from '../stores.js';
    import * as KioskBoard from 'kioskboard';
    import englishKeypbad from "../../keyboards/kioskboard-keys-english.json"
	import { Focus } from "focus-svelte";
    import { goto } from '$app/navigation';

    let cnx;
    let keyboardRef = null;



    onMount(async () => {
        
        let sol_rpc = "https://withered-distinguished-pallet.solana-mainnet.quiknode.pro/f98c9d657e37a766115f45e72eaef0bc5836f7f6/";
        cnx = new web3.Connection(sol_rpc);
       
    // Initialize KioskBoard (default/all options)

        KioskBoard.init({

        /*!
        * Required
        * An Array of Objects has to be defined for the custom keys. Hint: Each object creates a row element (HTML) on the keyboard.
        * e.g. [{"key":"value"}, {"key":"value"}] => [{"0":"A","1":"B","2":"C"}, {"0":"D","1":"E","2":"F"}]
        */
        keysArrayOfObjects: englishKeypbad,

        /*!
        * Required only if "keysArrayOfObjects" is "null".
        * The path of the "kioskboard-keys-${langugage}.json" file must be set to the "keysJsonUrl" option. (XMLHttpRequest to get the keys from JSON file.)
        * e.g. '/Content/Plugins/KioskBoard/dist/kioskboard-keys-english.json'
        */
        keysJsonUrl: null,

        /*
        * Optional: An Array of Strings can be set to override the built-in special characters.
        * e.g. ["#", "€", "%", "+", "-", "*"]
        */
        keysSpecialCharsArrayOfStrings: null,

        /*
        * Optional: An Array of Numbers can be set to override the built-in numpad keys. (From 0 to 9, in any order.)
        * e.g. [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
        */
        keysNumpadArrayOfNumbers: null,

        // Optional: (Other Options)

        // Language Code (ISO 639-1) for custom keys (for language support) => e.g. "de" || "en" || "fr" || "hu" || "tr" etc...
        language: 'en',

        // The theme of keyboard => "light" || "dark" || "flat" || "material" || "oldschool"
        theme: 'light',

        // Scrolls the document to the top or bottom(by the placement option) of the input/textarea element. Prevented when "false"
        autoScroll: true,

        // Uppercase or lowercase to start. Uppercased when "true"
        capsLockActive: true,

        /*
        * Allow or prevent real/physical keyboard usage. Prevented when "false"
        * In addition, the "allowMobileKeyboard" option must be "true" as well, if the real/physical keyboard has wanted to be used.
        */
        allowRealKeyboard: false,

        // Allow or prevent mobile keyboard usage. Prevented when "false"
        allowMobileKeyboard: false,

        // CSS animations for opening or closing the keyboard
        cssAnimations: true,

        // CSS animations duration as millisecond
        cssAnimationsDuration: 120,

        // CSS animations style for opening or closing the keyboard => "slide" || "fade"
        cssAnimationsStyle: 'slide',

        // Enable or Disable Spacebar functionality on the keyboard. The Spacebar will be passive when "false"
        keysAllowSpacebar: true,

        // Text of the space key (Spacebar). Without text => " "
        keysSpacebarText: 'Space',

        // Font family of the keys
        keysFontFamily: 'sans-serif',

        // Font size of the keys
        keysFontSize: '22px',

        // Font weight of the keys
        keysFontWeight: 'normal',

        // Size of the icon keys
        keysIconSize: '25px',

        // Text of the Enter key (Enter/Return). Without text => " "
        keysEnterText: 'Enter',

        // The callback function of the Enter key. This function will be called when the enter key has been clicked.
        keysEnterCallback: createStore,

        // The Enter key can close and remove the keyboard. Prevented when "false"
        keysEnterCanClose: true,
        });

        KioskBoard.run('.js-virtual-keyboard');
        setTimeout(() => {
            keyboardRef.focus()
        }, 250)
        
    })
    onDestroy(async ()=> {
        //document.body.setAttribute('tabindex', '-1');
       
    })
    async function createStore() {
        goto('/present', { state: { foo: 'bar' } });
        
        
    }

</script>

<div class="grid grid-flow-row justify-center">
    
    <h1 class="sm:pt-3 pt-1 font-greycliffbold text-4xl text-center text-[#0D7071] ">
        {$storeName}</h1>
        <div class=" ">
        
            <input  bind:this={keyboardRef} bind:value={$pmtAmt} class="js-virtual-keyboard text-2xl border border-2 border-[#0D7071] rounded-full text-center" data-kioskboard-type="numpad" data-kioskboard-placement="bottom" placeholder="Enter USDC amount" />
           
        </div>
        
</div>

<div class="grid grid-flow-row justify-center pt-5 gap-3">
    <div class="indicator justify-items-center place-self-center">
        <div class="">
            <button on:click={createStore} class="btn normal-case btn-lg bg-gradient-to-br border-accent hover:border-accent from-[#20BF55] to-[#01BAEF]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z" />
                  </svg>
                  
              
             <span class="pl-2">Create QR</span></button>
        </div>
    </div>

</div>
