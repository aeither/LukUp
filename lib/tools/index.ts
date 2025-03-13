
import { tool } from "ai";
import { parseUnits } from "viem/utils";
import { z } from 'zod';

// Combine all tools
export const tools = {
  example: tool({
    description: "Convert Token decimal amount to Wei",
    parameters: z.object({
      amount: z.string().describe("Amount of Token to convert")
    }),
    execute: async ({ amount }) => {
      return parseUnits(amount, 18).toString();
    }
  }),
};
