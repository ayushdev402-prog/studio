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
    .describe('The name of the franchise model (e.g., "QuickServe Kiosk").'),
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
  prompt: `You are an expert financial analyst specializing in food service franchise profitability.
Your task is to generate personalized earning projections for three specific Amisamishka Food Service franchise models based on the provided location and market conditions.
The three franchise models are:
1. "QuickServe Kiosk": A small, high-volume kiosk model focused on grab-and-go items.
2. "Cafe Express": A medium-sized cafe model offering a broader menu for dine-in and takeout.
3. "Full-Service Restaurant": A larger establishment with a comprehensive menu and full dining experience.

Based on the following details, provide estimated monthly revenue, estimated monthly expenses, and estimated monthly profit for each of these three models.
Also, include any important notes or assumptions made for each projection.

Location: {{{location}}}
Market Conditions: {{{marketConditions}}}

Ensure the output is in JSON format, strictly adhering to the provided output schema.
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
