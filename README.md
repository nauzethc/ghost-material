# Ghost Material

Material Design inspired theme for Ghost blogging platform. Visit my [blog](http://www.nauzethdez.com/) for a demo.


### Features

* Zero-dependency on CSS frameworks or Javascript libraries
* Mobile-first and adapted to all screens according to Material Design guidelines
* CSS Flexbox for layout structure
* CSS Animations (no jQuery or Javascript)


### Installation

Go to your Ghost installation path and clone repository under `content/themes` directory.

```
cd /your/ghost/path
cd content/themes/
git clone https://github.com/nauzethc/ghost-material.git
```

Then restart your Ghost service and select "Material" theme on your blog setup page.


### Customization

#### Colors

For color palette customizing you only have to edit the `assets/css/theme.css` file. I recommend to use [Material Palette](https://www.materialpalette.com/) web to generate color palette based on two main colors, one for backgrounds and one for accent (links and buttons).

#### Animations

Animation timings, functions and definitions are customizable via `assets/css/animations.css`. Navbar autohide and cards slide-on events are triggered using Javascript, but animations and transitions are fully CSS based.

#### Components

Some widgets are customizable via CSS classes.

* Navigation Bar (`navbar`)
  * `shaded`: Add shadow
  * `fixed`: Set navbar as fixed on top
  * `autohide`: Hide/unhide navbar on scroll (`fixed` is required)


* Header (`header`)
  * `shaded`: Add shadow
  * `bg-darken|bg-lighten`: It draws dark/light gradient on top of background images (for better readability)

  * Header Content (`header--content`)
    * `onTop|onMiddle|onBottom`: Align vertically header content


* Cards (`card`)
  * `image`: Set bigger height on card header to show image
  * `slide`: Card is animated when is rendered

  * Card Header (`card--header`)
    * `bg-darken|bg-lighten`: It draws dark/light gradient on top of background images (for better readability)


* FABs (`fab` class on `<a>`,`<button>` elements)
  * `large`: Display a bigger button (55.5px)
  * `disabled`: It's rendered as disabled button
  * `ripple`: Show ripple animation on click


* Buttons (`button` class on `<a>`,`<button>` elements)
  * `shaded`: Add shadow
  * `solid`: Add solid color background
  * `ripple`: Show ripple animation on click


### Motivation

Ghost Material is widely motivated by [Materialize](http://materializecss.com/) and [Material Design Lite](http://www.getmdl.io/) projects. I've tried to use both frameworks with Ghost before but for some reason none of them convinced me, so I wanted to replicate what I like from them without using any heavy library or framework, just vanilla Javascript and CSS3.
