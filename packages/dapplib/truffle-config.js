require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess gloom symptom spot warrior ridge remember equip guess entire off silent'; 
let testAccounts = [
"0xe8f2e3dfc78379bd87682f44458feb561d1ff14545579e4c398a75e700d23c87",
"0x9d7bcc2ab9a30f06868b3fa16bbfaeba495748693ff0c5ee2fc6bb7123b92204",
"0x14afbc48fe8959de3e478e25c66706c246f0a10143b670f593ccac33478afd39",
"0x41bde859aa208eb7c016a6e43be58b228b198d6839e21afa2876e21b9ec096c8",
"0x5610b600404adcfbdeed7f908471588dbd8a0e1f20717bbc81f2e8da600f8ff9",
"0x2419cf441604b0560102e790b06277353a67db058f7b5d6f9063da20ba17baf1",
"0x3386787cbd82805cd3485e0f976f6895c1c6842dff8ddb1685e31e2705c71bd3",
"0xba17b193c115cded6bcd771c0c728646fa514ef452f787137c894af6c614bddf",
"0x21b1aedfa6eee1d04d134d0cae107be186bebbc5e3776c0ea4b2c358ba88a3c9",
"0x9a58f1051fc0dedb0a1a6d53507cd539952c55bd6b542c4a92dcc0f995ed3e99"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


