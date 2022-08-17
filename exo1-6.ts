// Exercice 1.6

  const inventoryItem: [string, number] = ['fidget wibbit', 11];

  const [nom, qty] = inventoryItem;

  const msg = addInventory(nom, qty);

  console.log("Solution de l'exo 1.6 est", msg);

  function addInventory(name: string, quantity: number): string {
    return `Added ${quantity} ${name}s to inventory.`;
  }