# Contributing

We welcome contributions to this Android documentation repository. Please follow these steps if you're interested in adding to our documentation:

- [Open a ticket](https://github.com/mapbox/mapbox-plugins-android/issues/new) to kick off a conversation, feel free to tag the `@mapbox/android` team. It's a good idea to explain your plans before you push any code to make sure no one else is working on something similar and to discuss the best approaches to tackle your particular idea.

- Create a new branch off of `master`. This new branch will contain your additions.

– Make the changes you'd like to see in the documentation. As you make changes, don't forget to test the site locally (described above) to see your changes in action.

– Double check. Triple check. Spell check your writing. If you have code snippets, please make sure they're correct as well.

- Finally, once you're ready to share your additions, open a pull request for the `@mapbox/android` team to review. If/once approved, this pull request will pull your changes into the `master` branch of this repository.


## Code of conduct

Everyone is invited to participate in Mapbox’s open source projects and public discussions: we want to create a welcoming and friendly environment. Harassmewnt of participants or other unethical and unprofessional behavior will not be tolerated in our spaces. The [Contributor Covenant](http://contributor-covenant.org) applies to all projects under the Mapbox organization and we ask that you please read [the full text](http://contributor-covenant.org/version/1/2/0/).

You can learn more about our open source philosophy on [mapbox.com](https://www.mapbox.com/about/open/).

## Images

Add images using [appropriate-images](https://github.com/mapbox/appropriate-images) and [appropriate-images-react](https://github.com/mapbox/appropriate-images-react).

General rules:

- Never add raw images directly to the site.
- Never add images directly to `src/img/dist/`.
- Never load images on the site from anywhere *except* `src/img/dist/`.

Follow this process to add a new image:

1. **Add the raw image.** Add the raw image to `src/img/src/` (no subdirectories).

*Note: SVGs belong in `src/svg/`, not in `src/img/`, and have their own processing pipeline.*

2. **Add the new image to the image config**. Specify the sizes you need for each image in `conf/image-config.js`. Check out [the documentation about this file](https://github.com/mapbox/appropriate-images#image-configuration). Here's a sample image configuration item:

```js
industryRealEstateBanner: {
  basename: 'industry-real-estate-header.jpg',
  sizes: [{ width: 500, height: 800 }, { width: 1400 }]
},
```

*Note: `width` is required. `height` is not. `width` and `height` should never exceed the natural dimensions of the image. If `height` is not provided, the natural aspect ratio of the image will be preserved. If `height` is provided, the image will be cropped. By default, it will be center-cropped.*

3. **Run the script.** Run `bin/appropriate-images.js` in terminal, either specifying the image(s) you just added (to save time), or optimizing `--all`. For example, to add only the image in the example above, you would use:

```
bin/appropriate-images.js industryRealEstateBanner
```

*Note: You'll see that the generated images in `src/img/dist/` have filenames corresponding to the sizes you've defined.*
