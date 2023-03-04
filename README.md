# markdown-previewer
freeCodeCamp Front End Development Libraries project - Build a Markdown Previewer

This project was completed as part of freeCodeCamp's Front End Development Libraries certificate, focusing on front end libraries such as React.

This project brief was to fulfill the following user stories:

1.  I can see a textarea element with a corresponding id="editor".
2.  I can see an element with a corresponding id="preview".
3.  When I enter text into the #editor element, the #preview element is updated as I type to display the content of the textarea.
4.  When I enter GitHub flavored markdown into the #editor element, the text is rendered as HTML in the #preview element as I type (HINT: You don't need to parse Markdown yourself - you can import the Marked library for this: https://cdnjs.com/libraries/marked).
5.  When my markdown previewer first loads, the default text in the #editor field should contain valid markdown that represents at least one of each of the following elements: a heading element (H1 size), a sub heading element (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text.
6.  When my markdown previewer first loads, the default markdown in the #editor field should be rendered as HTML in the #preview element.

Originally built on Codepen with a starter template, migrating it to Github was a great opportunity to learn a bit more about updates to React, and processing JSX using Babel. 

First version used a class component to wrap the main app. This is version 2.0, using functional components and hooks.
