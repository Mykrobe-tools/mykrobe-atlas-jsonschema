const auditSchema = {
  $id: "https://api.atlas-dev.makeandship.com/schemas/audit.json",
  type: "object",
  $schema: "http://json-schema.org/draft-07/schema#",
  properties: {
    taskId: {
      type: "string"
    },
    experimentId: {
      type: "string"
    },
    searchId: {
      type: "string"
    },
    userId: {
      type: "string"
    },
    requestMethod: {
      type: "string"
    },
    requestUri: {
      type: "string"
    },
    fileLocation: {
      type: "string"
    },
    status: {
      type: "string"
    },
    type: {
      type: "string"
    },
    attempt: {
      type: "number"
    }
  }
};

export default auditSchema;
