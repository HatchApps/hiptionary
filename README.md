## The Hiptionary

![Travis Build Status](https://travis-ci.org/HatchApps/hiptionary.svg?branch=master)

The meta-data behind the [hpstr.me](https://hpstr.me) api.

### The Data

The hipster generator works in two modes: bio's and postcards.

From `bios.json` and `postcards.json` we pull together the opening, body and closings to create our Hipster template. The values in `dictionary.json` and `names.json` are used to fill in the template with randomised values.

An example body in bios is:

    "Was into {adjective} {thing} before it was cool."

If this body is chosen, the generator will then replace the `{adjective}` and `{thing}` tokens with respective random values from the dictionary.

### Syntax

We have come up with a very simple DSL to represent our data.

`(Value one,Value two,Value)` - The generator will randomly choose one of the comma delimited values and replace the entire bracket enclosed block with the chosen value.

`{adjective}` - Inserts a random adjective at the given location. The same is done for things, venues etc. (see `bios.json` or `postcards.json` for examples).

`{adjective|article}` - The pipe is followed by a command which is applied to the first piece of data. For example: the 'article' command will add 'a' or 'an' before the chosen value. So `{adjective|article}` might end up as "an inspired" or "a healing". Other commands include: `plural` and `sentence` which pluralise or sentence case the resulting word.

### Contributing

Please feel free to create a pull request to add new terms, phrases and names. If your pull request is accepted then your contributions will start appearing on the live site for everyone to enjoy.
