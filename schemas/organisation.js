const organisationSchema = {
  $id: "https://api.atlas-dev.makeandship.com/schemas/organisation.json",
  type: "object",
  $schema: "http://json-schema.org/draft-07/schema#",
  properties: {
    name: {
      type: "string"
    },
    template: {
      type: "string"
    }
  }
};

export default organisationSchema;
