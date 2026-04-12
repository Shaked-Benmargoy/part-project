import { spfi, SPBrowser } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import "@pnp/sp/site-users";
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

// --- Read ---

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

// --- Permission check ---

export async function checkIsAdmin(): Promise<boolean> {
  try {
    const currentUser = await sp.web.currentUser();
    return !!(currentUser as any).IsSiteAdmin;
  } catch {
    return false;
  }
}

// --- Topics CRUD ---

export async function createTopic(data: { Title: string; w2is: string }): Promise<void> {
  await sp.web.lists.getByTitle("Topics").items.add(data);
}

export async function updateTopic(id: number, data: { Title: string; w2is: string }): Promise<void> {
  await sp.web.lists.getByTitle("Topics").items.getById(id).update(data);
}

export async function deleteTopic(id: number): Promise<void> {
  await sp.web.lists.getByTitle("Topics").items.getById(id).delete();
}

// --- SubTopics CRUD ---

export async function createSubTopic(data: {
  Title: string; data: string; topic_id: number; icon: string; link: string;
}): Promise<void> {
  await sp.web.lists.getByTitle("SubTopic").items.add(data);
}

export async function updateSubTopic(id: number, data: {
  Title: string; data: string; icon: string; link: string;
}): Promise<void> {
  await sp.web.lists.getByTitle("SubTopic").items.getById(id).update(data);
}

export async function deleteSubTopic(id: number): Promise<void> {
  await sp.web.lists.getByTitle("SubTopic").items.getById(id).delete();
}
