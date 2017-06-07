# Mapbox Android documentation
Inside this repo, you'll find Android documentation for the various Mapbox Android SDKs

To view the documentation, head over to [the website](https://www.mapbox.com/android-docs).

### Getting started
#### Installation
To host this documentation locally, you'll need node.js, npm and [Gatsby](https://github.com/gatsbyjs/gatsby) installed on your machine:

```
brew install nodejs
```

To install Gatsby:

```
npm install -g gatsby
```

Now navigate to this cloned projects root folder and execute:

```
npm install
```

#### Host locally
When editing documents or working on the site, you'll most likely want to run it locally to enable hot reload editing. Tweak your pages, templates, and styles and see changes in real time. To run a locally hosted version of the documentation, follow the installation instructions above, and then within the root folder execute the develop command in terminal:

```
gatsby develop
```

This will set up a server running at `http://localhost:8080`.

### Documentation
#### Adding a new doc
Inside the root directory, you'll see a `pages` folder which contains all the documentation. It's divided into the different SDKs and within those folders, you'll find sections for `overview`, `examples` and `tutorials` (if the sections are relevant).

```
SDK > Section > Document
```

Inside the `.md` file, there are a few requirements to help keep consistency across documentation and organize properly.

1. The document needs front-matter at the top providing a `title` and `path`.
2. Start off the document with a level one header.

Once the documentation has been updated or added, open a pull request and let CI run. After the PR is reviewed, merging into master will run CI again but this time, will deploy your changes automatically to the website.

#### Updating an SDK version
In the main directory, open the `constants.js` and update the version number for the relevant SDK. When writing documentation, make sure to not hardcode the version numbers but instead use the constants. For example, if I want to mention `5.0.0` as the Map SDK, inside the document I'd write `{mapSdkVersion}`.

#### Adding an example
To add an example to an existing examples page (Map SDK or Mapbox Services), navigate to `pages > SDK > examples > index.js`. The files divided by sections and each example uses the `ExampleCard` component. Example images should only show the map and have the following dementions:

PNG files: `520 × 260`
GIF files: `260 × 130`
