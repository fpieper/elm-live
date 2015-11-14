[![Travis – build status
](https://img.shields.io/travis/tomekwi/elm-live/master.svg?style=flat-square)
](https://travis-ci.org/tomekwi/elm-live)
 [![David – status of dependencies
](https://img.shields.io/david/tomekwi/elm-live.svg?style=flat-square)
](https://david-dm.org/tomekwi/elm-live)
 [![Code style: airbnb
](https://img.shields.io/badge/code%20style-airbnb-777777.svg?style=flat-square)
](https://github.com/airbnb/javascript)




elm-live
========

**Elm development with LiveReload**  
**Feels lightning-fast!**


<p align="center"><img
  alt="Screenshot"
  src="https://cdn.rawgit.com/tomekwi/elm-live/e851ffd/shot.png"
  title="Sweet, isn’t it?"
  width="656"
  height="308"
/></p>



<a                                                 id="/installation"></a>&nbsp;

Installation
------------

```sh
# Globally for a user:
npm install --global elm@0.15 elm-live

# …or locally for a project:
npm install --save-dev elm@0.15 elm-live
```

(By the way, if [this issue](https://github.com/elm-lang/elm-platform/issues/100#issuecomment-155547605) is resolved by now, you can leave out `@0.15` and [drop me a PR](https://github.com/tomekwi/elm-live#fork-destination-box).)




<a                                                        id="/usage"></a>&nbsp;

Usage
-----

<!-- @doxie.inject start -->
<!-- Don’t remove or change the comment above – that can break automatic updates. -->
  SYNOPSIS

    Usage:  elm-live (-h|--help)


  WHAT IT DOES

    We spawn elm-reactor in the current working directory and start
    a LiveReload server watching all `*.elm` files.

    Make sure you’ve got one of http://livereload.com/extensions turned on
    in your browser. Whenever you change an Elm file, the page will be refreshed
    and elm-reactor will recompile your program on the fly.


  OPTIONS

    -h  --help   Print a short synopsis (-h) or this help text (--help)
<!-- Don’t remove or change the comment below – that can break automatic updates. More info at <http://npm.im/doxie.inject>. -->
<!-- @doxie.inject end -->



<a                                                      id="/license"></a>&nbsp;

License
-------

[MIT][] © [Tomek Wiszniewski][]

[MIT]: ./License.md
[Tomek Wiszniewski]: https://github.com/tomekwi
