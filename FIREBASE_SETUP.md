# Firebase Setup Instructions

This guide will help you set up Firebase for the blog admin panel functionality.

## Prerequisites

1. A Google account
2. Access to the [Firebase Console](https://console.firebase.google.com/)

## Step 1: Create a Firebase Project

1. Go to the [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project" or "Add project"
3. Enter your project name (e.g., "slatex-blog")
4. Enable/disable Google Analytics as needed
5. Click "Create project"

## Step 2: Set up Firestore Database

1. In your Firebase project console, click "Firestore Database" in the left sidebar
2. Click "Create database"
3. Choose "Start in test mode" for now (you can secure it later)
4. Select a location for your database
5. Click "Done"

## Step 3: Set up Authentication

1. In the left sidebar, click "Authentication"
2. Click "Get started"
3. Go to the "Sign-in method" tab
4. Enable "Email/Password" authentication
5. Click "Save"

## Step 4: Set up Storage

1. In the left sidebar, click "Storage"
2. Click "Get started"
3. Choose "Start in test mode"
4. Select a location for your storage
5. Click "Done"

## Step 5: Get Firebase Configuration

1. In the Firebase console, click the gear icon (Project settings)
2. Scroll down to "Your apps" section
3. Click the web icon (`</>`) to add a web app
4. Enter an app nickname (e.g., "slatex-blog-web")
5. Check "Also set up Firebase Hosting" if you want (optional)
6. Click "Register app"
7. Copy the Firebase configuration object

## Step 6: Update Firebase Configuration

1. Open `src/lib/firebase.ts` in your project
2. Replace the placeholder configuration with your actual Firebase config:

```typescript
const firebaseConfig = {
  apiKey: "your-actual-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-actual-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "your-actual-sender-id",
  appId: "your-actual-app-id"
};
```

## Step 7: Create Admin User

1. In Firebase console, go to "Authentication" > "Users"
2. Click "Add user"
3. Enter email: `admin@slatexpos.com`
4. Enter a password (remember this for login)
5. Click "Add user"

## Step 8: Set up Firestore Security Rules (Optional but Recommended)

1. Go to Firestore Database > Rules
2. Replace the default rules with:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow read access to published blogs for everyone
    match /blogs/{document} {
      allow read: if resource.data.published == true;
      allow read, write: if request.auth != null && request.auth.token.email == 'admin@slatexpos.com';
    }
  }
}
```

## Step 9: Set up Storage Security Rules (Optional but Recommended)

1. Go to Storage > Rules
2. Replace the default rules with:

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /blog-images/{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null && request.auth.token.email == 'admin@slatexpos.com';
    }
  }
}
```

## Admin Panel Access

Once everything is set up:

1. Run your development server: `npm run dev`
2. Navigate to `/admin` in your browser
3. Login with:
   - Email: `admin@slatexpos.com`
   - Password: (the password you set in Step 7)

## Admin Panel Features

- **Dashboard**: Overview of blog statistics
- **Blog Management**: Create, edit, delete, and publish blog posts
- **Image Upload**: Upload featured images for blog posts
- **Categories & Tags**: Organize blog posts
- **Draft/Publish**: Save drafts and publish when ready

## Troubleshooting

### Common Issues:

1. **"Permission denied" errors**: Make sure your Firestore rules allow access for your admin user
2. **Authentication errors**: Verify your Firebase config is correct
3. **Image upload fails**: Check Storage rules and make sure storage is enabled
4. **Blog posts not showing**: Ensure posts are marked as "published" in the admin panel

### Development vs Production:

- For development, you can use test mode rules
- For production, implement proper security rules
- Consider adding more sophisticated admin user management

## Next Steps

1. Customize the blog categories in `src/components/pages/BlogList.tsx`
2. Add more admin users if needed
3. Implement proper error handling and validation
4. Add more fields to blog posts if required
5. Set up proper Firebase security rules for production


