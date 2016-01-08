# formfield
Simple React-only component for input validations [IN HEAVY DEVELOPMENT BUT STILL AWESOME]

### What's inside?

I believe that we should keep our forms simple. I believe that our forms shoud validate on-the-fly. I also believe, that only html tag, we should use (except div) in our forms is input.

So here we go. One component to validate text inputs. No matter where you use it, no matter how you use it.

In current version It supports multiple validations, and add's className 'invalid' for your input if one of them fails.
Take part in the discussion on [gitter.im](https://gitter.im/volodymyrlut/formfield) to help me choose, how can I assign different input's to one form, store and change their state and so on.

### Installation

I don't like browserify-reactify-blablabalfy-stuff, so just run this:

```
npm install formfield --save-dev
```

NOTE: YOU MAY NEED TO RUN `npm install` AS SUPERUSER

And then in your code

```
let FormField = require('FormField')
```

Great job! Now you are ready-to-go!

### How should I use it?

Oh, it's simple. Like this.

```
<FormField className = "awesomeclassnameformyinputs" type="text" name = "email" value = {"email"} validations = {['isEmail']}/>
```

Soooo, what do we have here... This will render `<input type="text" name="email" class="awesomeclassnameformyinputs" value="email"/>` which validates as email (*@*.*) and adds className "invalid" if validation fails. You can combine different validations though. All of that properties are not required. Without any property, by default, we will get just type="text" input tag.

##### List of validations provided out-of-the-box

- isFull // !empty
- isExisty // !null && !undefined
- isEmail // *@*.*
- isUrl // https?http?ftp
- isNumeric
- isAlpha // A-Z
- isAlphanumeric // 0-9, A-Z
- isInt
- isFloat
- isWords

... and some more in the next version for you!

### Contribute

Feel free to create PR's, but I'd be very glad, if you would join our discussion on [gitter.im](https://gitter.im/volodymyrlut/formfield) or open an issue here.
There is a lot of work for us to do, but I hope, we will finally get cool input-based validation without tons of sugar.

P.S.
Designed for [VertaLab](vertalab.com) and all of you, React-addicted guys!
Sincerely Your's, Lut. 
