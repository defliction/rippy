<script lang='ts'>
    import { onMount } from "svelte";
    import * as web3 from '@solana/web3.js';
    import { storeName, publicKey } from './stores';
    import { goto } from '$app/navigation';

    let cnx;
    let invalidKey = false;

    onMount(async () => {
        
        let sol_rpc = process.env.SOLANA_RPC? process.env.SOLANA_RPC : "https://api.mainnet-beta.solana.com";
        cnx = new web3.Connection(sol_rpc);
        
    })

    async function createStore() {
        try {
            $publicKey = $publicKey.trim()
            //console.log($storeName, $publicKey)
            
            if (web3.PublicKey.isOnCurve($publicKey) == true) {
                invalidKey = false;
                goto('/store', { state: { foo: 'bar' } });
                
            }
            else {
                invalidKey = true
            }
        } catch(e) {
            invalidKey = true;
        }
        
    }

</script>

<div class="grid grid-flow-row justify-center">
    
    <h1 class="sm:pt-3 pt-1 outline font-greycliffbold text-5xl text-center text-transparent bg-clip-text bg-gradient-to-br from-[#20BF55] to-[#01BAEF]">
        <svg class="inline w-14 h-14" viewBox="0 0 326 384" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><g><path d="M302.867,170.246l-50.855,0l-0,-92.324c-0,-23.945 -19.481,-43.422 -43.422,-43.422l-6.617,-0l0,-26.953c0,-2.594 -1.344,-5.004 -3.547,-6.371c-2.203,-1.367 -4.957,-1.5 -7.281,-0.348l-19.668,9.734l-19.762,-9.785c-2.098,-1.039 -4.559,-1.039 -6.656,0l-19.758,9.785l-19.762,-9.785c-2.098,-1.039 -4.562,-1.035 -6.656,0l-19.766,9.785l-17.922,-8.871c-2.324,-1.152 -5.078,-1.019 -7.281,0.348c-2.203,1.367 -3.543,3.777 -3.543,6.371l0,26.09l-6.621,-0c-23.941,-0 -43.422,19.477 -43.422,43.422l-0,262.66c-0,23.941 19.481,43.418 43.422,43.418l164.84,-0c21.414,-0 39.254,-15.578 42.785,-35.996l51.492,0c12.574,0 22.805,-10.231 22.805,-22.805l-0,-132.148c-0,-12.574 -10.231,-22.805 -22.805,-22.805Zm-65.855,170.332c-0,15.672 -12.75,28.422 -28.422,28.422l-164.84,-0c-15.672,-0 -28.422,-12.75 -28.422,-28.422l-0,-262.656c-0,-15.672 12.75,-28.422 28.422,-28.422l6.621,-0l0,41.246l-9.543,0c-4.14,0 -7.5,3.359 -7.5,7.5l-0,54c-0,4.141 3.36,7.5 7.5,7.5l170.684,0c4.14,0 7.5,-3.359 7.5,-7.5l-0,-54c-0,-4.141 -3.36,-7.5 -7.5,-7.5l-9.539,0l0,-41.246l6.617,-0c15.672,-0 28.422,12.75 28.422,28.422l-0,262.656Zm-161.18,-38.828l-35.004,-0c-4.14,-0 -7.5,3.359 -7.5,7.5l-0,31.254c-0,4.141 3.36,7.5 7.5,7.5l35.004,0c4.145,0 7.5,-3.359 7.5,-7.5l0,-31.254c0,-4.141 -3.355,-7.5 -7.5,-7.5Zm135.68,-0l-35.004,-0c-4.141,-0 -7.5,3.359 -7.5,7.5l-0,31.254c-0,4.141 3.359,7.5 7.5,7.5l35.004,0c4.14,0 7.5,-3.359 7.5,-7.5l-0,-31.254c-0,-4.141 -3.36,-7.5 -7.5,-7.5Zm-67.84,-0l-35.004,-0c-4.141,-0 -7.5,3.359 -7.5,7.5l-0,31.254c-0,4.141 3.359,7.5 7.5,7.5l35.004,0c4.14,0 7.5,-3.359 7.5,-7.5l-0,-31.254c-0,-4.141 -3.36,-7.5 -7.5,-7.5Zm-75.34,31.254l-20.004,0l0,-16.254l20.004,-0l0,16.254Zm135.68,0l-20.004,0l-0,-16.254l20.004,-0l-0,16.254Zm-67.84,0l-20.004,0l-0,-16.254l20.004,-0l-0,16.254Zm174.5,-7.805c-0,4.305 -3.504,7.805 -7.805,7.805l-50.855,0l-0,-147.758l50.855,0c4.301,0 7.805,3.5 7.805,7.805l-0,132.148Zm-23.969,-122.699c-4.144,-0 -7.5,3.359 -7.5,7.5l0,98.379c0,4.141 3.356,7.5 7.5,7.5c4.141,-0 7.5,-3.359 7.5,-7.5l0,-98.379c0,-4.141 -3.359,-7.5 -7.5,-7.5Zm-75.191,37.25l-35.004,-0c-4.141,-0 -7.5,3.355 -7.5,7.5l-0,31.25c-0,4.145 3.359,7.5 7.5,7.5l35.004,-0c4.14,-0 7.5,-3.355 7.5,-7.5l-0,-31.25c-0,-4.145 -3.36,-7.5 -7.5,-7.5Zm-67.84,-0l-35.004,-0c-4.141,-0 -7.5,3.355 -7.5,7.5l-0,31.25c-0,4.145 3.359,7.5 7.5,7.5l35.004,-0c4.14,-0 7.5,-3.355 7.5,-7.5l-0,-31.25c-0,-4.145 -3.36,-7.5 -7.5,-7.5Zm-67.84,-0l-35.004,-0c-4.14,-0 -7.5,3.355 -7.5,7.5l-0,31.25c-0,4.145 3.36,7.5 7.5,7.5l35.004,-0c4.145,-0 7.5,-3.355 7.5,-7.5l0,-31.25c0,-4.145 -3.355,-7.5 -7.5,-7.5Zm60.34,31.25l-20.004,-0l-0,-16.25l20.004,-0l-0,16.25Zm67.84,-0l-20.004,-0l-0,-16.25l20.004,-0l-0,16.25Zm-135.68,-0l-20.004,-0l0,-16.25l20.004,-0l0,16.25Zm75.34,-93.254l-35.004,0c-4.141,0 -7.5,3.359 -7.5,7.5l-0,31.254c-0,4.141 3.359,7.5 7.5,7.5l35.004,-0c4.14,-0 7.5,-3.359 7.5,-7.5l-0,-31.254c-0,-4.141 -3.36,-7.5 -7.5,-7.5Zm67.84,0l-35.004,0c-4.141,0 -7.5,3.359 -7.5,7.5l-0,31.254c-0,4.141 3.359,7.5 7.5,7.5l35.004,-0c4.14,-0 7.5,-3.359 7.5,-7.5l-0,-31.254c-0,-4.141 -3.36,-7.5 -7.5,-7.5Zm-135.68,0l-35.004,0c-4.14,0 -7.5,3.359 -7.5,7.5l-0,31.254c-0,4.141 3.36,7.5 7.5,7.5l35.004,-0c4.145,-0 7.5,-3.359 7.5,-7.5l0,-31.254c0,-4.141 -3.355,-7.5 -7.5,-7.5Zm60.34,31.254l-20.004,-0l-0,-16.254l20.004,0l-0,16.254Zm67.84,-0l-20.004,-0l-0,-16.254l20.004,0l-0,16.254Zm-135.68,-0l-20.004,-0l0,-16.254l20.004,0l0,16.254Zm135.68,-103.254l-0,39l-155.684,0l0,-39l155.684,0Zm-138.641,-85.25l10.422,5.16c2.094,1.035 4.559,1.035 6.652,0l19.766,-9.785l19.762,9.785c2.097,1.035 4.558,1.035 6.656,0l19.762,-9.785l19.761,9.785c2.098,1.035 4.559,1.039 6.657,0l12.164,-6.023l0,71.113l-121.602,0l0,-70.25Z" style="fill:url(#_Linear1);"/></g><defs><linearGradient id="_Linear1" x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(325.344,0,0,384.002,0.327999,191.999)"><stop offset="0" style="stop-color:#20bf55;stop-opacity:1"/><stop offset="1" style="stop-color:#01baef;stop-opacity:1"/></linearGradient></defs></svg>
       rippy</h1>
  
