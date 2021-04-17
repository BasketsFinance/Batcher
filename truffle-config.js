const HDWalletProvider = require('@truffle/hdwallet-provider')
const web3 = require('web3');
const mainnetEndpointUrl = 'https://bsc-dataseed.binance.org/';
const testnetEndpointUrl = "https://data-seed-prebsc-1-s1.binance.org:8545/"
const {privateKey, bsscanKey} = require('./keys');


module.exports = {
    networks: {
        mainnet: {
            provider: function () {
                return new HDWalletProvider({
                    privateKeys: [privateKey],
                    providerOrUrl: mainnetEndpointUrl
                });
            },
            gas: 2000000,
            gasPrice: web3.utils.toWei("10", "gwei"),
            network_id: 56
        },

        testnet: {
            provider: function () {
                return new HDWalletProvider({
                    privateKeys: [privateKey],
                    providerOrUrl: testnetEndpointUrl
                });
            },
            gas: 2000000,
            gasPrice: web3.utils.toWei("10", "gwei"),
            network_id: 97,
            skipDryRun: true
        }
    },

    compilers: {
        solc: {
            version: '0.6.12',
            settings: {
                optimizer: {
                    enabled: true,
                    runs: 10000
                }
            }
        }
    },

    plugins: ['truffle-plugin-verify'],
    api_keys: {
        bscscan: bsscanKey
    },

    db: {
        enabled: false
    }
};
