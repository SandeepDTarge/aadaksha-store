export type Currency = 'INR' | 'USD' | 'AED' | 'GBP' | 'AUD';

const EXCHANGE_RATES: Record<Currency, number> = {
  INR: 1,
  USD: 0.012, // 1 INR = 0.012 USD
  AED: 0.044, // 1 INR = 0.044 AED
  GBP: 0.0094, // 1 INR = 0.0094 GBP
  AUD: 0.018, // 1 INR = 0.018 AUD
};

const CURRENCY_SYMBOLS: Record<Currency, string> = {
  INR: '₹',
  USD: '$',
  AED: 'د.إ',
  GBP: '£',
  AUD: 'A$',
};

export function formatPrice(priceInINR: number, currency: Currency): string {
  const rate = EXCHANGE_RATES[currency];
  const convertedPrice = priceInINR * rate;
  const symbol = CURRENCY_SYMBOLS[currency];
  
  // Format with 2 decimal places if not INR
  if (currency === 'INR') {
    return `${symbol}${convertedPrice.toFixed(0)}`;
  }
  
  // For AED, usually put the symbol after or before, let's put it before with a space
  if (currency === 'AED') {
    return `${symbol} ${convertedPrice.toFixed(2)}`;
  }
  
  return `${symbol}${convertedPrice.toFixed(2)}`;
}
