export const SITE = {
	title: 'Your Documentation Website',
	description: 'Your website description.',
	defaultLanguage: 'en_US',
};

export const OPEN_GRAPH = {
	image: {
		src: 'https://github.com/withastro/astro/blob/main/assets/social/banner.jpg?raw=true',
		alt: 'astro logo on a starry expanse of space,' + ' with a purple saturn-like planet floating in the right foreground',
	},
	twitter: 'conedoodsnft',
};

export const KNOWN_LANGUAGES = {
	English: 'en',
};

// Uncomment this to add an "Edit this page" button to every page of documentation.
export const GITHUB_EDIT_URL = `https://github.com/BleedingEffigy/EphemeralDAO/blob/main/docs/`;

// Uncomment this to add an "Join our Community" button to every page of documentation.
export const COMMUNITY_INVITE_URL = `https://discord.gg/pUZDzswJ`;

// Uncomment this to enable site search.
// See "Algolia" section of the README for more information.
// export const ALGOLIA = {
//   indexName: 'XXXXXXXXXX',
//   apiKey: 'XXXXXXXXXX',
// }

export const SIDEBAR = {
	en: [
		{ text: '', header: true },
		{ text: 'Web3 Handbook', header: true },
		{ text: 'Introduction', link: 'en/introduction' },
		{ text: 'Web3 and Blockchain', link: 'en/web3-handbook/web3-and-blockchain' },
		{ text: 'Blockchain Networks', link: 'en/web3-handbook/blockchain-networks' },
		{ text: 'Why Join Web3', link: 'en/web3-handbook/why-join-web3' },
		{ text: 'Wallets', link: 'en/web3-handbook/wallets' },
		{ text: 'Scam Proofing', link: 'en/web3-handbook/scam-proofing' },
		{ text: 'Register an ENS Domain', link: 'en/web3-handbook/register-an-ens-domain' },
		
		{ text: 'NFT 101', header: true },
		{ text: 'Page 4', link: 'en/page-4' },

		{ text: 'CS Fundamentals', header: true },
		{ text: 'Page 4', link: 'en/page-4' },

		{ text: 'Web3 and Ethereum', header: true },
		{ text: 'Page 4', link: 'en/page-4' },

		{ text: 'Dapp Development', header: true },
		{ text: 'Page 4', link: 'en/page-4' },

		{ text: 'NFT Development', header: true },
		{ text: 'Page 4', link: 'en/page-4' },
		
		{ text: 'Advanced Trading', header: true },
		{ text: 'Page 4', link: 'en/page-4' },

		{ text: 'Resources', header: true },
		{ text: 'Page 4', link: 'en/page-4' },
	],
};
