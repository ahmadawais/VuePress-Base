# Introduction

Here's a simple example:

```js
const sum = (a, b) => a + b;
```

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed sapien quam. Sed dapibus est id enim facilisis, at posuere turpis adipiscing. Quisque sit amet dui dui.

Duis rhoncus velit nec est condimentum feugiat. Donec aliquam augue nec gravida lobortis. Nunc arcu mi, pretium quis dolor id, iaculis euismod ligula. Donec tincidunt gravida lacus eget lacinia.

Cras et dui mollis, tempus velit placerat, sodales tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque et venenatis sapien. Maecenas sem diam, lacinia in ipsum et, fermentum rutrum lacus.

Nulla facilisis, arcu ac facilisis tincidunt, tortor est congue ligula, eu adipiscing quam ligula ut purus. Suspendisse at gravida dolor. Vestibulum eget odio in massa luctus imperdiet. Donec consequat orci a diam pellentesque mollis.

Nulla nec varius dui. Aliquam erat volutpat. Nunc at viverra nisi, id lobortis quam. Aenean hendrerit fermentum nibh nec lobortis.

```sh
# Add new demo.
# @USAGE: yarn cli demoName
# @ARGUMENT: demoName is required.
# @ARGUMENT: Debug --debug or -d is optional.
# @ARGUMENT: Help --help or -h is optional.
# @USAGE: yarn new demoName
# When demoName/cloudName are the same.
yarn new <demoName>
# E.g. The following command:
# ❯ Adds a demo at Awais.dev/awais
# ❯ Fetches images in the cloudName `awais`
yarn new awais

# OR
# When demoName/cloudName are different.
yarn new <demoName> [cloudName]
# E.g. The following command:
# ❯ Adds a demo at Awais.dev/awais
# ❯ Fetches images in the cloudName `ahmadawais`
yarn new awais ahmadawais

# ❯ Angled brackets (e.g. <demoName>) indicate required input.
# ❯ Square brackets (e.g. [cloudName]) indicate optional input.

# ALIAS: Runs the CLI. Same as above.
yarn cli <demoName>

```

That's all you need.
