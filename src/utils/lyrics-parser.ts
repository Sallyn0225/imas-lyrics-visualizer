export type LyricSection = {
  type: string;
  lines?: string[];
  left?: string[];
  right?: string[];
};

export function parseLyrics(rawBody: string): LyricSection[] {
  const sections: LyricSection[] = [];
  // Split by "## type" markers
  const rawSections = rawBody.split(/^##\s+/m).filter(Boolean);

  for (const section of rawSections) {
    const lines = section.trim().split('\n');
    const typeLine = lines.shift()?.trim(); // First line is type
    if (!typeLine) continue;

    const content = lines.join('\n').trim();

    if (typeLine === 'split-view') {
      const parts = content.split(/^---$/m);
      sections.push({
        type: 'split-view',
        left: parts[0] ? parts[0].trim().split('\n') : [],
        right: parts[1] ? parts[1].trim().split('\n') : []
      });
    } else {
      sections.push({
        type: typeLine,
        lines: content.split('\n').filter(l => l.trim())
      });
    }
  }

  return sections;
}
