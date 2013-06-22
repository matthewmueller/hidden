
# hidden

  Listen for when a DOM element is hidden ie. `display: none`. Uses DOM Mutation Events.

## Installation

    $ component install matthewmueller/hidden

## API

```js
hidden(el, function() {
  // element is hidden
});
```

## Caveats

* One way to hide an element without triggering this event is dynamically inserting a stylesheet that hides the element
* Another way is to remove the element, to listen for this event I recommend using [component/removed](https://github.com/component/removed)

## License

  MIT
