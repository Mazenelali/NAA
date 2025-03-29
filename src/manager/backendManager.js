import { fetchHandler } from "../utils/fetch";

export const request = {
    getCategories : (request,hideLoader)=>fetchHandler('/drive/folder/files','POST',request,hideLoader)
}