const ClusterResult = {
  type: "object",
  title: "Cluster Result",
  properties: {
    type: {
      title: "Type",
      type: "string",
      enum: ["cluster"]
    },
    received: {
      title: "Received",
      type: "string",
      format: "date-time"
    },
    nodes: {
      title: "Nodes",
      type: "array",
      items: {
        type: "object",
        properties: {
          id: {
            title: "ID",
            type: "integer"
          },
          experiments: {
            title: "Experiments",
            type: "array",
            items: {
              type: "object"
            }
          }
        }
      }
    },
    distance: {
      title: "Distance",
      type: "array",
      items: {
        type: "object",
        properties: {
          start: {
            title: "Start",
            type: "integer"
          },
          end: {
            title: "End",
            type: "integer"
          },
          distance: {
            title: "Distance",
            type: "integer"
          }
        }
      }
    }
  }
};

export { ClusterResult };
