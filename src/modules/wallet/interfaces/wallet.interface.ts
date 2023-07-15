export interface WalletListArgs {
  skip?: number;
  take?: number;

  isActive?: boolean;
}

export interface WalletCreateArgs {
  userId: string;
}

export interface WalletGetArgs {
  userId?: string;
  email?: string;
}

export interface WalletUpdateArgs {
  balance?: number;
  isActive?: boolean;
}

export type WalletDeleteArgs = Partial<WalletGetArgs>;

export interface WalletTransferArgs {
  from: string;
  to: string;
  amount: number;
  description?: string;
}