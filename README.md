# Dinesh & Komal Wedding Website

## Run the project
1. Extract the ZIP and open the folder in VS Code.
2. Open Terminal in VS Code.
3. Run `npm install`
4. Run `npm run dev`
5. Open the localhost link shown in terminal.

## Where to edit
- Events and dates/times: `src/data/events.js`
- Venue names/locations: `src/data/venues.js`
- Family names: `src/data/families.js`
- Gallery photos: put the images in `public/photos/gallery/` and list them in `src/data/gallery.js`
- Home page photo (under the names, shown transparent/faded): save it as `public/photos/couple.jpg`
  (if the file is missing, that photo area is simply hidden)

Each page section and repeated card has its own component in `src/components/`. There is no RSVP form, video, or music. Unconfirmed dates/times are shown as placeholders.
