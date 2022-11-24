# Akita application

An example application for demonstrating Akita in Angular.

## Demo

You can view the demo project - [akita.fafn.ru](https://akita.fafn.ru).

## Local

You can run a application:

```shell
nx serve redux-akita
```

## Using modules

Application using modules:

- [LayoutModule](../../../libs/ui/layout/README.md) - common layout for all applications in workspace;
- [HeaderModule](../../../libs/redux/ui/header/README.md) - links to remotes applications;
- [NgrxRootStoreModule](../../../libs/redux/ngrx/store/root/README.md) - root store for Ngrx;
- [NgxsRootStoreModule](../../../libs/redux/ngxs/store/root/README.md) - root store for Ngxs.

## Running unit tests

Run `nx test redux-dashboard` to execute the unit tests.
