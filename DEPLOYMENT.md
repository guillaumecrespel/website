# Automatic Deployment to Fly.io

This project is configured to automatically deploy to Fly.io on every push to the `main` branch, following [Fly.io's official recommendations](https://fly.io/docs/launch/continuous-deployment-with-github-actions/).

## CV PDF Generation

CV PDFs are generated locally and committed to the repository:

### Generation Process

1. **Local Generation**: Run `pnpm generate-cv` to generate CVs locally
2. **Static Files**: CVs are saved to `public/cv/` directory
3. **Build Inclusion**: Files in `public/` are automatically included in the build
4. **Deployment**: CVs are deployed as static files with the application

### CV Files

- **French CV**: `public/cv/cv-fr.pdf`
- **English CV**: `public/cv/cv-en.pdf`
- **Access**: Available at `https://your-domain.com/cv/guillaume_crespel-fr.pdf` and `https://your-domain.com/cv/guillaume_crespel-en.pdf`

### Usage

```bash
# Generate CVs locally
pnpm generate-cv

# Commit the generated files
git add public/cv/
git commit -m "Update CV PDFs"

# Deploy normally
flyctl deploy
```

## Required Configuration

### 1. Fly.io API Token

To enable automatic deployment, you need to configure a Fly.io API token in GitHub secrets:

#### Option A: Deploy Token (recommended)
```bash
flyctl tokens create deploy -x 999999h
```

#### Option B: Full Authentication Token
```bash
flyctl auth token
```

**Important**: Copy the complete token, including the `FlyV1` prefix and space at the beginning.

### 2. GitHub Secret Configuration

1. Go to your GitHub repository → Settings → Secrets and variables → Actions
2. Click "New repository secret"
3. Name the secret `FLY_API_TOKEN`
4. Paste the API token

### 3. Fly.io Configuration

Make sure your application is configured on Fly.io:

```bash
# If not already done, create the application
flyctl apps create guillaume-crepel-website

# Deploy once to configure the application
flyctl deploy
```

## How It Works

The GitHub Action automatically triggers on every push to the `main` branch.

### Deployment Steps

1. **Checkout**: Source code retrieval with `actions/checkout@v4`
2. **Setup Flyctl**: Fly.io tool configuration with `superfly/flyctl-actions/setup-flyctl@master`
3. **Deploy**: Deployment to Fly.io with `flyctl deploy --remote-only`

### Advantages of This Approach

- **Simplicity**: Uses the existing Dockerfile directly for building
- **Reliability**: Follows Fly.io's official recommendations
- **Performance**: Build happens on Fly.io servers, not on GitHub Actions
- **Security**: Uses `--remote-only` to avoid context issues

### Protection Against Concurrent Deployments

The action uses `concurrency: deploy-group` to prevent simultaneous deployments that could cause conflicts.

## Monitoring

You can monitor your deployments:
- In the "Actions" tab of your GitHub repository
- In the Fly.io dashboard to see your application status

## Troubleshooting

### Token Error
If you get an authentication error:
- Verify that the `FLY_API_TOKEN` secret is properly configured in GitHub
- Make sure you copied the complete token (with the `FlyV1` prefix)

### Deployment Error
Check Fly.io logs:
```bash
flyctl logs
```

### Local Verification
Test your application locally:
```bash
pnpm install
pnpm run build
flyctl deploy
```

## References

- [Fly.io Official Documentation - Continuous Deployment](https://fly.io/docs/launch/continuous-deployment-with-github-actions/)
- [GitHub Actions for flyctl](https://github.com/superfly/flyctl-actions) 