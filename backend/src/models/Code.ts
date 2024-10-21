import mongoose, { Schema, Document } from "mongoose";

// Define the interface for the code schema
interface ICodeSchema extends Document {
  fullCode: {
    html: string;
    css: string;
    javascript: string;
  };
}

// Define the schema
const codeSchema = new mongoose.Schema<ICodeSchema>({
  fullCode: {
    html: { type: String   },
    css: { type: String   },
    javascript: { type: String   }
  }
});

// Create the model using the schema and export it
export const Code = mongoose.model("Code", codeSchema);
