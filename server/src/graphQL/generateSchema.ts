import { buildSchema, BuildSchemaOptions } from "type-graphql";
import { GraphQLSchema } from "graphql";

export async function generateSchema(...resolvers: BuildSchemaOptions["resolvers"]): Promise<GraphQLSchema> {
  try {
    const schema = await buildSchema({
      resolvers: resolvers
    })

    return schema
  } catch (e) {
    console.error(e)
    throw e
  }
}