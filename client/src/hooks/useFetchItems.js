// EXTERNAL FUNCTIONALITIES
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
// ACTIONS FROM SLICES
import { itemsActions } from "../store/itemsSlice";
import { fetchActions } from "../store/fetchStatusSlice";

const useFetchItems = () => {
  const { fetchDone } = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!fetchDone) {
      const controller = new AbortController();
      const signal = controller.signal;
      const URL = "/items";
      const fetchData = async () => {
        try {
          dispatch(fetchActions.fetchStarted());
          const res = await fetch(URL, { signal });
          const data = await res.json();
          dispatch(itemsActions.addToItems(data.items));
          dispatch(fetchActions.markFetchDone());
        } catch (err) {
          console.error("Error fetching:", err);
        } finally {
          dispatch(fetchActions.fetchEnded());
        }
      };
      fetchData();
      return () => controller.abort();
    }
  }, [fetchDone, dispatch]);
};

export default useFetchItems;
