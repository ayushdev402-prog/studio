'use server';
/**
 * @fileOverview An AI agent that generates personalized earning projections for franchise models based on user input.
 *
 * - personalizedEarningProjection - A function that handles the generation of earning projections.
 * - PersonalizedEarningProjectionInput - The input type for the personalizedEarningProjection function.
 * - PersonalizedEarningProjectionOutput - The return type for the personalizedEarningProjection function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

// Input Schema
const PersonalizedEarningProjectionInputSchema = z.object({
  location: z
    .string()
    .describe(
      'The target geographical location for the franchise (e.g., "Downtown San Francisco", "Suburban Atlanta").'
    ),
  marketConditions: z
    .string()
    .describe(
      'Specific market insights or conditions relevant to the chosen location (e.g., "high foot traffic near offices", "strong demand for healthy fast food", "seasonal tourist area").'
    ),
});
export type PersonalizedEarningProjectionInput = z.infer<
  typeof PersonalizedEarningProjectionInputSchema
>;

// Output Schema
const FranchiseModelProjectionSchema = z.object({
  modelName: z
    .string()
    .describe('The name of the franchise model (e.g., "51 Franchise Model").'),
  estimatedMonthlyRevenue: z
    .number()
    .describe('The estimated monthly revenue in USD.'),
  estimatedMonthlyExpenses: z
    .number()
    .describe('The estimated monthly expenses in USD.'),
  estimatedMonthlyProfit: z
    .number()
    .describe('The estimated monthly profit in USD.'),
  notes: z
    .string()
    .describe(
      'Any important notes, assumptions, or factors considered for this projection.'
    ),
});

const PersonalizedEarningProjectionOutputSchema = z.object({
  projections: z
    .array(FranchiseModelProjectionSchema)
    .describe(
      'An array containing earning projections for different franchise models.'
    ),
  disclaimer: z
    .string()
    .describe(
      'A disclaimer stating that these projections are estimates and not guarantees.'
    ),
});
export type PersonalizedEarningProjectionOutput = z.infer<
  typeof PersonalizedEarningProjectionOutputSchema
>;

export async function personalizedEarningProjection(
  input: PersonalizedEarningProjectionInput
): Promise<PersonalizedEarningProjectionOutput> {
  return personalizedEarningProjectionFlow(input);
}

// Define the prompt
const prompt = ai.definePrompt({
  name: 'personalizedEarningProjectionPrompt',
  input: {schema: PersonalizedEarningProjectionInputSchema},
  output: {schema: PersonalizedEarningProjectionOutputSchema},
  prompt: `You are an expert financial analyst specializing in food service franchise profitability for AFS (Amishka Food Service).
Your task is to generate a personalized earning projection for one of AFS's franchise models (51, 151, or 281).
Based on the user's input, provide a projection for a suitable model. If they seem to be a small investor, choose the 51 model. If they seem to be a mid-range investor, choose the 151 model. If they seem to be a large investor, choose the 281 model. The output should be an array containing a single projection object for the chosen model.
Also, include any important notes or assumptions made for the projection.

Location: {{{location}}}
Market Conditions: {{{marketConditions}}}

Ensure the output is in JSON format, strictly adhering to the provided output schema.
The modelName in the projection should be one of "51 Franchise Model", "151 Franchise Model", or "281 Franchise Model".
The numbers for revenue, expenses, and profit should be realistic estimates for the food service industry in the given context.
Include a general disclaimer that these projections are estimates and not guarantees.`,
});

// Define the flow
const personalizedEarningProjectionFlow = ai.defineFlow(
  {
    name: 'personalizedEarningProjectionFlow',
    inputSchema: PersonalizedEarningProjectionInputSchema,
    outputSchema: PersonalizedEarningProjectionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    if (!output) {
      throw new Error('Failed to generate personalized earning projections.');
    }
    return output;
  }
);
