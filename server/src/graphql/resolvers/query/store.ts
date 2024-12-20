import { StoreServices } from "../../../services/store.services";

const storeInstance = StoreServices.getInstance();

export const storeResolvers = {
  // Get a store by id
  store: async (_: any, { id }) => {
    const store = await storeInstance.getStore(id);
    return {
      id: store.id,
      name: store.name,
      address: store.address,
      phone: store.phone,
      maxRegisters: store.maxRegisters,
      createdAt: store.record.createdAt,
      updatedAt: store.record.updatedAt,
    };
  },

  // Get all stores
  stores: async () => {
    const stores = await storeInstance.getStores();
    return stores.map((store) => ({
      id: store.id,
      name: store.name,
      address: store.address,
      phone: store.phone,
      maxRegisters: store.maxRegisters,
      createdAt: store.record.createdAt,
      updatedAt: store.record.updatedAt,
    }));
  },

  // Get all users in a store
  storeUsers: async (_: any, { storeId }) => {
    const users = await storeInstance.getUsersByStore(storeId);
    return users.map((user) => ({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      isActive: user.isActive,
      isVerified: user.isVerified,
      createdAt: user.record.createdAt,
      updatedAt: user.record.updatedAt,
    }));
  },

  // Get all stores by user
  userStores: async (_: any, { userId }) => {
    const stores = await storeInstance.getStoreByUser(userId);
    return stores.map((store) => ({
      id: store.id,
      name: store.name,
      address: store.address,
      phone: store.phone,
      maxRegisters: store.maxRegisters,
      createdAt: store.record.createdAt,
      updatedAt: store.record.updatedAt,
    }));
  },
};
