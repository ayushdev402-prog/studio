"use server";

import { z } from 'zod';
import { contactFormSchema } from '@/lib/schemas';

export async function submitContactForm(data: z.infer<typeof contactFormSchema>) {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // In a real application, you would:
  // 1. Save the lead to your database (e.g., Firestore, PostgreSQL)
  // 2. Send a notification email to your sales team
  // 3. Add the user to a mailing list (with consent)
  console.log("New Franchise Lead:", data);

  // For this demo, we'll always return success
  return {
    success: true,
    message: "Thank you for your inquiry! We will be in touch shortly.",
  };
}
