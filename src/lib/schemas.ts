import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  city: z.string().min(2, { message: "Please enter your city." }),
  investment: z.string({ required_error: "Please select your investment budget." }),
});
