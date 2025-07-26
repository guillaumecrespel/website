/**
 * Centralized mapping between skills and experience tags
 * This ensures consistent matching across languages
 */

export interface SkillMapping {
  [skillId: string]: string[];
}

// Product skills mapping
export const productSkillMapping: SkillMapping = {
  scalability: [
    'Scalabilité', 'Scalability', 'Architecture', 'Performance', 
    'Full-stack', 'Infrastructure', 'Modular', 'Cloud', 'Scalable'
  ],
  business: [
    'Business', 'Product Management', 'Leadership', 'CTO', 
    'Entrepreneurship', 'Partnership', 'Strategy', 'Product Strategy'
  ],
  vision: [
    'Vision', 'Product Development', 'Strategy', 'Innovation', 
    'Startup', 'UX', 'Product Design', 'Product Vision'
  ]
};

// Soft skills mapping
export const softSkillMapping: SkillMapping = {
  pragmatism: [
    'Pragmatisme', 'Pragmatism', 'Efficiency', 'Problem Solving', 
    'Optimization', 'Results', 'Practical'
  ],
  prioritization: [
    'Priorisation', 'Prioritization', 'Time Management', 'Focus', 
    'Strategy', 'Planning', 'Priority'
  ],
  leadership: [
    'Leadership', 'Team Management', 'Mentoring', 'Communication', 
    'Decision Making', 'Team Leadership'
  ]
};

/**
 * Get relevant tags for a skill by ID
 */
export function getSkillTags(skillId: string): string[] {
  return {
    ...productSkillMapping,
    ...softSkillMapping
  }[skillId] || [];
}

/**
 * Check if a skill is a product skill
 */
export function isProductSkill(skillId: string): boolean {
  return skillId in productSkillMapping;
}

/**
 * Check if a skill is a soft skill
 */
export function isSoftSkill(skillId: string): boolean {
  return skillId in softSkillMapping;
} 