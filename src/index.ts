import axios from "axios"
import RequestTypes from "./RequestType";

/**
 * Sends a request to the woody.cat api and returns the response
 * @param {RequestTypes} type - The type of the request
 * @param {Number} id (optional) The ID of the image to fetch
 */

async function fetch(type:RequestTypes, id?: number) {
    if(type == RequestTypes.Random) {
        const response = (await axios.get("https://purr.woody.cat")).data;

        return {"image": response.Image, "id": response.ID}
    } else if(type == RequestTypes.ID) {
        if(id == null || id == undefined || isNaN(id) || typeof id !== "number" || !id) {throw new TypeError("You need to specify an ID.")}
        const response = await axios.get(`https://purr.woody.cat/${id}`)

        if(response.status == 400) {
            throw new Error("Invalid Woody ID")
        } else {
            return {"image": response.data.Image, "id": id}
        }
    }
}

export {
    fetch,
    RequestTypes
}