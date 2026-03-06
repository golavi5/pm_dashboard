// Organization-specific dashboard page with locale support

import { notFound } from 'next/navigation';
import type { DashboardData } from '@/lib/types';
import { DashboardContent } from '@/components/DashboardContent';
import { fetchAllProjects } from '@/lib/github';
import { getOrganization, getAllOrganizationSlugs } from '@/config/organizations';

interface OrgPageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

async function getOrgDashboardData(slug: string): Promise<DashboardData> {
  try {
    const organization = getOrganization(slug);
    if (!organization) {
      return { projects: [], lastUpdated: new Date().toISOString() };
    }

    // Fetch only projects for this organization
    const projects = await fetchAllProjects(organization.projects);
    
    return {
      projects,
      lastUpdated: new Date().toISOString()
    };
  } catch (error) {
    console.error(`Error fetching dashboard data for org ${slug}:`, error);
    // Return empty data on error (graceful fallback)
    return {
      projects: [],
      lastUpdated: new Date().toISOString()
    };
  }
}

// Generate static params for all organizations and locales
export async function generateStaticParams() {
  const locales = ['en', 'es'];
  const slugs = getAllOrganizationSlugs();
  
  return locales.flatMap((locale) =>
    slugs.map((slug) => ({
      locale,
      slug,
    }))
  );
}

// Set revalidation time for ISR (Incremental Static Regeneration)
export const revalidate = 3600; // 1 hour

export default async function OrgPage({ params }: OrgPageProps) {
  const { slug } = await params;
  const organization = getOrganization(slug);

  // Show 404 if organization not found
  if (!organization) {
    notFound();
  }

  const data = await getOrgDashboardData(slug);

  return (
    <DashboardContent
      data={data}
      title={organization.name}
      subtitle={organization.description || 'Project Management Dashboard'}
    />
  );
}
