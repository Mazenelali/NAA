import { fetchHandler } from "../utils/fetch";

export const request = {
    getCategories : (request)=>fetchHandler('/drive/folder/files','POST',request)
}