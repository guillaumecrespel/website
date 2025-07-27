import { mkdir, } from 'node:fs/promises';
import { join } from 'node:path';
import { generateCVPDF } from '../src/lib/cv-generator';

/**
 * Generate CV PDFs for both languages
 */
async function generateCVs() {
  console.log('📄 Generating CV PDFs...');
  
  // Ensure public/cv directory exists
  const cvDir = join(process.cwd(), 'public', 'cv');
  await mkdir(cvDir, { recursive: true });
  
  try {
    // Generate French CV
    console.log('🇫🇷 Generating French CV...');
    await generateCVPDF('fr', join(cvDir, 'guillaume_crespel_cv_fr.pdf'));
    console.log('✅ French CV generated successfully');
    
    // Generate English CV
    console.log('🇬🇧 Generating English CV...');
    await generateCVPDF('en', join(cvDir, 'guillaume_crespel_cv_en.pdf'));
    console.log('✅ English CV generated successfully');
    
    console.log('🎉 All CVs generated successfully!');
  } catch (error) {
    console.error('❌ Error generating CVs:', error);
    process.exit(1);
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  generateCVs();
} 