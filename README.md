# Mapbox Android documentation
Inside this repo, you'll find Android documentation for the various Mapbox Android SDKs.

Head over to [the website](https://www.mapbox.com/android-docs) to view the documentation.

### Getting started
#### Installation
To host this documentation locally, you'll need node.js, npm, and [Gatsby](https://github.com/gatsbyjs/gatsby) installed on your machine:

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
When editing documents or working on the site, you'll most likely want to run it locally to enable hot reload editing. Tweak your pages, templates, and styles to see changes in real time. To run a locally hosted version of the documentation, follow the installation instructions above. In the root folder, execute the develop command in terminal:

```
gatsby develop
```

This will set up a server running at `http://localhost:8080`.

### Writing documentation
#### Adding a new doc
Inside the root directory, you'll see a `pages` folder which contains all of the documentation. It's divided into the different SDKs and within those folders, you'll find sections for `overview`, `examples`, and `tutorials` (if the sections are relevant).

```
SDK > Section > Document
```

Inside the `.md` file, there are a few requirements to help keep consistency across documentation and organize properly.

1. The document needs front-matter at the top providing a `title` and `path`.
2. Start off the document with a level one header.

Open a pull request and let CI run once the documentation has been updated or added. After the PR is reviewed, merging into master will run CI again. However, this time it will deploy your changes automatically to the website.

#### Linking in markdown
If you want to link to a different document inside `/android-docs` you'll write `[](/map-sdk/overview/runtime-styling/)` for example, not including the `https://mapbox.com/android-docs`. Otherwise, if it's an external link, place the full path.

#### Updating an SDK version
In the main directory, open the `constants.js` and update the version number for the relevant SDK. When writing documentation, make sure to not hardcode the version numbers but instead use the constants. For example, write `{mapSdkVersion}` inside the document if you would want to mention `5.0.0` as the Map SDK.

#### Adding an example
Navigate to `pages > SDK > examples > index.js` to add an example to an existing examples page (Map SDK or Mapbox Services). The files divided by sections and each example uses the `ExampleCard` component. Example images should only show the map and have the following dementions:

PNG files: `520 × 260`
GIF files: `260 × 130`
