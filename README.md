# Mapbox Android documentation
Inside this repo, you'll find Android documentation for both the Maps SDK and Mapbox Services SDK.

To view the documentation, head over to [the website]().

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

This will set up a server running at http://localhost:8080.

#### Adding a new doc
Inside the root directory, you'll see a `pages` folder which contains all the documentation. It's hierarchy is meant to allow for versioning.

```
SDK > Version > Document
```

Inside the `.md` file, there are a few requirements to help keep consistency across documentation and organize properly.

1. The document needs front-matter at the top providing a `title` and `path`.
2. Start off the document not including a title, it's already given in the front-matter
3. Add the file path inside the same SDKs `_pages.yaml` file.

#### Updating documentation upon new SDK version release

Documentation in several different places needs to be updated whenever there's a new release of [the Android Maps SDK](https://www.mapbox.com/android-docs/map-sdk/5.0.1/getting-started/). Below's a list of the public examples/documentation that always need to be modified. Searching within each repo is an easy way to find the files that have the text which needs to be updated:

* [/help](https://github.com/mapbox/help) (various documentation & config files)
* [/android-sdk](https://github.com/mapbox/android-sdk) (examples' code  & config files)
* [/www.mapbox.com](https://github.com/mapbox/www.mapbox.com) (mapbox.com/install/android/  & config files)
* [android demo app](https://github.com/mapbox/mapbox-android-demo)

