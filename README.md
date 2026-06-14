# Scout Link - version 0.5

Scout Link is a React Native Expo app for football players who want to manage a scout-facing profile, track trial opportunities, organize media clips, and respond to club messages. The app includes a small Express backend that stores opportunities, applications, media clips, profile updates, preferences, availability, and message replies.

Version: 0.5

Repository: [WaniTech/nice-scout](https://github.com/WaniTech/nice-scout)

## Live Demo

Expo project page: https://expo.dev/@andersah24/nice-scout

Latest published EAS update: https://expo.dev/accounts/andersah24/projects/nice-scout/updates/1ef4762c-f010-415d-98de-0a466cc62317

The app has been published to the `main` EAS Update branch with runtime version `0.5.0`. Open the Expo project page on a mobile device with Expo Go installed, or use the update page to verify the latest published build.

## User Instructions

1. Start the backend in one terminal:

   ```powershell
   cd backend
   npm start
   ```

2. Start the Expo app in another terminal:

   ```powershell
   npm start
   ```

3. Open the app from Expo or the web URL shown by Expo.

4. Sign in with the demo player credentials shown on the login screen, or create a new player account.

5. Use the tabs to browse the dashboard, trials, media room, inbox, and profile.

6. Keep the backend running while using features that save data, such as job applications, profile edits, media clips, preferences, availability, and message replies.

## What You Can Do

Right now you can use the app to:

- Log in with the demo account shown on the login page
- Create a player account
- See the dashboard
- View profile
- Edit profile, CV, preferences, and availability
- Browse trials and jobs
- Save or update job applications
- Manage media clips
- Read messages, reply, and archive them

## Backend

The backend runs on `http://localhost:5000`.

Health check:

```text
http://localhost:5000/api/health
```

Expected response:

```json
{"ok":true,"service":"Scout Link Player API"}
```

## Work Hours

Work hours are listed in [docs/work-hours.md](docs/work-hours.md).

The work-hours file must be updated with the actual personal hours before final submission. It must include the total sum of spent hours.

## Other Repositories

This project is currently contained in [WaniTech/nice-scout](https://github.com/WaniTech/nice-scout). There are no separate frontend or backend repositories.

## Use of Generative Language Models

Generative AI assistance was used during development for code cleanup, debugging, documentation drafting, and checking project structure. AI-generated suggestions were reviewed before being applied. The project was verified with type checking, linting, frontend tests, and backend tests after the changes.

## Development Commands

Run TypeScript checks:

```powershell
npm run typecheck
```

Run linting:

```powershell
npm run lint
```

Run frontend tests:

```powershell
npm test -- --watchAll=false
```

Run backend tests:

```powershell
npm run test:backend
```
