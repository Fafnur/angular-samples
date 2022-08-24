# Icons page

Lazy loading page for demo project with custom SVG icons.

## Demo

You can run a demo project - [icons](../../../apps/icons/src/app/app.module.ts):

```shell
nx run icons:serve
```

## Using modules

- [HeaderModule](../ui/header/src/lib/header.module.ts) - for show navigation between solutions;
- [ContainerModule](../ui/container/src/lib/container.module.ts) - positioning the content in the center;
- [SvgPathsModule](../ui/svg-paths/src/lib/svg-paths.module.ts) - demonstrate the creation of custom svg icons with path indication;
- [SvgSourcesModule](../ui/svg-sources/src/lib/svg-sources.module.ts) - demonstrate the creation of custom svg icons from sources.

## Running unit tests

Run `nx test icons-page` to execute the unit tests.
