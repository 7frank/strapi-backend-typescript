
import Strapi from "strapi-sdk-javascript";

export {Strapi}

export 
interface StrapiIOInterface<T> {
  all(): Promise<T[]>;
  get(id: any): Promise<T>;
  create(data: T | object): Promise<T>;
}


export 
class StrapiObject<T extends object> implements StrapiIOInterface<T> {
  constructor(private strapiInstance:Strapi,private singular: string) {}

  async all(): Promise<T[]> {
    return (await this.strapiInstance.getEntries(this.singular + "s")) as T[];
  }

  async get(id: any): Promise<T> {
    return (await this.strapiInstance.getEntry(this.singular + "s", id)) as T;
  }

  // FIXME strapi interface generated has mandatory id field which is auto generated
  // setting that value manually will result in a 500 internal server error
  async create(data: T | object): Promise<T> {
    return (await this.strapiInstance.createEntry(this.singular + "s", data)) as T;
  }

  /**
   * data can be specific queries on the fields
   * like: x_contains
   * TODO maybe have a generated query object/interfacewith possible values
   */
  async count(data: object): Promise<T> {
    return (await this.strapiInstance.getEntryCount(this.singular, data)) as T;
  }

  async update(data: T | object, id?: string): Promise<T> {
    if (id == undefined) id = data["id"];

    if (id == undefined) throw new Error("cannot update. id property missing.");

    delete data["created_at"];
    delete data["updated_at"];

    return (await this.strapiInstance.updateEntry(this.singular + "s", id, data)) as T;
  }

  // TODO deleting an non existing entry should at least give some indication
  async delete(id: string): Promise<boolean> {
    (await await this.strapiInstance.deleteEntry(this.singular + "s", id)) as T;
    return true;
  }
}