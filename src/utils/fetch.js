import { setIsShowLoader } from "../store/gloabalSlice";
import store from "../store/store"
export async function fetchHandler(path, method, request) {
        try {
                const url = `http://localhost:5050/api${path}`;
                store.dispatch(setIsShowLoader(true))
                const options = {
                        method,
                        headers: {
                                'Content-Type': 'application/json',
                        },
                };

                if (request) {
                        options.body = JSON.stringify(request);
                }

                const response = await fetch(url, options);
                store.dispatch(setIsShowLoader(false))

                if (!response.ok) {
                        return  { error: true ,status :response.status };
                }

                const text = await response.text();
               return  text ? {data:JSON.parse(text) , status:response.status , error:false }  :null

        } catch (error) {
                store.dispatch(setIsShowLoader(false))
                return { error: error.message || "Unknown error" , status:500 };
        }
}
