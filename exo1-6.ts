// Exercice 1.6

const inventoryItem: [string, number] = ['fidget wibbit', 11];

  const [nom, qty] = inventoryItem;

  const msg = addInventory(nom, qty);

  console.log('[Solution 1.6]', msg);

  function addInventory(name: string, quantity: number): string {
    return `Added ${quantity} ${name}s to inventory.`;
  }