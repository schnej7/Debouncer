# Debouncer
Highly performant TypeScript debounce functionality.

Specify a function and a duration in ms. A debounced function will be called immediately when `.debounce()` is called, and then not again until the duration has elapsed.  If `.debounce()` is called multiple times before the duration has elapsed, only the last call to `.debounce()` will be resolved after duration has elapsed.

## Usage

```
const debouncer = new Debouncer(
  (message: String) => { console.log(message); },
  100,
);

debouncer.debounce("one");
debouncer.debounce("two");
debouncer.debounce("three");
debouncer.debounce("four");
```

output:
```
one
four
```
