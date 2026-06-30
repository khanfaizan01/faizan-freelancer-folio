/*
# Create portfolio schema for freelancer website

1. New Tables
- `impact_stories`: Anonymized case studies with aliases, challenges, solutions, and metrics
  - id (uuid, primary key)
  - alias (text, not null) - e.g., "E-Commerce Platform Redesign"
  - category (text, not null) - e.g., "Performance", "Architecture", "Full-Stack"
  - challenge (text, not null) - the problem faced
  - solution (text, not null) - technologies/approach used
  - impact_metrics (jsonb) - array of metrics like "40% faster load time"
  - tech_stack (text[]) - array of technologies used
  - sort_order (integer, default 0) - for ordering display
  - is_featured (boolean, default false) - highlight on homepage
  - created_at (timestamp)

- `contact_submissions`: Contact form submissions from potential clients
  - id (uuid, primary key)
  - name (text, not null)
  - email (text, not null)
  - project_type (text) - e.g., "MVP Development", "Consultation"
  - message (text, not null)
  - status (text, default 'new') - new, contacted, closed
  - created_at (timestamp)

2. Security
- Enable RLS on both tables.
- Allow anon + authenticated full access since this is a single-tenant public portfolio.
*/

CREATE TABLE IF NOT EXISTS impact_stories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  alias text NOT NULL,
  category text NOT NULL,
  challenge text NOT NULL,
  solution text NOT NULL,
  impact_metrics jsonb DEFAULT '[]'::jsonb,
  tech_stack text[] DEFAULT '{}'::text[],
  sort_order integer DEFAULT 0,
  is_featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE impact_stories ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_read_impact_stories" ON impact_stories;
CREATE POLICY "anon_read_impact_stories" ON impact_stories FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_impact_stories" ON impact_stories;
CREATE POLICY "anon_insert_impact_stories" ON impact_stories FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_impact_stories" ON impact_stories;
CREATE POLICY "anon_update_impact_stories" ON impact_stories FOR UPDATE
  TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_impact_stories" ON impact_stories;
CREATE POLICY "anon_delete_impact_stories" ON impact_stories FOR DELETE
  TO anon, authenticated USING (true);

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  project_type text,
  message text NOT NULL,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_read_contact_submissions" ON contact_submissions;
CREATE POLICY "anon_read_contact_submissions" ON contact_submissions FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_contact_submissions" ON contact_submissions;
CREATE POLICY "anon_insert_contact_submissions" ON contact_submissions FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_contact_submissions" ON contact_submissions;
CREATE POLICY "anon_update_contact_submissions" ON contact_submissions FOR UPDATE
  TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_contact_submissions" ON contact_submissions;
CREATE POLICY "anon_delete_contact_submissions" ON contact_submissions FOR DELETE
  TO anon, authenticated USING (true);

-- Create index for sorting
CREATE INDEX IF NOT EXISTS idx_impact_stories_sort_order ON impact_stories(sort_order);
CREATE INDEX IF NOT EXISTS idx_impact_stories_category ON impact_stories(category);