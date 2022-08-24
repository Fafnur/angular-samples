# IconService

Service for creating custom svg icons using Angular Material icons. Read more on [documentation](https://material.angular.io/components/icon/overview#svg-icons).

## How to use

Add [IconService](./src/lib/icon.service.ts) on constructor on your component.

There are two ways to create icons:

- The first way to create icon using path to icon. This solution working like as img tag. The SVG icon will be downloaded via http, and the source code will be inserted into the html page.
- The second way to create icon using source of icon. This solution is more optimal because it does not require additional requests to the server. The main idea to move svg in const typescript. This will allow you to create an icon without additional resource request.

### Using icons sources

Create a custom SVG icon by calling the `add` method. The first argument is the name, the second argument is the SVG source.

```typescript
const yourIcon = `<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <rect width="100" height="100" x="0" y="0" style="fill:#3f51b5;" ry="12" />
  <ellipse style="fill:#ffffff;" cx="54" cy="64" rx="4" ry="4" />
</svg>`;

@Component({})
class YourComponent {
  constructor(private readonly iconService: IconService) {
    this.iconService.add('yourIcon', yourIcon);
  }
}
```

See example `SvgSourcesComponent` - [libs/icons/ui/svg-sources/src/lib/svg-sources.component.ts](../../../libs/icons/ui/svg-sources/src/lib/svg-sources.component.ts)

### Using icons paths

Create a custom SVG icon by calling the `addPath` method. The first argument is the name, the second argument is the path to SVG icon.

```typescript
@Component({})
class YourComponent {
  constructor(private readonly iconService: IconService) {
    this.iconService.addPath('yourIcon', '/path/to/your-icon.svg');
  }
}
```

See example `SvgPathsComponent` - [libs/icons/ui/svg-paths/src/lib/svg-paths.component.ts](../../../libs/icons/ui/svg-paths/src/lib/svg-paths.component.ts)

## Demo

You can run a demo project with both solutions - [icons](../../../apps/icons/src/app/app.module.ts):

```shell
nx run icons:serve
```

## Running unit tests

Run `nx test core-icons` to execute the unit tests.
