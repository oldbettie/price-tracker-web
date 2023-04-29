# Client repository for the priceTracker app.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```


To check for linting errors before deploying run
```bash
npm run lint
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Github Actions
I have setup a basic GitHub actions file to run the linting and build before deploying to the main branch. 
This means the main branch is locked from pushing breaking changes. 
All changes must be made in a branch and then a pull request must be made to merge the changes into the main branch.
I will try to follow a major feature branch with minor feature branches off of that.
This means the main branch should always be deployable. And I can use the minor branches to test new features before merging them into the main branch.



### Dev log.

(29/04/23)
- Created the project.
- Removed default files.
- setup basic page layout for landing page
- add basic Github actions file
- lock main branch to pull requests only