</div>

<div class="grid grid-flow-row justify-center pt-5 gap-3">
    <h1 class="card-title pt-5 text-center text-md font-greycliffbold -mt-5 pb-2 text-transparent bg-clip-text bg-gradient-to-br from-[#20BF55] to-[#01BAEF]">Create a Point-of-Sale terminal instantly!</h1>
    <div class="indicator justify-items-center place-self-center">
        
        <div class="card w-96 bg-base-200 shadow border">
            <div class="card-body px-6 pb-4">
                
                <p class="text-md -mt-5 font-greycliffmed text-transparent bg-clip-text bg-gradient-to-br from-[#20BF55] to-[#01BAEF]">Enter your merchant details</p>
                
                <input bind:value={$storeName} type="text" placeholder="Store name e.g. Bruno's Burritos" class="input input-sm input-bordered input-accent w-full max-w-xs" /> 
                <input bind:value={$publicKey} type="text" placeholder="Merchant wallet address (Solana Public Key)" class="input input-sm input-bordered input-accent w-full max-w-xs" />    
                {#if invalidKey}
                    <span class="text-center text-sm text-warning">Invalid key - please enter a valid wallet address

                    </span>
                {/if}
                <div class="card-actions justify-center">
                    <button on:click={createStore} class="btn normal-case btn-sm bg-gradient-to-br border-accent hover:border-accent from-[#20BF55] to-[#01BAEF]">Create Store</button>
                </div>
                <div class="text-md -mb-5 text-center font-greycliffmed text-transparent bg-clip-text bg-gradient-to-br from-[#20BF55] to-[#01BAEF]">Powered by
                    <svg class= "inline w-16 h-16 pb-1" viewBox="0 0 86 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M77.1128 22.0065L72.1479 11.1583H68.027L75.1197 25.7956L74.9921 26.2364C74.8144 26.8223 74.4395 27.3282 73.9311 27.6679C73.4228 28.0076 72.8125 28.1599 72.2046 28.0989C71.493 28.0923 70.7948 27.9039 70.1761 27.5515L69.5165 30.6865C70.4684 31.0797 71.4871 31.2849 72.5167 31.2908C75.3538 31.2908 77.0702 30.2458 78.4888 27.1676L86 11.1583H82.021L77.1128 22.0065Z" fill="black"/>
                        <path d="M42.0235 5.99011H30.1219V25.9306H34.0229V18.6013H42.0235C46.3713 18.6013 49.2297 16.4047 49.2297 12.2957C49.2297 8.18677 46.3713 5.99011 42.0235 5.99011ZM41.8107 15.1109H34.0087V9.42372H41.8107C44.0662 9.42372 45.357 10.4545 45.357 12.2673C45.357 14.0801 44.0662 15.1109 41.8107 15.1109Z" fill="black"/>
                        <path d="M65.539 22.1487V16.1416C65.539 12.5872 62.9928 10.746 58.6236 10.746C55.0773 10.746 51.9706 12.4024 51.0982 14.9473L54.3042 16.0848C54.7794 14.8123 56.432 13.8739 58.4889 13.8739C60.9288 13.8739 61.9572 14.8691 61.9572 16.0848V16.4758L56.1554 17.1156C52.8147 17.471 50.6159 18.971 50.6159 21.6511C50.6159 24.587 53.1339 26.1652 56.4745 26.1652C58.6278 26.2325 60.7248 25.4691 62.3331 24.0325C62.9147 25.4543 63.5105 26.4069 67.4754 25.9022V22.9307C65.8866 23.3145 65.539 22.9307 65.539 22.1487ZM61.9927 20.2435C61.9927 22.1771 59.2903 23.2008 57.0278 23.2008C55.3042 23.2008 54.2687 22.6463 54.2687 21.5444C54.2687 20.4425 55.1198 20.0444 56.7653 19.8525L62.0069 19.2411L61.9927 20.2435Z" fill="black"/>
                        <path d="M22.7439 21.253C22.7714 21.3361 22.7714 21.4259 22.7439 21.5089C22.7279 21.5918 22.6885 21.6683 22.6304 21.7293L18.8783 25.6748C18.7956 25.7599 18.6968 25.8276 18.5875 25.8738C18.478 25.9219 18.3595 25.9462 18.24 25.9449H0.444308C0.361894 25.9456 0.280888 25.9235 0.210248 25.8809C0.139655 25.8328 0.0833028 25.7665 0.0471156 25.689C0.0221236 25.6104 0.0221236 25.5259 0.0471156 25.4473C0.0618237 25.3655 0.0986193 25.2892 0.153506 25.2269L3.91265 21.2815C3.99533 21.1963 4.09422 21.1286 4.20346 21.0824C4.31277 21.0337 4.43137 21.0094 4.551 21.0113H22.3183C22.404 21.0097 22.4882 21.0345 22.5594 21.0824C22.6393 21.1154 22.7047 21.1759 22.7439 21.253ZM18.8854 13.7602C18.8009 13.6773 18.7025 13.6099 18.5946 13.5612C18.484 13.5164 18.3663 13.4924 18.2471 13.4901H0.444308C0.360864 13.4913 0.27943 13.5159 0.209231 13.5612C0.139032 13.6064 0.0828724 13.6704 0.0471156 13.746C0.0225831 13.8247 0.0225831 13.909 0.0471156 13.9877C0.0590607 14.0704 0.0962206 14.1474 0.153506 14.2081L3.91265 18.1606C3.99717 18.2436 4.09561 18.311 4.20346 18.3597C4.31383 18.405 4.43173 18.4291 4.551 18.4308H22.3183C22.404 18.4324 22.4882 18.4076 22.5594 18.3597C22.6311 18.3178 22.6861 18.2526 22.7155 18.1749C22.7518 18.0992 22.7639 18.0141 22.7499 17.9314C22.7359 17.8486 22.6966 17.7722 22.6375 17.7128L18.8854 13.7602ZM0.210248 10.8455C0.280888 10.8881 0.361894 10.9102 0.444308 10.9095H18.2471C18.3666 10.9108 18.4851 10.8865 18.5946 10.8384C18.7038 10.7922 18.8027 10.7246 18.8854 10.6394L22.6375 6.69394C22.6956 6.63288 22.7349 6.55639 22.7509 6.47356C22.7755 6.39487 22.7755 6.31055 22.7509 6.23186C22.7216 6.15414 22.6665 6.08889 22.5949 6.04702C22.5237 5.99912 22.4395 5.9743 22.3538 5.97593H4.52263C4.403 5.97402 4.2844 5.99828 4.17509 6.04702C4.06585 6.09322 3.96696 6.1609 3.88428 6.24607L0.132229 10.2057C0.0727337 10.2658 0.0331119 10.3427 0.0187441 10.4261C-0.00624802 10.5047 -0.00624802 10.5892 0.0187441 10.6678C0.0647789 10.7438 0.131116 10.8054 0.210248 10.8455V10.8455Z" fill="url(#paint0_linear_127_5269)"/>
                        <defs>
                        <linearGradient id="paint0_linear_127_5269" x1="1.922" y1="26.4209" x2="20.1989" y2="5.40994" gradientUnits="userSpaceOnUse">
                        <stop offset="0.08" stop-color="#9945FF"/>
                        <stop offset="0.3" stop-color="#8752F3"/>
                        <stop offset="0.5" stop-color="#5497D5"/>
                        <stop offset="0.6" stop-color="#43B4CA"/>
                        <stop offset="0.72" stop-color="#28E0B9"/>
                        <stop offset="0.97" stop-color="#19FB9B"/>
                        </linearGradient>
                        </defs>
                        </svg>
                    </div>
            </div>
        </div>
    </div>

</div>
<div class="flex justify-center flex-row pt-2">
    <footer class="footer footer-center p-2 text-base-content rounded-md">
        
        <div class="items-center ">

            <span class=" text-sm ">rippy © 2023</span>
            </div>
    
    </footer>
</div>
