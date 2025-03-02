# ADCB Assessment: Turborepo with React Native (Expo) and Next.js

## Prerequisites

Ensure you have the following installed:

- Node.js (Recommended: Latest LTS version)
- Yarn (Install globally if not installed) `npm install -g yarn`

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `native`: a [react-native](https://reactnative.dev/) app built with [expo](https://docs.expo.dev/)
- `web`: a [Next.js](https://nextjs.org/) app built with [react-native-web](https://necolas.github.io/react-native-web/)
- `@ADCB/hooks`: a business logic hook library shared by both `web` and `native` applications
- `@ADCB/types`: a types exports shared by both apps and packages folder
- `@ADCB/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

## How to Run

- `yarn install`
- `yarn dev`

Web Application:

https://github.com/user-attachments/assets/f092ef76-e527-4693-84a0-18c6ce21957f

Native Application:

https://github.com/user-attachments/assets/f44a3bee-9f5d-4019-9172-123534a51638

https://github.com/user-attachments/assets/73b97015-12e5-4bee-ac27-a946e958182d

Testing:

- `Navigate to packages/hooks`
- run `yarn test`

### Utilities

This Turborepo has some additional tools already setup for you:

- [Expo](https://docs.expo.dev/) for native development
- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [Prettier](https://prettier.io) for code formatting
