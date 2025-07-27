# CV Generation System

This project includes an automated CV generation system that creates PDF versions of the CV in both French and English using the data from the i18n system.

## How it works

### 1. Data Sources
The CV generator uses data from the following sources:
- **Profile**: Name, title, description, social links
- **Experiences**: Work history with companies, positions, dates, achievements
- **Skills**: Product skills and soft skills with descriptions
- **Technologies**: Technical skills and expertise areas

### 2. Generation Process
1. **Build Time**: CVs are generated during the build process using `pnpm build`
2. **Puppeteer**: HTML templates are converted to PDF using Puppeteer
3. **Output**: PDFs are saved to `public/cv/` directory
4. **Languages**: Separate PDFs for French (`cv-fr.pdf`) and English (`cv-en.pdf`)

### 3. Template
The CV template includes:
- **Header**: Name, title, description, contact links
- **Skills Section**: Product skills and soft skills in a grid layout
- **Experience Section**: Work history sorted by end date (most recent first, ongoing experiences first)
- **Technologies Section**: All technologies organized by category with expertise levels

## Usage

### Manual Generation
```bash
pnpm generate-cv
```

### Automatic Generation (during build)
```bash
pnpm build
```

### Development
The CVs are automatically generated during the build process. For development, you can run the generation manually.

## Files Structure

```
src/
├── lib/
│   └── cv-generator.ts          # Main CV generation logic
├── components/
│   └── CVDownloadButton.tsx     # React component for download button
scripts/
└── generate-cv.ts               # Build script for CV generation
public/
└── cv/
    ├── cv-fr.pdf               # French CV
    └── cv-en.pdf               # English CV
```

## Customization

### Template Styling
The CV template uses Tailwind CSS for styling. You can modify the HTML template in `src/lib/cv-generator.ts` in the `generateCVHTML` function.

### Data Structure
The CV uses the same data structure as the website. To add new sections or modify existing ones, update the template and ensure the corresponding data is available in the i18n system.

### Experience Sorting
Experiences are automatically sorted by end date with the following logic:
1. **Ongoing experiences** (endDate: null) appear first
2. **Most recent experiences** appear next (sorted by end date descending)
3. **Older experiences** appear last

### Technology Organization
Technologies are organized by category with expertise levels:
1. **Categories**: Frontend, Backend, Database, DevOps, Cloud, State Management, Testing, Mobile, Other
2. **Expertise Levels**: Expert (4+ years), Senior (2+ years), Intermediate (1+ year), Beginner (< 1 year)
3. **Display**: Each technology shows its name, level, and total months of experience
4. **Sorting**: Within each category, technologies are sorted by expertise level (expert first) then alphabetically

### PDF Settings
PDF generation settings can be modified in the `generatePDF` function:
- Page format (A4)
- Margins
- Print background
- Additional Puppeteer options

## Integration

The CV download button is integrated into the Profile section and automatically adapts to the current language. The button appears alongside social media links and provides a direct download of the appropriate language version. 