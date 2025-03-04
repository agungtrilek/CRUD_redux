declare module "redux-persist/lib/storage" {
  import { PersistStorage } from "redux-persist";
  const storage: PersistStorage<any>;
  export default storage;
}
