import TonWeb from "tonweb";

// export const MINIMUM_TONCOIN_AMOUNT = TonWeb.utils.toNano('10');
export const MINIMUM_TONCOIN_AMOUNT = TonWeb.utils.toNano('0.01');

export const PARAMS: Params = {
  appName: "TON Layer2 Bridge",
  appLogoUrl: "https://ton.org/bridge/favicon.ico",
  tonTransferUrl:
    "ton://transfer/<BRIDGE_ADDRESS>?amount=<AMOUNT>&text=swapTo%23<TO_ADDRESS>",
  tonExplorerUrl: {
    main: "https://tonscan.org/address/<ADDRESS>",
    test: "https://testnet.tonscan.org/address/<ADDRESS>",
  },
  networks: {
    eth: {
      main: {
        getGasUrl: "https://ethereumgas.toncenter.com",
        explorerUrl: "https://etherscan.io/token/<ADDRESS>",
        wTonAddress: "0x582d872a1b094fc48f5de31d3b73f2d9be47def1",
        tonBridgeAddress: "Ef_dJMSh8riPi3BTUTtcxsWjG8RLKnLctNjAM4rw8NN-xWdr",
        tonCollectorAddress: "EQCuzvIOXLjH2tv35gY4tzhIvXCqZWDuK9kUhFGXKLImgxT5",
        tonMultisigAddress: "kf87m7_QrVM4uXAPCDM4DuF9Rj5Rwa5nHubwiQG96JmyAo-S",
        tonBridgeAddressV2: "Ef-1JetbPF9ubc1ga-57oHoOyDA1IShJt-BVlJnA9rrVTfrB",
        tonBridgeV2EVMAddress: "0xb323692b6d4DB96af1f52E4499a2bd0Ded9af3C5",
        tonCollectorAddressV2: "EQDF6fj6ydJJX_ArwxINjP-0H8zx982W4XgbkKzGvceUWvXl",
        tonMultisigAddressV2: "Ef8hHxV0v2I9FHh3CMX91WXjKaJav6SQlemEQm8ZvPBJdLde",
        tonCenterUrl: "https://toncenter.com/api/v2/jsonRPC",
        tonCenterApiKey:
          "d843619b379084d133f061606beecbf72ae2bf60e0622e808f2a3f631673599b",
        rpcEndpoint:
          "https://bridge.ton.org/mainnet/",
        chainId: 1,
        blocksConfirmations: 65,
        defaultGwei: 25,
        toncoinTransferTo_gasPrice: 0.004,
        toncoinTransferFrom_gasPrice: 0.001,
        tokenTransferTo_gasPrice: 0.00173,
        tokenTransferFrom_gasPrice: 0.0036,
      },
      test: {
        getGasUrl: "",
        explorerUrl: "http://103.231.86.33:10572/token/<ADDRESS>",
        wTonAddress: "0x1459a1399DdAabCF3C98B82E287C9e3e8A5B61f5",
        tonBridgeAddress: "EQApi2TaBLKseMi9ifC45cGG-zexU4_d4Y8KSnikZRq23f_I",
        tonCollectorAddress: "",
        tonMultisigAddress: "",
        tonBridgeV2EVMAddress: "0x4Efd8f04B6fb4CFAF0cfaAC11Fb489b97DBebB60",
        tonBridgeAddressV2: "Ef-lJBALjXSSwSKiedKzriSHixwQUxJ1BxTE05Ur5AXwZVjp",
        tonCollectorAddressV2:
          "EQC1ZeKX1LNrlQ4bwi3je3KVM1AoZ3rkeyHM5hv9pYzmIh4v",
        tonMultisigAddressV2:
          "kf9NLH8CsGUkEKGYzCxaLd9Th6T5YkO-MXsCEU9Rw1fiRhf9",
        tonCenterUrl: "",
        tonCenterApiKey:
          "",
        rpcEndpoint:
          "",
        chainId: 66432,
        blocksConfirmations: 12,
        defaultGwei: 25,
        toncoinTransferTo_gasPrice: 0.004,
        toncoinTransferFrom_gasPrice: 0.001,
        tokenTransferTo_gasPrice: 0.00173,
        tokenTransferFrom_gasPrice: 0.0036,
      },
    }
  }
};

export const getTokenAddressByToken = (token: string, isFromTon: boolean, isTestnet: boolean, pair: string): string => {
  if (isTestnet) { // TESTNET

    if (pair === 'eth') { // Goerli
      switch (token) {
        case 'usdt':
          return isFromTon ? 'EQCyOkdBxpGvZ1stp7uZQi25WXH3lPg3_-nZ6xEbxcJXeZvV' : '0x7120c3f1528e1356b2aac0bb6a0e5acb008cd9e5';
        case 'usdc':
          return isFromTon ? '' : '';
        case 'dai':
          return isFromTon ? '' : '';
        case 'wbtc':
          return isFromTon ? '' : '';
      }
    } else if (pair === 'bsc') { // BSC testnet
      switch (token) {
        case 'usdt':
          return isFromTon ? 'EQASJnz-JMQLwzH0qxohY0IK6jahBlTd63rtccA17G7tzL5t' : '0xe934b638b61d9c51bdb2cde62b8edae3a1f2064a';
        case 'usdc':
          return isFromTon ? '' : '';
        case 'dai':
          return isFromTon ? '' : '';
        case 'wbtc':
          return isFromTon ? '' : '';
      }
    }
    return '';

  } else { // MAINNET

    if (pair === 'eth') { // Ethereum Mainnet
      switch (token) {
        case 'usdt':
          return isFromTon ? 'EQBynBO23ywHy_CgarY9NK9FTz0yDsG82PtcbSTQgGoXwiuA' : '0xdAC17F958D2ee523a2206206994597C13D831ec7';
        case 'usdc':
          return isFromTon ? 'EQB-MPwrd1G6WKNkLz_VnV6WqBDd142KMQv-g1O-8QUA3728' : '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48';
        case 'dai':
          return isFromTon ? 'EQDo_ZJyQ_YqBzBwbVpMmhbhIddKtRP99HugZJ14aFscxi7B' : '0x6B175474E89094C44Da98b954EedeAC495271d0F';
        case 'wbtc':
          return isFromTon ? 'EQDcBkGHmC4pTf34x3Gm05XvepO5w60DNxZ-XT4I6-UGG5L5' : '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599';
      }
    }
    return ''; // BSC Mainnet
  }
}