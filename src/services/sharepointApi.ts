import { spfi, SPBrowser } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import { SHAREPOINT_SITE_URL } from "../config";

const sp = spfi().using(
  SPBrowser({ baseUrl: SHAREPOINT_SITE_URL })
);

export interface Topic {
  Id: number;
  Title: string;
  w2is: string; // Internal name for "Icon" column
}

export interface SubTopic {
  Id: number;
  Title: string;
  data: string;
  topic_id: number;
  icon: string;
  link: string;
}

export async function fetchTopics(): Promise<Topic[]> {
  return sp.web.lists
    .getByTitle("Topics")
    .items.select("Id", "Title", "w2is")
    .orderBy("Id")();
}

export async function fetchSubTopics(topicId: number): Promise<SubTopic[]> {
  return sp.web.lists
    .getByTitle("SubTopic")
    .items.select("Id", "Title", "data", "topic_id", "icon", "link")
    .filter(`topic_id eq ${topicId}`)
    .orderBy("Id")();
}
