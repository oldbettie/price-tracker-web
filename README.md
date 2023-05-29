# Client repository for the priceTracker app.

## Getting Started

Basic next.js app using npm run `npm i` to update everything
First, run the development server:

```bash
npm run dev
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

## Help
If you are interested in helping out you will need to fork and clone the repo and submit your work in a pull request to be approved.
I will get a notification and review the changes and merge them into the main branch if they are good to go.

### Dev log.

(29/04/23) Version 0.0.1
- Created the project.
- Removed default files.
- setup basic page layout for landing page.
- add basic Github actions file.
- lock main branch to pull requests only.
- purchased the domain name.
- setup the s3 bucket and linked it all together.

(29/04/23) Version 0.0.2
- Integrate mailchimp for email list.
- Integrate cloudfront and route 53 for domain name.
- (server-update)
    - Version 0.0.1 of the server is running every 6 hours to pull data for a list of products.
    - Setup the database to store the product data.

(07/05/23) Version 0.0.3
- Integrate Google Analytics.
- Spent some time looking into some graph libraries for v1
- Spent some time working on a basic server wire model and infra