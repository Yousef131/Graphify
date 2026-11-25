# API Documentation

## Overview

The Graphify Demo Project provides utility functions for common programming tasks.

## Exported Functions

### `factorial(n: number): number`

Calculates the factorial of a non-negative integer.

**Parameters:**
- `n` (number): The number to calculate factorial for

**Returns:**
- `number`: The factorial of n

**Throws:**
- `Error`: If n is negative

**Example:**
```typescript
import { factorial } from './src';

factorial(5); // 120
factorial(0); // 1
```

### `isPrime(n: number): boolean`

Checks if a number is prime.

**Parameters:**
- `n` (number): The number to check

**Returns:**
- `boolean`: True if n is prime, false otherwise

**Example:**
```typescript
import { isPrime } from './src';

isPrime(7); // true
isPrime(4); // false
```

### `formatDate(date: Date | string, format: 'short' | 'long' | 'iso'): string`

Formats a date string into a readable format.

**Parameters:**
- `date` (Date | string): The date to format
- `format` ('short' | 'long' | 'iso'): The output format

**Returns:**
- `string`: The formatted date string

**Example:**
```typescript
import { formatDate } from './src';

formatDate(new Date(), 'short'); // "Nov 20"
formatDate(new Date(), 'long'); // "November 20, 2026, 2:30:00 PM"
formatDate('2026-11-20', 'iso'); // "2026-11-20T..."
```