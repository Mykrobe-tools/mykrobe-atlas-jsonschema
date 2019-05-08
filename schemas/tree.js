const treeSchema = {
  $id: "https://api.atlas-dev.makeandship.com/schemas/tree.json",
  type: "object",
  $schema: "http://json-schema.org/draft-07/schema#",
  properties: {
    tree: {
      type: "string"
    },
    type: {
      type: "string",
      default: "newick"
    },
    version: {
      type: "string"
    },
    expires: {
      type: "string",
      format: "date-time"
    }
  }
};

export default tree;
