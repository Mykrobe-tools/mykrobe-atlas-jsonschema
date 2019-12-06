const memberSchema = {
  $id: "https://api.atlas-dev.makeandship.com/schemas/member.json",
  type: "object",
  $schema: "http://json-schema.org/draft-07/schema#",
  definitions: {
    User: {
      type: "object",
      title: "User",
      properties: {
        userId: {
          type: "string"
        },
        firstname: {
          type: "string",
          minLength: 1
        },
        lastname: {
          type: "string",
          minLength: 1
        },
        phone: {
          type: "string"
        },
        email: {
          type: "string",
          minLength: 1,
          format: "email"
        },
        username: {
          type: "string"
        }
      }
    }
  },
  properties: {
    userId: {
      type: "string"
    },
    firstname: {
      type: "string",
      minLength: 1
    },
    lastname: {
      type: "string",
      minLength: 1
    },
    phone: {
      type: "string"
    },
    email: {
      type: "string",
      minLength: 1,
      format: "email"
    },
    username: {
      type: "string"
    },
    approvedAt: {
      type: "string",
      format: "date-time"
    },
    rejectedAt: {
      type: "string",
      format: "date-time"
    },
    approvedBy: {
      $ref: "#/definitions/User"
    },
    rejectedBy: {
      $ref: "#/definitions/User"
    }
  }
};

export default memberSchema;
