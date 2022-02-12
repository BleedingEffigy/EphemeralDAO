---
title: Blockchain Networks
description: Lorem ipsum dolor sit amet - 2
layout: ../../../layouts/MainLayout.astro
---

Ever wonder how the popular blockchain networks differ?
Then follow along as we first define consensus, and compare different networks.

## Consensus Mechanisms
To process transactions without middlemen, nodes have to reach a consensus amongst themselves. 
Two popular methods for doing this are:
- Proof of Work
- Proof of Stake
Let's go over the first one (it's the more popular way right now)

### Proof of Work (PoW)
Computer nodes called miners compete to add transactions to the network by solving equations through brute-force (e.g., rolling a dice thousands of times to get the right number).

The first miner that solves the problem gets to create a block, which is verified by other nodes.
- If it's valid, the miner is rewarded cryptocurrency. 
- If it's invalid, the miner wasted their time and energy.
All nodes add the new block to their copy of the blockchain.

### Proof of stake(PoS)

1. Validators(nodes) stake some cryptocurrency. (Like a savings account)
2. more stake = more likely (but not always) to be selected to process the transaction + create a block.

3. Other validators check if the block is valid. 
- valid, all participating validators earn a transaction fee. 
- invalid, the validator that created the block might lose its stake.
4. All nodes add the new block to their copy of the blockchain.

Proof of stake uses less energy than proof of work. 
Bitcoin uses proof of work, and Ethereum is currently transitioning from proof of work to proof of stake in it's ETH 2.0 update

## Bitcoin

> Bitcoin was created in 2009 by the anonymous "Satoshi Nakamoto" to be a “peer-to-peer electronic cash system.”

Today, many people use bitcoin as a store of value.

Bitcoin uses blockchain and therefore is
- decentralized
- immutable
- open. 

It’s also:
- Hard capped: There will only ever be 21M bitcoin.
- Single-purpose: Many holders want it to be a token that stores value.

### Bitcoins history
- 2008: "Satoshi" releases the whitepaper for a p2p cash system w/ no third party
- 2009: first BTC is mined.
- 2010: Laszlo Hanyecz makes the first Bitcoin transaction, buying two Papa John pizzas for 10,000 Bitcoin
- 2011: Litecoin is created with bitcoins source code, focused on faster block generation + higher max number of coins
- 2013: several controversies take place including the collapse of Mt. Gox exchange and the seizure of 26K BTC from Silk Road (a black market).
- 2017: Bitcoin Cash has forked off Bitcoin with a larger block size to enable faster peer-to-peer transactions.
- 2021: El Salvador becomes the first country to adopt Bitcoin as legal tender.

Now we'll briefly dive into Ethereum 

## Ethereum

Ethereum's goal is to become a global decentralized computer w/ the Ethereum Virtual Machine(EVM). 
To understand what that means let's define a few terms.

- Ether: Ethereum’s digital token, a store of value like Bitcoin, but its main purpose is to reward nodes on the network for processing transactions.
- Gas is the amount of Ether that's paid to a node to process a transaction.

### Smart Contracts

Smart contracts are code that runs on the Ethereum network. This code is 
- decentralized (stored across all nodes)
- immutable (can’t be changed once committed), 
- open (anyone can view it).
There are group that have standardized smart contracts like OpenZeppelin

### Dapps

Decentralized apps (dapp) combine a backend(smart contract) + frontend UI.
They allow users to interact with the blockchain from their browsers.
Ethereum's composability has allowed it to cultivate a healthy ecosystem of web3 developers and dapps.

Dapps fulfill a variety of functions that will power Web3
Popular dapps include:
- OpenSea (NFT Marketplace)
- Uniswap (Swap tokens)
- Compound (Lending and borrowing tokens)
- Axie Infinity (Earning income from playing games)

### Layer 2 and Sidechains

While Ethereum makes the move from PoW to PoS, it will still face scalability issues. 
Luckily other groups have designed ways to circumvent this problem.
We'll see how to lower gas fees by using Layer 2 solutions and Sidechains

- Layer 1 network is the main Ethereum blockchain.

- Layer 2 is a term for a collection of solutions that offer scalability by processing transactions off-chain. 
They benefit from Ethereum's security and distributed network. Arbitrum is an example of a layer 2 network.

- Sidechains are separate blockchains that use their own token to pay for gas. 

They are connected to the Mainnet by a bridge, which you can use to transfer tokens between chains.
Sidechains' underlying code is based on the EVM.

Polygon is an example of a sidechain.

### History of Ethereum

- 2013: After failing to convince the Bitcoin community to support decentralized apps on Bitcoin, Vitalik Butern crowdfunded ETH as a new cryptocurrency.
- 2014-2015: Ether officially went on sale, people could buy it with Bitcoin.
- 2016: The DAO raises $150M to create a decentralized business model for organizing companies. Unfortunately hackers stole ~$50M, which led to a hard fork for Ethereum to restore lost funds.
- 2017: CryptoPunks released, inspiring the ERC-721 standard that defines NFTs
- 2020: Ethereum ships the beacon chain as part of its eth 2.0 plans to migrate from proof of work to proof of stake. The foundation plans to merge the main Ethereum chain to staking sometime in 2022.

That's it for now on Ethereum
Next in the series, we'll be looking at Solana. Expect me to link it here soon.

## Blockchain Trilemma

There's usually a trade-off between security, decentralization, and scalability:

- Security: defend from bugs and attacks.
- Decentralization: support many nodes.
- Scalability: support a large volume of transactions.

For example, consider Ethereum and Solana (two popular cryptocurrencies). As of this year:

- Solana’s avg tx(transaction) cost is $0.00025 with 1,000 validators
- Ethereum’s avg tx cost is $15.2 with 10,000+ validators
- Bitcoins avg tx cost is $156.85 with 12,000+ validators

The more nodes there are, the more secure the network.
This is apparent from the recent $320mil hack on Wormhole(a Solana bridge)
However, 
- Solana can process 65,000 transactions/sec
- Ethereum processes 15 transactions/sec
- Bitcoin only processes 3-7 transactions/sec

As we can see, Solana focuses heavily on processing insane volumes of transactions(incentivizing many of them with low fees), de-emphasizing decentralization and security

However, the security of Solana will be improved soon enough; Solana promotes a healthy dev ecosystem through many, guides, hackathons, and bounties. 
Check out the recent riptide hackathon, which is set to go until the end of March.
