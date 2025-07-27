import puppeteer from 'puppeteer';
import { getTechnologyTotalDuration } from '@/i18n/data/experiences/technology-mapping';
import type { Experience } from '@/i18n/data/experiences/types';
import { getExperiences } from '@/i18n/data/experiences/utils';
import { getProductSkills } from '@/i18n/data/product-skills';
import { getProfile } from '@/i18n/data/profile';
import { getSoftSkills } from '@/i18n/data/soft-skills';
import { getTechnologies } from '@/i18n/data/technologies';
import type { Lang } from '@/i18n/ui';

export interface CVData {
  profile: Awaited<ReturnType<typeof getProfile>>;
  experiences: Awaited<ReturnType<typeof getExperiences>>;
  softSkills: Awaited<ReturnType<typeof getSoftSkills>>;
  productSkills: Awaited<ReturnType<typeof getProductSkills>>;
  technologies: Awaited<ReturnType<typeof getTechnologies>>;
}

export interface TechnologyWithLevel {
  id: string;
  name: string;
  category: string;
  level: 'beginner' | 'intermediate' | 'expert' | 'senior';
  totalMonths: number;
  color: string;
}

/**
 * Get technology level based on total months of experience
 */
function getTechnologyLevel(totalMonths: number): 'beginner' | 'intermediate' | 'expert' | 'senior' {
  if (totalMonths >= 48) return 'expert'; // 4+ years
  if (totalMonths >= 24) return 'senior'; // 2+ years
  if (totalMonths >= 12) return 'intermediate'; // 1+ year
  return 'beginner'; // < 1 year
}

/**
 * Get level display text
 */
function _getLevelText(level: string, isFrench: boolean): string {
  switch (level) {
    case 'expert':
      return isFrench ? 'Expert' : 'Expert';
    case 'senior':
      return isFrench ? 'Senior' : 'Senior';
    case 'intermediate':
      return isFrench ? 'Intermédiaire' : 'Intermediate';
    case 'beginner':
      return isFrench ? 'Débutant' : 'Beginner';
    default:
      return level;
  }
}

/**
 * Get level color class
 */
