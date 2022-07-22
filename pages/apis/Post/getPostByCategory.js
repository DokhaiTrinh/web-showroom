import axiosService from "../../axios/axiosService";
import * as API_LINK from "./../../contants/ApiLinks/apiLinks";

export const getPostByCategoryIdApi = (
  pageNo,
  pageSize,
  categoryId,
  searchType,
  sortBy,
  sortType
) => {
  return axiosService.get(
    `${API_LINK.GET_POST_BY_CATEGORY_ID}?pageNo=${pageNo}&pageSize=${pageSize}&searchParam=${categoryId}&searchType=${searchType}&sortBy=${sortBy}&sortType=${sortType}`
  );
};
