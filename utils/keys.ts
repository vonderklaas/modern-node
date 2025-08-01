export function getKeyName(...args: string[]) {
  return `modern-node:${args.join(":")}`;
}
