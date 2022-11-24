# Redux

Application for run different Redux implementation on Angular.

## Demo

You can view the demo project - [redux.fafn.ru](https://redux.fafn.ru).

Also, you can see demo applications for single implementation ngrx, ngxs and akita:

- [ngrx.fafn.ru](https://redux.fafn.ru) - Ngrx implementation;
- [ngxs.fafn.ru](https://ngxs.fafn.ru) - Ngxs implementation;
- [akita.fafn.ru](https://akita.fafn.ru) - Akita implementation.

## Local development

You can run a shell application with remotes applications:

```shell
nx serve redux-dashboard --devRemotes=redux-ngrx,redux-ngxs,redux-akita
```

## Documentation

This project uses the following redux implementations:

- Ngrx - first implementation of redux.
- Ngxs - redux implementation that was supposed to fix performance issues and provide a more framework-like solution than ngrx.
- Akita - An alternative take on redux that was supposed to reduce the amount of code when implementing redux.

Since different implementations of redux require the inclusion of a global module in the AppModule, the application was built using microfrontends based on the Nx monorepo.

One [redux-dashboard](./README.md) shell application was created, as well as three remote applications: [redux-ngrx](../ngrx/README.md), [redux-ngxs](../ngxs/README.md) and [redux-akita](../akita/README.md).

Final structure of the project:

```text
workspace
├── apps
│   └── redux
│       ├── akita
│       ├── dashboard
│       ├── ngrx
│       └── ngxs
├── libs
│   ├── core
│   │   ├── environments
│   │   ├── hammer
│   │   ├── icons
│   │   ├── operators
│   │   ├── platform
│   │   ├── testing
│   │   ├── types
│   │   ├── uuid
│   │   └── window
│   ├── redux
│   │   ├── akita
│   │   │   ├── posts
│   │   │   │   ├── pages
│   │   │   │   └── state
│   │   │   └── store
│   │   │       └── root
│   │   ├── config
│   │   ├── dashboard
│   │   │   ├── page
│   │   │   └── ui
│   │   ├── ngrx
│   │   ├── akita
│   │   │   ├── posts
│   │   │   │   ├── pages
│   │   │   │   └── state
│   │   │   └── store
│   │   │       └── root
│   │   ├── ngxs
│   │   ├── akita
│   │   │   ├── posts
│   │   │   │   ├── pages
│   │   │   │   └── state
│   │   │   └── store
│   │   │       └── root
│   │   ├── posts
│   │   │   ├── api
│   │   │   ├── common
│   │   │   ├── facade
│   │   │   ├── page
│   │   │   ├── ui
│   │   │   │   ├── create
│   │   │   │   ├── header
│   │   │   │   ├── last
│   │   │   │   ├── pipes
│   │   │   │   ├── popular
│   │   │   │   └── promo
│   │   │   └── view
│   │   │       ├── page
│   │   │       └── ui
│   │   └── ui
│   │       └── header
│   └── ui
│       ├── carousel
│       ├── container
│       ├── grid
│       ├── layout
│       └── stylesheets
├── angular.json
├── jest.config.ts
├── jest.preset.js
├── migrations.json
├── module-federation.config.js
├── nx.json
├── package.json
├── README.md
├── tsconfig.base.json
└── yarn.lock
```

Since Nx allows you to create shared libraries, all common functionality has been moved to libraries, and the differences between all remote applications differ only in the connection of the global store and one feature store that implements the storage and display of the news list.

In order to emulate CRUD, a fake API service was created.

For UI components not to depend on a specific implementation of redux, an abstract service - PostFacade is added, which hides access to store properties, and provides common interfaces for accessing data and methods.

```text
posts
├── api
├── common
├── facade
├── page
├── ui
│   ├── create
│   ├── header
│   ├── last
│   ├── pipes
│   ├── popular
│   └── promo
└── view
    ├── page
    └── ui
```

- [posts/api](../../../libs/redux/posts/api/README.md) - service that implements a fake api for the list of news;
- [posts/common](../../../libs/redux/posts/common/README.md) - common interfaces for a news site;
- [posts/facade](../../../libs/redux/posts/facade/README.md) - abstract service for providing access to redux properties;
- [posts/page](../../../libs/redux/posts/page/README.md) - page with news widgets;
- [posts/view/page](../../../libs/redux/posts/view/page/README.md) - a page with a full description of the news;
- [posts/view/ui/article](../../../libs/redux/posts/view/ui/article/README.md) - component that displays a list of news;
- [posts/ui/create](../../../libs/redux/posts/ui/create/README.md) - new news creation widget;
- [posts/ui/header](../../../libs/redux/posts/ui/create/README.md) - page header widget;
- [posts/ui/last](../../../libs/redux/posts/ui/last/README.md) - widget with a list of the latest news;
- [posts/ui/pipes](../../../libs/redux/posts/ui/pipes/README.md) - general news pipes;
- [posts/ui/popular](../../../libs/redux/posts/ui/popular/README.md) - widget with a list of popular news;
- [posts/ui/promo](../../../libs/redux/posts/ui/promo/README.md) - widget with a list of promo news.

Each of the redux implementations has the same structure:

```text
redux
├── akita
│   ├── posts
│   │   ├── pages
│   │   └── state
│   └── store
│       └── root
├── ngrx
│   ├── posts
│   │   ├── pages
│   │   └── state
│   └── store
│       └── root
└── ngxs
    ├── posts
    │   ├── pages
    │   └── state
    └── store
        └── root
```

- `posts/pages` - module that connects general pages for news, in particular a page with a list of news, as well as a page with a full description of the news;
- `posts/state` - module that implements the feature store for the news list;
- `store/root` - module that plugs into AppModule provides Store.forRoot() services.

Each of the redux implementations will perform a series of operations on the news list. For a news site, you need the following operations:

- loading all news;
- loading news by id;
- creating of new news;
- changing news;
- removing news by id;
- deleting all news;
- restoring news.

For `Ngrx`, the feature store module for the news list looks like this:

```text
libs/redux/ngrx/posts/state
├── post.actions.ts
├── post.effects.ts
├── post.facade.ts
├── post.reducer.ts
├── post.selectors.ts
└── posts-state.module.ts
```

Each file contains specific `redux` abstractions:

- `post.actions.ts` - file that contains all actions;
- `post.effects.ts` - file which contains all effects;
- `post.facade.ts` - file that hides the direct call to redux;
- `post.reducer.ts` - file which contains state interface and reducer;
- `post.selectors.ts` - file which contains all selectors.

State for Ngxs:

```text
libs/redux/ngxs/posts/state
├── post.actions.ts
├── post.facade.ts
├── post.state.ts
└── posts-state.module.ts
```

Each file contains specific redux abstractions:

- `post.actions.ts` - file that contains all actions;
- `post.state.ts` - file which contains all selectors, mutations and asynchronous actions;
- `post.facade.ts` - file that hides the direct call to redux.

Akita's implementation ends up with a structure:

```text
libs/redux/akita/posts/state
├── post.actions.ts
├── post.effects.ts
├── post.facade.ts
├── post.query.ts
├── post.store.ts
└── posts-state.module.ts
```

Each file contains specific redux abstractions:

- `post.actions.ts` - file that contains all actions;
- `post.effects.ts` - file which contains all effects;
- `post.facade.ts` - file that hides the direct call to redux;
- `post.query.ts` - file which contains all selectors;
- `post.store.ts` - file that stores the entity management implementation.

As a result of the development of selected implementations of redux, each of the implementations has a place to exist. Ngrx is a clean implementation of redux with a cool effects solution. Ngxs offers a simple implementation that is as close to the framework as possible. Akita is something between Ngrx and Ngxs, including the advantages of both implementations.

## Running unit tests

Run `nx test redux-dashboard` to execute the unit tests.
