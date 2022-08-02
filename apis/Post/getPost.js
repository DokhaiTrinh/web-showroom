import axiosService from "../../axios/axiosService";
import * as API_LINK from "./../../contants/ApiLinks/apiLinks";

export const getPostByCategoryApi = (
  categoryId,
  searchType,
  pageNo,
  pageSize,
  sortBy,
  sortType
) => {
  const userInfor = JSON.parse(localStorage.getItem("USERINFOR"));
  return axiosService.get(
    `${API_LINK.GET_POST_BY_CATEGORY}?searchParam=${categoryId}&searchType=${searchType}&pageNo=${pageNo}&pageSize=${pageSize}&sortBy=${sortBy}&sortType=${sortType}`,
    userInfor.token
  );
};
