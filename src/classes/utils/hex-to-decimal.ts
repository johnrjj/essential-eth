/**
 * Converts a hexadecimal string it's decimal equivalent.
 * This is needed instead of parseInt because parseInt loses precision
 */
export function hexToDecimal(hex: string) {
  return BigInt(hex).toString();
}