function getLevelColor(level: string): string {
  switch (level) {
    case 'expert':
      return 'bg-green-100 text-green-800';
    case 'senior':
      return 'bg-blue-100 text-blue-800';
    case 'intermediate':
      return 'bg-yellow-100 text-yellow-800';
    case 'beginner':
      return 'bg-gray-100 text-gray-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
}

/**
 * Organize technologies by category with levels
 */
function organizeTechnologiesByCategory(
  technologies: Awaited<ReturnType<typeof getTechnologies>>,
  _experiences: Experience[]
): { [category: string]: TechnologyWithLevel[] } {
  const organized: { [category: string]: TechnologyWithLevel[] } = {};
  
  for (const tech of technologies.technologies) {
    const totalMonths = getTechnologyTotalDuration(tech.id);
    const level = getTechnologyLevel(totalMonths);
    
    const techWithLevel: TechnologyWithLevel = {
      id: tech.id,
      name: tech.name,
      category: tech.category,
      level,
      totalMonths,
      color: tech.color,
    };
    
    if (!organized[tech.category]) {
      organized[tech.category] = [];
    }
    
    organized[tech.category].push(techWithLevel);
  }
  
  // Sort technologies within each category by level (expert first) then by name
  for (const category in organized) {
    organized[category].sort((a, b) => {
      const levelOrder = { expert: 4, senior: 3, intermediate: 2, beginner: 1 };
      const levelDiff = levelOrder[b.level] - levelOrder[a.level];
      if (levelDiff !== 0) return levelDiff;
      return a.name.localeCompare(b.name);
    });
  }
  
  return organized;
}

/**
 * Get category display name
 */
function getCategoryName(category: string, isFrench: boolean): string {
  const categoryNames: { [key: string]: { fr: string; en: string } } = {
    frontend: { fr: 'Frontend', en: 'Frontend' },
    backend: { fr: 'Backend', en: 'Backend' },
    database: { fr: 'Base de données', en: 'Database' },
    devops: { fr: 'DevOps', en: 'DevOps' },
    cloud: { fr: 'Cloud', en: 'Cloud' },
    state: { fr: 'Gestion d\'état', en: 'State Management' },
    testing: { fr: 'Tests', en: 'Testing' },
    mobile: { fr: 'Mobile', en: 'Mobile' },
    other: { fr: 'Autres', en: 'Other' },
  };
  
  return categoryNames[category]?.[isFrench ? 'fr' : 'en'] || category;
}

/**
 * Sort experiences by end date (most recent first, ongoing experiences first)
 */
function sortExperiences(experiences: Experience[]): Experience[] {
  return [...experiences].sort((a, b) => {
    // Ongoing experiences (endDate is null) come first
    if (a.endDate === null && b.endDate !== null) return -1;
    if (a.endDate !== null && b.endDate === null) return 1;
    
    // If both are ongoing, sort by start date (most recent first)
    if (a.endDate === null && b.endDate === null) {
      return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
    }
    
    // If both have end dates, sort by end date (most recent first)
    if (a.endDate && b.endDate) {
      return new Date(b.endDate).getTime() - new Date(a.endDate).getTime();
    }
    
    // If one has end date and the other doesn't, the one with end date comes after
    return 0;
  });
}

/**
 * Generate CV data for a specific language
 */
export async function generateCVData(lang: Lang): Promise<CVData> {
  const [profile, experiences, softSkills, productSkills, technologies] = await Promise.all([
    getProfile(lang),
    getExperiences(lang),
    getSoftSkills(lang),
    getProductSkills(lang),
    getTechnologies(lang),
  ]);

  return {
    profile,
    experiences: sortExperiences(experiences),
    softSkills,
    productSkills,
    technologies,
  };
}

/**
 * Generate HTML template for CV
 */
export function generateCVHTML(data: CVData, lang: Lang): string {
  const isFrench = lang === 'fr';
  const organizedTechnologies = organizeTechnologiesByCategory(data.technologies, data.experiences);
  
  return `
<!DOCTYPE html>
<html lang="${lang}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${data.profile.name} - CV</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap');
    body { font-family: 'Space Grotesk', sans-serif; }
    .page-break { page-break-before: always; }
    @media print {
      body { margin: 0; }
      .page { page-break-after: always; }
    }
  </style>
</head>
<body class="bg-white text-gray-900">
  <div class="max-w-4xl mx-auto p-8">
    <!-- Header -->
    <header class="mb-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-2">${data.profile.name}</h1>
      <p class="text-xl text-gray-600 mb-4">${data.profile.title}</p>
      <p class="text-gray-700 mb-4">${data.profile.description}</p>
      
      <!-- Contact Info -->
      <div class="flex flex-wrap gap-4 text-sm text-gray-600">
        ${data.profile.socialLinks.map(link => `
          <a href="${link.url}" class="flex items-center gap-2 hover:text-gray-900">
            <span>${link.label}</span>
          </a>
        `).join('')}
      </div>
    </header>

    <!-- Skills Section -->
    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4 text-gray-900">${isFrench ? 'Compétences' : 'Skills'}</h2>
      
      <!-- Product Skills -->
      <div class="mb-6">
        <h3 class="text-lg font-medium mb-3 text-gray-800">${data.productSkills.title}</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          ${data.productSkills.skills.map(skill => `
            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="font-medium text-gray-900 mb-2">${skill.name}</h4>
              <p class="text-sm text-gray-600">${skill.description}</p>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Soft Skills -->
      <div class="mb-6">
        <h3 class="text-lg font-medium mb-3 text-gray-800">${data.softSkills.title}</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          ${data.softSkills.skills.map(skill => `
            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="font-medium text-gray-900 mb-2">${skill.name}</h4>
              <p class="text-sm text-gray-600">${skill.description}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Experience Section -->
    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4 text-gray-900">${isFrench ? 'Expériences' : 'Experience'}</h2>
      ${data.experiences.map(exp => `
        <div class="mb-6 border-l-4 border-blue-500 pl-4">
          <div class="flex justify-between items-start mb-2">
            <h3 class="text-lg font-medium text-gray-900">${exp.position}</h3>
            <span class="text-sm text-gray-500">${exp.startDate} - ${exp.endDate || (isFrench ? 'Aujourd\'hui' : 'Present')}</span>
          </div>
          <p class="text-gray-700 mb-2">${exp.company.name} - ${exp.location}</p>
          <p class="text-sm text-gray-600 mb-3">${exp.description}</p>
          
          ${exp.achievements.length > 0 ? `
            <ul class="list-disc list-inside text-sm text-gray-600 mb-3">
              ${exp.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
            </ul>
          ` : ''}
          
          ${exp.skills.length > 0 ? `
            <div class="flex flex-wrap gap-2">
              ${exp.skills.map(skill => `
                <span class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">${skill}</span>
              `).join('')}
            </div>
          ` : ''}
        </div>
      `).join('')}
    </section>

    <!-- Technologies Section -->
    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4 text-gray-900">${isFrench ? 'Technologies' : 'Technologies'}</h2>
      ${Object.entries(organizedTechnologies).map(([category, technologies]) => `
        <div class="mb-4">
          <h3 class="text-base font-medium mb-2 text-gray-800">${getCategoryName(category, isFrench)}</h3>
          <div class="flex flex-wrap gap-2">
            ${technologies.map(tech => `
              <span class="inline-flex items-center gap-1 px-2 py-1 rounded text-xs border ${getLevelColor(tech.level)}" style="border-color: ${tech.color}">
                <span class="w-2 h-2 rounded-full" style="background-color: ${tech.color}"></span>
                ${tech.name}
                <span class="text-xs opacity-75">(${tech.totalMonths}m)</span>
              </span>
            `).join('')}
          </div>
        </div>
      `).join('')}
    </section>
  </div>
</body>
</html>
  `;
}

/**
 * Generate PDF from HTML template
 */
export async function generatePDF(html: string, outputPath: string): Promise<void> {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  try {
    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: 'networkidle0' });
    
    await page.pdf({
      path: outputPath,
      format: 'A4',
      margin: {
        top: '1cm',
        right: '1cm',
        bottom: '1cm',
        left: '1cm',
      },
      printBackground: true,
    });
  } finally {
    await browser.close();
  }
}

/**
 * Generate CV PDF for a specific language
 */
export async function generateCVPDF(lang: Lang, outputPath: string): Promise<void> {
  const data = await generateCVData(lang);
  const html = generateCVHTML(data, lang);
  await generatePDF(html, outputPath);
} 