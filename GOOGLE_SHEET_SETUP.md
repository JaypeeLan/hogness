# Google Sheets Integration Setup Guide

Follow these steps to generate the **GOOGLE_SHEETS_WEBAPP_URL** needed for the contact form.

## 1. Prepare Your Google Sheet
1.  Create a new Google Sheet.
2.  Add a header row with these exact names in cells **A1 to I1**:
    `Timestamp`, `Full Name`, `Email`, `Phone`, `Organization`, `Org Type`, `Service`, `Timeline`, `Description`.

## 2. Open Apps Script
1.  In your sheet, click **Extensions** > **Apps Script**.
2.  Replace all code in the editor with this:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    
    sheet.appendRow([
      new Date(),
      data.fullName || '',
      data.email || '',
      data.phone || '',
      data.organization || '',
      data.orgType || '',
      data.service || '',
      data.timeline || '',
      data.description || ''
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

3.  Save the project (click the disk icon).

## 3. Deploy as Web App (CRITICAL)
1.  Click **Deploy** (top right) > **New deployment**.
2.  Select **Web app**.
3.  **Execute as**: Me (your email).
4.  **Who has access**: **Anyone**.
5.  Click **Deploy**.
6.  You may need to "Authorize Access". Follow the prompts to allow the script.
7.  Copy the **Web App URL** (ends in `/exec`).

## 4. Add to .env.local
Paste that URL into your `.env.local` file:
```
GOOGLE_SHEET_URL=your_copied_url
```

Then restart your server (`npm run dev`).
