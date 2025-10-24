# Deployment Guide

This project is configured to automatically deploy to GitHub Pages when changes are pushed to the `master` or `main` branch.

## How it works

1. **GitHub Actions Workflow**: Located at `.github/workflows/deploy.yml`
2. **Automatic Build**: Uses Nx to build the `super-ai` app with GitHub Pages configuration
3. **Deployment**: Uses `peaceiris/actions-gh-pages` to deploy to GitHub Pages

## Setup Instructions

### 1. Enable GitHub Pages
1. Go to your repository settings on GitHub
2. Navigate to "Pages" in the left sidebar
3. Under "Source", select "GitHub Actions"

### 2. Repository Settings
- The workflow is configured to deploy from the `master` or `main` branch
- The app will be available at: `https://yourusername.github.io/super-ai-workspace/`

### 3. Custom Domain (Optional)
If you have a custom domain, you can:
1. Add a `CNAME` file to the repository root with your domain
2. Update the workflow to include your domain in the `cname` field

## Build Configuration

The app uses a special `github-pages` build configuration that:
- Sets the correct `baseHref` for GitHub Pages deployment
- Optimizes the build for production
- Includes proper asset hashing

## Manual Deployment

To manually trigger a deployment:
1. Push changes to the `master` or `main` branch
2. The GitHub Actions workflow will automatically run
3. Check the "Actions" tab in your repository to monitor the deployment

## Troubleshooting

- **Build fails**: Check the Actions tab for error details
- **App not loading**: Verify the `baseHref` is correct for your repository name
- **Assets not loading**: Ensure the build output directory is correct (`dist/apps/super-ai/browser`)
