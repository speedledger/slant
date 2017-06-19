# Slant

This is a simple wrapper for ant-design that overrides some of the styling. It is intended to be used in the same way as [antd](https://www.npmjs.com/package/antd), and only apply some minor visual changes.

This project requires `node 8` and `npm 5` to develop.

## Usage

A project that depends on this module will need to use `webpack 2` and have a few loaders set up:
``` JavaScript
{

  test: /\.less$/,
  use: [
    { loader: 'style-loader' },
    { loader: 'css-loader' },
    { loader: 'less-loader' },
  ],
},
```

Then, import the `less` files from `slant` in your project:
``` less
@import '~slant/dist/antd.less';
@import '~slant/dist/slstyle/index.less';
```

It is also suggested to use `babel-import-loader` [as it is suggested with `antd`](https://www.npmjs.com/package/antd#use-modularized-antd).

Keep in mind that you will have to point to `slant` instead of `antd`, an leave out the `style` property:
``` JavaScript
[ "import", { libraryName: "antd-wrapper" }]
```

Once you've done these steps you're all set to start using `slant` as if you were using `antd`!

## Testing

Testing consists of a simple automated browser test based on [nightmare.js](https://github.com/segmentio/nightmare) followed by screenshot comparison using [image-diff](https://github.com/uber-archive/image-diff).

To run tests, first launch the example `npm run example` and then run `npm test`. A screenshot of the example page and a diff image will be placed in `test/tmp` and `image-diff` will be used to compare them. If there are any differences, make sure they are intentional and run `npm run diff:approve` to overwrite the reference screenshot with the new screenshot. Don't forget to `add` and `commit` the new screenshot.

## Developing

Start the example, extend it with any components that you change. If you added components to the example, verify that the new image you produce covers the entire page. Don't forget to update `CHANGELOG.md` with any changes, even if you just bump a dependency.

## Publishing

Before publishing, ensure that the version matches the `antd` version as closely as possible. Also ensure that there is no visual diff, or that the diff is acceptable.

## Scripts

* `npm run clean` - removes `dist` and `lib` folders
* `npm run build` - copies our `src` and ant-design `dist` into combined `dist` and `lib` folders.
* `npm run example` - runs `build` and then starts a devserver with HMR on http://localhost:3000 with the example docs.
* `npm run test` - runs visual regression testing.
* `npm run diff:approve` - approves visual diffs by overwriting reference image. Make sure to commit it. 
