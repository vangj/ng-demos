# Purpose

Shows how a parent component can communicate with a child component.

- The `child-component` uses normal binding. When the value in the parent changes, it changes also in the child.
- The `child-ref` uses `ViewChild` to accomplish communication from the parent to the child. The parent must give an `id` to the child (e.g. `#`) and invoke its method to cause the change.
- The `child-lifecycle` uses binding and the `OnChanges` event. The idea is that the child may want to listen in on when one of its value changes and do other things. The parent binds a variable to the child; the child listens for the change and can do more processing after the change.
- The `child-intercept` shows how a parent component can communicate with a child component using a `getter` and `setter` of the child component. See this [article](https://angular.io/guide/component-interaction#intercept-input-property-changes-with-a-setter) for some details.

# ComponentParentToChild

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
