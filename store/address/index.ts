import { useEffect, useState } from "react";
import create, { StateCreator } from "zustand";
import { persist, PersistOptions } from "zustand/middleware";
import { isBrowser } from "@utils/isBrowser";

export type DeliveryDetails = {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  country: string;
  postCode: string;
  phoneNumber: string;
  email: string;
};

type DeliveryDetailsStore = {
  deliveryDetails: DeliveryDetails;
  setDeliveryDetails: (deliveryDetails: DeliveryDetails) => void;
  clearDeliveryDetails: () => void;
};

const initialState: Pick<DeliveryDetailsStore, "deliveryDetails"> = {
  deliveryDetails: {
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    country: "",
    postCode: "",
    phoneNumber: "",
    email: "",
  },
};

type MyPersist = (
  config: StateCreator<
    DeliveryDetailsStore,
    [["zustand/persist", unknown]],
    [],
    DeliveryDetailsStore
  >,
  options: PersistOptions<DeliveryDetailsStore, DeliveryDetailsStore>
) => StateCreator<
  DeliveryDetailsStore,
  [],
  [["zustand/persist", DeliveryDetailsStore]],
  DeliveryDetailsStore
>;

export const asyncPersist: MyPersist = (config, options) => {
  const { getStorage } = options;

  if (getStorage) {
    options.getStorage = () => {
      const { setItem, getItem, removeItem } = getStorage();

      return {
        setItem: async (...args) => setItem(...args),
        getItem: async (...args) => getItem(...args),
        removeItem: async (...args) => removeItem(...args),
      };
    };
  }

  return persist(config, options);
};

const useDeliveryDetailsStore = create<DeliveryDetailsStore>()(
  asyncPersist(
    set => ({
      ...initialState,
      setDeliveryDetails: deliveryDetails => {
        set({ deliveryDetails });
      },
      clearDeliveryDetails: () => {
        set(initialState);
        useDeliveryDetailsStore.persist.clearStorage();
      },
    }),
    { name: "DeliveryDetails" }
  )
);

export const useDeliveryHydration = () => {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const unsubFinishHydration =
      useDeliveryDetailsStore.persist.onFinishHydration(() =>
        setHydrated(true)
      );

    setHydrated(useDeliveryDetailsStore.persist.hasHydrated());

    return () => {
      unsubFinishHydration();
    };
  }, []);

  return hydrated;
};

if (isBrowser) {
  //@ts-ignore
  const connection = window.__REDUX_DEVTOOLS_EXTENSION__?.connect({
    name: "Form fields",
  });
  connection?.init(useDeliveryDetailsStore.getState());

  let isUpdateFromDevtools = false;
  connection?.subscribe((evt: { type: string; state: string }) => {
    if (evt.type === "DISPATCH") {
      const newState = JSON.parse(evt.state);
      isUpdateFromDevtools = true;
      useDeliveryDetailsStore.setState(newState);
      isUpdateFromDevtools = false;
    }
  });

  useDeliveryDetailsStore.subscribe(newState => {
    if (!isUpdateFromDevtools) {
      connection?.send("State", newState);
    }
  });
}

export default useDeliveryDetailsStore;
