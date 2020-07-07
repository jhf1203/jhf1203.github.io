I thoroughly enjoyed completing the bio page Homework assignment.  Please see below for an outline of what was required, with details on the project following it:

- Functional, deployed application
- GitHub repository with README describing the project
- Navbar must be consistent on each page.
- Navbar on each page must contain links to Home/About, Contact, and Portfolio pages.
- All links must work.
- Must use semantic html.
- Each page must have valid and correct HTML. (use a validation service)
- Must contain your personalized information. (bio, name, images, links to social media, etc.)
- Must properly utilize Bootstrap components and grid system.

________________________________________

Summary:

When developing on the front end we are tasked with creating an optimal balance between something with character that represents a brand, and also something that is functional and convenient.  With the project being open-ended beyond the requirements that are listed above, I took this as the perfect opportunity to showcase that balance using a brand that I'm very familiar with:  Myself.  The overall mission of this site will be to deliver content that I've created to the world, and to prospective employers.  

________________________________________

The Code:

I was careful to only use one container for main content and a maximum of three colums per row.  This was done so that the function could be the focus of the page.  While the layout is appealing, it is not overpowering.  I took numerous steps to make future edits of the html more efficient:

- Using the "main" and "section" semantic tags to define where containers and rows begin and end when employing the Bootstrap grid into the body.
- Verifying that all tabs were correct for all divs in each page.
- Manually wrapping the text, which adds additional line to the code but makes every word across all four files able to be read in VS Code with the explorer tab open, without needing to navigate the main code page to the right.  
- When possible, manual wrapping was done to simplify changing specific elements, IDs, and classes within a single div (see lines 133 & 134 of "index."  This line could have been broken earlier but it made sense to give the "i" element it's own line.).
- Using some line spacing, enough to clearly make comments stick out that apply to each section.

You'll see a similar format within the stylesheet.  There are two breaks in between each style, and comments broken into four categories (Box-Model, Positioning, Typography, and Aesthetics).  You'll also find notation where there are rules that only apply on one page, versus multiple.  Rules are organized in the order in which they appear on the page.  Outside of sizing for the images on the page and the footer height, all positioning was accomplished using the box model.

Media queries were mainly limited to re-sizing images and fonts to appear aesthetically better on mobile browsing.  Outside of that the footer size was increased to house the collapsed nav button, and some divs had slight changes to margin and padding attributes for aesthetic purposes.

You can find the HTML Validator I used credited at the top of each file, and I used the contrast checker in the Inspector in Google Chrome to ensure that there was an appropriate amount per section.

________________________________________

The Content:

You will find the header and footer consistent across all three pages visually.  The only item of note here is that since the "About Me" section will always remain a one-pager unless it's being viewed on a mobile screen, so despite it being "sticky" I gave it a fixed position unless it's being viewed on mobile.  I felt that in this situation separating the footer to the bottom and creating some white space allowed the background image to shine through a bit more, as well as draw more attention to the actual "About Me" text rather than the contrasting NavBar color, which would sit just below the text if the footer were truly "sticky."  

I designed the header as I would a virtual resume, choosing a more profound font for it and including my name within an h1 tag to improve SEO if someone googles me.  I felt that "Close-Up," "Content," and "Contact" flowed more naturally together than "About Me," "Portfolio," and "Contact." The hover color for these and other URLs was also pulled using a color picker, from the background image.

The footer is slightly different in formatting, containing images for brevity instead of words, which freed up enough space to allow quick access to my LinkedIn and Github accounts without needing to navigate to the "Contact" page.

The goal of the "About Me" page was for the reader to get a good idea as to who I am, and why I'm pursing software development but to only occupy 2/3 of the page.  I chose an image of myself that's professional but clearly takes place in a social situation, to reduce the stuffiness that a "headshot" image can bring.

The real meat of this website will be found in my portfolio which occupies the "Content" page.  I sized the columns here large enough to house the information, but not so wide that the reader feels like they're reading a book.  You'll find a placeholder section which will occupy my next project to give an understanding of how the page flows when scrolling downward.  I included the previous homework assignment here as an example of how I will show my work, and the layout is intended to show "Where," "What," and "How."  There will be one column with the project name and the appropriate links showing where to access it, one with a summary of what the overall goal of the project was, and one containing my point of view on how and why I did what I did.  This gives the reader not just the finished work but an idea of my thought process as well, which is equally important to a prospective employer.

The contact page I tried to simplify as much as possible, while still coming across as warm and open.  Since the page is hosted on github the contact form will not actually function (I found this out after finding the right .js and .php to make it work, and it still not working).  That is notated on this page in hopes that at some point a recruiter will in fact use this page to try to contact me, and will understand that I'm aware that a portion of the page isn't functional.  Outside of my e-mail and social links, I included a small easter egg in the area that gives my home base city, linking the reader to an external website showing what's going on in the community in the coming days.  

________________________________________

My goal in designing this website was to mimic my personal style of neutrality and minimalism, focusing on how aesthetics can be derived from function and fit.  This allows for the site to be aesthetically pleasing and functional, yet minimal enough to ensure that the portfolio work takes center stage.  It is something that I created as a homework assignment, but my intent for this will be for it to function as my actual portfolio as I continue to complete class projects.

- Jim









