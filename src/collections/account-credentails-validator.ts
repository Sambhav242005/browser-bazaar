import { z } from "zod"

export const AuthCredentialsValidatorLogin = z.object({
  email: z.string().email(),
  password: z.string().min(8, {
    message: 'Password must be at least 8 characters long.',
  }),
})

export type TAuthCredentialsValidatorLogin = z.infer<typeof AuthCredentialsValidatorLogin>

export const AuthCredentialsValidatorRegister = z.object({
  username: z.string().min(2, {
    message: 'Name must be at least 2 characters long.',
  }),
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters long.',
  }),
  email: z.string().email(),
  password: z.string().min(8, {
    message: 'Password must be at least 8 characters long.',
  }),
  confirmPassword: z.string().min(8, {
    message: 'Password must be at least 8 characters long.',
  }),
})

export type TAuthCredentialsValidatorRegister = z.infer<typeof AuthCredentialsValidatorRegister>
