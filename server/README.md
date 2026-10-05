# Learn JS server

Node.js + SQLite + email OTP via **Google Apps Script**.

## Setup

```bash
npm run install:server
npm start
```

## Google Apps Script

1. Create / open your Apps Script project  
2. Deploy → **Web app**  
   - Execute as: **Me**  
   - Who has access: **Anyone**  
3. Copy the `/exec` URL into `server/.env`:

```env
GAS_WEBAPP_URL=https://script.google.com/macros/s/XXXX/exec
GAS_SECRET=optional-shared-secret
GAS_METHOD=POST
```

4. Restart: `npm start`

### Expected request (POST JSON)

```json
{
  "to": "user@example.com",
  "email": "user@example.com",
  "to_email": "user@example.com",
  "username": "@mikelearnz",
  "otp": "123456",
  "subject": "Your Learn JS signup code",
  "message": "plain text body...",
  "html": "<div>...</div>",
  "secret": "optional-shared-secret"
}
```

Your script should send the email with `GmailApp` / `MailApp`, then return JSON like:

```json
{ "ok": true }
```

or on failure:

```json
{ "ok": false, "error": "reason" }
```

## Signup flow

1. Register with username + email + password  
2. Server calls your Apps Script → email OTP  
3. Verify OTP → account + User ID created  
