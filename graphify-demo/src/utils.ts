// Utility functions for the Graphify demo project
// These functions demonstrate typical code patterns that Graphify analyzes

/**
 * Calculates the factorial of a non-negative integer.
 * @param n - The number to calculate factorial for
 * @returns The factorial of n
 * @throws {Error} If n is negative
 */
export function factorial(n: number): number {
  if (n < 0) {
    throw new Error('Factorial is not defined for negative numbers');
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

/**
 * Checks if a number is prime.
 * @param n - The number to check
 * @returns True if n is prime, false otherwise
 */
export function isPrime(n: number): boolean {
  if (n < 2) {
    return false;
  }
  if (n === 2) {
    return true;
  }
  if (n % 2 === 0) {
    return false;
  }
  const sqrt = Math.floor(Math.sqrt(n));
  for (let i = 3; i <= sqrt; i += 2) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

/**
 * Formats a date string into a readable format.
 * @param date - The date to format
 * @param format - The output format ('short' | 'long' | 'iso')
 * @returns The formatted date string
 */
export function formatDate(date: Date | string, format: 'short' | 'long' | 'iso' = 'short'): string {
  const d = typeof date === 'string' ? new Date(date) : date;

  if (format === 'iso') {
    return d.toISOString();
  }

  if (format === 'long') {
    return d.toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  // short format
  return d.toLocaleDateString(undefined, {
    month: 'short',
    day: 'numeric'
  });
}

/**
 * Memoizes a function result based on input arguments.
 * @param fn - The function to memoize
 * @returns A memoized version of the function
 */
export function memoize<T extends (...args: any[]) => any>(fn: T): T {
  const cache = new Map<string, ReturnType<T>>;

  return ((...args: Parameters<T>): ReturnType<T> => {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key)!;
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  }) as T;
}

export default {
  factorial,
  isPrime,
  formatDate,
  memoize
};