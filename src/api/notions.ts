import { Client } from "@notionhq/client"
import { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby"
import dotenv from 'dotenv'

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
})

export default async function handler(
  _: GatsbyFunctionRequest,
  res: GatsbyFunctionResponse,
) {
  try {
    const notion = new Client({
      auth: process.env.NOTION_TOKEN,
    })
    const databaseId = process.env.NOTION_DB_ID!
    const response = await notion.databases.query({
      database_id: databaseId,
      sorts: [{ timestamp: "created_time", direction: "descending" }],
    })
    res.send({ data: response.results })
  } catch (error) {
    console.error(error)
    res.status(500).send({ error: "Failed to fetch data from Notion" })
  }
}
