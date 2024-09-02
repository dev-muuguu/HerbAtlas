import swaggerJSDoc from "swagger-jsdoc";

const options = {
  failOnErrors: true,
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Herb Atlas v1.0",
      version: "1.0",
      description: "Herb Atlas ийн SWAGGER ашиглах вэ",
    },
  },
  apis: ["./src/api/**/router.ts"],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
