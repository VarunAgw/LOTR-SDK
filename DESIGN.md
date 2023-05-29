# Take home project - The Lord of the Rings SDK

## Directory Structure

1. `/example/` contains the sample project using the SDK.
2. `/lib/` contains the core project.



## Design Decisions

1. Use `eslint` & `prettier` for linting and auto-formatting.
2. Used `husky` & `lint-staged` to lint only staged changes automatically on git commit.
3. Used `typescript` to avoid future bugs.
4. `index.ts` serve as the root of the SDK. 
5. `lib/lotr.ts` is the main client of the SDK.
6. `lib/baseAPI.ts` is the abstract controller for all the SDK endpoints to avoid duplication of code
7. `/lib/httpClient.ts` is the HTTP wrapper for the project