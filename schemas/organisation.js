const organisationSchema = {
  $id: "https://api.atlas-dev.makeandship.com/schemas/organisation.json",
  type: "object",
  $schema: "http://json-schema.org/draft-07/schema#",
  properties: {
    name: {
      type: "string",
      unique: true
    },
    slug: {
      type: "string"
    },
    membersGroupId: {
      type: "string"
    },
    ownersGroupId: {
      type: "string"
    }
  },
  required: ["name"]
};

export default organisationSchema;
