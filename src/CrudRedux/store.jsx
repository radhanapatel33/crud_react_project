import { configureStore } from "@reduxjs/toolkit";
import CurdSlice from "./Slices/CrudSlice";

const Store = configureStore({
    reducer: {
        allCrud: CurdSlice
    }
});
export default Store;
