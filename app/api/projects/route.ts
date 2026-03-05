// API route for fetching project data

import { NextResponse } from 'next/server';
import { fetchAllProjects } from '@/lib/github';
import { TRACKED_PROJECTS } from '@/config/projects';
import type { DashboardData } from '@/lib/types';

export const revalidate = 3600; // Revalidate every hour

export async function GET() {
  try {
    const projects = await fetchAllProjects(TRACKED_PROJECTS);
    
    const data: DashboardData = {
      projects,
      lastUpdated: new Date().toISOString()
    };
    
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching projects:', error);
    
    return NextResponse.json(
      {
        error: 'Failed to fetch project data',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
