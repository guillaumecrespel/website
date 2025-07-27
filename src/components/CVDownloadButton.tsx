import { Icon } from '@iconify/react';
import { Button } from '@/components/ui/button';
import type { Lang } from '@/i18n/ui';

interface CVDownloadButtonProps {
  lang: Lang;
}

/**
 * CV Download Button Component
 * Downloads the CV PDF for the current language
 */
export function CVDownloadButton({ lang }: CVDownloadButtonProps) {
  const handleDownload = () => {
    const filename =
      lang === 'fr'
        ? 'guillaume_crespel_cv_fr.pdf'
        : 'guillaume_crespel_cv_en.pdf';
    const url = `/cv/${filename}`;

    // Create a temporary link element
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.target = '_blank';

    // Trigger download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button onClick={handleDownload} size="icon" className="[&_svg]:size-6">
      <Icon icon="line-md:file-download"/>
      <span className="hidden md:block">
        {lang === 'fr' ? 'Télécharger CV' : 'Download CV'}
      </span>
    </Button>
  );
}
