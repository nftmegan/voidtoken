// Next, React
import { FC, useEffect, useState } from 'react';
import Link from 'next/link';

// Wallet
import { useWallet, useConnection } from '@solana/wallet-adapter-react';

// Components
import { RequestAirdrop } from '../../components/RequestAirdrop';
import pkg from '../../../package.json';

// Store
import useUserSOLBalanceStore from '../../stores/useUserSOLBalanceStore';

export const HomeView: FC = ({ }) => {
	const wallet = useWallet();
	const { connection } = useConnection();

	const balance = useUserSOLBalanceStore((s) => s.balance)
	const { getUserSOLBalance } = useUserSOLBalanceStore()

	useEffect(() => {
		if (wallet.publicKey) {
		console.log(wallet.publicKey.toBase58())
		getUserSOLBalance(wallet.publicKey, connection)
		}
	}, [wallet.publicKey, connection, getUserSOLBalance])

	return (
		<div className="flex justify-center pt-52">
			<p className="text-4xl">COMING SOON...</p>
		</div>
  	);
};