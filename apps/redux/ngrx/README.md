# Ngrx application

An example application for demonstrating Ngrx in Angular.

![image](./docs/ngrx.gif)

## Demo

You can view the demo project - [ngrx.fafn.ru](https://ngrx.fafn.ru).

## Local

You can run a application:

```shell
nx serve redux-ngrx
```

## Using modules

Application using modules:

- [LayoutModule](../../../libs/ui/layout/README.md) - common layout for all applications in workspace;
- [HeaderModule](../../../libs/redux/ui/header/README.md) - links to remotes applications;
- [NgrxRootStoreModule](../../../libs/redux/ngrx/store/root/README.md) - root store for Ngrx;

## Running unit tests

Run `nx test redux-ngrx` to execute the unit tests.
