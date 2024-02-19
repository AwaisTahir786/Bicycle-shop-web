import { createClient } from "next-sanity";
import ImageUrlBuilder from "@sanity/image-url"


export const client = createClient({
    projectId:"7mcv92i9",
    dataset:"production",
    apiVersion:"2024-01-08",
    useCdn: true

});


const imageBuilder=ImageUrlBuilder(client);

export function urlFor(source:any) {
    return imageBuilder.image(source)
    
}