import { inventoryData } from '../../data';

export const loadData = () => {
  return {
    type: 'inventory/loadData',
    payload: inventoryData,
  };
};

const initialInventory = [];

export const inventoryReducer = (inventory = initialInventory, action) => {
  switch (action.type) {
    case 'inventory/loadData': {
      return action.payload;
    }
    default: {
      return inventory;
    }
  }
};
