export function getKeyName(...args: string[]) {
  return `modern-node:${args.join(":")}`;
}

export const restaurantKeyById = (id: string) => getKeyName("restaurants", id);
