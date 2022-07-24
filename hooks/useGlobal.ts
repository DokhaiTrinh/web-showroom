import { useSelector } from "react-redux";
import { RootState } from "redux/reducer";
import { GlobalState } from "redux/slices/global";

export const useGlobal = (): GlobalState => {
  const { showLoginModal } = useSelector<RootState, any>(
    (state) => state.global
  );

  return { showLoginModal };
};
