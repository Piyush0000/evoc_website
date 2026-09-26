import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Data Deletion & Account Termination | EVOC Labs',
  description: 'Official EVOC Labs policy and procedure for submitting Data Deletion, Account Termination, and Contract Termination requests.',
  alternates: {
    canonical: 'https://www.evoclabs.com/contract-termination',
  },
};

export default function ContractTerminationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
