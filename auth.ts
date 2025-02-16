import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@/prisma/prisma"
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaClient } from '@prisma/client';

import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import Vk from "next-auth/providers/vk"
import MailRu from "next-auth/providers/mailru"
import Yandex from "next-auth/providers/yandex"
import Discord from "next-auth/providers/discord"
import MailChimp from "next-auth/providers/mailchimp"

const prismaDB = new PrismaClient();

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  providers: [
    GitHub,
    Google,
    Vk,
    MailRu,
    Yandex,
    Discord,
    MailChimp,
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Credentials',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' }
      },

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      async authorize(credentials, req) {
        console.log('credentials', credentials);
        // Return null if user data could not be retrieved

        // так не надо делать просто для проверки функционала API
        if ('1' === credentials?.username && '1' === credentials.password) {
          const user = await prismaDB.user.findFirst({ where: { id: '1' } });
          console.log('authorize user=', user);
          return user;
        }
        switch (credentials.username) {
          case 'admin':
            if ('1' === credentials.password) {
              const user = await prismaDB.user.findFirst({ where: { id: '2' } });
              return user;
            }
          case 'g':
            if ('1' === credentials.password) {
              const user = await prismaDB.user.findFirst({ where: { id: '3' } });
              return user;
            }
          case 's':
            if ('1' === credentials.password) {
              const user = await prismaDB.user.findFirst({ where: { id: '4' } });
              return user;
            }
            return null;
        }
      }
    })

  ],
  callbacks: {
    jwt({ token, user }) {
      // if (user) token.role = user.role
      // console.log('____jwt', { token, user });
      if (user) {
        token.id = user?.id;
        token.role = user?.role;
      }
      return token
    },
    session({ session, token }) {
      // console.log('____session', { session, token });
      if (session.user) {
        session.user.id = token?.id;
        session.user.role = token?.role;
      }
      return session;
    }
  }
});

