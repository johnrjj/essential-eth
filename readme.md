<p align="center">
  <img src="https://user-images.githubusercontent.com/3408480/163274699-ae4fb0f4-fca0-4745-bcd7-4868f80deaf6.png" height="220" title="Logo"/>

</p>
<p align="center">

  <b>
    🪶 Essential Eth 🪶
  </b>
  <br/>
  <i>A replacement for ethers & web3 that's 20x smaller</i>
  <br/>
</p>

<br/>

## Why you should replace Ethers.js and web3

<p align="center">
<img src="https://user-images.githubusercontent.com/3408480/133322814-f3d18424-4ba8-4a37-8cbc-c5e6828354a3.png" title="Import size comparison" width="900"/>
</p>

---

[![🧪 tests](https://github.com/Earnifi/essential-eth/actions/workflows/test.yml/badge.svg)](https://github.com/Earnifi/essential-eth/actions/workflows/test.yml) [![codecov](https://codecov.io/gh/Earnifi/essential-eth/branch/master/graph/badge.svg?token=E44EK6RWTZ)](https://codecov.io/gh/Earnifi/essential-eth) ![](https://badgen.net/bundlephobia/minzip/essential-eth) ![](https://badgen.net/bundlephobia/tree-shaking/essential-eth) ![](https://img.shields.io/npm/v/essential-eth)

<br/>

- 🏆️ <sub><sup>[smallest code size possible](https://bundlephobia.com/package/essential-eth)</sup></sub>
- ʦ Fully typed with TypeScript (also works with JavaScript)
- 🧪 Tested to match both `web3` and `ethers`
- - ⚡️ Near-identical API to `ethers`
- 🌲 Tree-shaking and no side-effects
- 🙌 Supports multiple JS versions (CommonJS and ESM)
  - ✅ Node 18, 16, 14, & 12
  - ✅ Web

<br/>

## Table of Contents

<!-- ⛔️ AUTO-GENERATED-CONTENT:START (TOC:collapse=true&collapseText=Click to expand) -->
<details>
<summary>Click to expand</summary>

- [Why you should replace Ethers.js and web3](#why-you-should-replace-ethersjs-and-web3)
- [Install](#install)
- [🛠 Utils](#-utils)
  - [`arrayify`](#arrayify)
  - [`computeAddress`](#computeaddress)
  - [`computePublicKey`](#computepublickey)
  - [`concat`](#concat)
  - [`etherToGwei`](#ethertogwei)
  - [`etherToWei`](#ethertowei)
  - [`gweiToEther`](#gweitoether)
  - [`hashMessage`](#hashmessage)
  - [`hexConcat`](#hexconcat)
  - [`hexDataLength`](#hexdatalength)
  - [`hexDataSlice`](#hexdataslice)
  - [`hexStripZeros`](#hexstripzeros)
  - [`hexValue`](#hexvalue)
  - [`hexZeroPad`](#hexzeropad)
  - [`hexlify`](#hexlify)
  - [`isAddress`](#isaddress)
  - [`isBytes`](#isbytes)
  - [`isBytesLike`](#isbyteslike)
  - [`isHexString`](#ishexstring)
  - [`jsonRpcProvider`](#jsonrpcprovider)
  - [`keccak256`](#keccak256)
  - [`pack`](#pack)
  - [`solidityKeccak256`](#soliditykeccak256)
  - [`splitSignature`](#splitsignature)
  - [`stripZeros`](#stripzeros)
  - [`tinyBig`](#tinybig)
  - [`toChecksumAddress`](#tochecksumaddress)
  - [`toUtf8Bytes`](#toutf8bytes)
  - [`weiToEther`](#weitoether)
  - [`zeroPad`](#zeropad)
- [RPC](#rpc)
  - [`getTransactionCount(address, blockTag?): Promise<number>`](#gettransactioncountaddress-blocktag-promisenumber)
  - [`getGasPrice`](#getgasprice)
  - [`getBalance`](#getbalance)
  - [`getNetwork`](#getnetwork)
  - [`getBlock`](#getblock)
  - [`getTransaction`](#gettransaction)
- [Contract](#contract)
  - [`contractFunctionName(args)`](#contractfunctionnameargs)
- [More Info](#more-info)

</details>

<!-- ⛔️ AUTO-GENERATED-CONTENT:END -->

  <br/>

## Install

```sh
npm install --save essential-eth # TypeScript types load automatically

# or yarn
yarn add essential-eth # TypeScript types load automatically
```

<br/>

## 🛠 Utils

```typescript
import { etherToWei } from 'essential-eth';

// or in a non-import environment
const { etherToWei } = require('essential-eth');
```

<!-- ⛔️ AUTO-GENERATED-CONTENT:START (FUNCTIONS) -->

#### [`arrayify`](https://essential-eth.vercel.app/docs/api/modules#arrayify)

```typescript
arrayify(value: number | BytesLike | Hexable, options: DataOptions): Uint8Array
```

  <details>
  <summary>View Example</summary>

```js
import { arrayify } from 'essential-eth';

// or in a require environment
const { arrayify } = require('essential-eth');
```

```js
arrayify(1);
// Uint8Array(1) [ 1 ]
```

```js
arrayify(0x1234);
// Uint8Array(2) [ 18, 52 ]
```

```js
arrayify('0x1', { hexPad: 'right' });
// Uint8Array(1) [ 16 ]
```

  </details>

  <br/>

#### [`computeAddress`](https://essential-eth.vercel.app/docs/api/modules#computeaddress)

```typescript
computeAddress(key: string): string
```

  <br/>

#### [`computePublicKey`](https://essential-eth.vercel.app/docs/api/modules#computepublickey)

```typescript
computePublicKey(privKey: BytesLike): string
```

  <br/>

#### [`concat`](https://essential-eth.vercel.app/docs/api/modules#concat)

```typescript
concat(arrayOfBytesLike: Array<BytesLikeWithNumber>): Uint8Array
```

  <details>
  <summary>View Example</summary>

```js
import { concat } from 'essential-eth';

// or in a require environment
const { concat } = require('essential-eth');
```

```js
concat([0, 1]);
// Uint8Array(2) [ 0, 1 ]
```

  </details>

  <br/>

#### [`etherToGwei`](https://essential-eth.vercel.app/docs/api/modules#ethertogwei)

```typescript
etherToGwei(etherQuantity: string | number | TinyBig | Big): TinyBig
```

  <details>
  <summary>View Example</summary>

```js
import { etherToGwei } from 'essential-eth';

// or in a require environment
const { etherToGwei } = require('essential-eth');
```

```javascript
etherToGwei('1000').toString();
// '1000000000000'
etherToGwei(1000).toString();
// '1000000000000'
```

```javascript
etherToGwei('1000').toNumber();
// 1000000000000
etherToGwei(1000).toNumber();
// 1000000000000
```

  </details>

  <br/>

#### [`etherToWei`](https://essential-eth.vercel.app/docs/api/modules#ethertowei)

```typescript
etherToWei(etherQuantity: string | number | TinyBig | Big): TinyBig
```

  <details>
  <summary>View Example</summary>

```js
import { etherToWei } from 'essential-eth';

// or in a require environment
const { etherToWei } = require('essential-eth');
```

```javascript
etherToWei('1000').toString();
// '1000000000000000000000'
etherToWei(1000).toString();
// '1000000000000000000000'
```

```javascript
etherToWei('1000').toNumber();
// 1000000000000000000000
etherToWei(1000).toNumber();
// 1000000000000000000000
```

  </details>

  <br/>

#### [`gweiToEther`](https://essential-eth.vercel.app/docs/api/modules#gweitoether)

```typescript
gweiToEther(gweiQuantity: string | number | TinyBig | Big): TinyBig
```

  <details>
  <summary>View Example</summary>

```js
import { gweiToEther } from 'essential-eth';

// or in a require environment
const { gweiToEther } = require('essential-eth');
```

```javascript
gweiToEther('1000000000000').toString();
// '1000'
gweiToEther(1000000000000).toString();
// '1000'
```

```javascript
gweiToEther('1000000000000').toNumber();
// 1000
gweiToEther(1000000000000).toNumber();
// 1000
```

  </details>

  <br/>

#### [`hashMessage`](https://essential-eth.vercel.app/docs/api/modules#hashmessage)

```typescript
hashMessage(message: string | Bytes): string
```

  <details>
  <summary>View Example</summary>

```js
import { hashMessage } from 'essential-eth';

// or in a require environment
const { hashMessage } = require('essential-eth');
```

```js
hashMessage('Hello World');
// '0xa1de988600a42c4b4ab089b619297c17d53cffae5d5120d82d8a92d0bb3b78f2'
```

  </details>

  <br/>

#### [`hexConcat`](https://essential-eth.vercel.app/docs/api/modules#hexconcat)

```typescript
hexConcat(items: Array<BytesLike>): string
```

  <br/>

#### [`hexDataLength`](https://essential-eth.vercel.app/docs/api/modules#hexdatalength)

```typescript
hexDataLength(data: BytesLike): null | number
```

  <br/>

#### [`hexDataSlice`](https://essential-eth.vercel.app/docs/api/modules#hexdataslice)

```typescript
hexDataSlice(data: BytesLikeWithNumber, offset: number, endOffset: number): string
```

  <br/>

#### [`hexStripZeros`](https://essential-eth.vercel.app/docs/api/modules#hexstripzeros)

```typescript
hexStripZeros(value: BytesLike): string
```

  <br/>

#### [`hexValue`](https://essential-eth.vercel.app/docs/api/modules#hexvalue)

```typescript
hexValue(value: number | bigint | BytesLike | Hexable): string
```

  <br/>

#### [`hexZeroPad`](https://essential-eth.vercel.app/docs/api/modules#hexzeropad)

```typescript
hexZeroPad(value: BytesLikeWithNumber, length: number): string
```

  <details>
  <summary>View Example</summary>

```js
import { hexZeroPad } from 'essential-eth';

// or in a require environment
const { hexZeroPad } = require('essential-eth');
```

```javascript
hexZeroPad('0x60', 2);
// '0x0060'
```

```javascript
hexZeroPad(0x60, 3);
// '0x000060'
```

```javascript
hexZeroPad('12345', 1);
// Throws
```

  </details>

  <br/>

#### [`hexlify`](https://essential-eth.vercel.app/docs/api/modules#hexlify)

```typescript
hexlify(value: number | bigint | BytesLike | Hexable, options: DataOptions): string
```

  <details>
  <summary>View Example</summary>

```js
import { hexlify } from 'essential-eth';

// or in a require environment
const { hexlify } = require('essential-eth');
```

```js
hexlify(4);
// '0x04'

hexlify(14);
// '0x0e'
```

  </details>

  <br/>

#### [`isAddress`](https://essential-eth.vercel.app/docs/api/modules#isaddress)

```typescript
isAddress(address: string): boolean
```

  <details>
  <summary>View Example</summary>

```js
import { isAddress } from 'essential-eth';

// or in a require environment
const { isAddress } = require('essential-eth');
```

```javascript
isAddress('0xc0deaf6bd3f0c6574a6a625ef2f22f62a5150eab');
// true
```

```javascript
isAddress('bad');
// false
```

```javascript
// Does NOT support ENS.
isAddress('vitalik.eth');
// false
```

  </details>

  <br/>

#### [`isBytes`](https://essential-eth.vercel.app/docs/api/modules#isbytes)

```typescript
isBytes(value: any): value
```

  <details>
  <summary>View Example</summary>

```js
import { isBytes } from 'essential-eth';

// or in a require environment
const { isBytes } = require('essential-eth');
```

```js
isBytes([1, 2, 3]);
// true
```

```js
isBytes(false);
// false
```

```js
isBytes(new Uint8Array(1));
// true
```

  </details>

  <br/>

#### [`isBytesLike`](https://essential-eth.vercel.app/docs/api/modules#isbyteslike)

```typescript
isBytesLike(value: any): value
```

  <details>
  <summary>View Example</summary>

```js
import { isBytesLike } from 'essential-eth';

// or in a require environment
const { isBytesLike } = require('essential-eth');
```

```js
isBytesLike([1, 2, 3]);
// true
```

```js
isBytesLike(false);
// false
```

```js
isBytesLike(new Uint8Array(1));
// true
```

  </details>

  <br/>

#### [`isHexString`](https://essential-eth.vercel.app/docs/api/modules#ishexstring)

```typescript
isHexString(value: any, length: number): boolean
```

  <br/>

#### [`jsonRpcProvider`](https://essential-eth.vercel.app/docs/api/modules#jsonrpcprovider)

```typescript
jsonRpcProvider(rpcUrl: string): JsonRpcProvider
```

  <details>
  <summary>View Example</summary>

```js
import { jsonRpcProvider } from 'essential-eth';

// or in a require environment
const { jsonRpcProvider } = require('essential-eth');
```

```javascript
jsonRpcProvider()
  .getBlock('latest')
  .then((block) => {
    console.log(block.number);
  });
// 14530496
```

  </details>

  <br/>

#### [`keccak256`](https://essential-eth.vercel.app/docs/api/modules#keccak256)

```typescript
keccak256(data: BytesLike): string
```

  <br/>

#### [`pack`](https://essential-eth.vercel.app/docs/api/modules#pack)

```typescript
pack(types: Array<string>, values: Array<any>): string
```

  <br/>

#### [`solidityKeccak256`](https://essential-eth.vercel.app/docs/api/modules#soliditykeccak256)

```typescript
solidityKeccak256(types: Array<string>, values: Array<any>): string
```

  <details>
  <summary>View Example</summary>

```js
import { solidityKeccak256 } from 'essential-eth';

// or in a require environment
const { solidityKeccak256 } = require('essential-eth');
```

```javascript
const types = ['string', 'bool', 'uint32'];
const values = ['essential-eth is great', true, 14];
solidityKeccak256(types, values);
// '0xe4d4c8e809faac09d58f468f0aeab9474fe8965d554c6c0f868c433c3fd6acab'
```

```javascript
const types = ['bytes4', 'uint32[5]'];
const values = [
  [116, 101, 115, 116],
  [5, 3, 4, 9, 18],
];
solidityKeccak256(types, values);
// '0x038707a887f09355dc545412b058e7ba8f3c74047050c7c5e5e52eec608053d9'
```

  </details>

  <br/>

#### [`splitSignature`](https://essential-eth.vercel.app/docs/api/modules#splitsignature)

```typescript
splitSignature(signature: SignatureLike): Signature
```

  <details>
  <summary>View Example</summary>

```js
import { splitSignature } from 'essential-eth';

// or in a require environment
const { splitSignature } = require('essential-eth');
```

```javascript
const signature = '0x60bc4ed91f2021aefe7045f3f77bd12f87eb733aee24bd1965343b3c27b3971647252185b7d2abb411b01b5d1ac4ab41ea486df1e9b396758c1aec6c1b6eee331b';
splitSignature(signature);
 {
   r: "0x60bc4ed91f2021aefe7045f3f77bd12f87eb733aee24bd1965343b3c27b39716",
   s: "0x47252185b7d2abb411b01b5d1ac4ab41ea486df1e9b396758c1aec6c1b6eee33",
   _vs: "0x47252185b7d2abb411b01b5d1ac4ab41ea486df1e9b396758c1aec6c1b6eee33",
   recoveryParam: 0,
   v: 27,
   yParityAndS: "0x47252185b7d2abb411b01b5d1ac4ab41ea486df1e9b396758c1aec6c1b6eee33",
   compact: "0x60bc4ed91f2021aefe7045f3f77bd12f87eb733aee24bd1965343b3c27b3971647252185b7d2abb411b01b5d1ac4ab41ea486df1e9b396758c1aec6c1b6eee33"
 }
```

  </details>

  <br/>

#### [`stripZeros`](https://essential-eth.vercel.app/docs/api/modules#stripzeros)

```typescript
stripZeros(value: BytesLike): Uint8Array
```

  <br/>

#### [`tinyBig`](https://essential-eth.vercel.app/docs/api/modules#tinybig)

```typescript
tinyBig(value: string | number | TinyBig | Big): TinyBig
```

  <details>
  <summary>View Example</summary>

```js
import { tinyBig } from 'essential-eth';

// or in a require environment
const { tinyBig } = require('essential-eth');
```

```javascript
tinyBig(10).times(3).toNumber();
// 30
```

  </details>

  <br/>

#### [`toChecksumAddress`](https://essential-eth.vercel.app/docs/api/modules#tochecksumaddress)

```typescript
toChecksumAddress(address: string): string
```

  <details>
  <summary>View Example</summary>

```js
import { toChecksumAddress } from 'essential-eth';

// or in a require environment
const { toChecksumAddress } = require('essential-eth');
```

```javascript
toChecksumAddress('0xfB6916095ca1df60bB79Ce92cE3Ea74c37c5d359');
// '0xfB6916095ca1df60bB79Ce92cE3Ea74c37c5d359'
```

Similar to ["getAddress" in ethers.js](https://docs.ethers.io/v5/api/utils/address/#utils-getAddress)

Similar to ["toChecksumAddress" in web3.js](https://web3js.readthedocs.io/en/v1.7.1/web3-utils.html#tochecksumaddress)

  </details>

  <br/>

#### [`toUtf8Bytes`](https://essential-eth.vercel.app/docs/api/modules#toutf8bytes)

```typescript
toUtf8Bytes(data: string): Uint8Array
```

  <br/>

#### [`weiToEther`](https://essential-eth.vercel.app/docs/api/modules#weitoether)

```typescript
weiToEther(weiQuantity: string | number | TinyBig | Big): TinyBig
```

  <details>
  <summary>View Example</summary>

```js
import { weiToEther } from 'essential-eth';

// or in a require environment
const { weiToEther } = require('essential-eth');
```

```javascript
weiToEther('1000000000000000000000').toString();
// '1000'
weiToEther(1000000000000000000000).toString();
// '1000'
```

```javascript
weiToEther('1000000000000000000000').toNumber();
// 1000
weiToEther(1000000000000000000000).toNumber();
// 1000
```

  </details>

  <br/>

#### [`zeroPad`](https://essential-eth.vercel.app/docs/api/modules#zeropad)

```typescript
zeroPad(value: BytesLike, length: number): Uint8Array
```

  <br/>

<!-- ⛔️ AUTO-GENERATED-CONTENT:END -->

- _The return-type `TinyBig` is just [`Big`](https://github.com/MikeMcl/big.js) but expands scientific notation on `toNumber()` and `toString()`_

<br/>
<br/>

## RPC

```typescript
import { JsonRpcProvider } from 'essential-eth';
const essentialEth = new JsonRpcProvider(
  'RPC URL HERE' /* Try POKT or Infura */,
);
// OR for very quick testing (limited to 10,000 requests)
const essentialEth = new JsonRpcProvider();
```

<details>
  <summary>Want a redundant provider that handles outages?</summary>

```typescript
import { FallthroughProvider } from 'essential-eth';

// The FallthroughProvider handles falling through to the next valid URL.
// It's dynamic to never trust one URL again when it fails * until it has tried all other provided URLs
// The default timeout for a request is 8 seconds after which it moves to the next URL
const provider = new FallthroughProvider([
  'https://bad.com',
  'https://free-eth-node.com/api/eth',
]);
provider.getGasPrice().toNumber();
/*
39695942769
*/
```

</details>

 <br/>

#### [`getTransactionCount(address, blockTag?): Promise<number>`](https://essential-eth.vercel.app/docs/api/classes/JsonRpcProvider#gettransactioncount)

#### `getGasPrice`

Returns the current gas price in gwei

```typescript
// Same as ethers.providers.getGasPrice
getGasPrice(): Promise<TinyBig>
```

<details>
  <summary>View Example</summary>

```typescript
import { JsonRpcProvider } from 'essential-eth';

const provider = new JsonRpcProvider('https://free-eth-node.com/api/eth');
provider.getGasPrice().toNumber();
/*
39695942769
*/
```

</details>

<br/>

#### `getBalance`

Returns the balance of an address at a given block

```typescript
// Same API as ethers.providers.getBalance
// Same API as web3.eth.getBalance
getBalance(address: string, blockTag?: BlockTag): Promise<TinyBig>
```

<details>
  <summary>View Example</summary>

```typescript
import { JsonRpcProvider } from 'essential-eth';

const provider = new JsonRpcProvider();
await provider
  .getBalance('0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8')
  .then((balance) => console.log(balance.toString()));
// "28798127851528138"
```

</details>

<br/>

#### `getNetwork`

Returns a Network

```typescript
// Same API as ethers.providers.getNetwork
getNetwork(): Promise<Network>
```

<details>
  <summary>View Example</summary>

```typescript
import { JsonRpcProvider } from 'essential-eth';

const maticProvider = new JsonRpcProvider(
  'https://free-eth-node.com/api/matic',
);
maticProvider.getNetwork();
/*
{ chainId: 137, name: 'MATIC', ensAddress: null }
*/

const xdaiProvider = new JsonRpcProvider('https://free-eth-node.com/api/xdai');
xdaiProvider.getNetwork();
/*
{ chainId: 100, name: 'xdai', ensAddress: null } }
*/
```

</details>

<br/>

#### `getBlock`

Returns a Block

```typescript
// Same API as web3.eth.getBlock
getBlock(timeFrame: number | "latest" | "earliest" | "pending", returnTransactionObjects?: boolean): Promise<Block>
```

<details>
  <summary>View Example</summary>

```typescript
import { JsonRpcProvider } from 'essential-eth';
const essentialEth = new JsonRpcProvider();
essentialEth.getBlock('latest');

/*
{
        number: 4232826,
        hash: '0x93211a1cd17e154b183565ec685254a03f844a8e34824a46ce1bdd6753dcb669',
        parentHash: '0x1b32bfcba1bb2a57f56e166a3bb06875a1978992999dfc8828397b4c1526f472',
        sha3Uncles: '0x0fb399c67bb5a071ec8a22549223215ab76b7d4009941c9c37aa3c3936010463',
        logsBloom: '0x00000000000000000000101000000000020000000000000000000000000000000000400000010000000000000000000000000000010000000008800000000800000000200000000000000000000000000000000000000000000002000000000000000000000000000040000000000040000000000000000000000000000000000000000000000001000000000004000000000010000000000000000020000000000000000200100020000000000000000080000000000080001000000000000000000001040000000000000000008000000020010100000000200000100000000000000000000000002000000080000000020400000000002000200000000000',
        transactionsRoot: '0xc43b3f13e1fe810e34d3a26ffe465b72c7063a5c70a02de2c78e91e4d10bd9fb',
        stateRoot: '0x04d7bc816537ea7ef3a16e76c9879d29f34f99d4154273c2e98e012a31bad745',
        receiptsRoot: '0x89c6f781ceac0bd49c4d9aa9115df4a5d4dd0e0220ff7668012f15bc04222c6b',
        miner: '0x31fe561eb2c628cD32Ec52573D7c4b7E4C278Bfa',
        difficulty: '1300907486001755331049',
        totalDifficulty: '5989929395521171616186006183',
        extraData: '0xce018c495249532d62613031656132',
        size: 5416,
        gasLimit: 6800000,
        gasUsed: 202955,
        timestamp: 1649884910,
        transactions: [
          '0x6b34a59c7b9aead24fa6dad782f8a3ad84ed4a23ee09bcbf0bcf880840fbbe20',
          '0x9a3851ca24d5336c6a0d48aba2c4b4769d7a672c9b01729c5eb9924efd1b19a7',
          '0xc3ed3d198b62f2f3427ebfa3bbd0fcada4e3c0c189e4464e7eeceb403c75981e'
        ],
        uncles: [
          '0x0c567c054e98153f10d651fbbc018891c1dd9d62a9ffd998e87678803e95b6ed',
          '0xb7d69389dbfb057c6fcb4bc0582d46a2ba01170703f0dadf8cd1462b83e88753',
          '0xd5f74ccd0ad4c58b3161e8c2c507c264231e5f28925061b809c02e5e4bb6db28'
        ],
        minimumGasPrice: '0x387ee40',
        bitcoinMergedMiningHeader: '0x04000020e8567ed3d2480e15a1dd1b4335e4732ae343c037e4fd03000000000000000000ed10a8340d163d3e813bdd430f902f4e5a56828dc62313b2e23797c0be6b8516eb3e576297d8091735884f42',
        bitcoinMergedMiningCoinbaseTransaction: '0x0000000000000140e910128fda7bac502dc5e0573bbaf12de8e2524f70c22f7bd160dedcb19a2521002b6a2952534b424c4f434b3ae493303f597fa368c0ccc4f8aceabf1c315bb7c9a07605c073a89f260040967aace6a7d9',
        bitcoinMergedMiningMerkleProof: '0xdf63a3d7eb6fbcfb301311faa46e9a15b0408bb1a04e284daee86c273c1dfd65ede23f3170f806e9e0f4cef7ba6b56aa37470d9c23f96ec8e43d08b58645919c5e10bcb892897a731f8f9ce79c72dc0e390896bcd6c67bb38c0bdb72982b6cf05519968d76673572c3f3ef3a08b0ddb464863f1788f7cdbaad3fe44a8a8af576d430ac282fe28852c16df198ca96cc5f71a50695912efe1a836e8442be69e31b6d6f973da2818bce9a3a1c2d9be0671aee9a7776e398d6a03d1e178e20d84646004a3d03c0501334e629d9146aa6a01316dcbaa289df6e6c5e3090cadaddff22699cfc7ff09512fc0d65c5062f17c98561ce3c9510de210d9d654cf99f8d756ff37c9fa21e7122ee8cadb923341690845d572921425f2bd7e044558b7e07983ac4df28928028b0c13c3624dc7a965af8091b0cecc845bf7da5308c03b2c97d607f6706a599f802025894435f1d76ea4e67cc2fc4e1559f1206f559a24633de0f',
        hashForMergedMining: '0xe493303f597fa368c0ccc4f8aceabf1c315bb7c9a07605c073a89f260040967a',
        paidFees: '0xc0744dcb7a0',
        cumulativeDifficulty: '0x1190930db285269e582'
      }
*/
```

</details>

<br/>

#### `getTransaction`

Returns the Transaction associated with a given hash

```typescript
// Similar to ethers.provider.getTransaction, formatting may differ
getTransaction(hash: string): Promise<Transaction>
```

<details>
  <summary>View Example</summary>

```typescript
import { JsonRpcProvider } from 'essential-eth';
const essentialEth = new JsonRpcProvider();
await provider.getTransaction(
  '0x9014ae6ef92464338355a79e5150e542ff9a83e2323318b21f40d6a3e65b4789',
);

/*
   {
      accessList: [],
      blockHash: '0x876810a013dbcd140f6fd6048c1dc33abbb901f1f96b394c2fa63aef3cb40b5d',
      blockNumber: 14578286,
      chainId: 1,
      from: '0xdfD9dE5f6FA60BD70636c0900752E93a6144AEd4',
      gas: Big {
        s: 1,
        e: 5,
        c: [ 1, 1, 2, 1, 6, 3 ],
        constructor: <ref *1> [Function: Big] {
          DP: 20,
          RM: 1,
          NE: -7,
          PE: 21,
          strict: false,
          roundDown: 0,
          roundHalfUp: 1,
          roundHalfEven: 2,
          roundUp: 3,
          Big: [Circular *1],
          default: [Circular *1]
        }
      },
      gasPrice: Big {
        s: 1,
        e: 10,
        c: [
          4, 8, 5, 9, 2,
          4, 2, 6, 8, 5,
          8
        ],
        constructor: <ref *1> [Function: Big] {
          DP: 20,
          RM: 1,
          NE: -7,
          PE: 21,
          strict: false,
          roundDown: 0,
          roundHalfUp: 1,
          roundHalfEven: 2,
          roundUp: 3,
          Big: [Circular *1],
          default: [Circular *1]
        }
      },
      hash: '0x9014ae6ef92464338355a79e5150e542ff9a83e2323318b21f40d6a3e65b4789',
      input: '0x83259f170000000000000000000000000000000000000000000000000000000000000080000000000000000000000000dfd9de5f6fa60bd70636c0900752e93a6144aed400000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000000000000000000000000000000000000000024000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000009e99ad11a214fd016b19dc3648678c5944859ae292b21c24ca94f857836c4596f1950c82dd0c23dd621af4763edc2f66466e63c5df9de0c1107b1cd16bf460fe93e43fd308e3444bc79c3d88a4cb961dc8367ab6ad048867afc76d193bca99cf3a068864ed4a7df1dbf1d4c52238eced3e5e05644b4040fc2b3ccb8557b0e99fff6131305a0ea2b8061b90bd418db5bbdd2e92129f52d93f90531465e309c4caec5b85285822b6196398d36f16f511811b61bbda6461e80e29210cd303118bdcee8df6fa0505ffbe8642094fd2ba4dd458496fe3b459ac880bbf71877c713e969ccf5ed7efab8a84ebc07e3939901371ca427e1192e455a8f35a6a1d7ad09e1475dd1758b36fa631dab5d70e99316b23c4c43094188d360cd9c3457355904e07c00000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000162074a7047f',
      maxFeePerGas: Big {
        s: 1,
        e: 10,
        c: [
          6, 7, 6, 8, 1,
          2, 6, 1, 6, 1,
          8
        ],
        constructor: <ref *1> [Function: Big] {
          DP: 20,
          RM: 1,
          NE: -7,
          PE: 21,
          strict: false,
          roundDown: 0,
          roundHalfUp: 1,
          roundHalfEven: 2,
          roundUp: 3,
          Big: [Circular *1],
          default: [Circular *1]
        }
      },
      maxPriorityFeePerGas: Big {
        s: 1,
        e: 9,
        c: [ 1, 5 ],
        constructor: <ref *1> [Function: Big] {
          DP: 20,
          RM: 1,
          NE: -7,
          PE: 21,
          strict: false,
          roundDown: 0,
          roundHalfUp: 1,
          roundHalfEven: 2,
          roundUp: 3,
          Big: [Circular *1],
          default: [Circular *1]
        }
      },
      nonce: 129,
      r: '0x59a7c15b12c18cd68d6c440963d959bff3e73831ffc938e75ecad07f7ee43fbc',
      s: '0x1ebaf05f0d9273b16c2a7748b150a79d22533a8cd74552611cbe620fee3dcf1c',
      to: '0x39B72d136ba3e4ceF35F48CD09587ffaB754DD8B',
      transactionIndex: 29,
      type: 2,
      v: 0,
      value: Big {
        s: 1,
        e: 0,
        c: [ 0 ],
        constructor: <ref *1> [Function: Big] {
          DP: 20,
          RM: 1,
          NE: -7,
          PE: 21,
          strict: false,
          roundDown: 0,
          roundHalfUp: 1,
          roundHalfEven: 2,
          roundUp: 3,
          Big: [Circular *1],
          default: [Circular *1]
        }
      },
      confirmations: 1210
    }
*/
```

</details>

<br/>

## Contract

⚠️ Only read functions are currently supported. ⚠️

- 🧪 `Contract` support is **experimental**, do not use this in production yet. (even though [earni.fi](https://earni.fi) does)

Encoding support:

- `bool`
- `bytes`
- `address`

Decoding support:

- `bool`
- `address`
- `uint256`
- `bytes32`
- `uint8`

_Assume all types outside the above types will break for now_

```typescript
import { Contract, jsonRpcProvider, JSONABI } from 'essential-eth';
// UNI airdrop contract
const contractAddress = '0x090D4613473dEE047c3f2706764f49E0821D256e';
const provider = jsonRpcProvider(/* RPC URL optional */);

const abi: JSONABI = [
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'index',
        type: 'uint256',
      },
    ],
    name: 'isClaimed',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

const contract = new Contract(contractAddress, abi, provider);

(async () => {
  // prints boolean as to whether index 0 has claimed airdrop or not
  console.log(await contract.isClaimed(0));
})();
```

#### `contractFunctionName(args)`

Any function on a contract. Returns are the same as `ethers.js`, except that instead of BigNumber, `essential-eth` always returns a [`TinyBig`](https://essential-eth.vercel.app/classes/TinyBig.html)

<br/>
<br/>

![Screen Shot 2022-01-12 at 10 25 29 AM](https://user-images.githubusercontent.com/3408480/149190699-9bc15719-9382-46af-a77b-45e138f37643.png)

![Screen Shot 2022-01-12 at 10 24 57 AM](https://user-images.githubusercontent.com/3408480/149190691-ed2913b9-8c14-4a8e-b5f8-0895fbac279b.png)

## More Info

🧪 This repo is under active development. The API is less-fully featured than `web3` and `ethers`. More functions added often!

👨🏻‍💻 Breaking changes will exist between minor versions until `1.0.0` (Versions go `major.minor.patch`)

<br/>

![Alt](https://repobeats.axiom.co/api/embed/e479d8f777288a94cdde2fe3cdedf38d5243793d.svg 'Repobeats analytics image')

<br/>

- [📓 View full docs](https://essential-eth.vercel.app)
- [📓 View changelog (by looking at releases diff)](https://github.com/dawsbot/essential-eth/releases)
