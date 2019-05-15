import { StrapiObject, Strapi } from "./strapi";


import { IArticle, } from "../@strapi-types-project";
import { IUser } from "../@strapi-types-core";

/**
 * Example:
 * 
 * const { strapiInstance, models } = new ServerConfig("http://localhost:1337");
 * 
 */

export class ServerConfig {

    strapiInstance:Strapi;
    models:{ [index:string] : StrapiObject<any> }

    constructor(url) {
        this.strapiInstance = new Strapi(url);


        this.models = {
            articles: new StrapiObject<IArticle>(this.strapiInstance, "Article"),
            users: new StrapiObject<IUser>(this.strapiInstance, "User")
        };

    }
}

