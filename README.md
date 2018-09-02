# Emoji Picker React V0.0.2

[![npm version](https://badge.fury.io/js/emoji-twemoji-react.svg)](https://www.npmjs.com/package/emoji-twemoji-react) [![Build Status](https://travis-ci.org/rubentlc/emoji-twemoji-react?branch=master)](https://travis-ci.org/rubentlc/emoji-twemoji-react)

[Live demo FAZER](http://requirebin.com/?gist=0ad25fccefcdde664d8a0becad6955f9)

![img](https://raw.githubusercontent.com/rubentlc/emoji-twemoji-react/master/screenshots/1.png)

```
npm i emoji-twemoji-react --save
```



## Usage:
```js
import React, {Component} from 'react';
import EmojiPicker from 'emoji-twemoji-react';

class MyComponent extends Component {

    render() {
        return (
            <EmojiPicker onEmojiClick={myCallback}/>
        );
    }
}

```

## Getting the clicked-on emoji
In order to use the picker in your application, you need a way to grab the img url of the clicked-on emoji. To do this, you just need to pass the `onEmojiClick` prop. It should be a callback function to your application, and it should get just one argument.

Clicking on an emoji should result in a similar output:
```js
https://twemoji.maxcdn.com/2/72x72/1f606.png
```

# Image hosting
## CDN
All Emoji files are hosted on [twemoji](https://twemoji.twitter.com/), and by default, the picker is configured to use it as the image source, with emojis of size 72x72px.

## Self hosting of emojis
You could also serve the emojis from your own server or CDN using the `assetPath` prop. You will then need to serve all emojis from a directory named after the desired image resolution. To specify resolution other than `32`, you will need to pass an additional prop - `emojiResolution`.

If you want to serve 64px emojis from your own website, it will need to look somewhat like this:

```js
<EmojiPicker assetPath="http://example.com/emojis" emojiResolution="64"/>
```

The picker will internally construct the image urls to appear like this:
`http://example.com/emojis/64/1f448-1f3fd.png`
(`1f448-1f3fd.png` is an emoji filename + extension)

# Attributions
You can use this **picker**, free of charge, no attribution is needed. The emojis have their own license.

All emoji images in this project are the property of the [twemoji](https://twemoji.twitter.com/). Usage of the images is subjeced to their free license.

Other shout-outs:
* Project based on [emoji-picker-react](https://www.npmjs.com/package/emoji-picker-react).
* To complement complement this project use [react-emoji-render](https://www.npmjs.com/package/react-emoji-render)
